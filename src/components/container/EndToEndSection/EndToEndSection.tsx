import { useState } from 'react'
import { DataEndToEnd } from './../../../../data/DataEndToEnd';

const EndToEndSection = () => {
    const [data] = useState(DataEndToEnd)
    return (
        <div className="mt-[80px]">
            {/* TITLE */}
            <h2 className="text-center font-bold md:text-[24px] text-[28px] mb-[40px] md:mb-[11px] mt-[44px] md:mt-0 px-[16px]">
                End-to-End IT Solutions That Drive Results
            </h2>
            {/* CONTENT */}
            <p className="text-center text-four text-[14px] px-[16px] md:mb-[64px]">From strategy to execution, we deliver solutions that grow your business.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-0 place-items-center">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="
                        flex flex-col items-center justify-center
                        w-[150px] h-[150px]
                        sm:w-[160px] sm:h-[160px]
                        md:w-[172px] md:h-[172px]
                        rounded-full
                        border border-gray-200 dark:border-transparent
                        bg-white dark:bg-five
                        transition
                    "
                    >
                        <h3 className="font-bold text-[32px] sm:text-[36px] md:text-[40px] text-primary">
                            {item.count}
                        </h3>
                        <p className="text-center text-[13px] sm:text-[14px] text-gray-700 dark:text-gray-300">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default EndToEndSection