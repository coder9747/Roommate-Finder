"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const texts = ['Search City', 'Search Pin', 'Search Address', 'Search Place'];

const Search = () => {
    const [isInputFocus, setInputFocus] = useState<boolean>(false);
    const [currentActiveText, setCurrentActiveText] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentActiveText((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <motion.div className={`flex w-48 sm:w-60 md:w-96  mx-auto h-8 md:h-10 relative justify-center items-center `}>
            <MapPin className={`absolute ${isInputFocus ? "h-5" : "h-4"} left-2  z-10`} />
            <motion.input
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                whileFocus={{ scale: 1.2 }}
                className={`${!isInputFocus?"bg-gray-200":"bg-white"} h-full w-full text-center md:px-20 px-11 text-sm mx-auto  rounded-2xl focus:outline focus:outline-green-600`}
                type="text"
                placeholder={texts[currentActiveText]}
            />
        </motion.div>
    );
}

export default Search;
