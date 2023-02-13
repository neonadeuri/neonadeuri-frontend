'use client';

import BookItemBox from 'components/organism/BookItemBox';
import SearchInput from 'components/organism/SearchInput';
import React, { useState } from 'react';
import searchQuery from 'store/search/search.query';
import Loading from 'components/atom/Loading';
import clsx from 'clsx';
import ReaderBox from 'components/organism/ReaderBox';
import toast from 'react-hot-toast';
export default function SearchTemplate() {
  const [searchType, setSearchType] = useState('book');
  const [searchValue, setSearchValue] = useState('');
  const handlerOnSearch = (v: string) => {
    setSearchValue(v);
    if (v.trim() === '') {
      toast.error('검색어를 입력해야 검색합니다.');
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="max-h-20 h-20 w-full flex justify-start pl-2 items-center border-b border-gray-200">
          <SearchInput
            onSearch={handlerOnSearch}
            searchType={searchType}
            onSearchType={setSearchType}
          />
        </div>
        <SearchTypeTextComponent searchType={searchType} />
        {searchType === 'book' ? (
          <SearchBooksComponent searchValue={searchValue} />
        ) : (
          <SearchSubsComponent searchValue={searchValue} />
        )}
      </div>
    </div>
  );
}

const SearchTypeTextComponent = ({ searchType }: { searchType: string }) => {
  return (
    <>
      <div className="px-2 py-2 border-b border-gray-200">
        {searchType === 'book' ? (
          <p className="text-lg text-gray-500">추천 도서목록</p>
        ) : (
          <>
            <p className="text-lg text-gray-500">
              프로필을 선택하면 해당 독자의 서재로 이동합니다.
            </p>
            <p className="text-lg text-gray-500">추천 독자목록</p>
          </>
        )}
      </div>
    </>
  );
};

const SearchSubsComponent = ({ searchValue }: { searchValue: string }) => {
  const { isInitialLoading, data } = searchQuery.useSearchBooksQuery(
    { query: searchValue },
    { enabled: searchValue !== '', refetchOnWindowFocus: false },
  );
  return (
    <div
      className={clsx(`w-full px-2 py-4`, {
        ['grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3']:
          !isInitialLoading,
        ['flex items-center justify-center']: isInitialLoading,
      })}
    >
      {isInitialLoading ? (
        <div className="text-gray-400 flex flex-col justify-center items-center">
          <span>추천 독자를 가져오는 중입니다.</span>
          <Loading size="sm" />
        </div>
      ) : (
        data?.pages.map(({ hasNext, books }) =>
          books.map((book) => <ReaderBox key={book.isbn} />),
        )
      )}
    </div>
  );
};

const SearchBooksComponent = ({ searchValue }: { searchValue: string }) => {
  const { isInitialLoading, data, fetchNextPage } =
    searchQuery.useSearchBooksQuery(
      { query: searchValue },
      {
        enabled: searchValue !== '',
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage: any) => {
          return lastPage.currentPage + 1;
        },
      },
    );
  return (
    <div
      className={clsx(`w-full px-2 py-4`, {
        ['grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3']:
          !isInitialLoading,
        ['flex items-center justify-center']: isInitialLoading,
      })}
    >
      {isInitialLoading ? (
        <div className="text-gray-400 flex flex-col justify-center items-center">
          <span>추천 도서를 가져오는 중입니다.</span>
          <Loading size="sm" />
        </div>
      ) : (
        data?.pages.map(({ hasNext, books }, i) => (
          <React.Fragment key={i}>
            {books.map((book) => (
              <BookItemBox key={book.isbn} book={book} />
            ))}
            {data.pages.length === i + 1 && hasNext && (
              <div className="max-w-md py-2 px-3 flex justify-center items-center border-gray-500 border-2 text-gray-600 rounded-md ">
                <button
                  className="rounded-xl px-8 py-4 text-4xl"
                  onClick={() => fetchNextPage()}
                >
                  <span>More</span> <i className="fa fa-angle-right " />
                </button>
              </div>
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};
