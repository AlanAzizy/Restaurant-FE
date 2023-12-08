import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const [isMenuPage, setIsMenuPage] = useState(true)

    const navigate = useNavigate();
    return (
        <>
                <div className="w-[300px] h-screen fixed" style={{backgroundImage : "linear-gradient(to bottom, #ffcc00, #ff6699)"}}>
                <h1 className="text-3xl mt-20 text-center">RESMAT</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 pt-2 mx-auto mt-4 mb-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-center">ALAN</h2>
                <div className="flex flex-col m-1 p-1 w-5/6 mt-16 items-center mx-auto">
                    <button onClick={()=>{setIsMenuPage(true);navigate('/Order')}} className="p-1 w-full text-xl text-center m-2 rounded-xl" style={isMenuPage ? {backgroundColor:"white"} : {}}>Menu</button>
                    <button onClick={()=>{setIsMenuPage(false);navigate('/Payment')}} className="p-1 w-full text-xl text-center m-2 rounded-xl" style={!isMenuPage ? {backgroundColor:"white"} : {}}>Keranjang</button>
                </div>
                <button onClick={()=>{navigate('/')}} className="absolute bottom-10 bg-red-600 w-5/6 m-1 p-1 mx-auto text-white rounded-xl h-[40px] left-[8%]">Logout</button>
            </div>
        </>
    )
}

export default SideBar;