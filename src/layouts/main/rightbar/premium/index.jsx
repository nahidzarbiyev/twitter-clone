import Button from "@/components/button";

export default function Premium(){
    return(
        <section className=" bg-[color:var(--background-secondary)] mb-4  rounded-2xl border-[#16181c] py-3 px-4 flex flex-col items-start gap-2.5">

        <h6 className="text-xl font-extrabold leading-6">Premium&apos;a Abone ol</h6>
        <p className="leading-5 text-[15px] font-bold ">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
        <Button>Abone ol</Button>
        </section>
    )
}