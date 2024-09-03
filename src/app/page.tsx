import type { FC } from "react";
import Home from "@/features/Home";

export const metadata = {
  title: "Bolos Paul",
  description:
    "Paul Bolos is a Backend Software Engineer specializing in developing robust and scalable server-side applications, focusing on creating seamless and efficient digital experiences..",
};

const Homepage: FC = () => {
  return <Home />;
};

export default Homepage;
