import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Center } from '@/components/Center'
import { Description } from '@/components/Description'
import { Footer } from '@/components/Footer'
import { Headline } from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <Headline page= {props.page}>
            <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        
        <Description page="index.js"/>
        <Center />
        <Footer />
      </main>
    </>
  )
}