
import Card from '../Components/Card'
import Card2 from '../Components/Card2';
import SideBar from '../Components/Sidebar';

const Payment = () => {

    return <>
    <div>
        <SideBar/>
        <div className='pl-[370px] p-20 w-screen h-screen'>
            <div className='shadow-xl p-2 relative divide-y-4 px-0 min-h-[90%]'>
                <div className='flex flex-wrap justify-evenly gap-5 p-2 m-2 min-h-[400px]'>
                    <Card2 image={""}/>
                    <Card2 image={""}/>
                </div>
                <div className='w-full p-1 pt-3'>
                    <div className='flex w-1/3 justify-evenly'>
                        <button className='border-[#00FF00] border-2 rounded-lg p-1 w-5/12'>Pesan di tempat</button>
                        <button className='bg-green-400 border-2 p-1 w-5/12 rounded-lg'>Pesan Antar</button>
                    </div>
                    <div className='ml-3 pl-2 m-1 p-1'>
                        <table className="w-1/2 text-left">
                            <tbody>
                                <tr>
                                    <td>Total pesanan</td>
                                    <td>Rp24.000,-,-</td>
                                </tr>
                                <tr>
                                    <td>Ongkir</td>
                                    <td>Rp12.000,-</td>
                                </tr>
                                <tr>
                                    <td>Paket Hemat</td>
                                    <td><button className='w-4/5 p-1 bg-blue-400 rounded-md'>Ya</button></td>
                                </tr>
                                <tr>
                                    <td>Total Pembayaran</td>
                                    <td>Rp36.000,-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full flex justify-start ml-3'>
                        <button className='bg-green-500 w-1/4 rounded-lg p-1 mt-3 w-1/4 ml-4'>Pesan Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default Payment;