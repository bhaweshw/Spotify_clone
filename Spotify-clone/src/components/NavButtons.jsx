

function NavButtons() {
    return (
        <ul className="flex w-[30%] justify-around h-[48%] items-center">

            <li className="h-full flex items-center">
                <button className= "h-full w-full bg-white rounded-full px-4 py-1 flex items-center">
                    <span className="text-[#000000] text-[14px] blur-[0.4px] py-2 font-semibold font-spotify items-center">
                        Explore Premium
                    </span >
                </button>
            </li>
            <li>
                <button />
            </li>
            <li>
                whats new
            </li>
            <li>
                friend activity
            </li>
            <li>
                profile
            </li>
        </ul>
    )
}

export default NavButtons