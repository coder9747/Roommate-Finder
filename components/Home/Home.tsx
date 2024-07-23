
import Nav from '../CustomComponent/Nav';
import { motion } from "framer-motion";
import Search from "@/components/CustomComponent/Search";
import Slogan from "@/components/CustomComponent/TurstedByMillions";

const cityes = ['Bangalore', 'Hydrabad', 'Pune'];


const Home = () => {
    return (
        <div>
            <Nav />
            <div className='h-20 flex justify-center items-center my-10 '>
                <Slogan />
            </div>
            <div className=' flex flex-col justify-center'>
                <div className='text-[34px] lg:text-5xl lg:font-semibold text-center lg:text-[55px] !text-gray-800 font-medium !leading-tight !font-poppins'>
                    <p className='dark:text-white'>Find compatible flatmates <br /> Rooms & PGs</p>
                </div>
                <p className='text-center my-5  text-gray-500 text-[13px]'>Share your room with right roomates</p>

                <Search />
            </div>
            <div className='text-center my-3 font-light text-[14px]'>
                <p>Top Citys {cityes.map((item) => {
                    return <span className='underline mx-1'>{item}</span>
                })}</p>
            </div>
            <div >
                <img className='mx-auto md:h-96'  src={'https://www.flatmate.in/homeImage_2.png'} alt="" />
            </div>
        </div>
    )
}

export default Home
