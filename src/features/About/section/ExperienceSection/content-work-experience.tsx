import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import expressIcon from "@icons/express.svg";
import mongodbIcon from "@icons/mongodb.svg";
import Image from "next/image";
import unityIcon from "@icons/unity.svg";
import csharpIcon from "@icons/csharp.svg";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "Backend Developer",
      url: "https://www.roffon.com", // Replace with the actual URL if available
      company: "Roffon",
      date: "Jan 2023 - Present",
      description: (
        <p>
          As a Backend Developer at Roffon, I am responsible for designing and
          developing server-side applications that power various services. My
          tasks include creating robust REST APIs, managing database
          integrations, and optimizing server performance. I am actively involved
          in ensuring the security and scalability of applications and
          implementing efficient data processing workflows.
        </p>
      ),
      techs: [
        {
          name: "NodeJS",
          icon: nodejsIcon,
        },
        {
          name: "Express",
          icon: expressIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
      ],
    },
    {
      title: "Freelance Indie Game Developer",
      url: "", // Replace with the actual URL if available
      company: "Self-Employed",
      date: "Jun 2021 - Dec 2022",
      description: (
        <p>
          As a Freelance Indie Game Developer, I independently designed and
          developed engaging games using Unity and C#. I utilized advanced
          software architecture patterns, including Domain-Driven Design (DDD),
          to create scalable and maintainable codebases. My responsibilities
          included developing core game mechanics, optimizing performance, and
          integrating assets to create a cohesive and immersive player
          experience. I also collaborated with other freelancers, including
          designers and sound engineers, to bring unique and creative game
          concepts to life.
        </p>
      ),
      techs: [
        {
          name: "Unity",
          icon: unityIcon,
        },
        {
          name: "C#",
          icon: csharpIcon,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md bg-accent/10 p-1"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.icon}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};