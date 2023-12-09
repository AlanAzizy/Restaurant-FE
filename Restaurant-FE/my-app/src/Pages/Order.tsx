
import { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card'
import Card2 from '../Components/Card2';
import SideBar from '../Components/Sidebar';
import {getWithAuth} from '../Components/Routes'
import Menu from '../Components/Menu';
import { CartContext } from '../Components/CartContext';

const Order = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<any[] | null>(null);

    const token = localStorage.getItem('token');

    const fetchData = async () => {
        if (token){
            try {
              const response = await getWithAuth(token,"menu/");
              setData(response.data as Menu[]);
              console.log(response)
              console.log(data);
              setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              // Handle error or set error state
            } finally {
              setIsLoading(false);
            }
        }
    };
    useEffect(() => {
        fetchData()
    },[])

    const cartContext = useContext(CartContext)

    return <>
        <div className='w-screen'>
            <SideBar/>
            <div className='pl-[370px] p-20 w-screen h-screen flex flex-wrap gap-6'>
                {!isLoading && data && data.map((e)=>
                <Card menu={e}/>)}
            </div>
        </div>
    </>
}

export default Order;