'use client';

import Image from 'next/image';
import UserReview from './UserReview';

export interface Review {
  nickname: string;
  review: string;
}

const FeedBox = (props: Review) => {
  return (
    <div className="h-80 bg-amber-300 px-6 flex justify-center items-center rounded-md mb-5 max-w-2xl mx-auto">
      <div className="w-full flex justify-around items-center">
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white w-52 mr-2">
            <a href="#!">
              <Image
                className="rounded-t-lg"
                src=""
                alt="책 이미지"
                width={100}
                height={160}
              />
            </a>
            <div className="p-6 flex justify-center items-center flex-col bg-slate-300">
              <h5 className="text-gray-900 text-xl font-medium mb-1">
                책 제목
              </h5>
              <h3 className="text-gray-900 text-base font-medium mb-1">저자</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col max-w-xs  w-80">
          <UserReview
            nickname={props.nickname}
            review={props.review}
          ></UserReview>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            더 보러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
