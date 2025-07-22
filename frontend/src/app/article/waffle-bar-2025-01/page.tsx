import React from 'react'
import Back from "@/@component/Back";
import ArticleMainImage from "@/@component/ArticleMainImage";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty, faMugHot } from "@fortawesome/free-solid-svg-icons";
import ReviewDetails from "@component/ReviewDetails";
import ReviewFloater from "@component/ReviewFloater";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Waffle Bar - Recenzja 2024/11",
  description: 'Pit stop w waflownii Waffle Bar',
  authors: { name: "Dwa Niedźwiadki", url: process.env.URL! },
  keywords: ["waffle bar", "bar", "wafle", "warszawa", "blog", "jedzenie", "dobre", "recenzje", "opinie", "opinia",],
  openGraph: {
    type: "website",
    url: process.env.URL!,
    title: "Pit stop w waflownii Waffle Bar",
    description: "Recenzja restauracji Waffle Bar",
    siteName: "Bear-2-Eat",
    images: [{
      url: process.env.URL! + "/waffle-bar-01-2025/main.jpg",
    }],
  }
};

const page: React.FC = () => {
  const coffee = {
    local: 4,
    food: 5,
    localisation: 3,
  };
  const beer = {
    local: 4,
    food: 4,
    localisation: 2.5,
  };
  const jsonLd ={
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Recenzja Waffle Bar",
    "description": "Recenzja restauracji Waffle Bar 2025/01",
    "image": process.env.URL! + "/waffle-bar-2025-01/main.jpg",
    "author": {
      "@type": "Person",
      "name": "Dwa Misie"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dwa Misie",
      "logo": {
        "@type": "ImageObject",
        "url": process.env.URL! + "/logo.png"
      }
    },
    "datePublished": "2025-07-22",
    "dateModified": "2025-07-22"
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
    <header className="max-w-[1200px] mx-auto my-5">
      <nav className="flex mx-2">
        <Back href={'/'}/>
      </nav>
    </header>
    <main>
      <article className="max-w-[1200px] rounded-t-xl mx-auto bg-[--black] overflow-hidden min-h-screen pink-neon">
        <ArticleMainImage
          restaurantName="Waffle Bar"
          main={"/waffle-bar-2025-01/main.jpg"}
          logo={"/waffle-bar-2025-01/logo.png"}
          alt={"Main"}/>
        <div className="p-5 text-xl text-justify">
          <div className="flex md:flex-row flex-col gap-5 md:h-[125px]">
            <div className="flex relative md:w-1/2">
              <div className="pr-5">
                <ReviewFloater foodReviewBeer={beer.food}
                  localReviewBeer={beer.local}
                  locationReviewBeer={beer.localisation}
                  foodReviewCoffee={coffee.food}
                  localReviewCoffee={coffee.local}
                  locationReviewCoffee={coffee.localisation}
                />
                <p>
                  Waffle bar to mała knajpka znajdująca się przy Placu Narutowicza.
                  Kameralne miejsce idealne dla miłośników gofrów i bajgli.
                </p>
              </div>
            </div>
            <Image
              className="object-cover md:w-1/2 rounded shadow max-h-[225px]"
              src={'/waffle-bar-2025-01/9.jpg'}
              alt={'Bar logo'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="my-5 flex lg:flex-row flex-col gap-5 lg:h-[450px]">
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/waffle-bar-2025-01/1.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/waffle-bar-2025-01/22.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/waffle-bar-2025-01/24.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="flex lg:flex-row flex-col relative justify-center mb-5 gap-5">
            <Image
              className="h-full object-top lg:w-1/3 object-cover rounded shadow w-full"
              src={'/waffle-bar-2025-01/2.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese close up'}
              width={800}
              height={500}
              priority
            />

            <p className="lg:w-1/3 w-full text-center px-5 py-10">
              Do jedzenia zamówiliśmy gofry z karmelizowanymi pomarańczą i jabłkiem, waniliowymi lodami i bitą śmietaną
              oraz Karaage Chicken Bagel.
              <br/>
              <br/>
              Kurczak przepyszny, chrupiący. Gofry z dodatkami przepyszne, palce lizać
            </p>

            <Image
              className="h-full object-bottom lg:w-1/3 object-cover rounded shadow w-full"
              src={'/waffle-bar-2025-01/front.jpg'}
              alt={'BBQ Spare Ribs close up'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="my-5 flex gap-5 md:h-[450px] mb-10">
            <Image
              className="lg:h-full md:h-full h-[400px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/waffle-bar-2025-01/15.jpg'}
              alt={'Drinks'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full md:h-full h-[400px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/waffle-bar-2025-01/11.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
          </div>

          <p className="my-5 text-center">
            Do picia domówiliśmy cappuccino i kakao z mini piankami.
          </p>

          <p className="my-5 text-center">
            Reasumując. Waffle Bar to w mojej ocenie idealne miejsce na szybką przerwę na jedzenie w drodze do centrum,
            PJATKa lub dworzec Zachodni. Warto zajść i spróbować tych smaków.
          </p>

          <div className="grid lg:grid-cols-2 gap-5">
            <ReviewDetails mug={<FontAwesomeIcon icon={faMugHot} className="inline h-[25px] -mt-3 mr-2"/>}
              foodReview={coffee.food}
              foodDesc={'Pyszny wafel z dodatkami. Nic dodać, nic ująć'}
              localReview={coffee.local}
              localDesc={'Miejsce wydawało się nie dokończone. Bardzo mało miejsca'}
              locationReview={coffee.localisation}
              locationDesc={'Blisko przystanek tramwajowy, jedna z bocznych uliczek'}
            />
            <ReviewDetails mug={<FontAwesomeIcon icon={faBeerMugEmpty} className="inline h-[25px] mr-2"/>}
              foodReview={beer.food}
              foodDesc={'smaczne, mięsko karage bardzo soczyste ale podane w nie przystępnej formie'}
              localReview={beer.local}
              localDesc={'trochę obskurnie ale atmosfera bardzo przyjazna'}
              locationReview={beer.localisation}
              locationDesc={'z boku, centrum Warszawy ale nie powala'}
            />
          </div>
        </div>
      </article>
    </main>
  </>
};

export default page
