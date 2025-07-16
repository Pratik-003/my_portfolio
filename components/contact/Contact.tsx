import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail, AiFillCalendar } from "react-icons/ai";
import { Socials } from "../nav/Socials";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {t("section")}
            <span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            {t("p1")}{" "}
            <a
              href="https://www.linkedin.com/in/pratik-maharana-235538253/"
              target="_blank"
              rel="nofollow"
              aria-label="Contact me on LinkedIn"
            >
              LinkedIn
            </a>{" "}
            {t("p2")}
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactLinks}>
            <a
              className={styles.contactLink}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maharanapratik600@gmail.com"
              target="_blank"
              rel="nofollow"
              aria-label="Send me an email"
            >
              <AiFillMail size="2.4rem" />
              <span>maharanapratik600@gmail.com</span>
            </a>
            <a
              className={styles.contactLink}
              href="/"
              target="_blank"
              rel="nofollow"
              aria-label="Schedule a meeting with me on Calendly"
            >
              <AiFillCalendar size="2.4rem" />
              <span>{t("p3")}</span>
            </a>
          </div>
        </Reveal>
        <Reveal width="100%">
          <Socials />
        </Reveal>
      </div>
    </section>
  );
};
