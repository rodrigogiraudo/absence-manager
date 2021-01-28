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

export const buildTitle = (type: string, name: string): string =>
  type === 'sickness' ? `${name} is sick` : `${name} is on ${type}`;

export const parseDateToIcalFormat = (date?: Date) => {
  const stirngDate: string = date ? date.toString() : new Date().toISOString();

  return stirngDate.replace(/[:\-+.&]+/g, '');
};
