import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowUp } from "react-icons/ai";
import { TransitionLink } from "../utils/TransitionLink";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";
import Filter from "./Filter";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("💜");
  const [goUpBtn, setGoUpBtn] = useState(false);

  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.cat.includes("💜"))
  );

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setFilteredProjects(
      projects.filter((project) => project.cat.includes(filter))
    );
  };

  const handleScroll = () => {
    setGoUpBtn(window.scrollY >= 350);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <main className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink
          className={styles.goBackBtn}
          href="/#projects"
          aria-label="Back to Homepage"
        >
          <AiOutlineArrowLeft size="2.4rem" />
        </TransitionLink>

        {/* Filter */}
        <Filter activeFilter={activeFilter} handleFilter={handleFilter} />

        {/* Gallery */}
        <section className={styles.galleryItem}>
          {filteredProjects.map((project) => (
            <GalleryItem
              key={`${project.title}-${activeFilter}`}
              {...project}
            />
          ))}
        </section>

        {/* Up Button */}
        <button
          className={styles.goUpBtn}
          style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <AiOutlineArrowUp size="2.4rem" />
        </button>
      </main>
    </>
  );
};

const projects = [
  //! P1 -> NEXT.JS -> APPLICATION(S)
  {
    cat: "💜, App, Next",
    title: "Evently",
    img: "/gallery/evently.webp",
    code: "https://github.com/Pratik-003/event_platform",
    link: "https://evently-fv.vercel.app",
    tech: ["Next", "MongoDB", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Built on Next.js 14, the events application stands as a
        comprehensive, full-stack platform for managing events. It serves as a
        hub, spotlighting diverse events taking place globally. Featuring
        seamless payment processing through Stripe, you have the capability to
        purchase tickets for any event or even initiate and manage your own
        events.
        <br />
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "AI Imaginify",
    img: "/gallery/canva.webp",
    code: "https://github.com/Pratik-003/imaginify",
    link: "https://imaginify-tau-one.vercel.app/",
    tech: ["Next", "Rapid API", "Tailwind", "TS"],
    modal: (
      <>
        🍵 An AI image SaaS platform that excels in image processing
        capabilities, integrates a secure payment infrastructure, offers
        advanced image search functionalities, and supports multiple AI
        features—including image restoration, recoloring, object removal,
        generative filling, and background removal.
        <br />
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "PrepWise AI Interview",
    img: "/gallery/AI-Interview.webp",
    code: "https://github.com/basedhound/car-hub_app_next",
    link: "https://prepwise-indol.vercel.app/",
    tech: ["Next", "Rapid API", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Developed with Next.js and leveraging its server-side rendering
        capabilities, Built an AI-driven job interview preparation platform,
        enabling mock interviews with real-time feedback and automated
        transcripts, improving user preparation efficiency
        <br />
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "Podcast AI",
    img: "/gallery/podcast.webp",
    code: "https://github.com/Pratik-003/podcastr",
    link: "https://podcastr-seven-blond.vercel.app/",
    tech: ["Next", "Plaid", "Dwolla", "TS"],
    modal: (
      <>
        🍵 AI SaaS platform that empowers users to create, discover, and enjoy
        podcasts with advanced features such as text-to-audio conversion using
        multi-voice AI powered by OpenAI API, podcast thumbnail image
        generation, and seamless playback. The platform includes secure
        authentication using Clerk, ensuring a safe and personalized user
        experience.
        <br />
      </>
    ),
  },
  {
    cat: "Design, Next",
    title: "Portfolio v3",
    img: "/gallery/portfolio3.webp",
    code: "https://github.com/basedhound/portfolio-v3_next",
    link: "/",
    tech: ["Next", "Sass", "Framer", "TypeScript"],
    modal: (
      <>
        🍵 This portfolio is a showcase of my skills, built with React and
        powered by Next.js. I've leveraged TypeScript to ensure robust code
        quality and maintainability. A styling system crafted with Sass brings a
        polished visual identity to life. And, with Framer Motion and Anime.js,
        I've added a touch of dynamism with smooth animations and transitions,
        creating an engaging user experience.
        <br />
      </>
    ),
  },
];

export default Gallery;
