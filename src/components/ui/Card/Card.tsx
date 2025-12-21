import { type ITSolutionType } from './../../../types/ITSolutionType';
import { useTheme } from '../../../context/ThemeContext';

const Card = ({itSolution}: ITSolutionType) => {
    const { theme } = useTheme();
  return (
    <div className={`relative w-[361px] h-[130px] border rounded-xl mt-[40px] pl-[20px] ${theme === "light" ? "bg-white border-six" :  "bg-five border-tertiary"}`}>
        <img src={itSolution.img} alt="Website" className="absolute -top-6" />
        <h3 className="font-bold absolute top-12">{itSolution.title}</h3>
        <p className="text-four text-[14px] absolute top-20">{itSolution.description}</p>
    </div>
  )
}


export default Card