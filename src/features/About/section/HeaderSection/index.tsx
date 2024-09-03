import type { FC } from "react";
import Image from "next/image";
import paulImage from "@images/paul.jpeg"; // Replace with the actual image path

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
            Hello! My name is Paul Bolos, a Computer Science student currently
            studying at the West University of Timișoara (UVT). I have a strong
            passion and experience in backend development, specializing in
            building robust server-side applications using{" "}
            <span className="text-accent">Node.js</span> and{" "}
            <span className="text-accent">Express</span>.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As a dedicated backend developer, I am skilled in database
            management, server-side logic, and API development. I thrive on
            solving complex problems and optimizing systems for performance and
            scalability.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            I am always eager to learn and grow in my field, continuously
            exploring new technologies and methodologies. I believe that hands-on
            projects and staying up-to-date with industry trends are essential
            for professional development.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            In addition to backend development, I have a keen interest in game
            development, particularly using Unity and C#. I enjoy experimenting
            with advanced concepts like Domain-Driven Design (DDD) to create
            engaging and structured digital experiences.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={paulImage}
            alt="Paul Bolos"
            height={1000}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;