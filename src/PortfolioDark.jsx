import { useState } from "react";
import profilePhoto from "../Assets/my_image.png";
import AravindResume from "../Assets/Aravind.pdf";
import DevBlog from "../Assets/Dev_blog.png";
import GameBlog from "../Assets/Game_blog.png";
import PollyGlot from "../Assets/Polly_Glot.png";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, BriefcaseBusiness } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const MOBILE_NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-aravind-203/",
    path: "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.48V21H3.4V8.75Zm6.2 0h3.34v1.68h.05c.47-.88 1.6-1.8 3.29-1.8 3.52 0 4.17 2.32 4.17 5.33V21h-3.48v-6.34c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.44 1.65-2.44 3.35V21H9.6V8.75Z",
  },
  {
    name: "GitHub",
    href: "https://github.com/saiaravind203",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aravind_naidu203/",
    path: "M12 2.2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.72 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.72.36-1.03.67-.31.31-.51.61-.67 1.03-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.72.67 1.03.31.31.61.51 1.03.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.72-.36 1.03-.67.31-.31.51-.61.67-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.8 2.8 0 0 0-.67-1.03 2.8 2.8 0 0 0-1.03-.67c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06Zm0 3.05a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-1.99a1.17 1.17 0 1 1-2.33 0 1.17 1.17 0 0 1 2.33 0Z",
  },
  {
    name: "Twitter",
    href: "https://x.com/saiarav62148806",
    path: "M18.9 3h3.1l-6.77 7.73L23 21h-6.23l-4.88-6.38L6.3 21H3.2l7.24-8.27L2.9 3h6.39l4.41 5.83L18.9 3Zm-1.09 16.17h1.72L7.28 4.73H5.43l12.38 14.44Z",
  },
];

const PROJECTS = [
  {
    name: "DEV Blog Platform",
    stack: ["Next.js", "Tailwind", "Express.js"],
    description:
      "The platform allows developers to create, manage, and share technical blogs with features like authentication, Google login, AI-generated summaries, comments, a responsive mobile-first interface, and a clean, professional developer experience.",
    image: DevBlog,
    github: "https://github.com/saiaravind203/Dev_Blog",
    wip: true,
  },
  {
    name: "Game Blog Platform",
    stack: ["HTML", "CSS", "JavaScript", "Express.js", "SQLite3"],
    description:
      "The platform allows developers to create, manage, and share technical blogs with features like authentication, Google login, AI-generated summaries, comments, a responsive mobile-first interface, and a clean, professional developer experience.",
    image: GameBlog,
    github: "https://github.com/saiaravind203/GameBlog",
  },
  {
    name: "AI assisted Localization Tool",
    stack: ["HTML", "CSS", "JavaScript", "Express.js", "OpenRouter API"],
    description:
      "AI Translation Platform is a modern full-stack AI-powered translation application where users can translate text in real time through an intuitive messenger-style interface, supporting multiple languages with fast, accurate AI translations and a seamless, responsive user experience.",
    image: PollyGlot,
    github: "https://github.com/your-handle/translation-studio",
  },
];

const EXPERIENCE = [
  {
    icon: "ti-briefcase",
    period: "Oct, 2023 \u2014 Present",
    role: "Packaged App Development Analyst",
    org: "Accenture",
    side: "left",
    description:
      "Building and maintaining a React-based internal configuration tool for a Next.js e-commerce platform, owning JSON-based localization workflows across markets.",
  },
  {
    icon: "ti-code",
    period: "2021 \u2014 2023",
    role: "Full Stack Developer",
    org: "Previous Company",
    side: "right",
    description:
      "Developed full-stack features across Java back-end services and React front ends, shipping on a two-week deployment cycle.",
  },
];

