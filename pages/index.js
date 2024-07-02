import Image from "next/image"
import Head from "next/head"
import { SocialIcon } from "react-social-icons"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
import React, { useEffect, useState } from "react"
import Ticker from "@/components/Ticker"

/* import fs from "fs"
const images = fs.readdirSync("./public/images").map((file) => ({
  src: `/images/${file}`,
  alt: `Image ${file.slice(3, -4)}`,
})) */

const images = [
  { src: "/images/img001.jpg", alt: "Image 1" },
  { src: "/images/img002.jpg", alt: "Image 2" },
  { src: "/images/img003.jpg", alt: "Image 3" },
  { src: "/images/img004.jpg", alt: "Image 4" },
  { src: "/images/img005.jpg", alt: "Image 5" },
  { src: "/images/img006.jpg", alt: "Image 6" },
  { src: "/images/img007.jpg", alt: "Image 7" },
  { src: "/images/img008.jpg", alt: "Image 8" },
  { src: "/images/img009.jpg", alt: "Image 9" },
  { src: "/images/img010.jpg", alt: "Image 10" },
  { src: "/images/img011.jpg", alt: "Image 11" },
  { src: "/images/img012.jpg", alt: "Image 12" },
  { src: "/images/img013.jpg", alt: "Image 13" },
  { src: "/images/img014.jpg", alt: "Image 14" },
  { src: "/images/img015.jpg", alt: "Image 15" },
  { src: "/images/img016.jpg", alt: "Image 16" },
  { src: "/images/img017.jpg", alt: "Image 17" },
  { src: "/images/img018.jpg", alt: "Image 18" },
  { src: "/images/img019.jpg", alt: "Image 19" },
  { src: "/images/img020.jpg", alt: "Image 20" },
  { src: "/images/img021.jpg", alt: "Image 21" },
  { src: "/images/img022.jpg", alt: "Image 22" },
  { src: "/images/img023.jpg", alt: "Image 23" },
  { src: "/images/img024.jpg", alt: "Image 24" },
  { src: "/images/img025.jpg", alt: "Image 25" },
  { src: "/images/img026.jpg", alt: "Image 26" },
  { src: "/images/img027.jpg", alt: "Image 27" },
  { src: "/images/img028.jpg", alt: "Image 28" },
  { src: "/images/img029.jpg", alt: "Image 29" },
  { src: "/images/img030.jpg", alt: "Image 30" },
]

