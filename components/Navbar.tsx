import { useRouter } from "next/router";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[10vh] border-b border-white/[.13] border-solid flex justify-between items-center fixed z-20 bg-primary">
      <img
        src="./logo.png"
        alt="Logo"
        className="ml-4 cursor-pointer w-14 h-14"
        onClick={async () => {
          router.pathname !== "/" && (await router.push("/"));
          document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <div className="flex items-center justify-center gap-8">
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            document.body.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Home
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            let element = document.getElementById("events");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Events
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            let element = document.getElementById("themes");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Themes
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            let element = document.getElementById("prizes");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Prizes
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          About Us
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            let element = document.getElementById("sponsors");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Sponsors
        </p>
          <Link href="/winners">
          <p
            className="hidden text-white cursor-pointer select-none sm:block"
          >
            Winners
          </p>
        </Link>
        <div
          // onClick={() => { window.open("https://tally.so/r/wzYdvZ", "_blank") }}
          className="hidden sm:block px-6 py-2 mr-8 rounded-full cursor-pointer sm:mr-12 bg-gradient-to-b from-gradientTop to-gradientBottom"
        >
          Winners Announced!
        </div>
      </div>
    </div>
  );
};

export default Navbar;
