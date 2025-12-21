import { useState } from "react"
import { type ProtoType } from "../../../types/ProtoType"

const CardProto = ({proto} : ProtoType) => {
    const [data] = useState(proto);
  return (
    <div>
        <img src={data.img} alt="proto 1"  className="rounded-xl"/>
        <h3 className="text-primary text-[14px] md:text-[16px] mt-[12px]">{data.title}</h3>
        <p className="md:text-[20px] mt-[4px] font-bold">{data.description}</p>
    </div>
  )
}


export default CardProto