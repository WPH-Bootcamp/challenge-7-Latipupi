const BuiltSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-10 md:mt-20">
            <div className="max-w-3xl mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    Built for Your Industry
                </h3>
                <p className="text-sm sm:text-base text-four leading-relaxed">
                    We’ve helped companies across industries launch smarter, faster, and more securely.
                </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-3  items-start">

                {/* LEFT - INDUSTRY LIST */}
                <div className="flex flex-col gap-4">
                    {[
                        { label: "Fintech", active: true },
                        { label: "E-commerce", active: false },
                        { label: "Healthcare", active: false },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                            <span
                                className={`w-1 h-6 rounded ${item.active ? "bg-primary" : "bg-gray-400"
                                    }`}
                            />
                            <p
                                className={`text-base md:text-lg font-medium ${item.active ? "text-gray-900 dark:text-white" : "text-gray-500"
                                    }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT - CONTENT */}
                <div className="flex flex-col gap-6 col-span-2">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.
                    </p>

                    <img
                        src="/Card.svg"
                        alt="Fintech solution illustration"
                        className="w-full max-w-md md:max-w-full object-contain"
                    />
                </div>

            </div>
        </section>
    )
}


export default BuiltSection