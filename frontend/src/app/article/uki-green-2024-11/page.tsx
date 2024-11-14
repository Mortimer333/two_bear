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
  title: "Uki Green Vegan Ramen - Recenzja 2024/11",
  description: 'Kulinarna wyprawa do Uki Green Vegan Ramen',
  authors: { name: "Dwa Niedźwiadki", url: process.env.URL! },
  keywords: ["uki green", "ramen warszawa", "blog", "jedzenie", "dobre", "recenzje", "opinie", "opinia",],
  openGraph: {
    type: "website",
    url: process.env.URL!,
    title: "Kulinarna wyprawa do Uki Green Vegan Ramen",
    description: "Recenzja restauracji Uki Green Vegan Ramen",
    siteName: "Bear-2-Eat",
    images: [{
      url: process.env.URL! + "/uki-green-2024-11/main.jpg",
    }],
  }
};

const page: React.FC = () => {
  const coffee = {
    local: 3,
    food: 4,
    localisation: 5,
  };
  const beer = {
    local: 2,
    food: 4,
    localisation: 5,
  };
  const jsonLd ={
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Recenzje Uki Green Vegan Ramen",
    "description": "Recenzja restauracji Uki Green Vegan Ramen 2024/11",
    "image": process.env.URL! + "/uki-green-2024-11/main.jpg",
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
    "datePublished": "2024-11-14",
    "dateModified": "2024-11-14"
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
          restaurantName="Uki Green Vegan Ramen"
          main={"/uki-green-2024-11/main.jpg"}
          logo={"/uki-green-2024-11/logo.png"}
          alt={"Main Uki Green"}/>
        <div className="p-5 text-xl text-justify">
          <div className="flex md:flex-row flex-col gap-5 items-center mt-5">
            <div>
              <div className="lg:h-[250px] lg:mb-0 mb-5">
                <ReviewFloater foodReviewBeer={beer.food}
                  localReviewBeer={beer.local}
                  locationReviewBeer={beer.localisation}
                  foodReviewCoffee={coffee.food}
                  localReviewCoffee={coffee.local}
                  locationReviewCoffee={coffee.localisation}
                />
                <p>
                  UKI GREEN, to restauracja serwująca dania wegańskie, nieco ukryta. Wnętrze jest zachowane w stylu
                  minimalistycznym z dużą ilością drewna. Należy jednak zaznaczyć, że przestrzeń między stolikami jest
                  ograniczona, co może sprawić problem przy odchodzeniu od stolika.
                  Menu jest proste i czytelne - dzięki czemu łatwo się odnaleźć, są ilustracje przedstawiające dania.
                  Pierwszym co spróbowaliśmy był ramen. Porcja była naprawdę duża i bardzo sycąca. Wygląd dania idealnie
                  oddawał zdjęcie z menu. Michaś zauważył jeden mankament dania - grubo pokrojona cebula spada na samo
                  dno
                  miski i zostaje w wywarze.
                </p>
              </div>
              <Image
                className="h-[300px] w-full object-cover rounded-xl lg:mb-0 mb-5"
                src={"/uki-green-2024-11/main.jpg"}
                alt={"Red Ramen Horizontal"}
                width={800}
                height={500}
                priority
              />
              <Image
                className="h-[300px] w-full object-cover rounded-xl lg:hidden block"
                src={"/uki-green-2024-11/ramen_white_horizontal.jpg"}
                alt={"White Ramen Horizontal"}
                width={800}
                height={500}
                priority
              />
            </div>
            <Image
              className="max-h-[550px] object-cover lg:block hidden rounded-xl"
              src={"/uki-green-2024-11/ramen_white.jpg"}
              alt={"White Ramen"}
              width={800}
              height={500}
              priority
            />
          </div>
          <div className="my-5">
            <p className="mb-5 max-w-[800px] mx-auto">
              Kolejną potrawą był wegańskie pierożki groza ( można wybrać z dodatkami). Opinia na ich temat trochę
              podzielona. Michał zauważył, że teksturowo i wyglądowo farsz wygląda identycznie jak mięso ale smakowały
              wyraźnie ziołowo. Ilość przypraw nie każdemu jednak mogła przypaść do gustu. Uznał także, że, pierożki
              gyoza nie dorównują uwielbianym przez niego gruzińskim pierożkom. Na pochwałę zasługuje fakt, że dania nie
              były zbyt tłuste.
            </p>
            <Image
              className="w-full h-[400px] object-cover rounded-xl"
              src={"/uki-green-2024-11/gyoza.jpg"}
              alt={"White Ramen"}
              width={1200}
              height={100}
              priority
            />
          </div>
          <div className="lg:flex gap-5 items-center">
            <Image
              className="rounded-xl"
              src={"/uki-green-2024-11/tofu_close_up.jpg"}
              alt={"White Ramen"}
              width={400}
              height={400}
              priority
            />
            <p className="my-5">
              Ostatnim daniem był ryż z tofu, który mi nie zasmakował. Danie było delikatnie ostre, a po kilku kęsach
              zaczęło intensywnie piec.
              <br/>
              <br/>
              Przechodząc do meritum, UKI GREEN to ciekawe miejsce, klimatyczne, z ofertą dań wegańskich u których
              trzeba
              się jednak liczyć z ilością ziół i przypraw. Trzeba też mieć na uwadze, że ograniczona ilość miejsca może
              mieć wpływ na komfort wizyty. Osobiście liczę jednak na kolejne wizyty.
            </p>
            <Image
              className="rounded-xl"
              src={"/uki-green-2024-11/herbs_close_up.jpg"}
              alt={"White Ramen"}
              width={400}
              height={400}
              priority
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <ReviewDetails mug={<FontAwesomeIcon icon={faMugHot} className="inline h-[25px] -mt-3 mr-2"/>}
              foodReview={coffee.food}
              foodDesc={'no spoko, ale dupki nie urywa'}
              localReview={coffee.local}
              localDesc={'mała przestrzeń przy stolikach'}
              locationReview={coffee.localisation}
              locationDesc={'to politechnika, wszędzie blisko'}
            />
            <ReviewDetails mug={<FontAwesomeIcon icon={faBeerMugEmpty} className="inline h-[25px] mr-2"/>}
              foodReview={beer.food}
              foodDesc={'było dobre ale to nie był najlepszy ramen jaki jadłem'}
              localReview={beer.local}
              localDesc={'trochę dno z tymi krzesłami'}
              locationReview={beer.localisation}
              locationDesc={'politechnika ale troszkę na uboczu że i ubera można zamówić i wejść na spokojnie'}
            />
          </div>
        </div>
      </article>
    </main>
  </>
};

export default page
