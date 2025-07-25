import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import { Link } from "@/i18n/navigation";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  const t = useTranslations("Sidebar");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const options = {
      threshold: 0.3,
    };
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}>
        <Link href="/" className={styles.logo} aria-label="Back to top" >
          PM<span>.</span>
        </Link>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "about" ? styles.selected : ""
            }`}
            href="/#about"
            onClick={() => {
              setSelected("about");
            }}
            aria-label="About me"
            >
            {t("about")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "projects" ? styles.selected : ""
            }`}
            href="/#projects"
            onClick={() => setSelected("projects")}
            aria-label="Projects"
            >
            {t("projects")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "experience" ? styles.selected : ""
            }`}
            href="/#experience"
            onClick={() => setSelected("experience")}
            aria-label="Experience"
            >
            Exp.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>            
          <Link
            className={`${styles.sideBarLink} ${
              selected === "certification" ? styles.selected : ""
            }`}
            href="/#certification"
            onClick={() => setSelected("certification")}
            aria-label="Certification"
            >
            Certif.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "contact" ? styles.selected : ""
            }`}
            href="/#contact"
            onClick={() => setSelected("contact")}
            aria-label="Contact"
            >
            Contact
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};
