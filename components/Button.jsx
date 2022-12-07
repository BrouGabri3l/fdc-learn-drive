import Image from "next/image"

function Button(props) {
    const {
        children,
        icon,
        className,
        theme,
    } = props
    const variant = `btn-${theme}`
        
    return (
        <button
            className={`btn ${variant} ${className}`}
        >
            <span className="py-3 flex-grow text-center">
                {children}
            </span>
            {icon &&
                <ButtonIcon className={theme=="primary" && "btn-icon-bg"} Icon={icon}/>
            }
        </button>
    )
}

function ButtonIcon(props) {
    const { Icon, className } = props
    return (
        <span className={`flex items-center justify-center p-3 ${className}`}>
            <Icon></Icon>
        </span>
    )
}

export default Button