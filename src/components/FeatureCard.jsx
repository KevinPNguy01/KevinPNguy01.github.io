export function FeatureCard(props) {
    const {img, title, text} = props;
    return (
        <div className="w-full lg:flex grid grid-rows-[1fr_2fr] lg:flex-nowrap shrink-0 items-end lg:items-center gap-4 p-4 select-none">
            <div className="p-2 h-fit w-fit border-2 border-neutral-600 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900">
                {img}
            </div>
            <div className="h-full flex flex-col">
                <h4 className="text-white font-bold">
                    {title}
                </h4>
                <span className="text-sm font-semibold text-neutral-400">{text}</span>
            </div>
        </div>
    )
}