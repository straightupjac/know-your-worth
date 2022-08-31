import { Box, Checkbox, Code, Container, HStack, IconButton, List, ListItem, OrderedList, SimpleGrid, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { Meta } from "@components/core/Meta";
import { NextPage } from "next";
import styles from '@styles/About.module.css'
import { Contributor } from "@components/Contributor";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { useClipboard } from '@chakra-ui/react'

const About: NextPage = () => {
  const { hasCopied, onCopy } = useClipboard('https://airtable.com/shrgVd7uMZESofnDX');

  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Container minHeight={'100vh'} paddingTop={20} width='100%'>
          <VStack alignContent='center' width='100%' gap={2}>
            <Text as='h1' textAlign='center'>
              About
            </Text>
            <Text>
              Have you ever received a job offer and struggled to figure out if it was actually one worth taking? If so, {`you're`} not alone.
            </Text>
            <Text>
              One of the biggest challenges of working in a relatively new industry like Web3 is figuring out how much you should be getting compensated for your work. Specific salaries and benefits for crypto companies are not something we can just easily Google (at least not yet!).
            </Text>
            <Text>
              We know there {`isn't`} enough reference data out there for compensation and benefits. We want to change that <a href="https://twitter.com/Blockchaingirls" target="_blank" rel="noreferrer">Women in Blockchain</a> and <a href="https://twitter.com/ValuesIndex" target="_blank" rel="noreferrer">ValuesIndex</a> invite everyone in Web3 to share salary, comp, and other relevant information to help each other know our worth!
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
            <Text as="h2">
              {`Why we're doing this`}
            </Text>
            <Text>
              {` At Women in Blockchain, our mission is to enable a more inclusive web3. We've consistently heard from our community members that accurate and publicly available reference data for compensation and benefits are hard to come by.`}
            </Text>
            <Text>
              {`At ValuesIndex, we're on a mission to make web3 social and environmental data more accessible to everyone.`}
            </Text>
            <Text>
              The <a href="https://www.pewresearch.org/fact-tank/2021/05/25/gender-pay-gap-facts/" target="_blank" rel="noreferrer">gender pay gap</a> is real and while there is <a href="https://www.pewresearch.org/fact-tank/2022/03/28/young-women-are-out-earning-young-men-in-several-u-s-cities/" target="_blank" rel="noreferrer">progress worth celebrating</a>, {`it's`} hard to know how the Web3 industry compares against these trends. We looked at resources and job boards with general salary trends but we wanted an easier way to share and compare information.
            </Text>
            <Text>
              We are particularly interested in uncovering trends across gender, race/ethnicity, geography, and company size. We applaud <a href="https://docs.google.com/spreadsheets/d/1N_9qv9FiNfozUx1vQDOPGj7lMvkKagxLslNWx8dcJ6A/edit#gid=2111719125" target="_blank" rel="noreferrer">existing efforts</a> to advance salary transparency in the industry. Our goal is to build on this work in three meaningful ways:
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                Leverage our collective network to gather a large salary database.
              </ListItem>
              <ListItem>
                Collect statistics on additional benefits like equity/token grants, parental leave, etc.
              </ListItem>
              <ListItem>
                Analyze the data to create an easy-to-read report with actionable insights.
              </ListItem>
            </OrderedList>
            <Text as="h2">
              {`What we want to achieve`}
            </Text>
            <Text>
              Our goal is to collect 1,000+ responses across all roles and functions, with a variety of gender identities and backgrounds represented. We invite everyone to complete the survey in order to truly understand how compensation might vary between groups. No matter how you identify, we want to hear from you.
            </Text>
            <Text>
              This is a volunteer-run, grass-roots initiative. We plan to publish a report of our findings but all responses will live on a publicly visible spreadsheet.
            </Text>
            <Text>
              {`We're`} just getting started! We have big dreams for this project. Both Women in Blockchain and ValuesIndex believe that data is a public good, and {`it's`} only when we measure what matters that we can hope to improve it.
            </Text>
            <Box padding={4} background='whiteAlpha.600' width='100%'>
              <Text>
                Ultimately, we would like to see this initiative grow into a sustainable, industry-wide practice with buy-in from companies, projects, and protocols in web3.
              </Text>
            </Box>
            <Text as="h2">
              How to get involved
            </Text>
            <UnorderedList spacing={3} width="100%">
              <ListItem>
                Take the <a href="https://airtable.com/shrgVd7uMZESofnDX" target="_blank" rel="noreferrer">survey</a>
              </ListItem>
              <ListItem>
                Share the results: 👉 <a href="https://www.knowyourworth.io/">knowyourworth.io</a>
              </ListItem>
              <ListItem>
                Invite your friends to contribute
              </ListItem>
              <ListItem>
                Keep shining and thriving!
              </ListItem>
            </UnorderedList>
            <Text fontStyle='italic'>
              Psst - If you are in HR or People Ops and would like to get involved with this effort, {`we'd`} love to hear from you. Please send us an <a href="mailto:blockchaingirls@gmail.com" target="_blank" rel="noreferrer">email</a> with “Know Your Worth in Web3” in the subject line.
            </Text>
            <Text as="h2">
              Acknowledgements
            </Text>
            <Text>This project {`wouldn't`} be possible without our contributors and sponsors.</Text>
            <SimpleGrid columns={[2, 3, 3]} spacing={10}>
              <Contributor
                name="straightupjac"
                twitter="straightupjac"
                imgSrc="/assets/contributors/straightupjac.png"
                github="straightupjac"
                website="https://www.straightupjac.xyz/"
              />
              <Contributor
                name="Rebecca Mqamelo"
                twitter="0xthembi"
                imgSrc="/assets/contributors/rebecca.jpeg"
              />
              <Contributor
                name="Manasi Vora"
                twitter="manasilvora"
                imgSrc="/assets/contributors/manasi.png"
              />
              <Contributor
                name="Dulce Villarreal"
                twitter="Dulce_vird"
                imgSrc="/assets/contributors/dulce.jpeg"
              />
              <Contributor
                name="Janice Ntc"
                twitter="ntcjanice"
                imgSrc="/assets/contributors/ntcjanice.jpeg"
              />
              <Contributor
                name="Saniya More"
                twitter="saniyamore"
                imgSrc="/assets/contributors/saniyamore.jpeg"
              />
              <Contributor
                name="Lauren Feld"
                twitter="web3lauren"
                imgSrc="/assets/contributors/web3lauren.png"
              />
              <Contributor
                name="Autumn Phaneuf"
                twitter="1autumn_leaf"
                github="1autumn-leaf"
                imgSrc="/assets/contributors/autumn.jpg"
              />
              <Contributor
                name="Elena Giralt"
                twitter="elenita_tweets"
                website="https://www.elenagiralt.com/"
                imgSrc="/assets/contributors/elena.jpg"
              />
            </SimpleGrid>
            <Text fontStyle="italic" fontSize="1rem" color="gray.500">Original Mirror article <a href="https://mirror.xyz/wib.eth/AcSHQiNAZBi_49fO0-nEC4ej6uuph_ssg42kfmYDnt8" target="_blank" rel="noreferrer">here</a>.</Text>
            <Text fontStyle="italic" fontSize="1rem" color="gray.500">Gradients by <a href="https://twitter.com/maitrishahhhh" target="_blank" rel="noreferrer">maitrishahhhh</a>.</Text>
          </VStack>
        </Container>
      </div>
    </>
  )
}

export default About;