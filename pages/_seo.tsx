import { NextSeo } from "next-seo";

export default function SEO() {
  return (
    <NextSeo
      title="Goudham's Website"
      description="Just a silly little guy living in a serious big world."
      canonical="https://goudham.com"
      openGraph={{
        url: 'https://goudham.com',
        title: "Goudham's Website",
        description: "Just a silly little guy living in a serious big world.",
        locale: 'en_GB',
        images: [
          {
            url: 'https://goudham.com/og_banner.jpeg',
            alt: 'Goudham standing in the BBC Scotland Building',
            type: 'image/jpeg',
          },
        ],
      }}
      twitter={{
        handle: '@RealGoudham',
        cardType: 'summary_large_image',
      }}
    />
  )
}