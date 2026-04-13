import { useEffect, useState } from "react";
import AuthButtons from "./AuthButtons";

export default function Header() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScroll;

      if (current < 10) {
        setShow(true);
      } else {
        setShow(!goingDown);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 
                              ${show ? "translate-y-0 " : "-translate-y-full"}
                             min-h-20 flex justify-between items-center py-5 sm:py-6 px-4 sm:px-8 lg:px-12.5 cursor-pointer`}
      >
        <h1 className="text-xl sm:text-2xl font-semibold">Wallet</h1>
        <AuthButtons />
      </header>
    </>
  );
}
