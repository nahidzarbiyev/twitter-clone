import { setModal } from "@/store/modal/actions";
import { Popover, Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function More() {
  return (
    <Popover className={"relative outline-none"}>
      <Popover.Button className="py-[3px] block group outline-none">
        <div className="p-3 rounded-full   inline-flex  items-center gap-5  group-hover:bg-[color:var(--background-secondary)] transition-colors text-xl ">
          <svg viewBox="0 0 24 24" fill="currentColor" width={26.25} height={26.25}>
            <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
          </svg>
          <div className="pr-4 text-xl">Daha fazla</div>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] rounded-xl   absolute bottom-0 left-0 overflow-hidden bg-[color:var(--background-primary)] shadow-box outline-none">
        <button className="px-4 h-14 w-full    inline-flex  items-center gap-5 hover:bg-[color:var(--background-secondary)] transition-colors text-xl ">
          <svg viewBox="0 0 24 24" fill="currentColor" width={26.25} height={26.25}>
            <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
            ;
          </svg>
          <div className="pr-4 text-xl font-bold">Bağlan</div>
        </button>
        <button className="px-4 h-14 w-full    inline-flex  items-center gap-5 hover:bg-[color:var(--background-secondary)] transition-colors text-xl ">
          <svg viewBox="0 0 24 24" fill="currentColor" width={26.25} height={26.25}>
            <path d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" />
            ;
          </svg>
          <div className="pr-4 text-xl font-bold">Para kazanma</div>
        </button>

    <div className="h-0.5 bg-[#2f3336] my-0.5 w-[89%] mx-auto"/>

        <Disclosure>
         {({open})=>(
          <>
           <Disclosure.Button className="h-[52px] px-4 font-bold flex justify-between hover:bg-[color:var(--background-secondary)] transition-colors  items-center w-full">
            İçerik üreticisi Stüdyosu
            <svg
              viewBox="0 0 24 24"
              fill="currentColor" width={20} height={20}
              className={classNames({
                'rotate-180 text-[color:var(--color-primary)]':open
              })}
            >
                <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="   hover:bg-[color:var(--background-secondary)] transition-colors">
          <Link to={'/'} className="h-11 px-3 flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
            
          </svg>
          istatistik
          </Link>
          </Disclosure.Panel>
          </>
         )}
         
        </Disclosure>
        <Disclosure>
         {({open})=>(
          <>
           <Disclosure.Button className="h-[52px]  px-4 font-bold flex justify-between hover:bg-[#eff3f41a] transition-colors  items-center w-full">
            profesyonel Araçlar
            <svg
              viewBox="0 0 24 24"
              fill="currentColor" width={20} height={20}
              className={classNames({
                'rotate-180 text-[color:var(--color-primary)]':open
              })}
            >
                <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="   hover:bg-[color:var(--background-secondary)] transition-colors">

          <Link to={'/'} className="h-11 px-3 flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z" />
            
          </svg>
          Reklamlar
          </Link>
          </Disclosure.Panel>
          </>
         )}
        </Disclosure>
        <Disclosure>
          {({open})=>(
            <>
            <Disclosure.Button className="h-[52px] px-4 font-bold flex justify-between hover:bg-[color:var(--background-secondary)] transition-colors    items-center w-full">
            Ayarlar ve destek
            <svg
              viewBox="0 0 24 24"
              fill="currentColor" width={20} height={20}
              className={classNames({
                'rotate-180 text-[color:var(--color-primary)]':open
              })}
            >
                <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="   hover:bg-[color:var(--background-secondary)] transition-colors">

          <Link to={'/'} className="h-11 px-3 flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z" />
            
          </svg>
        Ayarlar ve Gizlilik
          </Link>
          </Disclosure.Panel>
          <Disclosure.Panel className="   hover:bg-[color:var(--background-secondary)] transition-colors">

          <Link to={'/'} className="h-11 px-3 flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z" />
            
          </svg>
          Yardım Merkezi
          </Link>
          </Disclosure.Panel>
          <Disclosure.Panel className=" hover:bg-[color:var(--background-secondary)] transition-colors">

          <button
          onClick={()=>setModal('appearance')}
          className="h-11 px-3 w-full flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M14 12c0-1.1-.9-2-2-2-1.11 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2z" />
            
          </svg>
          Displey
          </button>
          </Disclosure.Panel>
          <Disclosure.Panel className="  hover:bg-[color:var(--background-secondary)] transition-colors">

          <Link to={'/'} className="h-11 px-3 flex gap-3 text-[15px] font-medium   items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" width={18.75} height={18.75}>
            <path d="M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z" />
            
          </svg>
          Kısayollar
          </Link>
          </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
}
