import { UrlParams } from 'common/types';

export const buildUrlParams = (query) => {
  const params: UrlParams = {};

  if (query?.userId) params.userId = String(query?.userId);
  if (query?.startDate) params.startDate = String(query?.startDate);
  if (query?.endDate) params.endDate = String(query?.endDate);

  return new URLSearchParams({
    ...params
  });
};
