import { Container, Text, VStack, Box, Button, Flex, Heading, Link, SimpleGrid, Stack, Input, Textarea, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" py={4} px={8} align="center" justify="space-between" bg="gray.800" color="white">
        <Text fontSize="xl" fontWeight="bold">Dein Unternehmensname</Text>
        <Flex as="nav" gap={4}>
          <Link href="#home">Home</Link>
          <Link href="#about">Über uns</Link>
          <Link href="#services">Dienstleistungen</Link>
          <Link href="#industries">Branchen</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Kontakt</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" id="home" textAlign="center" py={20} bg="gray.100">
        <Heading as="h1" size="2xl" mb={4}>Willkommen bei Dein Unternehmensname</Heading>
        <Text fontSize="xl" mb={8}>Innovative IT- und KI-Lösungen für moderne Unternehmen</Text>
        <Button colorScheme="teal" size="lg" mr={4}>Kontakt aufnehmen</Button>
        <Button colorScheme="teal" size="lg" variant="outline">Mehr erfahren</Button>
      </Box>

      {/* Services Overview */}
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
          <Button colorScheme="teal" size="lg">Mehr erfahren</Button>
        </Flex>
      </Box>

      {/* Industry Focus */}
      <Box as="section" id="industries" py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Branchenfokus</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Einzelhandel</Heading>
            <Text mt={4}>Automatisierung und Kundendatenanalyse</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Rechtskanzleien</Heading>
            <Text mt={4}>Dokumentenmanagement und Datenschutz</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Großhandel</Heading>
            <Text mt={4}>Optimierung der Supply Chain und Bestandsmanagement</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Gesundheitswesen</Heading>
            <Text mt={4}>Datenmanagement und Telemedizin</Text>
          </Box>
        </SimpleGrid>
        <Flex justify="center" mt={10}>
          <Button colorScheme="teal" size="lg">Mehr erfahren</Button>
        </Flex>
      </Box>

      {/* Success Stories and Testimonials */}
      <Box as="section" id="testimonials" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Erfolgsgeschichten und Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Text fontSize="lg">"Durch die Zusammenarbeit mit Dein Unternehmensname konnten wir unsere IT-Infrastruktur effizient skalieren und unsere Prozesse optimieren."</Text>
            <Text mt={4} fontWeight="bold">- Kunde A</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Text fontSize="lg">"Die Implementierung von KI-Tools hat unsere Kundenzufriedenheit um 25% verbessert."</Text>
            <Text mt={4} fontWeight="bold">- Kunde B</Text>
          </Box>
        </SimpleGrid>
        <Flex justify="center" mt={10}>
          <Button colorScheme="teal" size="lg">Weitere Erfolgsgeschichten</Button>
        </Flex>
      </Box>

      {/* Contact Information and CTA */}
      <Box as="section" id="contact" py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Kontaktieren Sie uns</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h3" size="lg" mb={4}>Kontaktdaten</Heading>
            <Text>Adresse: Musterstraße 1, 12345 Musterstadt</Text>
            <Text>Telefon: +49 123 456 789</Text>
            <Text>E-Mail: info@deinunternehmen.de</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>Kontaktformular</Heading>
            <Stack spacing={4}>
              <Input placeholder="Ihr Name" />
              <Input placeholder="Ihre E-Mail" />
              <Textarea placeholder="Ihre Nachricht" />
              <Button colorScheme="teal" size="lg">Kontakt aufnehmen</Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} bg="gray.800" color="white">
        <Flex justify="space-between" align="center" px={8}>
          <Flex gap={4}>
            <Link href="#privacy">Datenschutzrichtlinien</Link>
            <Link href="#imprint">Impressum</Link>
          </Flex>
          <Flex gap={4}>
            <IconButton as="a" href="https://www.linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="https://www.twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://www.facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;