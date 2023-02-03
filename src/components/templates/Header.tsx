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
        <div className="flex">
          <div className="text-2xl text-black cursor-pointer">
            <i className="fa fa-bell pl-12" />
            <i className="fa-sharp fa-solid fa-ellipsis-vertical pl-12"></i>
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