export default function Home() {
  const [copiedText, setCopiedText] = useState("G6KJREZ5TxiLUU6JwYcghbqDa91oU6D6oapM68P6N5Ve")

  useEffect(() => {
    initLightboxJS("DF8A-D560-5C71-E585", "Individual")
  }, [])

  return (
    <>
      <Head>
        <title>MechAnime</title>
        <meta name="description" content="MechAnime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo500.png" />
      </Head>

      <div className="flex flex-col min-h-screen font-robot bg-custom">
        <Ticker />

        <div className="flex justify-center items-center">
          <Image
            className="logo"
            src="/logo.svg"
            width={80}
            height={80}
            alt="Logo"
          ></Image>

          <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-3xl">
            MechAnime
          </h2>

          <Image
            className="logo"
            src="/logo.svg"
            width={80}
            height={80}
            alt="Logo"
          ></Image>
        </div>

        <div className="p-2 space-y-2 text-xl flex flex-col items-end">
          <button
            className="hover:bg-stone-100 hover:text-[#800000]"
            onClick={async () => window.open("https://raydium.io/swap/?inputCurrency=sol&outputCurrency=G6KJREZ5TxiLUU6JwYcghbqDa91oU6D6oapM68P6N5Ve&outputSymbol=MECHA&fixed=in")}
          >
            Buy MECHA
          </button>

          <button
            className="hover:bg-stone-100 hover:text-[#800000]"
            onClick={async () => window.open("https://dexscreener.com/solana/6b2dr2ylaw6qgq2h15d3w5xhhghh3pgv1vudixhcfryk")}
          >
            Chart
          </button>

          <div className="flex flex-col ml-auto space-y-4">
            <SocialIcon
              url="https://t.me/mech_anime"
              network="telegram"
              fgColor="white"
            />
            <SocialIcon
              url="https://twitter.com/mechanime_"
              network="twitter"
              fgColor="white"
            />
          </div>
        </div>

        <div className="first mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            MechAnime pushes the evolution of meme tokens further into art and
            lore. Inspired by master game artist Akihiko Yoshida, creator of
            Final Fantasy.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Contract Address
          </h2>
          <div
            className="p-2 mb-4 max-w-xl hover:outline-white bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800 cursor-pointer"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(copiedText)
                setCopiedText("CA Copied!")
              } catch (err) {
                console.error("Failed to copy text: ", err)
              }
            }}
          >
            <p className="lg:text-base text-xs">{copiedText}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Tokenomics
          </h2>
        </div>

        <div className="flex flex-row justify-center mb-4 space-x-3">
          <div className="p-2 text-center bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a className="hover:underline" href="https://solscan.io/tx/2ccG1HMedF1XrP5qkSjEdaE4adSutSWwEpBUYqcYxHMzdiUedsuskFYcx1zAQG6SxCre8bRkaR3D5u3xSxBgHJF5">
                LP Burnt
              </a>
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Mint Revoked
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Immutable
            </p>
          </div>

          <div className="p-2 text-center bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Supply 10 Billion
            </p>

            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a className="hover:underline" href="https://">
                Liquidity
              </a>{" "}
              90%
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="hover:underline"
                href="https://solscan.org/address/5cmYfaJckh1kzQ8bCpUs8rCWoYSdtvm16K6gUEApD6i"
              >
                Burns
              </a>{" "}
              5%
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              <a
                className="hover:underline"
                href="https://solscan.org/address/3eusjBZQzkpJwRQLN9pc3Hie4LjLGh3FssSQqZ3NyiZa"
              >
                Team
              </a>{" "}
              5%
            </p>
          </div>

          <div className="p-2 text-center bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800 w-54">
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              Stealth Launch
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              No Presale
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-xl xs:text-lg text-md">
              No Taxes
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Launched
          </h2>
        </div>

        <div className="mx-auto mb-4">
          <Image
            className="rounded-lg"
            src="launch.png"
            width={840}
            height={300}
            alt="Code"
          ></Image>
        </div>

        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Backstory
          </h2>
        </div>

        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            As holy wars escalated into nuclear apocalypse, the world's elite
            withdrew into fortified underground vaults. They took the best AI,
            robotics, and weapons tech with them. Decades later their
            mecha-warrior daughters emerge into the dune wasteland to battle for
            the planet's last resources. Follow their story on X and TG.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#dfccb7]">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Characters
          </h2>
          <SlideshowLightbox
            className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mx-auto"
            lightboxIdentifier="lightbox1"
            framework="next"
            images={images}
          >
            {images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                height={600}
                width={400}
                data-lightboxjs="lightbox1"
                quality={90}
              />
            ))}
          </SlideshowLightbox>

          <div className="flex flex-row m-auto mt-4 space-x-4">
            <SocialIcon
              url="https://t.me/mech_anime"
              network="telegram"
              fgColor="white"
            />
            <SocialIcon
              url="https://twitter.com/mechanime_"
              network="twitter"
              fgColor="white"
            />
          </div>

          <div className="flex flex-row items-center">
            <Image
              className="logo"
              src="/logo.svg"
              width={60}
              height={60}
              alt="Logo"
            ></Image>
            <p className="ticker m-2 lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-white">
              <a className="hover:underline" href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=G6KJREZ5TxiLUU6JwYcghbqDa91oU6D6oapM68P6N5Ve&outputSymbol=MECHA&fixed=in">
                Ticker : $MECHA
              </a>
            </p>
            <Image
              className="logo"
              src="/logo.svg"
              width={60}
              height={60}
              alt="Logo"
            ></Image>
          </div>
          
        </div>
      </div>
    </>
  )
}
