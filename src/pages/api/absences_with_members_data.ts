import { NextApiRequest, NextApiResponse } from 'next';
import { Absence, AbsenceWithMember, Member } from 'common/types';
import { buildUrlParams } from 'utils';

const getAllAbsencesWithMembers = async (req: NextApiRequest, res: NextApiResponse) => {
  const baseAbsencesURL = `${process.env.API_URL}/api/absences`;
  const baseMembersURL = `${process.env.API_URL}/api/members`;

  const absencesRequestUrl = `${baseAbsencesURL}?${buildUrlParams(req?.query)}`;

  const absences: Absence[] = await (await fetch(absencesRequestUrl)).json();
  const members: Member[] = await (await fetch(baseMembersURL)).json();

  const absencesWithMembers = absences.map(
    (absence: AbsenceWithMember): AbsenceWithMember => {
      const absenceUser = members.find(({ userId }) => userId === absence.userId);

      return {
        ...absence,
        member: {
          ...absenceUser
        }
      };
    }
  );

  res.status(200).json(absencesWithMembers);
};

export default getAllAbsencesWithMembers;
