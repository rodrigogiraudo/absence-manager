/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../pages/index';

const absencesWithMembers = [
  {
    admitterId: null,
    admitterNote: '',
    confirmedAt: '2017-01-09T18:43:29.000+01:00',
    createdAt: '2017-01-09T17:45:47.000+01:00',
    crewId: 352,
    endDate: '2017-01-11',
    id: 2634,
    memberNote: 'Nachmittag 0,5 Tage. Danke.',
    rejectedAt: null,
    startDate: '2017-01-11',
    type: 'vacation',
    userId: 649,
    member: {
      crewId: 352,
      id: 713,
      image: 'http://place-hoff.com/300/400',
      name: 'Ines',
      userId: 649
    }
  },
  {
    admitterId: null,
    admitterNote: '',
    confirmedAt: '2017-02-17T13:52:26.000+01:00',
    createdAt: '2017-02-17T13:19:37.000+01:00',
    crewId: 352,
    endDate: '2017-02-27',
    id: 3269,
    memberNote: '',
    rejectedAt: null,
    startDate: '2017-02-27',
    type: 'vacation',
    userId: 2796,
    member: {
      crewId: 352,
      id: 2778,
      image: 'http://place-hoff.com/300/400',
      name: 'Bernhard',
      userId: 2796
    }
  }
];
describe('App', () => {
  it('Should render the home page', () => {
    const { container } = render(<App absencesWithMembers={absencesWithMembers} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<App absencesWithMembers={absencesWithMembers} />);
    expect(screen.getByRole('heading', { name: 'Absence Manager' })).toBeInTheDocument();
  });
});
