import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {

  const t = useTranslations("Certification");

  const certification = [
    {
      title: t("certif1"),
      school: t("school1"),
      date: t("date1"),
      link: "/",
      description:t("desc1"),
      tech: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Sass",
        "Bootstrap",
        "Git",
        "SEO",
      ],
    },
    {
      title: t("certif2"),
      school: t("school2"),
      date: t("date2"),
      link: "/",
      description:t("desc2"),
      tech: [
        "HTML",
        "CSS",
        "Responsive",
        "Design",
        "Flexbox",
        "Grid",
        "SEO",
        "Accessibility",
      ],
    },
    {
      title: t("certif3"),
      school: t("school3"),
      date: t("date3"),
      link: "/",
      description:t("desc3"),
      tech: [
        "JavaScript",
        "Functions",
        "DOM",
        "OOP",
        "Algorithmic Thinking",
        "API Fetching",
      ],
    },
    {
      title: t("certif4"),
      school: t("school4"),
      date: t("date4"),
      link: "/",
      description:t("desc4"),
      tech: [
        "React",
        "Redux",
        "Bootstrap",
        "Sass",
        "Single Page Application",
      ],
    },
  ];
  
  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title={t("section")} dir="l" />
      {certification.map((item) => (
        <CertificationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

