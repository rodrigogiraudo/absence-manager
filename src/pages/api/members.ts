import { NextApiRequest, NextApiResponse } from 'next';
import Members from '../../mock_data/members.json';

const getAllMembers = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(Members.payload);
};

export default getAllMembers;
