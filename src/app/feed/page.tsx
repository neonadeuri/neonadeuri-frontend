import React from 'react';
import FeedBox from 'components/organism/FeedBox';

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex max-w-7xl flex-wrap">
        <FeedBox
          nickname="asdfsdfdsa"
          review="dsafsdafdsafdsfdsafdsafdsfdasdfafdsfdsafdsfdsafdsafsdafsdasa"
        ></FeedBox>
        <FeedBox nickname="asdfsdfdsa" review="dsaa"></FeedBox>
        <FeedBox
          nickname="asdfsdfdsa"
          review="dsafsdafdsafdsfdsafdsafdsfdsa"
        ></FeedBox>
        <FeedBox
          nickname="asdfsdfdsa"
          review="dsafsdafdsafdsfdsafdsafdsfdsa"
        ></FeedBox>
      </div>
    </div>
  );
}
