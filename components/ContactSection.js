import { Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactSection = ({
  backgroundColor,
  color,
  inputBgColor,
  inputColor,
  formColor,
}) => {
  return (
    <Stack
      bg={backgroundColor}
      color={color}
      p={[4, null, 0]}
      flexDirection={["column", null, "row"]}
      justifyContent="space-evenly"
      align="center"
      spacing={4}
    >
      <VStack textAlign="center">
        <Heading>GET IN TOUCH</Heading>
        <Text>500 Terry Francois St San Francisco, CA 94158</Text>
        <Text>embeddedink22@gmail.com</Text>
        <Text>4698769438</Text>
      </VStack>
      <ContactForm
        inputBgColor={inputBgColor}
        inputColor={inputColor}
        formColor={formColor}
      />
    </Stack>
  );
};
export default ContactSection;
