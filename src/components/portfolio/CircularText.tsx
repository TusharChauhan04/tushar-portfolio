import React from 'react';

const CircularText = () => {
    const text = "DON'T TYPE, JUST SPEAK · DON'T TYPE, JUST SPEAK · ";

    return (
        <div className="absolute top-[85vh] left-[5%] z-20 pointer-events-none hidden md:block">
            <div className="relative w-[180px] h-[180px] animate-[spin_20s_linear_infinite]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                        <path
                            id="circle-path"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <text className="fill-[#6B6F76] dark:fill-[#7F8DAA] text-[14px] font-bold tracking-widest uppercase opacity-80">
                        <textPath href="#circle-path" startOffset="0%">
                            {text}
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default CircularText;
