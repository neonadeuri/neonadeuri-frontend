'use client';

import { Review } from './FeedBox';

const UserReview = (props: Review) => {
  return (
    <div className="block p-4 rounded-lg shadow-lg bg-white mb-1">
      <h5 className="text-gray-900  text-lg leading-tight font-medium mb-1">
        {props.nickname}
      </h5>
      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden  whitespace-nowrap">
        {props.review}
      </p>
    </div>
  );
};

export default UserReview;
