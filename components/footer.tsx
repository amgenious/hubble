import {Container, Flex, Box, Text, Heading} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
    return ( 
        <>
        <Container maxW="container" p={5} textAlign={"center"} boxShadow='base' bg={"green.500"}>
            <Flex justifyContent={"space-around"} flexWrap={"wrap"} margin={5}>
            <Box p={3}>
            <Image
              src="/images/logo_white.svg"
              width={200}
              height={200}
              alt="compant logo"
            ></Image>
          </Box>
                <Box>
                    <Text>Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut <br></br>labore et dolore magna aliqua</Text>
                </Box>
                <Box>
                <Text>P.O Box 111</Text>
                    <Text>+1-543-123-4567</Text>
                    <Text>Ghana</Text>
                </Box>
            </Flex>
            <br></br>
            <Text color={"gray.900"}> &copy; 2022 All rights reserved</Text>
        </Container>
        </>
     );
}
 
export default Footer;