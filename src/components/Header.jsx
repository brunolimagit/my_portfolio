import { BrainIcon, ListIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="mx-10 my-5">
      <div className="flex text-[#ff0000] font-bold gap-3 bg-white/10 backdrop-blur-md shadow-lg p-2 rounded-[30px] justify-center items-center w-[200px]">
        <BrainIcon size={28} className="cursor-pointer" />
        <p>Bruno Dev</p>
        <ListIcon size={28} className="cursor-pointer" />
      </div>
    </header>
  );
}
