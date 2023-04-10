

export default function PageHeader({title}) {
    return (
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10">
            <span className="text-4xl relative text-white">{title}</span>
        </span>
    )
}