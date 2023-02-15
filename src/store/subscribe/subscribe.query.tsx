import { useMutation, useQueryClient } from '@tanstack/react-query';
import bookAPI from 'api/books';
import toast from 'react-hot-toast';

interface ISubs {
  isbn: string;
  title: string;
}

const useSubscribeBookQuery = (params: ISubs) => {
  const queryClient = useQueryClient();
  return useMutation(() => bookAPI.subsBook({ isbn: params.isbn }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['SEARCH', 'BOOK']);
    },
    onError: (err: any) => {
      toast.error(
        `status : ${err.response.status}, message: ${err.response.statusText}`,
      );
    },
  });
};

const bookQuery = {
  useSubscribeBookQuery,
};

export default bookQuery;
