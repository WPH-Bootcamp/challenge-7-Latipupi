import CardProto from "../../ui/Card/CardProto";
import { useState } from "react"
import { DataProto } from './../../../../data/DataProto';

const ProtoSection = () => {
    const [data] = useState(DataProto);
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-10 md:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    From Vision to Launch! Projects We’re Proud Of
                </h3>
                <p className="text-sm sm:text-base text-four">
                    Take a closer look at our recent work powering startups, enterprises, and everything in between.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((proto) => (
                    <CardProto key={proto.id} proto={proto} />
                ))}
            </div>
        </section>
    )
}


export default ProtoSection;