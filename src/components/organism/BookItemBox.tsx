/* eslint-disable @next/next/no-img-element */
'use client';

import clsx from 'clsx';
import { IBook, ISearchBook } from 'interface/book';
import React from 'react';
import bookQuery from 'store/subscribe/subscribe.query';

interface IProps {
  book: ISearchBook;
  [prop: string]: any;
}
const BookItemBox = ({ book }: IProps) => {
  const { mutate } = bookQuery.useSubscribeBookQuery({
    isbn: book.isbn,
    title: book.title,
  });

  return (
    <div className="max-w-md py-2 px-3 border-2 flex flex-col text-sm text-gray-600 border-gray-500 rounded-md shadow-md">
      <div className="">
        <i className="fa fa-book-open-reader" />
        <span className="pl-2">구독자수: {book.subscriberCnt}</span>
      </div>
      <div className="py-1 flex">
        <img src={book.thumbnail} alt="미움받을 용기"></img>
        <div className="pl-2 w-full overflow-hidden">
          <p className="overflow-ellipsis w-full overflow-hidden whitespace-nowrap truncate hover:text-clip">
            제목: {book.title}
          </p>
          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">
            저자:{' '}
            {book.authors.map((author, i) => {
              return i === 0 ? author : `, ${author}`;
            })}
          </p>
          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">
            출판사: {book.publisher}
          </p>
        </div>
      </div>
      <div className="w-full py-1 line-clamp-3 overflow-ellipsis whitespace-normal max-h-18 leading-6">
        책 요약: <span className="italic text-gray-600">{book.contents}</span>
      </div>
      <div className="py-1 flex flex-row-reverse">
        <div
          className={clsx('rounded-xl px-2 py-1 text-white', {
            ['bg-yellow-600']: book.isSubscribe,
            ['bg-blue-800']: !book.isSubscribe,
          })}
          onClick={() => {
            mutate();
          }}
        >
          {book.isSubscribe ? <>구독중</> : <>구독하기</>}
        </div>
      </div>
    </div>
  );
};

export default BookItemBox;

//https://img.godpeople.com/data/goods/1/3/9788996991342/m_9788996991342.jpg?rd=1675693489
