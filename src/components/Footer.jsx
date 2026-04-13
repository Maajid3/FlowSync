const data = [
  {
    id: 1,
    label: "© Wallet 2022",
  },
  {
    id: 2,
    label: "Privacy policy",
  },
  {
    id: 3,
    label: "Cookies policy",
  },
  {
    id: 4,
    label: "Terms of use",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-white/12 py-10 sm:py-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-8 sm:gap-11">
          <h1 className="text-[24px] font-semibold">Wallet</h1>
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3 cursor-pointer">
            {data.map((item) => (
              <span
                key={item.id}
                className="font-semibold text-[18px] lg:text-[15px] whitespace-nowrap"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <form className="w-full lg:max-w-190 flex flex-col gap-5">
          <label htmlFor="email-address" className="text-[20px] sm:text-[24px]">
            <span>Updates right to your Inbox</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <input
              className="bg-[#333333] h-14 sm:h-16 w-full sm:flex-1 rounded-2xl sm:rounded-[20px] px-5 sm:px-7 text-[20px] sm:text-[24px] text-white placeholder:text-white/35 outline-none"
              placeholder="Email Address"
              type="email"
              id="email-address"
            />
            <button className="h-14 sm:h-16 w-full sm:w-52 md:w-62 rounded-2xl sm:rounded-[20px] bg-[#B7A6F6] text-[#333333] text-[20px] sm:text-[24px] font-medium cursor-pointer">
              Send
            </button>
          </div>
        </form>
      </footer>
    </>
  );
}
