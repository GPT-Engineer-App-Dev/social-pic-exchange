import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md" mr={8}>
          PhotoShare
        </Heading>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/upload">Upload</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={4}>
        {/* Main Feed Section */}
        <Box>
          <Heading size="md" mb={4}>
            Main Feed
          </Heading>
          <VStack spacing={4} align="stretch">
            {/* Sample Photo Cards */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <Image src="https://via.placeholder.com/300" alt="Photo 1" />
              <Box p={4}>
                <Text fontWeight="bold">Photo 1</Text>
                <Text>Shared by User 1</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <Image src="https://via.placeholder.com/300" alt="Photo 2" />
              <Box p={4}>
                <Text fontWeight="bold">Photo 2</Text>
                <Text>Shared by User 2</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Upload Section */}
        <Box>
          <Heading size="md" mb={4}>
            Upload
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <Image src="https://via.placeholder.com/300" alt="Upload Preview" />
              <Box p={4}>
                <Text fontWeight="bold">Upload Preview</Text>
              </Box>
            </Box>
            {/* Add Upload Form */}
          </VStack>
        </Box>

        {/* Profile Section */}
        <Box>
          <Heading size="md" mb={4}>
            Profile
          </Heading>
          <VStack spacing={4} align="stretch">
            {/* User's Photos */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <Image src="https://via.placeholder.com/300" alt="User Photo 1" />
              <Box p={4}>
                <Text fontWeight="bold">User Photo 1</Text>
              </Box>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;