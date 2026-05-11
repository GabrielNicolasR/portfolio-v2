import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { AIJourney } from "@/components/portfolio/AIJourney";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Nicolas — Software Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Gabriel Nicolas — Brazilian Software Developer transitioning into AI Engineering. Python, Generative AI, RAG, LangChain and modern application development.",
      },
      { property: "og:title", content: "Gabriel Nicolas — Software Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Software Developer | Python | Generative AI | RAG | LangChain | AI Engineering in Progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative dark bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AIJourney />
      <Contact />
    </main>
  );
}
