import Image from "next/image";

const appsInfo = [
  { id: "n1", title: "JLPT N1 Vocabulary", src: "/n1.png", color: "#4169E1" },
  {
    id: "n2",
    title: "JLPT N2 Vocabulary",
    src: "/n2.png",
    color: "#DC143C",
    reverse: true,
  },
  { id: "n3", title: "JLPT N3 Vocabulary", src: "/n3.png", color: "#228B22" },
  {
    id: "n4",
    title: "JLPT N4 Vocabulary",
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
                app.reverse ? "lg:order-2" : ""
              }`}
            >
              <h2 className="text-4xl font-bold">{app.title}</h2>
              <button>
                <Image
                  src="/app_store_black.svg"
                  alt="Download on the app store"
                  width={250}
                  height={250}
                />
              </button>
            </div>
            <Image src={app.src} alt={app.title} width={600} height={600} />
          </section>
        );
      })}
    </div>
  );
};
