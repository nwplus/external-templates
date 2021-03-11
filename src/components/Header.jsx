import Head from 'next/head'

const Header = () => (
  <Head>
    <title>cmd-f 2021</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Fira+Code:wght@700&family=Fira+Mono:wght@700&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="British Columbia's first and largest all-women* hackathon dedicated to exploring new technologies and celebrating women* in tech! This year cmd-f will be taking place virtually from March 6th to 7th!"
    />
    <meta property="og:image" content="/preview.png" />
  </Head>
)

export default Header
