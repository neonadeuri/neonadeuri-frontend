'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import MySubBook from './MySubBook.template';
interface IProps {
  [prop: string]: any;
}

const tabs: { children: string; tag: string }[] = [
  {
    children: '전체',
    tag: 'ALL',
  },
  {
    children: '구독한책',
    tag: 'SUB',
  },
  {
    children: '작성한후기',
    tag: 'REV',
  },
  {
    children: 'favorite',
    tag: 'FAV',
  },
];

const MyBookTemplate = (props: IProps) => {
  const [currentTab, setCurrentTab] = useState('SUB');
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full">
        <TopProfileComponent />
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full p-2 overflow-hidden">
          <div className="w-full flex justify-start space-x-3">
            {tabs.map((t) => {
              return (
                <span
                  key={t.tag}
                  className={clsx('cursor-pointer', {
                    ['border-b-2 border-gray-600 font-bold']:
                      currentTab === t.tag,
                  })}
                  onClick={() => setCurrentTab(t.tag)}
                >
                  {t.children}
                </span>
              );
            })}
          </div>
          <div className="w-full flex justify-start space-x-3">
            {currentTab === 'SUB' && <MySubBook />}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopProfileComponent = () => {
  return (
    <div className="w-full h-80 flex justify-center bg-[url('/styles/images/book_bg_1.jpeg')]">
      <div className="max-w-7xl w-full p-2">빛나는 개척자의 서재</div>
    </div>
  );
};

export default MyBookTemplate;
