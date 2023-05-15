import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Module() {
  return (
    <main className={styles.main}>
      <h1>Module</h1>
      <Link href="/">Go to Home</Link>
    </main>
  )
}
