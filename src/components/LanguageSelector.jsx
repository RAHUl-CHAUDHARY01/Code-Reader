import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  MenuItemOption,
  MenuOptionGroup
} from "@chakra-ui/react";

export const LANGUAGE_VERSIONS = {
  java: "15.0.2",
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  csharp: "6.12.0",
  php: "8.2.3",
};

const LanguageSelector = ({ language, onSelect }) => {
  return (
    < Box ml={2} mb={4} color={"black"} zIndex={2} >
      <Text mb={2} fontSize="20px" color="black" >
        Language:
      </Text>
<Menu closeOnSelect={false} color="black"className="element-on-top"  >
        <MenuButton as={Button} color="black" colorScheme='black' zIndex={2}>
        {language}<i className="fa-solid fa-chevron-down"></i></MenuButton>
        

        <MenuList bg="black" minWidth='100px' zIndex={2} color={"blue"} colorScheme='pink' backgroundColor="black">
          {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
            <MenuItemOption
              key={lang}
              onClick={() => onSelect(lang)}
              bg={lang === language ? "gray.900" : "gray.900"}
              _hover={{
                bg: "gray.900",
              }}
            >
              {lang}
              <Text as="span" color="gray.600" fontSize="sm" ml={2}>
                ({version})
              </Text>
            </MenuItemOption>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;