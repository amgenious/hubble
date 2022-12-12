import {
  Container,
  Flex,
  Box,
  Spacer,
  Link,
  Divider,

} from "@chakra-ui/react";
import Image from "next/image";
const Navbar = () => {

  return (
    <>
      <Container maxW="container">
        <Flex alignItems={"center"} p={5} justifyContent={'space-around'} flexWrap={'wrap'}>
          <Box p={3} marginBottom={5}>
            <Image
              src="/images/logo_white.svg"
              width={200}
              height={200}
              alt="compant logo"
            ></Image>
          </Box>
          <Box textAlign={'center'}>
            <Box width={200} height={'auto'} p={2} bg="white" color={'black'} borderRadius={20}>
              Sign up
            </Box>
          </Box>
        </Flex>
        <Divider />
      </Container>
    </>
  );
};

export default Navbar;
