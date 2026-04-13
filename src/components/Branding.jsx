import branding from "../assets/branding.svg";

export default function Branding() {
  return (
    <div className="bg-[#2B2B2B] col-span-1 lg:col-span-2 w-full py-6 sm:py-8 flex justify-center border-t border-b border-white/12">
      <img
        className="w-full max-w-250 h-auto object-contain"
        src={branding}
        alt="Company Partners List"
      />
    </div>
  );
}
