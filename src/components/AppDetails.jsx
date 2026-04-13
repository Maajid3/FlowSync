import uiShowcase from "../assets/uiShowcase.svg";
import FeatureDetails from "./FeatureDetails";

export default function AppDetails() {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center gap-14 md:gap-20 lg:gap-25">
        <div className="w-full min-h-55 sm:min-h-80 md:min-h-115 lg:h-[80vh] flex justify-center items-end bg-amber-50 rounded-xl md:rounded-2xl overflow-hidden">
          <img
            className="w-full h-auto object-contain object-bottom"
            src={uiShowcase}
            alt="App displaying User Interface"
          />
        </div>
        <FeatureDetails />
      </section>
    </>
  );
}
