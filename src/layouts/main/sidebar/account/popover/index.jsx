import { setCurrentAccount } from "@/store/auth/actions";
import { useAccount, useAccounts } from "@/store/auth/hooks";
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
export default function PopoverComponent({ close }) {
  const accounts = useAccounts();
  const currentAccount = useAccount();
  return (
    <div className="  py-2">
      {accounts.map((account) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => {
            setCurrentAccount(account);
            close();
          }}
          className={classNames(
            "py-3 px-4  my-3 p-3  w-full text-left flex items-center ",
            {
              "transition-colors hover:bg-[#eff3f41a]":
                currentAccount.id !== account.id,
            }
          )}
          key={account.id}
        >
          <img src={account.avatar} alt="" className="w-10 h-10 rounded-full" />
          <div className="mx-3 text-[15px] flex-1 ">
            <h6 className="  font-bold leading-[20px]">{account?.fullname}</h6>
            <div className=" text-[15px] text-[color:var(--color-base-secondary)]">
              @{account?.username}
            </div>
          </div>
          {currentAccount.id === account.id && (
            <svg
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
              fill="#00ba7c"
              className="mr-2 ml-3"
            >
              <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
            </svg>
          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3 " />
      <button className="py-3 px-4 font-bold w-full leading-[20px] flex text-left transition-colors hover:bg-[#eff3f41a]">
        Var olan hesabı ekle
      </button>
      <button className="py-3 px-4 font-bold w-full  leading-[20px] flex text-left transition-colors hover:bg-[#eff3f41a]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 font-bold w-full  leading-[20px] flex text-left transition-colors hover:bg-[#eff3f41a]">
        <div className="max-w-[228px] ">
          {" "}
          @{currentAccount.username} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
}
