import { Container, Text, VStack, Box, Button, Flex, Heading, Link, SimpleGrid, Stack, Input, Textarea, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" py={4} px={8} align="center" justify="space-between" bg="gray.800" color="white">
        <Text fontSize="xl" fontWeight="bold">Dein Unternehmensname</Text>
        <Flex as="nav" gap={4}>
          <Link href="/">Home</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/services">Dienstleistungen</Link>
          <Link href="#industries">Branchen</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Kontakt</Link>
        </Flex>
      </Flex>

      {/* About Section */}
      <Box as="section" id="about" textAlign="center" py={20} bg="gray.100">
        <Heading as="h1" size="2xl" mb={4}>Über uns</Heading>
        <Text fontSize="xl" mb={8}>Hintergrund und Entwicklung des Unternehmens</Text>
        <Text fontSize="xl" mb={8}>Vorstellung des Teams und ihrer Qualifikationen</Text>
        <Text fontSize="xl" mb={8}>Unternehmenswerte und Ziele</Text>
        <Button colorScheme="teal" size="lg" variant="outline">Mehr erfahren</Button>
      </Box>
    </Container>
  );
};

export default About;