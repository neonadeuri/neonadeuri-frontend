import { DateTime } from 'luxon';

export interface IBook {
  title: string;
  contents: string;
  authors: string[];
  publisher: string;
  publishingDate: DateTime;
  thumbnail: string;
  subscriberCnt: number;
}

export interface ISearchBook extends IBook {
  isbn: string;
  isSubscribe: boolean;
}

export interface IGetSearchBook {
  hasNext: boolean;
  currentPage: number;
  books: ISearchBook[];
}

export interface ISearchBooksRequest {
  query: string;
  page?: number;
  size?: number;
}
