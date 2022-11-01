import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feed from './feed'
import { useState } from 'react'

export default function Home() {
  const [allPosts, setAllPosts] = useState([
    { "name": "Bob Belcher", "text": "I <3 Burgers" },
    { "name": "Nicholas Cage", "text": "Lol whoops kidnapped the president ;D" },
    { "name": "Bert Macklin", "text": "I'm from the FBI" }])
  return (
    <div className={styles.container}>
      <Head>
        <title>socialFeed</title>
        <meta name="description" content="A test Next.js app" />
        <link rel="icon" href="/tweet.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to socialFeed!
        </h1>

        <Feed allPosts={allPosts} />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Keep Going
        <span className={styles.logo}>
          <Image src="/sprout.svg" alt="Sproput" width={72} height={16} />
        </span>
        Keep Growing

      </footer>
    </div>
  )
}
