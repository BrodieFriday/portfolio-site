function PortfolioItem( {title, imgUrl, stack, link, description}) {
    return  (
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold">{title}</h3>
                <p className="mb-2 md:mb-3 dark:text-white">{description}</p>
                <p className="flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;