import { useTheme } from '../../../context/ThemeContext';
import type { ProsesType } from '../../../types/ProsesType';

const ProcessStep = ({ step, index }: { step: ProsesType, index: number }) => {
  const { theme } = useTheme();
  const isEven = index % 2 === 0;
  return (
    <div className="timeline-item md:mx-auto md:w-[1160] md:px-50">
      <div className=
        {theme === "light" ? "timeline-dot w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg mt-[20px] text-white" :
          "timeline-dot w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg mt-[20px]"}>
        {step.id}
      </div>
      <div className={`md:flex ${isEven ? 'md:justify-start ' : 'md:flex-row-reverse'} `}>
        <div className={theme === "light" ? "ml-14 md:ml-0 md:w-100 bg-white border border-gray-200 p-4 rounded-xl shadow-lg cursor-pointer" :
          "ml-14 md:ml-0 md:w-100 bg-five border border-[#181D27] p-4 rounded-xl shadow-lg cursor-pointer"}>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-[16px]">{step.title}</h3>
            <svg className="w-5 h-5 text-four" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
          <p className="text-four text-sm mt-1">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;