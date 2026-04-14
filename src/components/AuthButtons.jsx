import useTheme from "../context/useTheme";

export default function AuthButtons() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-5 mr-3 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-400"}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
          ) : (
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
              clipRule="evenodd"
            />
          )}
        </svg>

        <a
          href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-saas&utm_medium=figma-samples"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-3 sm:gap-7.5"
        >
          <button className="hover:text-blue-400 cursor-pointer text-sm sm:text-base whitespace-nowrap border border-[#2B2B2B] px-3 py-1 rounded-2xl">
            Sign up
          </button>
          <button className="bg-[#BFAFF2] rounded-xl sm:rounded-[15px] px-5 sm:px-10 lg:px-15.25 py-2 text-[#333333] text-sm sm:text-base cursor-pointer hover:bg-[#a78dff] whitespace-nowrap">
            Login
          </button>
        </a>
      </div>
    </>
  );
}
