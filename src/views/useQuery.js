import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function useQuery({ fetchData, state, id }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.langsReducer.language);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [pageSize, setPageSize] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const pageSizeQuery = useMemo(
    () => (pageSize ? `&size=${pageSize}` : ''),
    [pageSize]
  );

  const pageQuery = useMemo(
    () => `page=${search ? 1 : pageIndex + 1}`,
    [pageIndex, search]
  );

  const query = useMemo(
    () => `${pageQuery}${pageSizeQuery}`,
    [pageQuery, pageSizeQuery]
  );

  const handleOnTableChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(
      fetchData({
        lng: language,
        isSearch: true,
        id,
        query: `${query}${search ? '&search=' + search : ''}`,
      })
    );
    // eslint-disable-next-line
  }, [dispatch, search, language]);

  useEffect(() => {
    if (pageSize > 0) {
      dispatch(
        fetchData({
          lng: language,
          isSearch: false,
          id,
          query: `${query}${search ? `&search=${search}` : ''}`,
        })
      );
    }
    // eslint-disable-next-line
  }, [query, dispatch, language]);

  return {
    query,
    search,
    status,
    pageIndex,
    pageSize,
    setSearch,
    setStatus,
    handleOnTableChange,
  };
}
