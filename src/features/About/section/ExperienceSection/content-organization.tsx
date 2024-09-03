export const ContentOrganization = () => {
  const datas = [
    {
      title: "Lead Backend Developer",
      url: "https://www.roffon.com", // Replace with the actual URL if available
      organization: "Roffon",
      date: "Jan 2023 - Present",
      description: (
        <>
          <li>
            As the Lead Backend Developer at Roffon, I am responsible for
            designing, building, and maintaining scalable server-side
            applications. My role involves collaborating with cross-functional
            teams to deliver high-quality software solutions that meet client
            needs.
          </li>
          <li>
            I have led the development of several key projects, optimizing
            database queries and implementing robust API endpoints to ensure
            efficient data handling and security.
          </li>
          <li>
            One of the highlights of my role was successfully migrating the
            company’s legacy systems to a modern microservices architecture,
            which improved performance and scalability significantly.
          </li>
        </>
      ),
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
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};