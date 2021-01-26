import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, VStack, Box } from '@chakra-ui/react';
import Hero from 'components/website/hero';
import MainLayout from 'layouts/main';

const HomePage: NextPage = () => (
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
      </VStack>
    </Box>
  </MainLayout>
);

export default HomePage;
