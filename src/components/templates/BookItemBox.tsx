'use client';

import Image from 'next/image';
import React from 'react';
import img from 'styles/images/m_9788996991342.jpg';
interface IProps {
  [prop: string]: any;
}
const BookItemBox = (props: IProps) => {
  return (
    <div className="max-w-md py-2 px-3 border-2 flex flex-col text-sm text-gray-600 border-gray-500 rounded-md shadow-md">
      <div className="">
        <i className="fa fa-book-open-reader" />
        <span className="pl-2">구독자수: 2023</span>
      </div>
      <div className="py-1 flex">
        <Image src={img} alt="미움받을 용기" width={150} height={150}></Image>
        <div className="pl-2 w-full overflow-hidden">
          <p className="overflow-ellipsis w-full overflow-hidden whitespace-nowrap truncate hover:text-clip">
            제목: 미움받을 용기2323232323232323232323232323
          </p>
          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">
            저자: 기시미 이치로
          </p>
          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">
            출판사: --
          </p>
        </div>
      </div>
      <div className="w-full py-1 line-clamp-3 overflow-ellipsis whitespace-normal max-h-12 leading-6">
        책 요약:
        ----------------------------------------------------------------------------------------
      </div>
      <div className="py-1 flex flex-row-reverse">
        <button className="bg-yellow-600 rounded-xl px-2 py-1 text-white">
          구독중
        </button>
        <button className="bg-blue-800 rounded-xl px-2 py-1 text-white">
          구독하기
        </button>
      </div>
    </div>
  );
};

export default BookItemBox;

//https://img.godpeople.com/data/goods/1/3/9788996991342/m_9788996991342.jpg?rd=1675693489
