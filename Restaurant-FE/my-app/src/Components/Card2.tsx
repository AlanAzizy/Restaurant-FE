const Card2:React.FC<{image : string}> = ({image}) => {

    return <>
        <div className="w-[450px] bg-sky-100 rounded-xl p-2 h-40">
            <div className='text-left ml-4 mb-1'>
                <h2 className='text-xl'>Nasi Goreng</h2>
                <p className='text-md'>Deskripsi makanan ini harusnya enak kamu harus beli</p>
                <h3 className='text-lg'>Rp12.000,-</h3>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="flex items-center w-1/3 gap-5">
                    <button className='bg-green-200 w-[50px] p-2 m-1 rounded-xl'>-</button>
                    <div className="text-xl">1</div>
                    <button className='bg-green-200 w-[50px] p-2 m-1 rounded-xl'>+</button>
                </div>
                <div className="text-lg w-1/3 bg-white p-1">Rp12.000,-</div>
            </div>
        </div>
    </>
}

export default Card2;