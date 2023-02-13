'use client';

import BrandButton from 'components/molecule/BrandButton';
import { useInitialLoginHook } from './Login.hook';

interface IProps {
  [prop: string]: any;
}
const LoginTemplate = (props: IProps) => {
  const hook = useInitialLoginHook(props);
  return (
    <div className="grid grid-cols-1 gap-4 w-60">
      <div className="border-b border-black">SNS 로그인</div>
      <BrandButton
        i="fa-brands fa-google"
        className="bg-gray-900 text-white"
        onClick={hook.handleGoogleLogin}
      >
        구글로그인
      </BrandButton>
      <BrandButton
        i="fa fa-check"
        className="bg-green-500 text-white"
        onClick={hook.handleNaverLogin}
      >
        네이버 로그인
      </BrandButton>
      <BrandButton
        i="fa fa-comment"
        className="bg-yellow-300 text-black"
        onClick={hook.handleKakaoLogin}
      >
        카카오 로그인
      </BrandButton>
    </div>
  );
};

export default LoginTemplate;
