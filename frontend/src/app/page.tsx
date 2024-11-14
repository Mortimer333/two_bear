import Image from "next/image";

export default function Home(): React.ReactNode {
  return (
    <>
      <header className="md:block flex justify-center">
        <h1 className="hero-title md:ml-10 md:holding-bars">Kulinarne podróże dwóch misiów</h1>
      </header>

      <section className="w-full p-3 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 items-start mb-10">

        <article className="food-item">
          <a href="/article/uki-green-2024-11/">
            <div className="w-full h-0 pb-[50%] overflow-hidden rounded-t-xl food-item-hero">
              <Image
                className="w-full rounded-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/uki-green-2024-11/main.jpg"
                alt="Main Uki Green"
                width={400}
                height={300}
                priority
              />
              <Image
                className="absolute right-5 top-5 max-w-[50px] food-item-logo"
                src="/uki-green-2024-11/logo.png"
                alt="Logo"
                width={100}
                height={120}
                priority
              />
              <div className="food-item-hero-overlay"></div>
            </div>
          </a>
          <div className="bg-[--black] px-3 py-5 rounded-b-xl relative z-1">
            <small className="mb-3 inline-block">
              2024-11 |
              <a href="https://maps.app.goo.gl/6xXj1VrqTa2wD4vb8"
                target="_blank"
                className="blue-link "
                rel="nofollow noreferrer">
                Koszykowa 49A
              </a> | 4/5
            </small>
            <h1 className="neon-text mb-5">Uki Green</h1>
            <p className="text-md short-text-2">
              restauracja serwująca dania wegańskie, nieco ukryta. Wnętrze jest zachowane w stylu minimalistycznym z
              dużą ilością drewna. Należy jednak zaznaczyć, że przestrzeń między stolikami jest ograniczona,
              co może sprawić problem przy odchodzeniu od stolika.
            </p>
          </div>
        </article>

      </section>
      <footer className="w-[850px] mx-auto pb-10">
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
          spędzić dobrze czas. Każda recenzja jest starannie przez nas stworzona. Zwracamy uwagę a każdy szczegół - od
          smaku po estetykę i po atmosferę miejscówki. Nasze opinie pomogą Wam wybrać idealne miejsc, gdzie dobrze
          zjeść w wyjątkowym klimacie. Ważną zaletą jest, że robimy to z pasji i dla zabawy. Każdy lubi dobrze zjeść.
          Zapraszamy do świata kulinarnych podróży dwóch misiów.
        </p>
      </footer>
    </>
  )
  ;
}
