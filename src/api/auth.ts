import ins from './core';

interface IUser {
  email: string;
  name: string;
  birth: string;
  password: string;
}

export const register = async (data: IUser) => {
  return await ins.post('/auth/register', data);
};

export const login = async (data: { email: string; password: string }) => {
  const result = await ins.post('/auth/login', data);
  return result;
};

export const profile = async () => {
  return await ins.get('/auth/profile');
};

export const refresh = async () => {
  return await ins.get('/auth/refresh');
};
