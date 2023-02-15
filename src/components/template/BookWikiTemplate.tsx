'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import img from 'styles/images/m_9788996991342.jpg';
import clsx from 'clsx';

const dummy = [
  {
    url: 'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038',
    nickname: 'username1',
    review:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    good: 107,
  },
  {
    url: 'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038',
    nickname: 'username2',
    review:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    good: 107,
  },
  {
    url: 'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038',
    nickname: 'username2',
    review:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    good: 107,
  },
];

export default function BookWikiTemplate() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col">
        <BookIntroduce></BookIntroduce>
        <ReviewBox></ReviewBox>
      </div>
    </div>
  );
}

const BookIntroduce = () => {
  const [moreView, setMoreView] = useState<boolean>(false);
  return (
    <div className="w-full bgslate-400 flex justify-between px-4 m-4 border-2 border-gray-800 rounded-lg mx-auto mb-2 py-4">
      <Image className="mr-3 max-h-48" src={img} alt="책 이미지" width={140} />
      <div className="w-full max-w-5xl flex flex-col justify-around">
        <div className="flex justify-between">
          <span className="font-bold">미움받을 용기</span>
          <div className=" bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-2xl px-6 py-2">
            구독하기
          </div>
        </div>
        <div
          className={clsx(
            'w-full py-1 overflow-ellipsis whitespace-normal max-h-18 leading-6',
            {
              ['']: moreView,
              [' line-clamp-4']: !moreView,
            },
          )}
        >
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.em Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </span>
        </div>
        <div className="w-full flex justify-end mx-auto ">
          <button onClick={() => setMoreView(!moreView)}>
            {moreView ? '접기' : '펼쳐 보기'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewBox = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="px-2 py-2 border-b border-gray-200 mb-2 font-bold text-lg">
        후기
      </div>
      <div className="w-full">
        {dummy &&
          dummy.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-2 px-2 py-2 border-b border-gray-200"
              >
                <Image
                  className="rounded-full"
                  src={img}
                  alt="user image url"
                  width={30}
                  height={30}
                ></Image>
                <div>
                  <div className="w-full py-1 overflow-ellipsis whitespace-normal max-h-18 leading-6">
                    {item.review}
                  </div>
                  <div>{item.good}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const EditorBox = () => {
  return <div>react-quill(form) or textArea ?</div>;
};
