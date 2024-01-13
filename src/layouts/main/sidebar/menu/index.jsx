import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "@/utils/constants/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "@/store/auth/hooks";
export default function Menu() {
  const account = useAccount();
  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu.map((menu, index) => (
        <>
          <NavLink
            to={typeof menu.path === "function" ? menu.path() : menu.path}
            key={index}
            className="py-1 block group"
          >
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full inline-flex  items-center gap-5  group-hover:bg-[color:var(--background-secondary)] transition-colors",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && (
                    <span className="absolute -top-1 -right-1.5 flex w-[18px] h-[18px] border border-[color:var(--background-primary)] text-[color:var(--background-primary)] rounded-full text-[11px] bg-[color:var(--color-primary)]  justify-center items-center ">
                      {menu?.notification}
                    </span>
                  )}
                  {!isActive && menu.icon.passive}
                  {isActive && menu.icon.active}
                </div>

                <div className="pr-4 text-xl">{menu.title}</div>
              </div>
            )}
          </NavLink>
        </>
      ))}

      <More />
      <New />
    </nav>
  );
}
