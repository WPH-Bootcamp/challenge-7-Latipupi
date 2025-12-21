import { useState } from "react";
import { datafaqs } from './../../../../data/DataFaqs';
import Button from "../../ui/Button";

const FAQAccordion = () => {
    const [activeId, setActiveId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-10 md:mt-20">
            {/* Header */}
            <div className="max-w-3xl mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    Need Help? Start Here.
                </h3>
                <p className="text-sm sm:text-base text-four leading-relaxed">
                    Everything you need to know — all in one place.
                </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* FAQ LIST */}
                <div className="lg:col-span-2 divide-y divide-gray-700">
                    {datafaqs.map((item) => {
                        const isOpen = activeId === item.id;

                        return (
                            <div key={item.id} className="py-5">
                                <button
                                    onClick={() => toggle(item.id)}
                                    className="w-full flex justify-between items-center text-left gap-4"
                                >
                                    <span className="font-semibold text-base sm:text-lg">
                                        {item.question}
                                    </span>
                                    <span className="text-2xl shrink-0">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA CARD */}
                <div className="bg-seven rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            Let's talk it through
                        </h3>
                        <p className="text-sm sm:text-base text-white mb-6">
                            Book a free consultation with our team.
                        </p>

                        <img
                            src="Consultation.svg"
                            alt="consultation"
                            className="w-full max-w-xs mx-auto object-contain"
                        />
                    </div>

                    <Button
                        variant="secondary"
                        className="rounded-full font-bold w-full mt-6 text-black"
                    >
                        Free Consultation
                    </Button>
                </div>

            </div>
        </section>

    );
};

export default FAQAccordion;
