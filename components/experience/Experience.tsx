import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experiences = [
    {
      title: t("exp1"),
      role: t("role1"),
      date: t("date1"),
      location: t("loca1"),
      description: t("desc1"),
      tech: [
        "React",
        "JavaScript",
        "Tailwind",
        "MySQL",
        "Python Flask",
        "SEO",
        "Machine Learning",
      ],
    },
    {
      title: t("exp2"),
      role: t("role2"),
      date: t("date2"),
      location: t("loca2"),
      description: t("desc2"),
      tech: [
        "TypeScript",
        "JavaScript",
        "React JS",
        "Redux",
        "Konva.js",
        "Canvas-based interactions",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("section")} dir="l" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
