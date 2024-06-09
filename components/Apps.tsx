import Image from "next/image";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const appsInfo = [
  { id: "n1", title: "JLPT N1", src: "/n1.png", color: "#4169E1" },
  {
    id: "n2",
    title: "JLPT N2",
    src: "/n2.png",
    color: "#DC143C",
    reverse: true,
  },
  { id: "n3", title: "JLPT N3", src: "/n3.png", color: "#228B22" },
  {
    id: "n4",
    title: "JLPT N4",
    src: "/n4.png",
    color: "#DAA520",
    reverse: true,
  },
];

export const Apps = () => {
  return (
    <div id="apps">
      {appsInfo.map((app) => {
        return (
          <section
            key={app.id}
            className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
            style={{ background: app.color }}
          >
            <div
              className={`text-center lg:text-start space-y-6 ${
                app.reverse ? "order-2" : ""
              }`}
            >
              {app.title}
            </div>
            <Image src={app.src} alt="N1" width={600} height={600} />
          </section>
        );
      })}
    </div>
  );
};
