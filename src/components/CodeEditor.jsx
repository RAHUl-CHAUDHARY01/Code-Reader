import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";

import Output from "./Output";

const CodeEditor = ({ noteContent, tagContent }) => {
  const editorRef = useRef();
  const [value, setValue] = useState(noteContent);
  
  const [language, setLanguage] = useState(tagContent);
// language="java";
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width="100vw"
      height="1000px"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <HStack spacing={4} position="absolute" top="0" left="0" zIndex="2" right="0">
        <Box
          width="650px"
          height="100%"
          // borderRight="1px solid #ccc"
          overflow="auto"
          zIndex="2"
        >
          <LanguageSelector zIndex="2" language={language} onSelect={onSelect}  />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            // className="editor"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={onChange}
            height="400px"
            border="none"
            borderRadius={0}
          />
        </Box>
        <Output
          width="650px"
          height="400px"
          position="relative"

          editorRef={editorRef}
          language={language}
        />
      </HStack>
    </Box>
  );
};

export default CodeEditor;