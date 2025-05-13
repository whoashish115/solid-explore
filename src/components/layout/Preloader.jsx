'use client'
import React from 'react'
import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        const preloader = document.getElementById("preloader");
        setInterval(() => {
            if (preloader) {
                preloader.style.display = 'none';
                document.body.style.overflowY = "overlay";
            }
        }, 3000);
    }, []);

    return (
        <div id="preloader" className='preloader w-full h-full gap-4 fixed top-0 left-0 right-0 bottom-0 bg-default  z-[100000000000]'>
            <div className='w-full h-full animate-pulse bg-gradient-to-t  flex items-center justify-center '>
               
                <div className='animate-float  '>
                        <div className="w-[40px] animate-spin flex justify-center rounded-full items-center h-[40px] md:w-[60px] md:h-[60px] border-[5px] border-l-title border-r-primary  border-t-title border-b-title ">
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Preloader