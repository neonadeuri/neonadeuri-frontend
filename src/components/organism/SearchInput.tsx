'use client';

import React, { useState } from 'react';

interface IProps {
  onSearch:
    | React.Dispatch<React.SetStateAction<string>>
    | ((v: string) => void);
  onSearchType: React.Dispatch<React.SetStateAction<string>>;
  searchType: string;
  [prop: string]: any;
}
const SearchInput = ({ onSearch, onSearchType, searchType }: IProps) => {
  const [searchText, setSearchText] = useState('');
  const handleOnKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };
  return (
    <>
      <div className="w-full max-w-2xl flex justify-between rounded-md items-center bg-transparent border-gray-500 border-2 h-12 text-lg">
        <div className="flex w-full">
          <div className="relative grow-0 h-full">
            <select
              className="py-2 w-full h-full justify-center rounded-md bg-white px-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
              onChange={(e) => onSearchType(e.currentTarget.value)}
              value={searchType}
            >
              <option value="book">도서</option>
              <option value="sub">독자</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="grow text-gray-700 flex-1 bg-transparent pl-2 focus:outline-none focus:ring-0"
            onKeyUp={handleOnKeyUp}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button onClick={() => onSearch(searchText)}>
          <i className="fa fa-search pr-4" />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
