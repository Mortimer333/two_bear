import Image from "next/image";
import Article from "@component/Article";

export default function Home(): React.ReactNode {
  return (
    <>
      <header className="md:block flex justify-center">
        <h1 className="hero-title md:ml-10 md:holding-bars">Kulinarne podróże dwóch misiów</h1>
      </header>

      <section className="w-full p-3 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 items-start mb-10">

        <Article
          link="/article/waffle-bar-2025-01"
          main="/waffle-bar-2025-01/main.jpg"
          logo="/waffle-bar-2025-01/logo.webp"
          maps="https://maps.app.goo.gl/db6GAfrhvULjAkQL7"
          date="2025-01"
          stars="3.75"
          street="Akademicka 1"
          title="Waffle bar"
          maxWidth={100}
          description="
            Waffle bar to mała knajpka znajdująca się przy Placu Narutowicza. Kameralne miejsce idealne dla miłośników
            gofrów i bajgli. Kameralne miejsce dla chętnych zjedzenia bez tłumów, w spokoju. Napoje – cappuccino ikakao
            z piankami, pyszne.
          "
        />
        <Article
          link="/article/flamingo-2024-11/"
          main="/flamingo-2024-11/main.jpg"
          logo="/flamingo-2024-11/logo.png"
          maps="https://maps.app.goo.gl/uNxboNNkK73ZH8qM6"
          date="2024-11"
          stars="2.9"
          street="Lirowa 42"
          title="Pink Flamingo"
          maxWidth={100}
          description="
            Pink Flamingo, to amerykańska restauracja, nieco ukryta, z tyłu Parku Szczęśliwickiego. Wnętrze
            bardzo przypomina rodem ,,Grease’’ z Johnem Travoltą. Neony, czerwone krzesła, wygodne fotele, muzyka z
            lat 50. Osobiście uwielbiam takie klimaty.
          "
        />
        <Article
          link="/article/uki-green-2024-11/"
          main="/uki-green-2024-11/main.jpg"
          logo="/uki-green-2024-11/logo.png"
          maps="https://maps.app.goo.gl/6xXj1VrqTa2wD4vb8"
          date="2024-11"
          stars="3.9"
          street="Koszykowa 49A"
          title="Uki Green"
          description="
              restauracja serwująca dania wegańskie, nieco ukryta. Wnętrze jest zachowane w stylu minimalistycznym z
              dużą ilością drewna. Należy jednak zaznaczyć, że przestrzeń między stolikami jest ograniczona,
              co może sprawić problem przy odchodzeniu od stolika.
          "
        />

      </section>
      <footer className="max-w-[850px] mx-auto pb-10">
        <Image
          className="w-full max-w-[300px] mx-auto"
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          priority
        />
        <p className="mx-4 mt-10 text-xl text-justify">
          Na naszej stronie znajdziesz szczere opinie na temat jedzenia, od klimatycznych kawiarni po tematyczne ale
          też eleganckie restauracje. Celem naszej dwójki jest  ułatwienie Ci podjęcia decyzji gdzie smacznie zjeść i
          spędzić dobrze czas. Każda recenzja jest starannie przez nas stworzona. Zwracamy uwagę na każdy szczegół - od
          smaku po estetykę i po atmosferę miejscówki. Nasze opinie pomogą Wam wybrać idealne miejsc, gdzie dobrze
          zjeść w wyjątkowym klimacie. Ważną zaletą jest, że robimy to z pasji i dla zabawy. Każdy lubi dobrze zjeść.
          Zapraszamy do świata kulinarnych podróży dwóch misiów.
        </p>
      </footer>
    </>
  )
  ;
}
