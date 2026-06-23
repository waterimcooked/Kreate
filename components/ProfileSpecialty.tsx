export function ProfileSpecialty({ specialty, className = "" } : { specialty: string, className?: string }) {
    return (
        <div className={`p-2 m-2 rounded ${className}`}>
            <h1 className="font-outfit text-xs"> {specialty} </h1>
        </div>
    )
}