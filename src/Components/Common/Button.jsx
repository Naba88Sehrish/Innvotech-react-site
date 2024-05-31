import React from 'react'

const Button = ({ text, className, onClick, children, type, variant, loading }) => {
    const btnType = {
        "filled": "bg-[#135682] text-white border-transparent",
        "border": "border-[#135682] text-[#135682]",
    }
    return (
        <button type={type} className={`${btnType[variant]} btn-animation border px-8 py-2.5 rounded-lg text-sm font-semibold ${className}`} onClick={onClick}>
            {
                !loading ? <>{text}{children}</> : <div className="border-t-2 border-white border-solid rounded-full w-5 h-5 animate-spin mx-auto"></div>
            }

        </button>
    )
}
Button.defaultProps = {
    type: "button",
    variant: "filled",
    loading: false
}
export default Button;
