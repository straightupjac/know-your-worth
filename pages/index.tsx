import { Button, Text } from '@chakra-ui/react'
import { RoleOverview } from '@components/RoleTable'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Know Your Worth</title>
        <meta name="description" content="gender pay gap is real and while there is progress worth celebrating, it's hard to know how the Web3 industry compares against these trends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <Image alt="know your worth in web3" src="/assets/hero.svg" height={300} width={1000} />
        <Text fontSize="2rem">
          In collaboration with {` `}
          <a href="https://twitter.com/Blockchaingirls" target="_blank" rel="noreferrer">
            WiB
          </a> x <a href="https://twitter.com/ValuesIndex" target="_blank" rel="noreferrer">
            Values Index
          </a>
        </Text>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Explore Roles
        </h1>

        <p className={styles.description}>
          {`This is a volunteer-run, grass-roots initiative. The gender pay gap is real and while there is progress worth celebrating, it's hard to know how the Web3 industry compares against these trends. We're on a mission to make web3 compensation data more accessible to everyone`}
        </p>
        <RoleOverview />
      </main>
    </div >
  )
}

export default Home
