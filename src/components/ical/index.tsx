import { AbsenceWithMember } from 'common/types';
import { FC } from 'react';
import { buildTitle, parseDateToIcalFormat } from '../../utils';
import { DownloadIcon } from '@chakra-ui/icons';

const buildFileStructure = (events: AbsenceWithMember[]) => `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events.map((event) => buildEventStructure(event)).join('')}
END:VCALENDAR
`;

const buildEventStructure = (event: AbsenceWithMember) => `
BEGIN:VEVENT
DTSTART:${parseDateToIcalFormat(event?.startDate)}
DTEND:${parseDateToIcalFormat(event?.endDate)}
DTSTAMP:${parseDateToIcalFormat()}}
UID:${Math.floor(100000000 + Math.random() * 900000000)}@crewmeister.com
CREATED:${parseDateToIcalFormat(event?.createdAt)}
DESCRIPTION:The member ${event?.member?.name} has a planned absence due to ${
  event?.type
} starting ${event?.startDate} until ${event?.endDate}
SEQUENCE:0
STATUS:${event?.confirmedAt ? 'CONFIRMED' : 'CANCELLED'}
SUMMARY:OOO ${buildTitle(event?.type, event?.member?.name)}
TRANSP:OPAQUE
END:VEVENT`;

interface ICalLinkProps {
  children?: React.ReactNode;
  events: AbsenceWithMember[];
  fileName?: string;
}
const ICalLink: FC<ICalLinkProps> = ({ children, events, fileName = 'absences' }) => {
  return (
    <a
      data-testid="ical-link"
      href={'data:text/calendar;charset=utf8,' + escape(buildFileStructure(events))}
      download={`${fileName}.ics`}>
      {children || <DownloadIcon />}
    </a>
  );
};
export default ICalLink;
