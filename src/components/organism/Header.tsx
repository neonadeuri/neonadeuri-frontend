'use client';

import clsx from 'clsx';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'feed',
    href: '/feed',
    children: '피드',
  },
  {
    name: 'search',
    href: '/search',
    children: '검색',
  },
];

const Header = () => {
  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];

  return (
    <div className="w-full h-16 sticky border-b border-gray-200 px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex">
          <Link href={'/'}>
            <div className="text-2xl text-black cursor-pointer">
              <i className="fa fa-users" />
              <span className="pl-2">너나들이</span>
            </div>
          </Link>
          {links.map((link) => (
            <HeadLink
              key={link.name}
              bolder={firstPathName === link.name}
              href={link.href}
            >
              {link.children}
            </HeadLink>
          ))}
        </div>
        <div className="flex items-center">
          <div className="pl-10">
            <Link className="" href="/">
              <i className="fa-sharp fa-solid fa-ellipsis-vertical font-bold text-2xl"></i>
            </Link>
          </div>
          <div className="pl-10">
            <Link className="" href="/">
              <i className="fa fa-bell font-bold text-2xl" />
            </Link>
          </div>
          <div className="pl-10">
            <Link
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-2xl px-6 py-2"
              href="/"
            >
              로그아웃
            </Link>
          </div>
          <div className="pl-10">
            <Link
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-2xl px-6 py-2"
              href="/account"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeadLink = ({
  bolder,
  href,
  children,
}: {
  bolder: boolean;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx('text-xl ml-12', {
        ['font-bold']: bolder,
      })}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default Header;
