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
  title: "Flamingo - Recenzja 2024/11",
  description: 'Road Trip do amerykańskiej restauracji Pink Flamingo',
  authors: { name: "Dwa Niedźwiadki", url: process.env.URL! },
  keywords: ["flamingo", "pink", "amerykańskie", "warszawa", "blog", "jedzenie", "dobre", "recenzje", "opinie", "opinia",],
  openGraph: {
    type: "website",
    url: process.env.URL!,
    title: "Road Trip do amerykańskiej restauracji Pink Flamingo",
    description: "Recenzja restauracji Pink Flamingo",
    siteName: "Bear-2-Eat",
    images: [{
      url: process.env.URL! + "/flamingo-2024-11/main.jpg",
    }],
  }
};

const page: React.FC = () => {
  const coffee = {
    local: 2.5,
    food: 1.5,
    localisation: 3.5,
  };
  const beer = {
    local: 4.5,
    food: 3,
    localisation: 2.5,
  };
  const jsonLd ={
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Recenzje Uki Green Vegan Ramen",
    "description": "Recenzja restauracji Uki Green Vegan Ramen 2024/11",
    "image": process.env.URL! + "/flamingo-2024-11/main.jpg",
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
    "datePublished": "2024-11-30",
    "dateModified": "2024-11-30"
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
          restaurantName="Pink Flamingo"
          main={"/flamingo-2024-11/main.jpg"}
          logo={"/flamingo-2024-11/logo.png"}
          alt={"Main"}/>
        <div className="p-5 text-xl text-justify">
          <div className="flex md:flex-row flex-col gap-5 items-center mt-5">
            <div className="flex relative">
              <div className="md:pr-5 md:w-2/3 w-full">
                <div className="mb-5">
                  <ReviewFloater foodReviewBeer={beer.food}
                    localReviewBeer={beer.local}
                    locationReviewBeer={beer.localisation}
                    foodReviewCoffee={coffee.food}
                    localReviewCoffee={coffee.local}
                    locationReviewCoffee={coffee.localisation}
                  />
                  <p>
                    Pink Flamingo, to amerykańska restauracja, nieco ukryta, z tyłu Parku Szczęśliwickiego. Wnętrze
                    bardzo
                    przypomina rodem ,,Grease’’ z Johnem Travoltą. Neony, czerwone krzesła, wygodne fotele, muzyka z
                    lat 50. Osobiście uwielbiam takie klimaty.
                  </p>
                </div>
                <Image
                  className="md:hidden block object-cover mb-5 h-[200px] w-full rounded shadow"
                  src={'/flamingo-2024-11/8.jpg'}
                  alt={'Nachos'}
                  width={800}
                  height={500}
                  priority
                />
                <p>
                  Na przystawkę dostaliśmy Nachosy z salsą. Danie jest podawane po zamówieniu do każdego stolika ale
                  można je także zamówić.<br/>
                  Zamówiłam skrzydełka Honey Buffalo Chicken Wings with Blue Cheese. Skrzydełka były dobre do momentu aż
                  cały znajdujący się na nich miód nie rozlał się po talerzu mieszając z kukurydzą i sałatką. Nie było
                  czuć smaku warzyw, został on zastąpiony klejącym się miodem.
                </p>
              </div>
              <Image
                className="hidden md:block h-full absolute object-cover w-1/3 right-0 rounded shadow"
                src={'/flamingo-2024-11/8.jpg'}
                alt={'Nachos'}
                width={800}
                height={500}
                priority
              />
            </div>
          </div>

          <div className="my-5 flex lg:flex-row flex-col gap-5 h-[450px]">
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/flamingo-2024-11/13.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/flamingo-2024-11/11.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="flex relative justify-center">
            <Image
              className="h-full absolute hidden lg:block left-0 object-top w-1/3 object-cover rounded shadow"
              src={'/flamingo-2024-11/1.jpg'}
              alt={'Honey Buffalo Chicken Wings with Blue Cheese close up'}
              width={800}
              height={500}
              priority
            />

            <p className="lg:w-1/3 w-full px-5 py-10">
              Michał zamówił BBQ Spare Ribs. Dla mnie żeberka wyszły smaczne. Dla niego niedoprawione, polane zbyt duża
              ilością sosu, która dla mnie dodawała im smaku w całej okazałości. Za pieczarkami nie przepadamy ale muszę
              zauważyć, że zostały zjedzone. Całości dopełniły nam napoje.
              <br/>
              Zamówiłam wino grzane a Michał Piwo grzane z sokiem i goździkami. Wielkości można porównać patrząc na
              zdjęcie. Cena była taka sama.
            </p>

            <Image
              className="h-full hidden lg:block right-0 absolute object-bottom w-1/3 object-cover rounded shadow"
              src={'/flamingo-2024-11/14.jpg'}
              alt={'BBQ Spare Ribs close up'}
              width={800}
              height={500}
              priority
            />
          </div>

          <div className="my-5 flex lg:flex-row flex-col gap-5 h-[450px] mb-10">
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/flamingo-2024-11/9.jpg'}
              alt={'Drinks'}
              width={800}
              height={500}
              priority
            />
            <Image
              className="lg:h-full h-[225px] object-cover w-full lg:w-1/2 rounded shadow"
              src={'/flamingo-2024-11/3.jpg'}
              alt={'BBQ Spare Ribs'}
              width={800}
              height={500}
              priority
            />
          </div>

          <p className="my-5 text-center">
            W mojej ocenie - ceny zbyt bardzo wygórowane, tym razem jedzenie nie podbiło mojego serca. Ale to miejsce…
            lubię tu wracać. To już nasze trzecie wyjście - atmosfera i klimat lokalu mają w sobie to coś co
            przyciąga. Po skończonym obiedzie, można się wybrać na górkę Szczęśliwicką albo pochodzić krętymi
            ścieżkami parku.
          </p>

          <div className="grid lg:grid-cols-2 gap-5">
            <ReviewDetails mug={<FontAwesomeIcon icon={faMugHot} className="inline h-[25px] -mt-3 mr-2"/>}
              foodReview={coffee.food}
              foodDesc={'skrzydełka były dobre ale cały miód rozlał sie na resztę (sałatka i kukurydza)'}
              localReview={coffee.local}
              localDesc={'słabo nas usadzili, wydaje mi sie ze były lepsze miejsca i zaczynali usadzać od najgorszych i obsługa była do bani'}
              locationReview={coffee.localisation}
              locationDesc={'polecam droge przez park'}
            />
            <ReviewDetails mug={<FontAwesomeIcon icon={faBeerMugEmpty} className="inline h-[25px] mr-2"/>}
              foodReview={beer.food}
              foodDesc={'papu, jak na popisowe danie (60zl) to jadlem o wiele leosze - twarde, zalane sosem'}
              localReview={beer.local}
              localDesc={'oddaje takie amerykańskie uczucie familijnej restauracji,nachosy na poczęstunek i szybko podali jedzenie'}
              locationReview={beer.localisation}
              locationDesc={'nie żadnego autobusu blisko, droga albo przez park albo nowe budownistwo z dziurami'}
            />
          </div>
        </div>
      </article>
    </main>
  </>
};

export default page
