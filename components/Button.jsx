import Image from "next/image"

function Button(props) {
    const {
        className,
        children,
        icon,
        theme,
        ...restProps
    } = props
    const classname = () => {
        if (theme == "primary") 
            return "btn-primary"
        if (theme == "secondary")
            return "btn-secondary"
        if (theme == "outline")
            return "btn-outline"
    }
    return (
        <button
            {...restProps}
            className={`btn ${classname()}`}
        >
            <span className="p-3 pl-0"> 
                {children}
            </span>
            <ButtonIcon className={theme=="primary" && "btn-icon-bg" } icon={icon} />
        </button>
    )
}


function ButtonIcon(props) {
    const { icon, className } = props
    return (
        <span className={`flex items-center justify-center p-3 ${className}`}>
            <Image src={icon} width={20} height={20}></Image>
        </span>
    )
}

export default Button