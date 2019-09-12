import { BASE_PATH, databaseSecret } from 'services';
import axios from 'axios';

const getMonthsSubPath = (currentUserId: string) => {
  return `/users/${currentUserId}/months`;
};

export default (currentUserId: string) => {
  return axios.get(
    `${BASE_PATH}${getMonthsSubPath(
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
};
