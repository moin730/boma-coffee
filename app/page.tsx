import Image from "next/image";
import SiteNav from "./components/SiteNav";
import HeroFX from "./components/HeroFX";

const INSTAGRAM = "https://www.instagram.com/boma.coffee";
const EMAIL = "bomacoffee.cw@gmail.com";
const MAP_QUERY = "127 Stephen St, Yarraville VIC 3013, Australia";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

type MenuItem = { name: string; note: string; price: string };

const brunch: MenuItem[] = [
  { name: "Shakshuka", note: "[Short description]", price: "[PRICE]" },
  { name: "Chilli scramble", note: "[Short description]", price: "[PRICE]" },
  { name: "Crumpets with honey", note: "[Short description]", price: "[PRICE]" },
  { name: "House granola", note: "[Short description]", price: "[PRICE]" },
];

const drinks: MenuItem[] = [
  { name: "Espresso, Industry Beans", note: "Flat white, latte, long black, iced", price: "[PRICE]" },
  { name: "Matcha latte", note: "Hot or iced", price: "[PRICE]" },
  { name: "Cold-pressed juice", note: "[Flavours]", price: "[PRICE]" },
  { name: "Venezuelan quesillo", note: "Cream caramel, when it’s on", price: "[PRICE]" },
];

function MenuColumn({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div>
      <h3 className="border-b border-forest/70 pb-4 text-xl font-semibold md:text-2xl">
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item.name} className="border-b border-forest/70 py-4">
            <div className="flex items-baseline gap-3">
              <span className="text-lg">{item.name}</span>
              <span
                aria-hidden
                className="flex-1 translate-y-[-4px] border-b border-dotted border-forest/40"
              />
              <span className="text-sm font-bold">{item.price}</span>
            </div>
            <p className="mt-1 text-sm text-forest/70">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Photo({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-square overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-forest/70">{caption}</figcaption>
      )}
    </figure>
  );
}

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <ellipse cx="6" cy="10" rx="1.8" ry="2.3" />
      <ellipse cx="10" cy="5.5" rx="1.8" ry="2.3" />
      <ellipse cx="14" cy="5.5" rx="1.8" ry="2.3" />
      <ellipse cx="18" cy="10" rx="1.8" ry="2.3" />
      <path d="M12 11.5c-2.6 0-5.5 3.6-5.5 6 0 1.6 1.3 2.5 2.8 2.5 1.1 0 1.8-.6 2.7-.6s1.6.6 2.7.6c1.5 0 2.8-.9 2.8-2.5 0-2.4-2.9-6-5.5-6Z" />
    </svg>
  );
}

const d = (s: number) => ({ animationDelay: `calc(var(--intro) + ${s}s)` });

const wrap = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[80px]";

