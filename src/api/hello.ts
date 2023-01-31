import ins from './core';

const hello = async () => {
  const hello = await ins.get('/');
  return hello;
};

export default hello;
