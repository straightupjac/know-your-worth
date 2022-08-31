import { Meta } from "@components/core/Meta";
import { NextPage } from "next";
import styles from '@styles/Submit.module.css';
import Script from "next/script";
import { Box, Checkbox, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { useClipboard } from '@chakra-ui/react'
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

const Submit: NextPage = () => {
  const { hasCopied, onCopy } = useClipboard('https://airtable.com/shrgVd7uMZESofnDX');

  return (
    <>
      <Meta />
      <div className={styles.container}>
        <VStack padding={10} width="100%" gap={4} maxWidth='1000px'>
          <Text as='h1' textAlign='center'>
            Submit a Datapoint
          </Text>
          <Box padding={4} background='whiteAlpha.600' width='100%'>
            <HStack width='100%' justifyContent='space-between'>
              <Text>
                ✨ Directly link the <a href="https://airtable.com/shrgVd7uMZESofnDX" target="_blank" rel="noreferrer">survey</a>!
              </Text>
              <Spacer />
              {hasCopied ?
                <IconButton aria-label="done copying button" variant='ghost' color="green.500" onClick={onCopy} icon={<CheckIcon />} /> :
                <IconButton aria-label="copy button" onClick={onCopy} icon={<CopyIcon />} />}
            </HStack>
          </Box>
          <Box width="100%">
            <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
            <iframe
              className="airtable-embed airtable-dynamic-height"
              src="https://airtable.com/embed/shrOdT1BaWpeXYOCY?backgroundColor=cyan"
              frameBorder="0" width="100%" height="4929"
              style={{
                background: 'transparent',
                border: '1px solid #ccc'
              }}></iframe>
          </Box>
        </VStack>
      </div>
    </>
  )
}

export default Submit;