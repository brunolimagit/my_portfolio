import {BrainIcon, ListIcon} from "@phosphor-icons/react";


export default function Header(){
    return(
        <header className="flex text-[#950101]">
            <div className="border-1">
              <BrainIcon size={32} color="#ff0000" />
              <p>Bruno Dev</p>
              <ListIcon size={32} color="#ff0000" />
            </div>
            
        </header>
        
    )
}