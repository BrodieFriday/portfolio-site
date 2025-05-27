function TimelineItem( {year, title, duration, details}) {
    return  (
        <ol className=" flex flex-col md:flex-row relative border-1
        border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div classNmae="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700">
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold dark:text-stone-400 bg-stone-400 dark:bg-white rounded-md">
                            {year}
                        </span>
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                            {title}
                        </h3>
                        <div className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {duration}
                        </div>
                    </p>
                    <p className="my-2 text-base font-normal text-stone-500">
                        {details}
                    </p>
                </div>
            </li>
        </ol>
    )
}

export default TimelineItem;