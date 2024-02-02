import { ProjectCard } from "@components/ProjectCard";

const PROJECTS = [
  {
    image: "/projects/instaverse.png",
    title: "Instaverse",
    body: `Experience an engaging platform that empowers you to create an account, showcase your mesmerizing photographs, and interact with posts from others.`,
    links: {
      GitHub: "https://github.com/dturin1997/instaverse-client",
      Demo: "https://instaverse.djturin.dev/",
    },
  },
  {
    image: "/projects/mern-ecom.png",
    title: "Best Online Shop",
    body: `A comprehensive ecommerce web application, developed utilizing the robust and scalable MERN Stack - MongoDB for a flexible NoSQL database, Express.js for efficient server-side operations, React.js for dynamic front-end interfaces, and Node.js for a powerful JavaScript runtime environment.`,
    links: {
      GitHub: "https://github.com/dturin1997/mern_dt",
      Demo: "https://mern.djturin.dev/",
    },
  },
];

export default function Projects() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-107.625px)] lg:min-h-[calc(100vh-123.625px)] py-7">
      <section className="flex flex-wrap justify-around">
        {PROJECTS.map((project, index) => (
          <div key={index} className="py-7">
            <ProjectCard
              image={project.image}
              title={project.title}
              body={project.body}
              links={project.links}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
