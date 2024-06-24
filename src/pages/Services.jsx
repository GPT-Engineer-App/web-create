import { Container, Text, VStack, Box, Button, Flex, Heading, Link, SimpleGrid, Stack, Input, Textarea, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Services = () => {
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

      {/* Services Section */}
      <Box as="section" id="services" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Unsere Dienstleistungen</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">IT-Beratung</Heading>
            <Text mt={4}>Optimierung und Skalierung der IT-Infrastruktur</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">KI-Beratung</Heading>
            <Text mt={4}>Implementierung von KI-Tools und Datenstrategien</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Medientechnik</Heading>
            <Text mt={4}>Modernste Lösungen für Medienbedürfnisse</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">IT-Training</Heading>
            <Text mt={4}>Schulungen für Mitarbeiter</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Mobile Device Management (MDM)</Heading>
            <Text mt={4}>Sicherheit und Verwaltung mobiler Endgeräte</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Kundenservice und technischer Support</Heading>
            <Text mt={4}>Rund um die Uhr Unterstützung</Text>
          </Box>
        </SimpleGrid>
        <Flex justify="center" mt={10}>
          <Button colorScheme="teal" size="lg">Kontakt aufnehmen</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Services;