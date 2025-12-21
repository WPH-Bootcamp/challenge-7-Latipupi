import { useState } from "react";
import { datatestimonial } from './../../../../data/DataTestimonial';

const TestimonialCarosel = () => {
  const [active, setActive] = useState(1);
  const [data] = useState(datatestimonial);
  const slideWidth = 590;

  return (
    <div className="w-full py-16 px-4">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500  py-12"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0"
            >
              <div className="dark:bg-tertiary dark:border-five bg-white border border-six rounded-xl p-6 w-[361px] h-[284px] relative">
                <img src="Vector.svg" alt="vector" className="absolute -top-5" />
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FBBF24] text-2xl">★</span>
                    ))}
                  </div>
                  <div className="flex justify-center flex-col items-center gap-2 ">
                    <p className="text-center">{item.note}</p>
                    <h3 className="mt-1">{item.user}</h3>
                    <h4 className="text-primary">{item.position}</h4>
                  </div>
                <img src={item.img} alt="Avatar 1" className="absolute -bottom-8 left-38 w-[60px] h-[60px]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block overflow-hidden py-20">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(calc(50% - ${(active + 0.5) * slideWidth}px))`,
          }}
        >
          {data.map((item, index) => {
            const isActive = index === active;

            return (
              <div
                key={item.id}
                onClick={() => setActive(index)}
                className={`w-[594px] cursor-pointer transition-all   ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                <div className="dark:bg-tertiary dark:border-five bg-white border border-six rounded-xl p-6 w-[594px] h-[292px] relative">
                <img src="Vector.svg" alt="vector" className="absolute -top-5" />
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FBBF24] text-2xl">★</span>
                    ))}
                  </div>
                  <div className="flex justify-center flex-col items-center gap-2 ">
                    <p className="text-center">{item.note}</p>
                    <h3 className="mt-1">{item.user}</h3>
                    <h4 className="text-primary">{item.position}</h4>
                  </div>
                <img src={item.img} alt="Avatar 1" className="absolute -bottom-8 left-65 w-[60px] h-[60px]" />
              </div>
              </div>
            );
          })}
        </div>
      
      </div>

      {/* ================= DOT ================= */}
      <div className="flex justify-center gap-2 ">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              active === i ? "bg-orange-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default TestimonialCarosel;
