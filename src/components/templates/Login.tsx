'use client';

import clsx from 'clsx';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-60">
      <div className="border-b border-black">SNS 로그인</div>
      <BrandLink
        i="fa-brands fa-google"
        className="bg-gray-900 text-white"
        href="/"
      >
        구글로그인
      </BrandLink>
      <BrandLink i="fa fa-check" className="bg-green-500 text-white" href="/">
        네이버 로그인
      </BrandLink>
      <BrandLink
        i="fa fa-comment"
        className="bg-yellow-300 text-black"
        href="/"
      >
        카카오 로그인
      </BrandLink>
    </div>
  );
};

const BrandLink = ({
  i,
  className,
  href,
  children,
}: {
  i: string;
  className: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className={clsx(
        'font-bold rounded-2xl px-4 py-2 flex items-center',
        className,
      )}
      href={href}
    >
      <i className={i} />
      <span className="grow flex justify-center items-center">{children}</span>
    </Link>
  );
};

export default Login;
