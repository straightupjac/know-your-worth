import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const NavBar = () => {
  return (<Flex
    as="header"
    position="fixed"
    alignContent="space-evenly"
    w="100%"
    p={2}
    px={4}
    backdropFilter="saturate(150%) blur(20px)"
    zIndex={100}
  >
    {/* <a href="https://mirror.xyz/wib.eth/AcSHQiNAZBi_49fO0-nEC4ej6uuph_ssg42kfmYDnt8" target="_blank" rel="noreferrer">
      <Button size="lg" variant="ghost" color="teal.800" >
        About
      </Button>
    </a> */}
    <Link href="/">
      <Button size="lg" variant="ghost" color="teal.800" >
        Home
      </Button>
    </Link>
    <Link href="/about">
      <Button size="lg" variant="ghost" color="teal.800" >
        About
      </Button>
    </Link>
    <Link href="/submit">
      <Button size="lg" variant="ghost" color="teal.800" >
        Submit
      </Button>
    </Link>
  </Flex >)
}