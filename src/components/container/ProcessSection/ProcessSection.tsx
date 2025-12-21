import { useState } from 'react'
import { dataprocessSteps } from './../../../../data/DataProccessSection';
import ProcessStep from '../../ui/ProcessStep/ProcessStep';

const ProcessSection = () => {
  const [data] = useState(dataprocessSteps)
  return (
    <section className="mt-[40px] px-[16px] ">
      <div className="px-4 md:mb-[64px]">
        <h3 className="text-center text-[28px]">Our Proccess</h3>
        <p className="text-center text-[14px] text-four">Clear steps, Smart execution. Result you can count on.</p>
      </div>

      <div className="mt-[24px]">
        {
          data.map((step, index) => (
            <ProcessStep key={step.id} index={index} step={step}/>
          ))
        }
      </div>
    </section>
  )
}


export default ProcessSection