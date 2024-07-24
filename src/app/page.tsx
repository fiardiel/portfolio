import { Button } from "@nextui-org/react";
import HomeTypeWriter from "./components/HomeTypeWriter";
import { Image } from "@nextui-org/image"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6">
      <div className="flex flex-col justify-center md:flex md:items-center w-full min-h-screen lg:w-[1024px] px-0 md:-translate-y-20 lg:px-6">
        <div className="md:grid md:grid-cols-[auto,1fr] md:auto-cols-min md:gap-32 flex flex-col-reverse items-center">
          <div className="flex flex-col items-center md:items-start w-full md:w-full">
            <HomeTypeWriter />
            <p className="text-md font-light text-gray-400 md:text-start text-center mb-6">
              A Full-stack Developer specializing in Next.js and
              Django Rest Framework / Springboot. Currently a Web
              Developer Intern at PT. Samakta Mitra
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button as={Link} href={`/profile`} color="primary" variant="flat" className="hover:bg-primary hover:text-white"> About me <MdArrowOutward/> </Button>
              <Button as={Link} href={`/projects`} color="primary" variant="flat" className="hover:bg-primary hover:text-white"> My Projects <MdArrowOutward/>  </Button>
              <Button as={Link} href={`/experiences`} color="primary" variant="flat" className="hover:bg-primary hover:text-white"> Experiences <MdArrowOutward/>  </Button>
            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-10 md:mb-0 opacity-70 transition hover:opacity-80">
            <Image
              src="/images/rafibulet-modified.png"
              alt="rafi ardiel"
              className="rounded-full"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
