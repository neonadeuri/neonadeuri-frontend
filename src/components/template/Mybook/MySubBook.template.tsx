'use client';

import clsx from 'clsx';
import Loading from 'components/atom/Loading';
import BookItemBox from 'components/organism/BookItemBox';
import React, { useState } from 'react';
import searchQuery from 'store/search/search.query';
const tabs: { children: string; tag: string }[] = [
  { children: '전체', tag: 'ALL' },
  { children: '소설', tag: 'NOB' },
  { children: '시', tag: 'POE' },
  { children: 'sf', tag: 'SF' },
];

const MySubBook = () => {
  const [currentTab, setCurrentTab] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');
  const { isInitialLoading, data, fetchNextPage } =
    searchQuery.useSearchBooksQuery(
      { query: searchValue },
      {
        getNextPageParam: (lastPage: any) => {
          return lastPage.currentPage + 1;
        },
      },
    );
  return (
    <div className="w-full pt-2">
      <div className="w-full flex justify-start space-x-3">
        {tabs.map((t) => {
          return (
            <span
              key={t.tag}
              className={clsx('cursor-pointer text-gray-600', {
                ['border-b-2 border-gray-600 font-bold']: currentTab === t.tag,
              })}
              onClick={() => setCurrentTab(t.tag)}
            >
              {t.children}
            </span>
          );
        })}
      </div>
      <div className="w-full border-b-2 border-gray-600 px-4 pt-8 text-lg font-bold">
        구독한 책
      </div>
      <div
        className={clsx(`w-full px-2 py-4`, {
          ['grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3']:
            !isInitialLoading,
          ['flex items-center justify-center']: isInitialLoading,
        })}
      >
        {isInitialLoading ? (
          <div className="text-gray-400 flex flex-col justify-center items-center">
            <span>구독한 책을 가져오고 있습니다.</span>
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
    </div>
  );
};

export default MySubBook;
