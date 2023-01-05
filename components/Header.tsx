import Button from './Button'
import Logo from '/public/Logo.svg'
import Menu from '/public/menu.svg'
import { FrameIcon, CloseIcon } from './icons'
import { useState } from 'react'
export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const handleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <header className="px-16 py-4 bg-white">
            <div className="center flex justify-between items-center">
                <Logo />
                <nav className="flex gap-4 max-lg:hidden" >
                    <Button theme="outline">Retomar</Button>
                    <Button theme="primary" className="bg-terciary-orange" Icon={FrameIcon}>Quero Começar Agora</Button>
                </nav>
                <button onClick={handleActive} className="w-8 h-8 lg:hidden" title='Abrir Menu'><Menu/></button>
                <nav className={`${isActive ? "flex" : ' hidden'} fixed p-6 gap-3 right-0 top-0 w-full flex-col-reverse bg-white`}>
                    <Button theme="outline">Retomar</Button>
                    <Button theme="primary" className="bg-terciary-orange" Icon={FrameIcon}>Quero Começar Agora</Button>
                    <button onClick={handleActive} className="w-5 h-5 self-end" title="Fechar Menu"><CloseIcon  /></button>
                </nav>
            </div>
        </header>
    )
}