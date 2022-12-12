import { Container,Box, Flex, Text, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
    title: string;
    body: string;
    image: string;
}

const CardBody: NextPage<Props> = (props) => {
    
    const {title} = props;
    const {body} = props;
    const {image} = props;
    return (  
        <>
        <Container maxW="container.lg" height={"auto"} p={5}  marginBottom={5}>
            <Flex alignItems={"center"} justifyContent={"center"} boxShadow='dark-lg' p={5}>
                <Box >
                    <Heading>{title}</Heading>
                    <Text marginBottom={5}>{body}</Text>
                </Box>
                <Box>
                    <Image src={`/images/${image}`} alt="" width={500} height={500}></Image>
                </Box>
            </Flex>
        </Container>
        </>
    );
}
 
export default CardBody;