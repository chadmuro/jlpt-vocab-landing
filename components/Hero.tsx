import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">JLPT Vocabulary Study</h1> for{" "}
          <h2 className="inline">
            <span className="inline text-[#4169E1]">N1</span>,{" "}
            <span className="inline text-[#DC143C]">N2</span>,{" "}
            <span className="inline text-[#228B22]">N3</span>, and{" "}
            <span className="inline text-[#DAA520]">N4</span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          All the vocabulary you need to know in one app to ace the exam.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a className="w-full" rel="noreferrer noopener" href="#apps">
            <Button className="w-full md:w-1/3">Get started</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/chadmuro/jlpt-vocab.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">{/* <HeroCards /> */}</div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
