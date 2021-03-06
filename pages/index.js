import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  const trigger = async () => {
    const response = await fetch("/api/triggerEvent");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Test Vercel & Pusher Channels</title>
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Welcome to <a href="Pusher.com">Pusher</a>
        </h1>
      <div className={styles.grid}>
      <button onClick={trigger}>TRIGGER EVENT</button>
      </div>
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
