import { Pacifico } from 'next/font/google'
import { gradient } from "@/pages/_app";
import Head from "next/head";
import SEO from "@/pages/_seo";

export const pacifico = Pacifico({
  weight: '400',
  variable: '--font-pacifico',
  subsets: [ 'latin' ]
})

export default function Home() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#1e1e2e"/>
      </Head>
      <SEO/>
      <div className={`flex flex-col items-center ${pacifico.variable} justify-center h-screen`}>
        <div className="font-extrabold">
          <div>
            <Title/>
            <Body/>
          </div>
        </div>
      </div>
    </>
  )
}

function Title() {
  return (
    <div className="text-center">
      <h1 className={`font-pacifico text-5xl text-crust leading-relaxed md:leading-normal mb-10`}>
        Hiya 👋, I&#39;m Goudham
      </h1>
    </div>
  )
}

function Body() {
  return (
    <div className="flex flex-col items-center text-text bg-mantle rounded-lg p-5">
      <div className="mb-5">
        <p className={`text-transparent bg-clip-text ${gradient}`}>
          <a href="https://fun.goudham.com">[Work-In-Progress]</a>
        </p>
      </div>
      <SocialMedia/>
    </div>
  )
}

function SocialMedia() {
  const imgs: { name: string, link: string }[] = [
    {
      name: "GitHub",
      link: "https://github.com/sgoudham",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/RealGoudham",
    },
    {
      name: "Twitch",
      link: "https://twitch.tv/goudham",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/sgoudham",
    }
  ]

  return (
    <div className="w-full">
      <ul className="flex flex-wrap items-center justify-around text-overlay2 max-[260px]:flex-col">
        {imgs.map(({ name, link }) => {
          return (
            <li key={name}>
              <a href={link} className="hover:underline">{name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
