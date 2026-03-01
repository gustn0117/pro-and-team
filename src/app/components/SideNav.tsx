"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function SideNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState("professionals");
  const [visible, setVisible] = useState(false);

  const sections = [
    { id: "professionals", label: t("구성원", "Team") },
    { id: "practice-areas", label: t("업무", "Practice") },
    { id: "contact", label: t("연락처", "Contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["professionals", "practice-areas", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="side-nav"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`side-nav-dot ${active === id ? "active" : ""}`}
          aria-label={label}
        >
          <span className="side-nav-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
