export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Computer Science
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://www.uvt.ro"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            West University of Timișoara (UVT)
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">2024 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Computer Science program at UVT to deepen my
          understanding of software development and to build a strong foundation
          in backend technologies.
        </li>
        <li>
          Completed 12 years of schooling with a focus on Mathematics and
          Computer Science (Mate-Info) at{" "}
          <a
            href="https://liceulgermanoradea.ro"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            Liceul Teoretic German, Oradea
          </a>
          , where I developed a strong analytical background and a passion for
          solving complex problems.
        </li>
        <li>
          Since starting my studies, I've been particularly interested in
          backend development, focusing on server-side optimization, database
          management, and scalable system architecture. I love building reliable
          and efficient systems that power modern digital experiences.
        </li>
      </ul>
    </div>
  );
};