export type Absence = {
  admitterId: number;
  admitterNote: string;
  confirmedAt: Date;
  createdAt: Date;
  crewId: number;
  endDate: Date;
  id: number;
  memberNote: string;
  rejectedAt: null;
  startDate: Date;
  type: string;
  userId: number;
};

export type Member = {
  crewId: number;
  id: number;
  image: string;
  name: string;
  userId: number;
};

export type AbsenceWithMember = Absence & {
  member: Member;
};
