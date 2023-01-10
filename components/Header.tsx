import Button from './Button'
import Logo from '/public/Logo.svg'
import MobileLogo from '/public/group.svg'
import Menu from '/public/menu.svg'
import { NextIcon, CloseIcon } from './icons'
import { useState } from 'react'
export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const handleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <header className=" bg-white">
            <div className="center flex justify-between items-center max-w-[1366px] sm:px-16 p-4 ">
                <Logo  className="max-sm:hidden h-8"/>
                <MobileLogo className="sm:hidden h-8"/>
                <nav className="flex gap-4 max-lg:hidden" >
                    <Button theme="outline">Retomar</Button>
                    <Button theme="primary" className="bg-terciary-orange" Icon={NextIcon}>Quero Começar Agora</Button>
                </nav>
                <button onClick={handleActive} className="w-8 h-8 lg:hidden text-primary-gray-dark" title='Abrir Menu'><Menu/></button>
                <nav className={`${isActive ? "flex" : ' hidden'} fixed p-6 gap-3 right-0 top-0 w-full flex-col-reverse z-50 bg-white`}>
                    <Button theme="outline">Retomar</Button>
                    <Button theme="primary" className="bg-terciary-orange" Icon={NextIcon}>Quero Começar Agora</Button>
                    <button onClick={handleActive} className="w-5 h-5 self-end" title="Fechar Menu"><CloseIcon  /></button>
                </nav>
            </div>
        </header>
    )
}