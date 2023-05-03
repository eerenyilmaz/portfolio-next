

export default function PageHeader({title}) {
    return (
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-800 relative inline-block mb-10">
            <span className="text-4xl relative color-light-blue">{title}</span>
        </span>
    )
}