
import Card from '../Components/Card'
import Card2 from '../Components/Card2';
import SideBar from '../Components/Sidebar';

const Order = () => {

    return <>
        <div className='w-screen'>
            <SideBar/>
            <div className='pl-[370px] p-20 w-screen h-screen flex flex-wrap gap-6'>
                <Card image={"nasigoreng"}/>
                <Card image={"miegoreng"}/>
                <Card image={"sotobetawi"}/>
                <Card image={"esteh"}/>
                <Card image={""}/>
            </div>
        </div>
    </>
}

export default Order;