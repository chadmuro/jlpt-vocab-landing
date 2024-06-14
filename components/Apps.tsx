import Image from "next/image";

const appsInfo = [
  {
    id: "n1",
    title: "JLPT N1 Vocabulary",
    src: "/n1.png",
    color: "#4169E1",
    url: "https://apps.apple.com/us/app/jlpt-n1-vocab/id6503351431",
  },
  {
    id: "n2",
    title: "JLPT N2 Vocabulary",
    src: "/n2.png",
    color: "#DC143C",
    reverse: true,
    url: "https://apps.apple.com/us/app/jlpt-n2-vocab/id6503351523",
  },
  {
    id: "n3",
    title: "JLPT N3 Vocabulary",
    src: "/n3.png",
    color: "#228B22",
    url: "https://apps.apple.com/us/app/jlpt-n3-vocab/id6503253915",
  },
  {
    id: "n4",
    title: "JLPT N4 Vocabulary",
    src: "/n4.png",
    color: "#DAA520",
    reverse: true,
    url: "https://apps.apple.com/us/app/jlpt-n4-vocab/id6503353013",
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
              className={`text-center lg:text-start space-y-6 flex flex-col items-center ${
                app.reverse ? "lg:order-2" : ""
              }`}
            >
              <h2 className="text-4xl font-bold">{app.title}</h2>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/app_store_black.svg"
                  alt="Download on the app store"
                  width={250}
                  height={250}
                />
              </a>
            </div>
            <Image src={app.src} alt={app.title} width={600} height={600} />
          </section>
        );
      })}
    </div>
  );
};
