'use client';

import Image from 'next/image';

const FeedBox = () => {
  return (
    <div className="w-9/12 h-80 bg-amber-300 px-4 flex justify-center items-center rounded-md mb-12">
      <div className="w-full h-full flex justify-around items-center">
        <div className="flex justify-center h-5/6">
          <div className="rounded-lg shadow-lg bg-white w-72">
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
        <div className="flex justify-center flex-col">
          <div className="block p-4 rounded-lg shadow-lg bg-white max-w-sm mb-1">
            <h5 className="text-gray-900  text-lg leading-tight font-medium mb-1">
              nickname
            </h5>
            <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden  whitespace-nowrap">
              한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.
            </p>
          </div>
          <div className="block p-4 rounded-lg shadow-lg bg-white max-w-sm mb-1">
            <h5 className="text-gray-900  text-lg leading-tight font-medium mb-1">
              nickname
            </h5>
            <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden  whitespace-nowrap">
              한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.한줄평입니다.
            </p>
          </div>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            더 보러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
