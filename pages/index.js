import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Para Lissette Ramirez</title>
        <meta name="description" content="Nextjs Sunrun POC" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nextjs <a href="https://sunrun.com">Sunrun</a> POC
        </h1>

        <p className={styles.description}>
          Using nextjs router
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
