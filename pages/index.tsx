import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/pages/index.module.css'
import { useMemo, useState } from 'react';
import { MAX_SAFE_ROMAN_VALUE, MIN_SAFE_ROMAN_VALUE, toRoman } from '@/core/toRoman';

const NumeralInput = () =>{
  const [value, setValue] = useState<number | null>(null)
  const numerals = useMemo(() => {
    const v = value ?? 0
    if (v < MIN_SAFE_ROMAN_VALUE) return 'The number is too small.'
    if (v > MAX_SAFE_ROMAN_VALUE) return 'The number is too large.';
    return toRoman(v)
  }, [value]);

  return (
    <div className={styles.converter}>
      <label htmlFor='number'>The integer:</label>
      <input
        autoFocus
        id="number"
        className={styles.input}
        value={value ?? ''}
        placeholder="123"
        min={MIN_SAFE_ROMAN_VALUE}
        max={MAX_SAFE_ROMAN_VALUE}
        onChange={e => {
          const value = e.target.value;
          if (value) setValue(+value)
          // this allows the input to be completely empty
          // otherwise there will always be at least a 0 stuck
          else setValue(null)
        }}
        type="number"
      />
      <p>The result:</p>
      <p aria-live="polite">{numerals}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Romanumeral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Int ➡ Roman</h1>
        <p>Here you can convert integers between 0 and 3999 into <Link href="https://en.wikipedia.org/wiki/Roman_numerals">Roman numerals</Link></p>
        <NumeralInput />
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
