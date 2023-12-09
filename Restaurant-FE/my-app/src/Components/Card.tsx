import { useContext } from 'react'
import { CartContext } from './CartContext'
import Menu from './Menu'
import nasgor from '../Assets/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg'
import migor from '../Assets/top-view-delicious-noodles-concept.jpg'
import esteh from '../Assets/minum-es-teh-manisjpg-20230918081102.jpg'
import soto from '../Assets/soto betawi.jpeg'
import { forEachChild } from 'typescript'


const Card:React.FC<{menu : Menu}> = ({menu}) => {

    var nama = menu.NamaMenu;
    var path = '/Assets/food.png';
    if (nama=="Nasi Goreng"){
        path = nasgor
    }else if (nama=="Mie Ayam"){
        path= migor
    }else if(nama=="Soto Betawi"){
        path= soto
    }else if(nama=="Es Teh Manis"){
        path= esteh
    }else{
        path= path
    }

    const cartContext = useContext(CartContext);
    return <>
        <div className="w-72 h-96 bg-sky-100 rounded-xl p-2">
            <img src={path} className="h-44 p-1 pt-2 rounded-lg mx-auto "/>
            <div className='text-left ml-4 mb-1'>
                <h2 className='text-xl'>{nama}</h2>
                <p className='text-md'>{menu.Deskripsi}</p>
                <h3 className='text-lg'>{'Rp'+menu.Harga+',-'}</h3>
            </div>
            {<button onClick={() => {
            if (cartContext){
               if (cartContext.cart.find((e) => e.menu.MenuId===menu.MenuId)){
                    var i = cartContext.cart.findIndex((e)=> e.menu.MenuId===menu.MenuId)
                    cartContext.cart[i].qty+=1
               }
                else{cartContext.setCart([
                  ...cartContext.cart,
                  { menu: menu!, qty: 1 },
                ])}
            }}} className='bg-green-200 w-5/6 p-2 m-1 rounded-xl'>Tambah ke keranjang</button>
            }
        </div>
    </>
}

export default Card;