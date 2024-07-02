import Image from "next/image"
import Head from "next/head"
import { SocialIcon } from "react-social-icons"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
import React, { useEffect, useState } from "react"

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
  useEffect(() => {
    initLightboxJS("DF8A-D560-5C71-E585", "Individual")
  }, [])

  return (
    <>
      <Head>
        <title>FL Nurse Honor Guard</title>
        <meta name="description" content="FL Nurse Honor Guard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <div className="flex flex-col min-h-screen font-robot bg-gradient-to-b from-blue-200 to-blue-800">
        <div className="flex justify-center items-center">
          <Image
            className="logo"
            src="/LOGO.png"
            width={120}
            height={120}
            alt="Logo"
          ></Image>

          <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-3xl">
            Finger Lakes Nurse Honor Guard
          </h2>

          <Image
            className="logo"
            src="/LOGO.png"
            width={120}
            height={120}
            alt="Logo"
          ></Image>
        </div>
        <div className="p-2 space-y-2 text-xl flex flex-col items-end">
          <button
            className="hover:bg-stone-100 hover:text-[#800000]"
            onClick={async () => window.open("https://donateurl")}
          >
            Donate
          </button>

          <div className="flex flex-col ml-auto space-y-4">
            <SocialIcon url="https:" network="facebook" fgColor="white" />
          </div>
        </div>
        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Our Mission
          </h2>
        </div>
        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            The Finger Lakes Nurse Honor Guard is privileged to recognize and
            honor those who have dedicated their lives to serving others in
            their chosen profession as a nurse at the end of their life journey.
            The honor guard’s presence provides meaningful recognition and honor
            to a nurse who has passed, and in hopes of easing the grief of their
            family members, loved one’s and colleagues.
          </p>
        </div>
        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Our Vision
          </h2>
        </div>
        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            Our vision is that no nurse is forgotten. We will provide
            recognition and honor to every nurse at the end of life upon the
            family’s request. All cultural and spiritual diversities will be
            discussed with the Honor Guard and Funeral Director prior to the
            tribute ceremony. All services will occur totally free of charge.
          </p>
        </div>
        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Who We Are
          </h2>
        </div>
        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            We are an incredible group of volunteer nurses from the Finger Lakes
            area, Registered Nurses or Licensed Practical Nurses, Student
            Nurses, and Nurse Practitioners who pay homage to a nurse who has
            dedicated their life to serving others in their chosen profession as
            a nurse at the end of their life journey. It is a heartwarming and
            truly meaningful way to serve others as we pay honor to our
            colleagues at the time of their passing.
          </p>
        </div>

        <div className="mx-auto mb-4 text-center max-w-lg bg-stone-100 bg-opacity-60 md:text-base sm:text-base rounded-lg outline outline-2 outline-slate-800">
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            The honor guard can be present at a funeral, memorial service,
            celebration of life service, or graveside service and provides
            meaningful recognition with a short but very moving tribute ceremony
            in honor of the nurse. We can also provide Living Tributes for
            nurses in the last season of their life.
          </p>
          <p className="m-1 lg:text-2xl md:text-2xl sm:text-xl text-lg">
            We serve Ontario County, Senecca County, Wayne County, and Yates
            County and welcome new members to join us in serving our fallen
            colleagues
          </p>
        </div>
        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Spotlight
          </h2>
        </div>

        <div className="mx-auto mb-4">
          <Image
            className="rounded-lg"
            src="/images/conference.jpg"
            width={840}
            height={300}
            alt="Code"
          ></Image>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl text-2xl">
            Forever in Our Hearts: Treasured Memories
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
        </div>
      </div>
    </>
  )
}
