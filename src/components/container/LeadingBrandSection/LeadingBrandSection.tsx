import React, { useState } from 'react'
import { DataBrand } from './../../../../data/DataBrand'
import { useTheme } from '../../../context/ThemeContext';

const LeadingBrandSection = () => {
  const [dataBrand] = useState(DataBrand)
  const { theme } = useTheme();

  return (
    <div className="relative py-10">
      {/* TITLE */}
      <h2 className="text-center font-bold md:text-[24px] text-[16px] mb-[40px] md:mb-[140px] mt-[44px] md:mt-0">
        Trusted by Global Innovators & Leading Brands
      </h2>

      {/* BRAND SCROLLER */}
      <div className="relative">
        <div className="flex gap-16 overflow-x-auto px-24 scrollbar-hidden items-center">
          {dataBrand.map((brand) => (
            <img
              key={brand.id}
              src={brand.imgSrc}
              alt={`brand-${brand.id}`}
              className="
                flex-shrink-0
                h-8 md:h-10
                opacity-70
                grayscale
              "
            />
          ))}
        </div>

        {/* LEFT FADE */}
        <div className= {theme === "light" ? "pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to- from-white to-transparent":
           "pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent"}  />

        {/* RIGHT FADE */}
        <div className={theme === "light" ? "pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent" :
          "pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent"
        } />
      </div>
    </div>
  )
}

export default LeadingBrandSection;
