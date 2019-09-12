import { useState, useCallback, useEffect } from 'react';
import { slice } from 'lodash';

export default function usePagination(data: any[], max: number) {
  const [paginationIndex, setPaginationIndex] = useState([0, max]);
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState(slice(data, 0, max));

  const onArrowForward = useCallback(() => {
    setPaginationIndex([paginationIndex[0] + max, paginationIndex[1] + max]);
  }, [paginationIndex, max]);

  const onArrowBackward = useCallback(() => {
    setPaginationIndex([paginationIndex[0] - max, paginationIndex[1] - max]);
  }, [paginationIndex, max]);

  useEffect(() => {
    setPaginationData(slice(data, paginationIndex[0], paginationIndex[1]));
    setPage(paginationIndex[0] / max + 1);
  }, [paginationIndex, data, max]);
  return {
    paginationData,
    paginationIndex,
    onArrowBackward,
    onArrowForward,
    page,
  };
}
