import { NextApiRequest, NextApiResponse } from 'next';

// Mock Data
import AbsencesData from 'mock_data/absences.json';

const getAllAbsences = (req: NextApiRequest, res: NextApiResponse): void => {
  let result = AbsencesData.payload;

  if (req?.query?.userId)
    result = result.filter((absence) => absence.userId === Number(req.query.userId));
  if (req?.query?.startDate)
    result = result.filter(
      (absence) => Date.parse(absence.startDate) >= Date.parse(String(req.query.startDate))
    );
  if (req?.query?.endDate)
    result = result.filter(
      (absence) => Date.parse(absence.endDate) <= Date.parse(String(req.query.endDate))
    );

  res.status(200).json(result);
};

export default getAllAbsences;
