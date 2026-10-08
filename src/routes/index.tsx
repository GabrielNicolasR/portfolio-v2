import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/layout/SiteHeader";
import { SiteFooter } from "@/components/portfolio/layout/SiteFooter";
import { Hero } from "@/components/portfolio/sections/Hero";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Education } from "@/components/portfolio/sections/Education";
import { Contact } from "@/components/portfolio/sections/Contact";

const TITLE = "Gabriel Nicolas — Software Developer & AI Engineer";
const DESCRIPTION =
  "Software Developer focused on AI Engineering: Python, Generative AI, RAG, LangChain and .NET. Experience building production systems in the capital markets sector.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: "/gabriel-nicolas.png" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
