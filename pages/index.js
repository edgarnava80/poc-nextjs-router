import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const poc = 'Sunrun POC - Nextjs router'

  const plans = [
    {
      id: 1,
      name: 'Monthly Lease',
      benefit: 'Low upfront cost',
      ownership: 'Sunrun',
      downpayment: '$0 to little down',
      monthly: 'To Sunrun',
      protection: true,
      warranty: true,
      service: true
    },
    {
      id: 2,
      name: 'Full Lease',
      benefit: 'Low upfront cost',
      ownership: 'Sunrun',
      downpayment: '$0 to little down',
      monthly: 'To Sunrun',
      protection: true,
      warranty: true,
      service: true
    }
  ]

  const plansToString = (plans) => {
    let plansString = ''
    plans.forEach((plan, index) => {
      plansString += index < plans.length - 1 ? `${JSON.stringify(plan)};` : JSON.stringify(plan)
    }
    )
    return plansString
  }

  console.log(plansToString(plans))

  const sendProps = () => {
    Router.push({
      pathname: '/plans',
      query: {
        plans: plansToString(plans)
      }

    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{poc}</title>
        <meta name="description" content="Nextjs Sunrun POC" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nextjs <a href="https://sunrun.com">Sunrun</a> POC
        </h1>

        <p className={styles.description}>
          {poc}
        </p>

        <a onClick={() => sendProps()}>Plans</a>

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
