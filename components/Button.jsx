function ButtonBase(props){
    const {
        className,
        size='base',
        as = 'button',
        children,
        IconStart,
        IconEnd,
        ...restProps
    } = props
    const Element = as
    return(
        <Element
            className={className}
            {...restProps}  
        >
            {children}
        </Element>
    )
}
function PrimaryButton(props){
    const {children,icon,...restProps} = props
    return(
        <ButtonBase  {...restProps} className="text-secondary-white bg-primary-blue">
            {children}
            <span>
                {icon}  
            </span>
        </ButtonBase>
    )
}
function SecondaryButton() {
    return(
        <ButtonBase>Secondary Button</ButtonBase>
    )
}
function IconButton() {
    return(
        <ButtonBase>Icon Button</ButtonBase>
    )
}
ButtonBase.displayName = 'Button.Base'
PrimaryButton.displayName = 'Button.Primary'
SecondaryButton.displayName = 'Button.Secondarys'
IconButton.displayName = 'Button.IconButton'

export const Button = {
    Base: ButtonBase,
    Primary: PrimaryButton,
    Secondary: SecondaryButton,
    IconButton: IconButton
}