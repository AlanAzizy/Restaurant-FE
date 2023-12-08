

const SideBar = () => {

    return (
        <>
            <div className="w-[300px] h-screen fixed" style={{backgroundImage : "linear-gradient(to bottom, #ffcc00, #ff6699)"}}>
                <h1 className="text-3xl mt-20">RESMAT</h1>
                <div className="flex flex-col m-1 p-1 w-5/6 mt-20 items-center mx-auto">
                    <button className="p-1 w-full text-xl text-center m-2">Menu</button>
                    <button className="p-1 w-full text-xl text-center m-2">Keranjang</button>
                </div>
            </div>
        </>
    )
}

export default SideBar;