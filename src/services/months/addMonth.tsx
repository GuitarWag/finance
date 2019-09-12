import { BASE_PATH, databaseSecret } from 'services';
import { MonthReq } from 'services/types';

import axios from 'axios';

const addMonthSubPath = (currentUserId: string) => {
  return `/users/${currentUserId}/months`;
};
export default (monthReq: MonthReq, currentUserId: string) => {
  axios.post(
    `${BASE_PATH}${addMonthSubPath(currentUserId)}.json?auth=${databaseSecret}`,
    monthReq, // TO CREATE THE PATH IN FIREBASE DATABASE WITHOUT DATA.
  );
};
