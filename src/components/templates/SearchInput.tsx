'use client';

import React from 'react';

interface IProps {
  [prop: string]: any;
}
const SearchInput = (props: IProps) => {
  return (
    <>
      <div className="w-full max-w-2xl flex justify-between rounded-md items-center bg-transparent border-gray-500 border-2 h-12 text-lg">
        <div className="flex w-full">
          <div className="relative grow-0 h-full">
            <select className="py-2 w-full h-full justify-center rounded-md bg-white px-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
              <option>도서</option>
              <option>독자</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="grow flex-1 bg-transparent pl-2 focus:outline-none focus:ring-0"
          />
        </div>
        <i className="fa fa-search pr-4" />
      </div>
    </>
  );
};

export default SearchInput;
