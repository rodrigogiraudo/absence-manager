import React, { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
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
import Hero from '../components/website/hero';
import MainLayout from '../layouts/main';
import { AbsenceWithMember } from '../common/types';
import { buildTitle, buildUrlParams } from '../utils';
import ICalLink from '../components/ical';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const baseUrl = `${process.env.API_URL}/api/absences_with_members_data`;

  const requestUrl = `${baseUrl}?${buildUrlParams(query)}`;

  const absencesWithMembers: AbsenceWithMember[] = await (await fetch(requestUrl)).json();

  return {
    props: {
      absencesWithMembers
    }
  };
};

const HomePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  absencesWithMembers
}) => {
  const renderTableRow = (absence: AbsenceWithMember): ReactElement => (
    <Tr key={`${absence?.id}_${absence?.startDate}`}>
      <Td>{buildTitle(absence.type, absence.member.name)}</Td>
      <Td>{absence?.startDate}</Td>
      <Td>{absence?.endDate}</Td>
      <Td>
        <ICalLink events={[absence]} />
      </Td>
    </Tr>
  );

  return (
    <MainLayout>
      <Head>
        <title>Absence Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <VStack spacing={[16, 16, 16, 16]} align="center" as="main">
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
          <div>
            <span>Download ical </span>
            <ICalLink events={absencesWithMembers} />
          </div>
          <Table variant="simple">
            <TableCaption>Scheduled Absences</TableCaption>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Download</Th>
              </Tr>
            </Thead>
            <Tbody>{absencesWithMembers.map((absence) => renderTableRow(absence))}</Tbody>
          </Table>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
