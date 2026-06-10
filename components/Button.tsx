export default function Button(
    { children, className = "", onClick }: 
    { children: React.ReactNode, className?: string, onClick?: Function }
) 

{

    function fireClickedEvent(e: any) {
        onClick?.(e)
        console.log("CLICKED")
    }

    return (
        <button className={`${className}`} onClick={(e) => fireClickedEvent(e)}>
            { children }
        </button>
    )
}