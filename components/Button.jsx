import Image from "next/image"

function ButtonRoot(props) {
    const {
        className,
        children,
        ...restProps
    } = props
    return (
        <button
            {...restProps}
            className={`font-bold font-openSans text-secondary-white text-base text-right uppercase  flex items-stretch gap-3 bg-primary-blue ${className}`}
        >
            {children}
        </button>
    )
}
function Button(props) {
    const { children } = props
    return (
        <div className="p-3 pl-6 ">
            {children}
        </div>
    )
}
function PrimaryButton(props) {
    const { children, icon, ...restProps } = props
    return (
        <ButtonRoot>
            <Button {...restProps} >
                {children}
            </Button>
            <ButtonIcon className="bg-primary-black-blue" icon={icon} />
        </ButtonRoot>
    )
}
function SecondaryButton() {
    return (
        <Button  >Secondary Button</Button>
    )
}
function InvertedButton() {
    return (
        <Button>Icon Button</Button>
    )
}
function ButtonIcon(props) {
    const { icon, className } = props
    return (
        <div className={`flex items-center justify-center p-3 ${className}`}>
            <Image src={icon} width={20} height={20}></Image>
        </div>
    )
}
Button.Root = ButtonRoot
Button.Button = Button
Button.Primary = PrimaryButton
Button.Secondary = SecondaryButton
Button.Inverted = InvertedButton

export default Button