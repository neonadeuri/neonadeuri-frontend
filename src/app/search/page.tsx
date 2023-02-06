import SearchInput from 'components/templates/SearchInput';
import React from 'react';

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-7xl max-h-20 h-20 w-full flex justify-start pl-2 items-center border-b border-gray-200">
        <SearchInput />
      </div>
    </div>
  );
}
