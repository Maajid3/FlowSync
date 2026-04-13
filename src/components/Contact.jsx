import WalletCard from "../assets/walletcard.png";
import useTheme from "../context/useTheme";
import GetStartBtn from "./GetStartBtn";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <main className="w-full min-h-[75vh] px-4 sm:px-8 md:px-16 py-14 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
        <section className="w-full lg:w-[42%] flex flex-col items-start gap-8">
          <h1 className="text-[40px] sm:text-[52px] md:text-[64px] font-semibold leading-[1.15] ">
            Questions?
            <br />
            Let's talk
          </h1>
          <p className={`"text-[18px] md:text-[20px] leading-[1.8] ${theme === "dark" ? "text-white/40" : "text-[#969696]"}  max-w-110"`}>
            Contact us through our 24/7 live chat.
            <br />
            We're always happy to help!
          </p>
          <GetStartBtn />
        </section>
        <section className="w-full lg:w-[58%] flex justify-center lg:justify-end">
          <img
            src={WalletCard}
            alt="Wallet card illustration"
            className="w-full max-w-190 h-auto object-contain"
          />
        </section>
      </main>
    </>
  );
}