function SocialLink({ name, href, path }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-gray-400 transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={path} />
      </svg>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-white">
            SA
          </div>
          <span className="font-display text-sm font-semibold tracking-wide">
            SAI ARAVIND
          </span>
        </div>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  i === 0
                    ? "border-b-2 border-accent pb-1 text-sm font-medium text-white"
                    : "text-sm text-gray-300 transition-colors duration-300 hover:text-accent"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={AravindResume} target="_blank" rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent sm:flex"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM8 11h8v1.5H8V11Zm0 3h8v1.5H8V14Zm0 3h5v1.5H8V17Z" />
          </svg>
          Resume
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6L17.6 19l1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {MOBILE_NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    i === 0
                      ? "block rounded-lg px-3 py-2.5 text-sm font-medium text-white"
                      : "block rounded-lg px-3 py-2.5 text-sm text-gray-300 hover:text-accent"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-65px)] px-6 py-14 lg:px-10 lg:py-20 flex items-center"
    >
      <div className="mx-auto grid max-w-7xl gap-10 w-full lg:grid-cols-[1fr_1fr_1fr]">
        {/* Left column */}
        <div>
          <p className="mb-3 text-sm text-accent">Hola! 👋</p>
          <p className="font-display text-2xl text-white">I'm</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Sai <span className="gradient-name">Aravind</span>
          </h1>
          <div className="mt-3 h-1 w-14 rounded bg-accent" />
          <p className="mt-4 font-display text-xl text-gray-200">
            Full Stack Developer
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
            Full Stack & AEM Developer specializing in React.js, Adobe
            Experience Manager (AEM), Node.js, and modern web technologies.
            Passionate about AI, building scalable applications, and crafting
            seamless digital experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600"
            >
              Hire Me
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M5 19 19 5M9 5h10v10" />
              </svg>
            </a>
            <a
              href="#projects"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Middle column (image) */}
        <div className="flex items-center justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div className="glow-orb absolute inset-0 z-0 scale-150 rounded-full" />
            <div className="relative flex h-full w-full items-center justify-center overflow-visible rounded-3xl border border-line bg-panel">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-accent/25 via-transparent to-transparent" />
              <img
                src={profilePhoto}
                alt="Your Photo"
                className="absolute left-1/2 top-[-75px] z-20 w-[240px] -translate-x-1/2 object-cover sm:w-[300px] sm:top-[-142px]"
              />
            </div>
          </div>
        </div>

        {/* Right column (about) */}
        <div id="about" className="rounded-2xl border border-line bg-panel p-6">
          <p className="font-display text-sm font-semibold text-accent">
            About me
          </p>
          <p className="mt-3 text-xs leading-relaxed text-gray-400">
            I am a Full Stack & AEM Developer with 2+ years of experience at
            Accenture, building enterprise digital experiences using Adobe
            Experience Manager (AEM). I have developed custom AEM components,
            responsive web applications, and worked on global multi-market
            projects. Skilled in React.js, Tailwind CSS, HTML, CSS, JavaScript,
            Node.js, and Express.js, I enjoy creating scalable and user-friendly
            solutions. Passionate about AI and modern web technologies, I
            continuously learn and build innovative applications while
            collaborating in Agile teams to deliver high-quality software.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsExperience() {
  const [tab, setTab] = useState("projects");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pb-20 lg:px-10">
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setTab("projects")}
          className={
            "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 " +
            (tab === "projects"
              ? "border border-accent text-accent"
              : "bg-panel2 text-gray-300 hover:text-white")
          }
        >
          <i className="ti ti-briefcase" /> Projects
        </button>
        <button
          onClick={() => setTab("experience")}
          id="experience"
          className={
            "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 " +
            (tab === "experience"
              ? "border border-accent text-accent"
              : "bg-panel2 text-gray-300 hover:text-white")
          }
        >
          <i className="ti ti-chart-line" /> Experience
        </button>
      </div>

      <div key={tab} className="mt-10 animate-[fadein_.35s_ease]">
        {tab === "projects" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="relative rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-accent overflow-hidden"
              >
                {p.wip && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-yellow-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
                    Work in Progress
                  </span>
                )}
                <div className="aspect-video w-full overflow-hidden bg-panel2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-stretch transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-sm font-semibold text-white">
                    {p.name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line px-2 py-0.5 text-[10px] text-gray-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 fill-current"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                    </svg>
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block"></div>
            <div className="space-y-6">
              {EXPERIENCE.map((exp) => {
                const colClass =
                  exp.side === "left" ? "md:col-start-1" : "md:col-start-2";
                return (
                  <div
                    key={exp.role + exp.period}
                    className="relative grid gap-4 md:grid-cols-2 md:gap-10"
                  >
                    <div className={colClass}>
                      <div className="rounded-2xl border border-line bg-panel p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-panel2 text-accent">
                            <i className={"ti " + exp.icon}></i>
                          </div>
                          <div>
                            <p className="text-[11px] text-accent">
                              {exp.period}
                            </p>
                            <p className="text-sm font-medium text-white">
                              {exp.role}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-xs font-medium text-accent">
                          {exp.org}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-gray-400">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    success: true,
    title: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setPopup({
        show: true,
        success: true,
        title: "Your message has been sent successfully.",
        message: "Aravind will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setPopup({
        show: true,
        success: false,
        title: "Failed to send message.",
        message: "Please try again.",
      });
    }

    setLoading(false);
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20 lg:px-10">
      <div className="grid items-center gap-8 sm:gap-10 rounded-2xl border border-line bg-panel p-5 sm:p-8 lg:grid-cols-2 lg:p-10">
        <div>
          <p className="text-sm font-medium text-accent">Get in touch</p>
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            Let's work together
          </h2>
          <p className="mt-3 max-w-sm text-sm text-gray-400">
            Have a project in mind or a role to discuss? I'd like to hear about
            it.
          </p>
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-white break-words">
                  Naraharashettysaiaravind@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Phone className="h-5 w-5 text-accent" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium text-white break-words">+91 7331121108</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <MapPin className="h-5 w-5 text-accent" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium text-white break-words">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <BriefcaseBusiness className="h-5 w-5 text-accent" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">Availability</p>
                <p className="text-sm font-medium text-green-400">
                  Available for Full-Time
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full min-w-0 rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-500 focus:border-accent"
            />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full min-w-0 rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-500 focus:border-accent"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full min-w-0 rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-500 focus:border-accent"
          />
          <textarea
            rows={4}
            placeholder="Your message"
            value={formData.message}
            name="message"
            onChange={handleChange}
            className="w-full min-w-0 resize-none rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-500 focus:border-accent"
          />
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
          >
            {loading ? "Sending..." : "Send Message"}

            {!loading && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M2 21 23 12 2 3v7l15 2-15 2v7Z" />
              </svg>
            )}
          </button>
        </form>
      </div>
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-line bg-panel p-6 sm:p-8 text-center shadow-2xl max-h-[90vh] overflow-y-auto">
            <div
              className={`mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full ${
                popup.success ? "bg-green-500/20" : "bg-red-500/20"
              }`}
            >
              {popup.success ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              )}
            </div>

            <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-white break-words">
              {popup.success ? "Success!" : "Oops!"}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400 break-words">
              {popup.title && <span>{popup.title}</span>}
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400 break-words">
              {popup.message && <span>{popup.message}</span>}
            </p>

            <button
              onClick={() =>
                setPopup({
                  ...popup,
                  show: false,
                })
              }
              className="mt-6 sm:mt-8 w-full rounded-xl bg-accent py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 lg:px-10">
        <div className="flex gap-4">
          {SOCIALS.map((s) => (
            <SocialLink key={s.name} {...s} />
          ))}
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Sai Aravind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg font-body text-white">
      <Nav />
      <main>
        <Hero />
        <ProjectsExperience />
        <Contact />
      </main>
      <Footer />

      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </a>
    </div>
  );
}
