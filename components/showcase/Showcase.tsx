import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ShowcaseItem } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Showcase = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "PrepWise AI Interview",
      img: "/gallery/AI-Interview.webp",
      code: "https://github.com/basedhound/car-hub_app_next",
      link: "https://prepwise-indol.vercel.app/",
      tech: ["Next", "Rapid API", "Tailwind", "TS"],
      desc: t("desc6"),
      modal: <>{t("modal6")}</>,
    },

    {
      title: "Imaginify",
      img: "/gallery/canva.webp",
      code: "https://github.com/basedhound/canva-clone_app_next",
      link: "https://imaginify-fv.vercel.app",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      desc: t("desc5"),
      modal: <>{t("modal5")}</>,
    },
    {
      title: "Podcast AI",
      img: "/gallery/podcast.webp",
      code: "https://github.com/basedhound/podcastr-ai_app_next",
      link: "https://podcastr-fv.vercel.app",
      tech: ["OpenAI", "Next.js", "React", "TypeScript", "Tailwind"],
      desc: t("desc8"),
      modal: <>{t("modal8")}</>,
    },
  ];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("section")} dir="r" />

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>
    </section>
  );
};