export default function Home() {
  return (
    <>
      <SiteNav instagram={INSTAGRAM} />
      <HeroFX />

      {/* Hero */}
      <header id="top" className="relative overflow-hidden bg-pink">
        <div aria-hidden className="drift pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-cream/50 blur-3xl" />
        <div aria-hidden className="drift pointer-events-none absolute -right-16 bottom-40 h-96 w-96 rounded-full bg-leaf/15 blur-3xl [animation-delay:-6s]" />
        <div className={`${wrap} relative z-10 grid items-center gap-12 pt-6 md:grid-cols-[1.05fr_1fr] md:gap-8 md:pt-10`}>
          <div className="order-2 md:order-1">
            <p className="fade-up mb-6 inline-flex items-center gap-3 rounded-full bg-cream/60 px-4 py-2 text-sm font-medium" style={d(0.04)}>
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-leaf" />
              Open today · 7am to 1:30pm
            </p>
            <h1 className="text-[34px] font-medium leading-[1.08] tracking-tight md:text-[56px]">
              <span className="line-mask"><span style={d(0.08)}>The pink cafe on</span></span>
              <span className="line-mask"><span style={d(0.13)}>Stephen Street.</span></span>
              <span className="line-mask"><span style={d(0.18)}>Good coffee, proper</span></span>
              <span className="line-mask">
                <span style={d(0.22)}>
                  brunch,{" "}
                  <span className="relative inline-block text-leaf">
                    dogs out front.
                    <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-leaf" aria-hidden>
                      <path className="draw" d="M2 14 C 60 2, 120 18, 180 8 S 270 4, 298 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-6" style={d(0.32)}>
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-cream transition-all hover:gap-5 hover:bg-leaf md:text-base"
              >
                See the menu
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#visit" className="text-sm font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-leaf md:text-base">
                127 Stephen St, Yarraville
              </a>
            </div>
          </div>

          {/* Image composition */}
          <div className="relative order-1 mx-auto w-full max-w-[460px] md:order-2 md:mr-0">
            <div style={d(0.06)} className="arch-in px px-arch relative aspect-[688/872] w-[86%] overflow-hidden rounded-t-full rounded-b-md md:ml-auto">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Inside Boma: woven pendant lights, dark green walls and a counter full of housemade sweets"
                fill
                priority
                sizes="(min-width: 768px) 400px, 86vw"
                style={d(0.06)}
                className="zoom-out object-cover"
              />
            </div>

            {/* Rotating badge */}
            <div className="pop px px-badge absolute -left-1 top-[8%] h-24 w-24 md:-left-6 md:h-32 md:w-32" style={d(0.28)}>
              <div className="relative h-full w-full rounded-full bg-leaf text-cream shadow-lg">
                <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
                  <defs>
                    <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="fill-current text-[9.5px] font-semibold uppercase">
                    <textPath href="#badge-circle" textLength="230" lengthAdjust="spacing">Industry Beans · Dogs welcome ·</textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 grid place-items-center [&_svg]:h-7 [&_svg]:w-7 md:[&_svg]:h-9 md:[&_svg]:w-9"><PawIcon /></span>
              </div>
            </div>

            {/* Floating pour photo */}
            <div className="pop px px-pour absolute -bottom-6 left-0 w-[38%] md:-left-10" style={d(0.36)}>
              <div className="float relative aspect-square overflow-hidden rounded-full border-[6px] border-pink shadow-xl">
                <Image src="/images/hero-pour.jpg" alt="Milk being poured into an espresso" fill sizes="180px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="px px-word font-display relative z-10 mt-14 select-none overflow-hidden pt-[0.05em] text-center text-[38vw] leading-[0.68] text-leaf md:mt-10 md:text-[min(36vw,560px)]"
        >
          {"Boma".split("").map((ch, i) => (
            <span key={i} className="wordmark-letter" style={d(0.1 + i * 0.06)}>
              {ch}
            </span>
          ))}
        </p>
      </header>

      {/* Marquee */}
      <div className="overflow-hidden bg-forest py-4 text-cream" aria-hidden>
        <div className="marquee flex w-max whitespace-nowrap text-lg font-semibold md:text-xl">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10 pr-10">
              {["Shakshuka", "Matcha latte", "Red bun burger", "Cold-pressed juice", "Industry Beans espresso", "Venezuelan quesillo", "Dogs welcome"].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="text-pink">✺</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main>
        {/* Story */}
        <section className={`${wrap} grid gap-8 py-14 md:grid-cols-2 md:gap-20 md:py-20`}>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-[64px]">
            Where the old fish and chip shop used to be.
          </h2>
          <div className="space-y-5 leading-relaxed text-forest/90 md:max-w-[38ch] md:justify-self-end">
            <p>
              [Owner’s story: two or three lines on how Boma started, the sister cafe in
              Williamstown, and what they love about Yarraville.]
            </p>
            <p>
              Coffee is from Industry Beans and the pastries come in fresh from Penny for Pound
              every morning. Sit down for brunch or grab something on the way to the station.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className={`${wrap} grid gap-8 md:grid-cols-3 md:gap-8`}>
          <Photo src="/images/granola-latte.jpg" alt="A latte beside a slice of house granola" caption="Latte and a house granola slice" />
          <Photo src="/images/red-burger.jpg" alt="Red bun burger with rocket on a sunny table" caption="The red bun burger, out in the sun" className="md:mt-16" />
          <Photo src="/images/boma-sign.jpg" alt="Bronze Boma Coffee sign on a white brick wall" caption="127 Stephen Street" />
        </section>

        {/* Menu */}
        <section id="menu" className={`${wrap} scroll-mt-8 py-16 md:py-24`}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-7xl leading-[0.85] text-leaf md:text-[140px]">Menu</h2>
            <a href="#" className="text-sm font-bold text-leaf underline underline-offset-4">
              Download the full menu (PDF)
            </a>
          </div>
          <div className="grid gap-14 md:grid-cols-2 md:gap-36">
            <MenuColumn title="Brunch" items={brunch} />
            <MenuColumn title="Coffee, juice & sweets" items={drinks} />
          </div>
        </section>

        {/* Dogs */}
        <section id="dogs" className="scroll-mt-8 bg-leaf py-16 text-cream md:py-24">
          <div className={`${wrap} grid items-center gap-14 md:grid-cols-2 md:gap-20`}>
            <div>
              <PawIcon />
              <h2 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-[72px]">
                Bring the dog. We’ll fill the water bowl.
              </h2>
              <p className="mt-6 max-w-[44ch] leading-relaxed text-cream/90">
                The front yard is dog friendly every day. Tag @boma.coffee and your dog might end
                up on our feed.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 md:max-w-[480px] md:gap-6 md:justify-self-end">
              <div className="space-y-4 md:space-y-8">
                <Photo src="/images/iced-coffee.jpg" alt="Iced coffee with lemon in a cut-glass tumbler" />
                <Photo src="/images/quesillo.jpg" alt="Venezuelan quesillo with caramel in a dark bowl" />
              </div>
              <div className="space-y-4 pt-10 md:space-y-8 md:pt-20">
                <Photo src="/images/cold-pressed.jpg" alt="Four bottles of Boma cold-pressed juice" />
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-square flex-col justify-end rounded-md bg-pink p-4 text-forest transition-transform hover:-rotate-1 md:p-10"
                >
                  <span className="text-lg font-semibold md:text-2xl">Your dog here</span>
                  <span className="text-xs md:text-sm">Tag @boma.coffee</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className={`${wrap} grid scroll-mt-8 items-center gap-14 py-16 md:grid-cols-[1.4fr_1fr] md:py-24`}>
          <div>
            <h2 className="font-display text-5xl leading-[0.9] text-leaf md:text-[88px]">
              127 Stephen Street, Yarraville
            </h2>
            <dl className="mt-8 flex flex-wrap gap-x-14 gap-y-6">
              <div>
                <dt className="text-sm text-forest/70">Monday to Friday</dt>
                <dd className="mt-2 text-lg font-bold">7am to 1:30pm</dd>
              </div>
              <div>
                <dt className="text-sm text-forest/70">Saturday and Sunday</dt>
                <dd className="mt-2 text-lg font-bold">8am to 2pm</dd>
              </div>
              <div>
                <dt className="text-sm text-forest/70">Email</dt>
                <dd className="mt-2 text-lg font-bold text-leaf underline underline-offset-4">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
            </dl>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-leaf px-8 py-4 font-bold text-cream transition-colors hover:bg-forest"
            >
              Get directions
            </a>
          </div>
          <div className="w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-forest/15 bg-sand shadow-sm">
              <iframe
                title="Map to Boma Coffee"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=m&z=17&ie=UTF8&iwloc=B&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-leaf underline underline-offset-4"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-forest/60">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-10 text-sm`}>
          <p>Boma Coffee, Yarraville. Good vibes only.</p>
          <div className="flex gap-8 font-semibold underline underline-offset-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${EMAIL}`}>Email us</a>
          </div>
        </div>
      </footer>
    </>
  );
}
