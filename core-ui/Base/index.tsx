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
          content="
            A React Developer who can coding backend on Express JS and love doing system analysis.
            Tech stacks: React JS, Next JS, JavaScript, TypeScript, Node JS, Express JS, Docker, Notion, Jira, Confluence, Figma, Invision
          "
        />
        <link rel="icon" href="/avatar.png" />
      </Head>

      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Base