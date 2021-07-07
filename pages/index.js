import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(process.env.API_KEY)
  return (
    <main>
      <Head>
        <title>Graph of Legends</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1 className={styles.mainTitle}>
        HOME
      </h1>
      <Link href='/champions'>Lista de campeões</Link>
    </main>
  )
}