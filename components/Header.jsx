import Button from './Button'
import Logo from '/public/Logo.svg'
import Menu from '/public/menu.svg'
import { FrameIcon, CloseIcon } from '../components/icons'
import { useState } from 'react'
export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const handleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <header className="relative flex justify-between max-w-7xl align-center mx-auto px-16 py-6 ">
            <Logo />
            <nav className="flex gap-4 max-lg:hidden" >
                <Button theme="outline">Retomar</Button>
                <Button theme="primary" className="bg-terciary-orange" icon={FrameIcon}>Quero Começar Agora</Button>
            </nav>
            <Menu className="w-8 h-8 lg:hidden" onClick={handleActive} />
            <nav className={`${isActive ? "flex": ' hidden'} fixed p-6 gap-3 right-0 top-0 w-full flex-col-reverse bg-white`}>
                <Button theme="outline">Retomar</Button>
                <Button theme="primary" className="bg-terciary-orange" icon={FrameIcon}>Quero Começar Agora</Button>
                <CloseIcon onClick={handleActive} className="w-5 h-5 self-end" />
            </nav>
        </header>
    )
}