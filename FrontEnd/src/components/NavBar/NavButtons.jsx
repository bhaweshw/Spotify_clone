import { useContext, useState, useEffect } from "react";
import { stroketheme } from "./Navbar.jsx";

function NavButtons() {

    const icontheme = useContext(stroketheme);
    const [showTool1,setShowTool1] = useState(false)
    const [delayed1, setDelayed1] = useState(false)

    const [showTool2,setShowTool2] = useState(false)
    const [delayed2, setDelayed2] = useState(false)

    const [showTool3,setShowTool3] = useState(false)
    const [delayed3, setDelayed3] = useState(false)

    useEffect(() => {
      let timer
      if (showTool1) {
        timer = setTimeout(() => 
            setDelayed1(true)
        , 300);
      }else{
        setDelayed1(false)
      }
    
      return () => {
        clearTimeout(timer)
      }
    }, [showTool1])

    useEffect(() => {
      let timer
      if (showTool2) {
        timer = setTimeout(() => 
            setDelayed2(true)
        , 300);
      }else{
        setDelayed2(false)
      }
    
      return () => {
        clearTimeout(timer)
      }
    }, [showTool2])

    useEffect(() => {
      let timer
      if (showTool3) {
        timer = setTimeout(() => 
            setDelayed3(true)
        , 300);
      }else{
        setDelayed3(false)
      }
    
      return () => {
        clearTimeout(timer)
      }
    }, [showTool3])

    


    return (
        <ul className="flex w-[29%] justify-center h-[48%] items-center">

            <div className="flex justify-start items-center gap-x-5.25 h-full">
                <li className="h-full flex items-center">
                    <button className="h-full w-full bg-white rounded-full px-4 py-1 flex items-center">
                        <span className="text-[#000000] text-[14px] blur-[0.4px] py-2 font-semibold tracking-tight antialiased font-spotify items-center">
                            Explore Premium
                        </span >
                    </button>
                </li>

                <li className="h-full flex justify-center items-center group hover:scale-104 transition-transform duration-100">
                    <a href="..." className="w-full h-full flex justify-center items-center gap-x-2">
                        <span>
                            <svg className="fill-(--iconTheme) group-hover:fill-white" width={16} height={16} viewBox="0 0 16 16"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528-.005-.005-2.472-2.473a.75.75 0 0 1 0-1.06"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"></path></svg>
                        </span>
                        <span className="inline-block text-(--iconText) text-center text-sm font-semibold font-spotify group-hover:text-white">
                            Install App
                        </span>
                    </a>
                </li>
            </div>

            <div className="h-full flex justify-between items-center gap-x-6 pl-10 -mt-[1.5px]">

                <li className="h-full flex items-center justify-between w-full gap-x-6">
                    <button className="relative cursor-pointer hover:scale-102 group" onMouseEnter={() => setShowTool1(true)} onMouseLeave={() => setShowTool1(false)}>
                        <svg className="fill-(--iconTheme) group-hover:fill-white " width={16} height={16} viewBox="0 0 16 16"><path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4m-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569zm4.5 8a1 1 0 1 0 2 0z"></path></svg>
                        {delayed1 && <span className="absolute UniTool top-8 -left-7">What'sNew</span>}
                    </button>

                    <button className="relative cursor-pointer hover:scale-102 group" onMouseEnter={() => setShowTool2(true)} onMouseLeave={() => setShowTool2(false)}>
                        <svg className="fill-(--iconTheme) group-hover:fill-white " viewBox="0 0 16 16" width={16} height={16}><path d="M3.849 10.034c-.021-.465.026-.93.139-1.381H1.669c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.014-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.074.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.6 1.6 0 0 0-.124 1.9c.36-.388.792-.702 1.272-.927v-.015c.48-.546.768-1.233.821-1.958a3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.04 0c-.111.367-.157.75-.135 1.133.053.724.341 1.41.821 1.955A.13.13 0 0 1 2.565 6a.13.13 0 0 1-.063.091l-.922.532A3.2 3.2 0 0 0-.004 9.396v.75h3.866c.001-.033-.01-.071-.013-.112m10.568-3.4-.922-.532a.13.13 0 0 1-.064-.091.12.12 0 0 1 .028-.1c.48-.546.768-1.233.821-1.958a3.3 3.3 0 0 0-.135-1.135A2.64 2.64 0 0 0 12.7 1.233a2.67 2.67 0 0 0-3.042.64 2.65 2.65 0 0 0-.554.948c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955.005.006 0 .011 0 .018.48.225.911.54 1.272.927a1.6 1.6 0 0 0-.125-1.907 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281.162.182.236.413c.05.184.07.375.058.565a1.8 1.8 0 0 1-.475 1.084 1.633 1.633 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724h-2.319c.113.452.16.918.139 1.383 0 .04-.013.078-.017.117h3.866v-.75a3.2 3.2 0 0 0-1.58-2.778v.004zm-3.625 6-.922-.532a.13.13 0 0 1-.061-.144.1.1 0 0 1 .025-.047 3.33 3.33 0 0 0 .821-1.958 3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.041 0c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955a.13.13 0 0 1 .028.106.13.13 0 0 1-.063.091l-.922.532a3.2 3.2 0 0 0-1.584 2.773v.75h8.75v-.75a3.2 3.2 0 0 0-1.583-2.781zm-5.5 2.023c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.073.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.632 1.632 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724z"></path></svg>
                        {delayed2 && <span className="absolute UniTool top-9 -left-8">FriendActivity</span>}
                    </button>
                </li>

                <li className="relative group transition-transform duration-300" onMouseEnter={() => setShowTool3(true)} onMouseLeave={() => setShowTool3(false)}>
                    <button className="bg-[#19e68c] w-12 h-12 rounded-full flex justify-center items-center border-8 border-[#232222] group-hover:scale-104 group-hover:border-[#2b2a2afc] transition-colors duration-300">
                        <span className="font-spotify font-bold text-black text-sm text-center origin-center leading-0 group-hover:blur-[0.35px]">A</span>
                    </button>
                    {delayed3 && <span className="absolute UniTool top-14 -left-13 hover:scale-105">Akshatkasyap</span>}
                </li>
            </div>
        </ul>
    )
}

export default NavButtons