import Chart from "../assets/chart.svg";
import Branding from "./Branding";
import GetStartBtn from "./GetStartBtn";

export default function LandingPage() {
  return (
    <>
      <section className="mt-8 w-full min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_auto] items-center gap-y-10 lg:gap-x-16 xl:gap-x-24 py-10 sm:py-14 lg:py-16">
        <div className="flex flex-col justify-center items-start gap-4 text-left">
          <h1 className="font-semibold text-[40px] sm:text-[52px] lg:text-[60px] leading-tight">
            SaaS Landing
          </h1>
          <h1 className="font-semibold text-[40px] sm:text-[52px] lg:text-[60px] leading-tight">
            Page Template
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#ffffff4e] max-w-120">
            This is a template Figma file, turned into code
          </p>
          <p className="text-[16px] sm:text-[18px] text-[#ffffff4e] max-w-120">
            using Anima. Learn more at AnimaApp.com
          </p>
          <GetStartBtn />
        </div>
        <section className="w-full lg:w-[85%] max-w-190 mx-auto flex justify-center items-center bg-[#333333] rounded-xl sm:rounded-2xl p-3 sm:p-6">
          <img
            className="w-full h-auto object-contain"
            src={Chart}
            alt="Chart representing  Monthly plane, frequency graph, weekly plan "
          />
        </section>
        <Branding />
      </section>
    </>
  );
}
