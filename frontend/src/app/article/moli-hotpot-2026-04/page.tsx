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
  title: "Moli Hotpot & Grill - Recenzja 2026/04",
  description: 'Niebiańska uczta w Moli Hotpot & Grill',
  authors: { name: "Dwa Niedźwiadki", url: process.env.URL! },
  keywords: ["moli", "hotpot", "grill", "warszawa", "blog", "jedzenie", "dobre", "recenzje", "opinie", "opinia",],
  openGraph: {
    type: "website",
    url: process.env.URL!,
    title: "Niebiańska uczta w Moli Hotpot & Grill",
    description: "Recenzja restauracji Moli Hotpot & Grill",
    siteName: "Bear-2-Eat",
    images: [{
      url: process.env.URL! + "/moli-hotpot-2026-04/main.jpg",
    }],
  }
};

const page: React.FC = () => {
  const coffee = {
    local: 5,
    food: 5,
    localisation: 5,
  };
  const beer = {
    local: 5,
    food: 5,
    localisation: 5,
  };
  const jsonLd ={
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Recenzja Moli Hotpot & Grill",
    "description": "Recenzja restauracji Moli Hotpot & Grill 2026/04",
    "image": process.env.URL! + "moli-hotpot-2026-04/main.jpg",
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
    "datePublished": "2026-04-06",
    "dateModified": "2026-04-06"
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
          restaurantName="Moli Hotpot & Grill"
          main={"/moli-hotpot-2026-04/main.jpg"}
          logo={"jpg"}
          alt={"Main"}/>
        <div className="p-5 text-xl text-justify">
          <div className="flex md:flex-row flex-col gap-5 md:h-[250px]">
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
                  Moli Hotpot & Grill to chińska restauracja znajdująca się niedaleko Zagrywek. Wnętrze jest urządzone
                  w nowoczesnym stylu  połączonym z chińskimi motywami. Personel jest bardzo pomocny, jeden z Panów
                  chętnie wytłumaczył nam, jak używać kociołka i jak długo gotować poszczególne składniki.
                  <br/>
                  Warto pamiętać, że wizyta w Moli to nie jest miejsce na szybki lunch. Mają ogromny wybór składników,
                  a obsługa na bieżąco dolewa bulion, gdy tylko zaczyna go ubywać. To idealne miejsce na wyjście
                  towarzyskie i kilkugodzinne celebrowanie jedzenia.
                </p>
              </div>
            </div>
            <Image
              className="object-cover md:w-1/2 rounded shadow max-h-[325px]"
              src={'/moli-hotpot-2026-04/photo_8.jpg'}
              alt={'Bar logo'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="my-5 flex lg:flex-row flex-col gap-5 lg:h-[450px]">
            <Image
              className="lg:h-full h-[325px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_14.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[325px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_1.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[325px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_9.9.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="flex lg:flex-row flex-col relative justify-center mb-5 gap-5">

            <p className=" w-full text-center px-5 py-10">
              Zamówiliśmy na przystawkę pierożki z ciasta ryżowego z krewetkai i kasztanem wodnymi. To było ciekawe
              danie, jednak nie podbiło naszych serc. Daniem Głównym był zestaw Kanton - krewetki, kulki z kraba, skóra
              z tofu, makaron domowy, kulki wieprzowo wołowe, cienko pokrojone plastry wołowiny.
              <br/>
              <br/>
              Dwa wywary - Pekiński
              ( łagodny ) oraz Tradycyjny ( ostry ) oraz jeden sos - tradycyjny ostry sos seczuański. Z ugotowanymi
              krewetkami był bezbłędny.
              Domówiliśmy do tego jeszcze 8 krewetek, miskę makaronu domowego i plastry kurczaka. Do picia wzięliśmy
              herbatę jaśminową ( dostajcie czajniczek zaparzonej herbaty, Mniam! ), Wild Ruby - malinowego drinka na
              bazie ginu, Whisky Inferno - dymny drink na bazie bourbona, Yuzu spritz oraz Mohito.
            </p>
          </div>

          <div className="my-5 flex lg:flex-row flex-col gap-5 lg:h-[450px]">
            <Image
              className="h-full object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_9.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="h-full object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_5.5.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="h-full object-cover w-full lg:w-1/2 rounded shadow"
              src={'/moli-hotpot-2026-04/photo_3.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="flex md:flex-row flex-col gap-5 md:h-[250px]">
            <Image
              className="object-cover md:w-1/2 rounded shadow max-h-[325px]"
              src={'/moli-hotpot-2026-04/photo_16.jpg'}
              alt={'Bar logo'}
              width={800}
              height={500}
              priority
            />
            <div className="flex items-center relative md:w-1/2">
              <p>
                Spędziliśmy tam łącznie z półtorej godziny. Hotpot jest super zabawą. W planach pojawiły się pomysły
                na kolejne wyjścia, może Sylwester? Może urodziny ze znajomymi ? Na pewno następnym razem chcemy
                spróbować grlla. Jeśl jednak skusimy sę na Hotpota to może sami postaramy się skomponować własny
                zestaw z dostępnych dodatków, zamiast brać gotowego.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <ReviewDetails mug={<FontAwesomeIcon icon={faMugHot} className="inline h-[25px] -mt-3 mr-2"/>}
              foodReview={coffee.food}
              foodDesc={'Przepyszne warzywa i owoce morza. Z chęcią przejdę się jeszcze raz'}
              localReview={coffee.local}
              localDesc={'Atmosfera oraz wygląd lokalu super. Obsługa na wysokim poziomie'}
              locationReview={coffee.localisation}
              locationDesc={'Blisko Centrum, dojazd bez problemów'}
            />
            <ReviewDetails mug={<FontAwesomeIcon icon={faBeerMugEmpty} className="inline h-[25px] mr-2"/>}
              foodReview={beer.food}
              foodDesc={'przepyszne, i jaka zabawa! Chociaż lepiej się jadło warzywka niż mięsko'}
              localReview={beer.local}
              localDesc={'przytulnie, wygodnie i cicho, wyrozumiała obsługa'}
              locationReview={beer.localisation}
              locationDesc={'troche ukryte wejście ale dojazd bez żadnych problemów'}
            />
          </div>
        </div>
      </article>
    </main>
  </>
};

export default page
