import BookItemBox from 'components/templates/BookItemBox';
import SearchInput from 'components/templates/SearchInput';
import React from 'react';

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="max-h-20 h-20 w-full flex justify-start pl-2 items-center border-b border-gray-200">
          <SearchInput />
        </div>
        <div className="px-2 py-2 border-b border-gray-200">
          <p className="text-lg text-gray-500">
            추천 도서가 아직 없습니다. 검색을 이용하여 책을 구독 해주세요.
          </p>
          <p className="text-lg text-gray-500">
            추천 독자가 아직 없습니다. 검색을 이용하여 독자를 팔로우 해주세요.
          </p>
          <p className="text-lg text-gray-500">추천 도서목록</p>
          <p className="text-lg text-gray-500">
            프로필을 선택하면 해당 독자의 서재로 이동합니다.
          </p>
          <p className="text-lg text-gray-500">추천 독자목록</p>
        </div>
        <div className="w-full px-2 py-4 border-b border-gray-200 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
          <BookItemBox />
        </div>
      </div>
    </div>
  );
}
