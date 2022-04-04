import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>EMBEDDEDINK, LLC</title>
      </Head>
      <Flex flexDirection="column">
        <HeroBanner />
        <AboutSection backgroundColor="red" color="white" />
        <ContactSection
          backgroundColor="blue.400"
          color="white"
          inputBgColor="blue.600"
          inputColor="white"
          formColor="blue.500"
        />
        <Footer />
      </Flex>
    </>
  );
}
