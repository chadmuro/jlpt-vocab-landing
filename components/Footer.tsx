import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-8 text-center">
        <h3>
          &copy; 2024 Made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://chadmuro.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Chad Murobayashi
          </a>
        </h3>
      </section>
    </footer>
  );
};
