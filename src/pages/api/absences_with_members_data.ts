import { NextApiRequest, NextApiResponse } from 'next';
import { Absence, AbsenceWithMember, Member } from 'common/types';

const getAllAbsencesWithMembers = async (req: NextApiRequest, res: NextApiResponse) => {
  const absences: Absence[] = await (await fetch(`${process.env.API_URL}/api/absences`)).json();
  const members: Member[] = await (await fetch(`${process.env.API_URL}/api/members`)).json();

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
