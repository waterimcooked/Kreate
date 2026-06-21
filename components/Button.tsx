export default function Button(
    { children, className = "", onClick, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur }: 
    { 
        children: React.ReactNode
        className?: string
        onClick?: Function
        onMouseOver?: Function
        onMouseLeave?: Function
        onMouseDown?: Function
        onMouseUp?: Function
        onFocus?: Function
        onBlur?: Function
    }
) 
{
    function fireClickedEvent(e: any) {
        onClick?.(e)
        console.log("CLICKED")
    }

    function fireMouseOver(e: any) {
        onMouseOver?.(e)
        console.log("MOUSE OVER")
    }

    function fireMouseLeave(e: any) {
        onMouseLeave?.(e)
        console.log("MOUSE LEAVE")
    }

    function fireMouseDown(e: any) {
        onMouseDown?.(e)
        console.log("MOUSE DOWN")
    }

    function fireMouseUp(e: any) {
        onMouseUp?.(e)
        console.log("MOUSE UP")
    }

    function fireFocus(e: any) {
        onFocus?.(e)
        console.log("FOCUS")
    }

    function fireBlur(e: any) {
        onBlur?.(e)
        console.log("BLUR")
    }

    return (
        <button 
            className={`${className}`} 
            onClick={(e) => fireClickedEvent(e)}
            onMouseOver={(e) => fireMouseOver(e)}
            onMouseLeave={(e) => fireMouseLeave(e)}
            onMouseDown={(e) => fireMouseDown(e)}
            onMouseUp={(e) => fireMouseUp(e)}
            onFocus={(e) => fireFocus(e)}
            onBlur={(e) => fireBlur(e)}
        >
            { children }
        </button>
    )
}