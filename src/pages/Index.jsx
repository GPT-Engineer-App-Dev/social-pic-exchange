import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [uploadingPhoto, setUploadingPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadingPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (uploadingPhoto) {
      setPhotos([...photos, uploadingPhoto]);
      setUploadingPhoto(null);
    }
  };

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
            {photos.map((photo, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
                <Image src={photo} alt={`Photo ${index + 1}`} />
                <Box p={4}>
                  <Text fontWeight="bold">{`Photo ${index + 1}`}</Text>
                  <Text>Shared by User 1</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Upload Section */}
        <Box>
          <Heading size="md" mb={4}>
            Upload
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <Input type="file" accept="image/*" onChange={handlePhotoUpload} />
              {uploadingPhoto && (
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
                  <Image src={uploadingPhoto} alt="Upload Preview" />
                  <Box p={4}>
                    <Text fontWeight="bold">Upload Preview</Text>
                  </Box>
                </Box>
              )}
              <Button onClick={handleSubmit}>Submit</Button>
          </VStack>
        </Box>

        {/* Profile Section */}
        <Box>
          <Heading size="md" mb={4}>
            Profile
          </Heading>
          <VStack spacing={4} align="stretch">
            {photos.map((photo, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
                <Image src={photo} alt={`User Photo ${index + 1}`} />
                <Box p={4}>
                  <Text fontWeight="bold">{`User Photo ${index + 1}`}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;