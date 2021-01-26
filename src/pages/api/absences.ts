import { NextApiRequest, NextApiResponse } from 'next';
import Absences from '../../mock_data/absences.json';

const getAllAbsences = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(Absences);
};

export default getAllAbsences;
