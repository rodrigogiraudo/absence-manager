import React, { ReactElement } from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  Button,
  VStack,
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
} from '@chakra-ui/react';
import Hero from 'components/website/hero';
import MainLayout from 'layouts/main';
import { AbsenceWithMember, Member } from 'common/types';

export const getStaticProps = async () => {
  const absencesWithMembers: AbsenceWithMember[] = await (
    await fetch(`${process.env.API_URL}/api/absences_with_members_data`)
  ).json();

  return {
    props: {
      absencesWithMembers
    }
  };
};

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  absencesWithMembers
}) => {
  const renderTableRow = (
    id: number,
    startDate: Date,
    endDate: Date,
    type: string,
    member: Member
  ): ReactElement => (
    <Tr key={`${id}_${startDate}`}>
      <Td>{type === 'sickness' ? `${member.name} is sick` : `${member.name} is on ${type}`}</Td>
      <Td>{startDate}</Td>
      <Td>{endDate}</Td>
    </Tr>
  );

  return (
    <MainLayout>
      <Head>
        <title>Absence Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <VStack spacing={[16, 16, 24, 24]} align="center" as="main">
          <Hero
            title="Absence Manager"
            description="Code Challenge."
            cta={
              <NextLink href="https://github.com/rodrigogiraudo/absence-manager">
                <Button size="lg">
                  <span role="img" aria-label="Rocket emoji">
                    Get the code 🚀
                  </span>
                </Button>
              </NextLink>
            }
          />

          <Table variant="simple">
            <TableCaption>Absences with Members Name</TableCaption>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {absencesWithMembers.map(({ id, startDate, endDate, type, member }) =>
                renderTableRow(id, startDate, endDate, type, member)
              )}
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
