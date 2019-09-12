import { BASE_PATH, databaseSecret } from 'services';
import { Month } from 'services/types';

import axios from 'axios';

const deleteMonthSubPath = (currentMonth: Month, currentUserId: string) => {
  return `/users/${currentUserId}/months/${currentMonth.identifier}`;
};

export default (currentMonth: Month, currentUserId: string) => {
  return axios.delete(
    `${BASE_PATH}${deleteMonthSubPath(
      currentMonth,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
};
