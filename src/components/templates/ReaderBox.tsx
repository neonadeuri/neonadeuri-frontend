'use client';

import Image from 'next/image';
import { Button } from 'stories/Button';
import img from 'styles/images/m_9788996991342.jpg';

interface Reader {
  imageSrc: string;
  name: string;
  followers: number;
  following: number;
  introduce: string;
}

const ReaderBox = () => {
  return (
    <div className="max-w-md py-2 px-3 flex justify-center items-center flex-col bg-transparent border-2 border-gray-800 rounded-lg mx-auto mb-2">
      <div className="w-full h-full max-h-96 border-b border-gray-200 ">
        <div className="flex justify-between pb-4">
          <Image
            className="rounded-full"
            src={img}
            alt="user image url"
            width={60}
            height={60}
          ></Image>
          <div className="flex flex-col text-sm items-end">
            <div>name</div>
            <div>followers : 20</div>
            <div>followings : 20</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col pt-4">
        <div className=" h-40 w-full max-h-40 whitespace-pre-line overflow-x-auto break-words">
          user leeuihyun 의 소개글입니다. 안녕하세요. ~~입니다. 반갑습니다.
          팔로우 해주세요 user leeuihyun 의 소개글입니다. 안녕하세요. ~~입니다.
          반갑습니다.
        </div>
        <Button label={'팔로우'}></Button>
      </div>
    </div>
  );
};

export default ReaderBox;
