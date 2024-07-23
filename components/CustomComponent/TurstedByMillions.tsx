"use client";
import React from 'react';
import {motion} from "framer-motion";

const TurstedByMillions = () => {
    return (
        <motion.div
            className="relative inline-block p-[1px] rounded-3xl"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
                background: "linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(252, 176, 69, 1) 50%, rgba(29, 253, 253, 1) 100%)",
                backgroundSize: "200% 200%",
            }}
        >
            <button className="bg-[hsl(325,100%,94%)] h-9 flex justify-center items-center dark:bg-black dark:text-white w-60 md:w-72 py-2 rounded-3xl text-sm font-medium relative z-10">
                Trusted & Loved By Million Users
            </button>
        </motion.div>
    )
}

export default TurstedByMillions
