import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Base: React.FC<Props> = ({
  title = "ricoputra.space",
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A frontend web developer specialized in React JS but also using TypeScript, Next JS, styled-components, figma, and docker in the development processes"
        />
        <link rel="icon" href="/avatar.png" />
      </Head>

      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Base