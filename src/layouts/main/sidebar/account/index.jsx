import { useAccount } from "@/store/auth/hooks";
import { Popover, Transition } from "@headlessui/react";
import PopoverComponent from "./popover";
export default function Account() {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className={"outline-none relative"}>
        <Popover.Button
          className={
            "my-3 p-3 rounded-full transition-colors hover:bg-[#eff3f41a] w-full text-left flex items-center"
          }
        >
          <img src={account.avatar} alt="" className="w-10 h-10 rounded-full" />
          <div className="mx-3 text-[15px] flex flex-col ">
            <h6 className=" mx-3 font-bold leading-[20px]">
              {account?.fullname}
            </h6>
            <div className="mx-3 text-[15px] text-[color:var(--color-base-secondary)]">
              @{account?.username}
            </div>
          </div>
          <svg
            className="ml-auto"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </Popover.Button>
        <Transition
          className={""}
          enter="transition duration-200 ease-out"
          enterFrom="transform   opacity-0"
          enterTo="transform   opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform   opacity-100"
          leaveTo="transform    opacity-0"
        >
          <Popover.Panel
            className={
              " absolute bottom-[66px] w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl"
            }
          >
            {({ close }) => <PopoverComponent close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
