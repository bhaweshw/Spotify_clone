import { stroketheme } from "./Navbar.jsx";
import { useContext } from "react";

function SearchBar() {

    const iconTheme = useContext(stroketheme)

    return (
        <div className="w-[85%] h-[80%] bg-(--primaryColor) rounded-3xl flex items-center justify-between p-1.5">
            <div className="w-10% h-full mx-2">
                <button className="relative w-10% h-full flex items-center">
                    <svg className="absolute" viewBox="0 0 24 24" width={24} height={24} fill={iconTheme}>
                        <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center w-[70%]">
                <input className="-ml-2 placeholder:text-[#ffffffb1] w-[63%] " type="text" placeholder="What do you want to play?" />
                <span className="inline-block ml-2 rounded-[3px] border border-solid border-[gray] text-[#b4b4b4] font-medium px-1.5 mx-0.5 invisible " >Ctrl</span>
                <span className="inline-block rounded-[3px] border border-solid border-[gray] text-[#b4b4b4] font-medium px-1.5 mx-0.5 invisible ">K</span>
            </div>


            <div className="w-[6%] h-full mr-3">
                <button className="relative w-full h-full flex items-center ">
                    <svg className="absolute  " viewBox="0 0 24 24" fill={iconTheme}  width={24} height={24}>
                        <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"></path><path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path></svg>
                </button>
            </div>
        </div>)
}

export default SearchBar