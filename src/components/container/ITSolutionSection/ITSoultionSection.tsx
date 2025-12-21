import { useState } from 'react';
import Card from '../../ui/Card/Card'
import { DataITSolution } from './../../../../data/DataITSolution';

const ITSoultionSection = () => {
    const [dataITSolution] = useState(DataITSolution);
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-12 md:mt-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    Smart IT Solutions That Grow With You
                </h3>
                <p className="text-sm sm:text-base text-four">
                    Tailored tech to boost efficiency, security, and results.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataITSolution.map((data) => (
                    <Card key={data.id} itSolution={data} />
                ))}
            </div>
        </section>
    )
}


export default ITSoultionSection