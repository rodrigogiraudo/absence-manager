/* eslint-disable no-undef */
import { buildUrlParams, buildTitle, parseDateToIcalFormat } from '../index';

const params = {
  userId: 2664,
  startDate: '2017-01-10',
  endDate: '2017-01-14'
};

describe('buildUrlParams', () => {
  it('return expected content', () => {
    expect(buildUrlParams(params).toString()).toBe(
      'userId=2664&startDate=2017-01-10&endDate=2017-01-14'
    );
  });
});

describe('buildTitle', () => {
  it('return expected content for sickness', () => {
    expect(buildTitle('sickness', 'Rodrigo').toString()).toBe('Rodrigo is sick');
  });
  it('return expected content for sickness', () => {
    expect(buildTitle('vacation', 'Rodrigo').toString()).toBe('Rodrigo is on vacation');
  });
});

describe('parseDateToIcalFormat', () => {
  it('return expected content for date', () => {
    expect(parseDateToIcalFormat('2016-12-12T18:03:55.000+01:00')).toBe('20161212T1803550000100');
  });

  it('return expected content for short date', () => {
    expect(parseDateToIcalFormat('2017-01-05')).toBe('20170105');
  });
});
