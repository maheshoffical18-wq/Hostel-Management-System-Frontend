export default function StatCard({
    icon,
    value,
    label,
    color
}) {

    const colorClass =
        color === "green"
            ? "text-emerald-600"
            : color === "red"
                ? "text-red-600"
                : "text-gray-900";


    return (

        <div className="
            bg-white
            rounded-xl
            border
            border-gray-200
            p-5
            flex
            items-center
            gap-4
        ">

            <div className="
                w-13
                h-13
                rounded-xl
                bg-blue-50
                flex
                items-center
                justify-center
                text-xl
            ">
                {icon}
            </div>


            <div>

                <h3 className={`
                    text-2xl
                    font-bold
                    ${colorClass}
                `}>
                    {value}
                </h3>

                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    {label}
                </p>

            </div>

        </div>
    );
}
