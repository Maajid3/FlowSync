import UserImage from "../assets/userImage.png";
import StarIcon from "../assets/star.svg";

export default function Reviews() {
  return (
    <div className="bg-[#BFAFF2] text-[#2B2B2B] w-full flex flex-col justify-center gap-8 sm:gap-12 py-10 sm:py-16 lg:py-20 px-5 sm:px-10 lg:px-24 rounded-xl md:rounded-2xl">
      <div className="flex justify-center items-center w-full">
        <span className="font-semibold text-[22px] sm:text-[30px] lg:text-[36px] leading-[1.45]">
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </span>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden">
          <img
            className="w-full h-full rounded-full border-2 border-[#BCBCBC] object-cover"
            src={UserImage}
            alt="User Image"
          />
        </div>
        <div>
          <span className="text-[16px] sm:text-[18px]">Johnny Owens</span>
          <div className="flex gap-1.25">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  src={StarIcon}
                  alt="User Ratings"
                  className="w-4 h-4 sm:w-auto sm:h-auto"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
