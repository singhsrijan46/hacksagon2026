const TitleHeader = ({ title, sub, description }) => {
    return (
        <div className="flex flex-col items-center gap-5 mb-10">
            {sub && (
                <div className="hero-badge">
                    <p className="font-general text-sm uppercase text-blue-50">{sub}</p>
                </div>
            )}
            <div>
                <h2 className="font-zentry text-4xl md:text-7xl uppercase text-center text-white">
                    {title}
                </h2>
                {description && (
                    <p className="text-center text-blue-50 font-general text-lg mt-4 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default TitleHeader;
