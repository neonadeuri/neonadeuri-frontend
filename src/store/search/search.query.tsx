import { useInfiniteQuery } from '@tanstack/react-query';
import bookAPI from 'api/books';
import { AxiosError } from 'axios';
import { IGetSearchBook, ISearchBooksRequest } from 'interface/book';
import toast from 'react-hot-toast';

const QUERY_KEY = 'SEARCH';

const useSearchBooksQuery = (params: ISearchBooksRequest, options?: any) => {
  return useInfiniteQuery(
    [QUERY_KEY, 'BOOK', params],
    ({ pageParam = 1 }) =>
      bookAPI.getBooks({ size: 8, page: pageParam, ...params }),
    {
      retry: false,
      onError: (err: any) => {
        toast.error(
          `status : ${err.response.status}, message: ${err.response.statusText}`,
        );
      },
      ...options,
    },
  );
};

const bookQuery = {
  useSearchBooksQuery,
};

export default bookQuery;
