'use client';

import clsx from 'clsx';

interface IProps {
  i: string;
  className: string;
  children: React.ReactNode;
  [prop: string]: unknown;
}

const BrandButton = ({ i, className, children, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'font-bold rounded-2xl px-4 py-2 flex items-center',
        className,
      )}
    >
      <i className={i} />
      <span className="grow flex justify-center items-center">{children}</span>
    </button>
  );
};

export default BrandButton;
