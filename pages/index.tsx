import Navbar from "../components/navbar";
import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/footer";
import Image from "next/image";
import CardBody from "../components/card";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Hubble</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Container maxW="container.lg" height={"auto"} marginBottom={5}>
        <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
          <Box fontWeight={"semibold"}>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque{" "}
              <br></br> autem voluptatibus accusamus, magnam quod illum quos!
              Sapiente <br></br> dolore neque,tempora laudantium eius illo
              perferendis fugit odio,<br></br> quidem praesentium, non aliquam!
            </Text>
          </Box>
          <Box marginTop={5}>
            <Image
              src={"/images/illustration-mockups.svg"}
              alt=""
              width={"500"}
              height={"500"}
            ></Image>
          </Box>
        </Flex>
      </Container>
      <CardBody
        title="Grow Together"
        body="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        image="illustration-grow-together.svg"
      />
      <CardBody
        title="Flowing Conversations"
        body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        image="illustration-flowing-conversation.svg"
      />
      <CardBody
        title="Your Users"
        body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        image="illustration-your-users.svg"
      />
      <Footer />
    </>
  );
};

export default HomePage;
