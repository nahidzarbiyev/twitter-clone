import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function SideBar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col  ">
      <div className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col z-[2] fixed">
        {" "}
        <Logo />
        <Menu />
        <Account />
      </div>
    </aside>
  );
}
