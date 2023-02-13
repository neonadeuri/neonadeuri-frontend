import toast from 'react-hot-toast';
import { CallbackInterface, useRecoilCallback } from 'recoil';

export const useInitialLoginHook = (props: unknown) => {
  const handleKakaoLogin = useRecoilCallback(kakaoLoginCallback);
  const handleGoogleLogin = useRecoilCallback(googleLoginCallback);
  const handleNaverLogin = useRecoilCallback(naverLoginCallback);
  return {
    handleKakaoLogin,
    handleGoogleLogin,
    handleNaverLogin,
  };
};

const kakaoLoginCallback =
  ({ snapshot, set }: CallbackInterface) =>
  (e: unknown) => {
    toast.success('[개발중] 카카오 로그인');
  };
const googleLoginCallback =
  ({ snapshot, set }: CallbackInterface) =>
  () => {
    toast.success('[개발중] 구글 로그인');
  };
const naverLoginCallback =
  ({ snapshot, set }: CallbackInterface) =>
  () => {
    toast.success('[개발중] 네이버 로그인');
  };
