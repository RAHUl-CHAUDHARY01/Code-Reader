import { useState } from "react";
import { Box, Button, Text, background, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";
import '../App.css'
import './CodeEditor.css'

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try { 
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      width="650px"
      height="400px"
      display="flex"
      flexDirection="column"
      position="relative"
      top="37px"
      backgroundColor="#153448"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        padding="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize="1.5rem"
          color="white"
          fontWeight="bold"
          textTransform="uppercase"
          position="relative"
          bottom="50px"
          right="15px"
        >
          Output
        </Text>
        <Button
          // variant="outline"
          // colorScheme="red"
          mb={4}
          // position="relative"
          // bottom="68px"
          class="btn btn-outline-light"
          isLoading={isLoading}
          onClick={runCode}
        >
          Run Code
        </Button>
      </Box>
      <Box
        flex="1"
        overflow="auto"
        padding="1rem"
        color={isError ? "red" : "white"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;