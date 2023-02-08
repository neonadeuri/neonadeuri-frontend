import { atom } from 'recoil';

const userAtom = atom({
  key: 'USER_ATOM',
  default: undefined,
});

export const userState = {
  userAtom,
};
