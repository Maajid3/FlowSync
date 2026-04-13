import card from "../assets/card.svg";
import payment from "../assets/payment.svg";
import wallet from "../assets/wallet.svg";

export const data = [
  {
    id: 1,
    icon: card,
    featureName: "Customizable card",
    details: "Custom your own card for your exact incomes and expenses needs.",
  },
  {
    id: 2,
    icon: payment,
    featureName: "No payment fee",
    details: "Transfer your payment all over the world with no payment fee.",
  },
  {
    id: 3,
    icon: wallet,
    featureName: "All in one place",
    details:
      "The right place to keep your credit and debit cards, boarding passes & more.  ",
  },
];

export default function FeatureDetails() {
  return (
    <>
      <div className="w-full py-14 sm:py-20 px-4 sm:px-8 md:px-20 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-20">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt="Company Partners List"
                className="w-auto h-16 sm:h-20 md:h-24"
              />
              <h2 className="mt-8 sm:mt-10 text-white text-[24px] sm:text-[30px] lg:text-[34px] font-semibold leading-tight">
                {item.featureName}
              </h2>
              <p className="mt-5 sm:mt-8 max-w-90 sm:max-w-105 lg:max-w-115 text-[#7b7b82] text-[18px] sm:text-[22px] lg:text-[26px] leading-[1.6]">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
