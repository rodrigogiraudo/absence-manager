/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import ICalLink from '../index';

const event = {
  admitterId: null,
  admitterNote: '',
  confirmedAt: new Date('2017-01-09T18:43:29.000+01:00'),
  createdAt: new Date('2017-01-09T17:45:47.000+01:00'),
  crewId: 352,
  endDate: new Date('2017-01-11'),
  id: 2634,
  memberNote: 'Nachmittag 0,5 Tage. Danke.',
  rejectedAt: null,
  startDate: new Date('2017-01-11'),
  type: 'vacation',
  userId: 649,
  member: {
    crewId: 352,
    id: 713,
    image: 'http://place-hoff.com/300/400',
    name: 'Ines',
    userId: 649
  }
};

describe('iCal', () => {
  afterEach(cleanup);
  it('Should render the ical link component', () => {
    const { container } = render(<ICalLink events={[event]}>Download</ICalLink>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<ICalLink events={[event]} />);
  });

  it('renders with text', () => {
    render(<ICalLink events={[event]}>Download</ICalLink>);
    expect(screen.getByTestId('ical-link')).toHaveTextContent('Download');
  });
});
