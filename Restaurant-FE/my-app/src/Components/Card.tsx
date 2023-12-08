import food from '../Assets/food.png'
import nasigoreng from '../Assets/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg'
import miegoreng from '../Assets/top-view-delicious-noodles-concept.jpg'
import esteh from '../Assets/minum-es-teh-manisjpg-20230918081102.jpg'
import soto from '../Assets/soto betawi.jpeg'


const Card:React.FC<{image : string}> = ({image}) => {

    let gambar = food;
    if (image=="nasigoreng"){
        gambar = nasigoreng
    }else if (image=="miegoreng"){
        gambar= miegoreng
    }else if(image=="sotobetawi"){
        gambar= soto
    }else if(image=="esteh"){
        gambar= esteh
    }else{
        gambar= food
    }


    return <>
        <div className="w-72 h-96 bg-sky-100 rounded-xl p-2">
            <img src={gambar} className="h-44 p-1 pt-2 rounded-lg mx-auto "/>
            <div className='text-left ml-4 mb-1'>
                <h2 className='text-xl'>Nasi Goreng</h2>
                <p className='text-md'>Makanan enak yang harus anda beli</p>
                <h3 className='text-lg'>Rp12.000,-</h3>
            </div>
            <button className='bg-green-200 w-5/6 p-2 m-1 rounded-xl'>Tambah ke keranjang</button>
        </div>
    </>
}

export default Card;