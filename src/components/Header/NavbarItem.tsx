import { Popover, Transition } from "@headlessui/react";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import { PathName } from "routers/types";

export interface MainNav2Proops {
  contenttext?: string,
  link?:string
}


const NavbarItem: FC<MainNav2Proops>=({contenttext="",link=""})=> {
  return (
    <div className="DropdownTravelers">
       <Link
        to={link}
        // target={targetBlank ? "_blank" : undefined}
        // className={`${CLASSES} `}
        // onClick={onClick}
        rel="noopener noreferrer"
      >
         <div className={` inline-flex items-center `} role="button">
                <span>{contenttext}</span>
                
              </div>
      </Link>
    </div>
  );
}

export default NavbarItem;
