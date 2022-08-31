import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLink, FaTwitch, FaTwitter } from "react-icons/fa"

export const Contributor = ({
  name,
  twitter,
  github,
  website,
  imgSrc,
}: {
  name: string,
  twitter?: string,
  github?: string,
  website?: string,
  imgSrc: string,
}) => {
  return (
    <VStack gap={1} padding={4}>
      <Image alt={`image of ${name}`} src={imgSrc} width={50} height={50}
        style={{
          borderRadius: '50%'
        }} />
      <Text textAlign='center'>{name}</Text>
      <HStack>
        {twitter &&
          <a href={`https://twitter.com/${twitter}`} target='_blank' rel="noreferrer">
            <IconButton aria-label="twitter icon" variant='ghost' icon={<FaTwitter />} />
          </a>}
        {github &&
          <a href={`https://github.com/${github}`} target='_blank' rel="noreferrer">
            <IconButton aria-label="github icon" variant='ghost' icon={<FaGithub />} />
          </a>}
        {website &&
          <a href={website} target='_blank' rel="noreferrer">
            <IconButton aria-label="github icon" variant='ghost' icon={<FaLink />} />
          </a>}
      </HStack>
    </VStack>
  )
}