import React, { useState, useEffect } from 'react'
import { useSidebar } from './SidebarContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { menuList } from './Sidebar.constants'

const Sidebar: React.FC = () => {
    const { isOpen, toggle, close } = useSidebar()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const router = useRouter()
    const { pathname } = router

    // Función para determinar si un elemento del menú o alguno de sus hijos está activo
    const isMenuItemActive = (item: any) => {
        if (item.url && pathname.startsWith(item.url)) {
            return true
        }
        if (item.children) {
            return item.children.some((sub: any) => sub.url && pathname.startsWith(sub.url))
        }
        return false
    }

    // Expandir automáticamente el submenú si la ruta actual está dentro de sus hijos
    useEffect(() => {
        menuList.forEach((item, index) => {
            if (item.children) {
                const isChildActive = item.children.some((sub) => sub.url && pathname.startsWith(sub.url))
                if (isChildActive) {
                    setExpandedIndex(index)
                }
            }
        })
    }, [pathname])

    const handleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className={`fixed top-0 left-0 bottom-0 z-10 transition-all ${isOpen ? 'w-64' : 'w-20'} bg-sky-200`}>
            <div className='flex flex-col h-full p-4'>
                <div className='flex items-center justify-center mb-8'>
                    <img src='/assets/icons/isotipo_barra_lateral.svg' alt='ONPE Logo' className='h-12 w-auto' />
                </div>
                <nav className='flex flex-col space-y-4'>
                    {menuList.map((item, index) => {
                        const isActive = isMenuItemActive(item)
                        const isExpanded = expandedIndex === index
                        return (
                            <div key={index}>
                                {item.separator ? (
                                    <span className='block px-4 text-xs text-gray-400 uppercase'>{item.title}</span>
                                ) : item.children ? (
                                    <div
                                        className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer ${
                                            isActive ? 'text-sky-600' : 'text-black'
                                        }`}
                                        onClick={() => handleExpand(index)}>
                                        <div className='flex items-center'>
                                            <img src={item.icon} alt={`${item.title} icon`} className='w-5 h-5' />
                                            <span className={`${isOpen ? 'ml-3' : 'hidden'} text-sm font-medium`}>{item.title}</span>
                                        </div>
                                        <img
                                            src={isExpanded ? '/assets/icons/ico_menu_abierto.svg' : '/assets/icons/ico_menu_cerrado.svg'}
                                            alt='Expand icon'
                                            className={`w-2 h-2 ${isOpen ? 'block' : 'hidden'}`}
                                        />
                                    </div>
                                ) : (
                                    <Link href={item.url || '#'} legacyBehavior>
                                        <a className={`flex items-center px-4 py-2 rounded ${isActive ? 'text-blue-500' : 'text-black'}`}>
                                            <img src={item.icon} alt={`${item.title} icon`} className='w-5 h-5' />
                                            <span className={`${isOpen ? 'ml-3' : 'hidden'} text-sm font-medium`}>{item.title}</span>
                                        </a>
                                    </Link>
                                )}
                                {item.children && isExpanded && (
                                    <ul className={`ml-8 mt-2 space-y-1 ${isOpen ? 'block' : 'hidden'}`}>
                                        {item.children.map((sub, subIndex) => {
                                            const isSubActive = sub.url && pathname.startsWith(sub.url)
                                            return (
                                                <li key={subIndex}>
                                                    <Link href={sub.url || '#'} legacyBehavior>
                                                        <a
                                                            className={`flex items-center px-4 py-1 rounded ${
                                                                isSubActive ? 'text-sky-600' : 'text-black'
                                                            } hover:text-blue-600`}>
                                                            <img src={`${sub.icon}`} alt={`${sub.title} icon`} className='w-4 h-4' />
                                                            <span className='ml-2 text-sm'>{sub.title}</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
