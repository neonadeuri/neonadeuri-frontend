import { ISearchBooksRequest, IGetSearchBook } from 'interface/book';
import ins from './core';

const getBooks = async (params: ISearchBooksRequest) => {
  const res = await ins.get('/books', {
    params,
  });
  // 페이지 네이션 하기위한 assign
  const data: IGetSearchBook = Object.assign(res.data, {
    currentPage: params.page,
  });
  return data;
};

const bookAPI = {
  getBooks,
};

export default bookAPI;
