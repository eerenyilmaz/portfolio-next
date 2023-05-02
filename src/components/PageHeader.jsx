

export default function PageHeader({title}) {
    return (
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-100 relative inline-block mb-10">
            <span className="text-4xl relative color-blue">{title}</span>
        </span>
    )
}