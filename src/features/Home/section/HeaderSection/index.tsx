import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12">
      <p
        className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
        data-aos="fade-up"
      >
        Hi, my name is
      </p>
      <h1
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        Paul Bolos.
      </h1>
      <p
        className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
        data-aos="zoom-in-up"
      >
        I'm a Backend Software Engineer with experience in building scalable and
        efficient server-side applications. I specialize in Node.js, Express,
        and MongoDB, and I'm passionate about learning new technologies and
        improving system performance.
      </p>
      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://github.com/BolosPaul" // Replace with Paul's actual GitHub profile link
          target="_blank"
          rel="noreferrer"
        >
          <button>Visit my GitHub Profile!</button>
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;