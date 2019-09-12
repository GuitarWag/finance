import { BASE_PATH, databaseSecret } from 'services';
import { Month } from 'services/types';

import axios from 'axios';

const getSpecificMonthSubPath = (
  currentUserId: string,
  currentMonth: Month,
) => {
  return `/users/${currentUserId}/months/${currentMonth.identifier}`;
};

export default (currentUserId: string, currentMonth: Month) => {
  return axios.get(
    `${BASE_PATH}${getSpecificMonthSubPath(
      currentUserId,
      currentMonth,
    )}.json?auth=${databaseSecret}`,
  );
};
