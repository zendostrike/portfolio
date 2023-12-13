import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
      </Head>
      <body className='bg-white dark:bg-black m-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}