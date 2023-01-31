import Link from 'next/link';
import React from 'react';
export default function Page() {
  return (
    <div className="">
      <div className="">
        boilerplate <br />
        링크 테스트:
        <Link href="/mybooks"> 내서재 링크</Link>
      </div>
    </div>
  );
}
