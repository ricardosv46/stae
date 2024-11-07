// Sidebar.tsx
import React, { useState } from 'react'
import { useSidebar } from './SidebarContext'
import Link from 'next/link'
import { menuList } from './Sidebar.constants'

const Sidebar: React.FC = () => {
    const { isOpen, toggle, close } = useSidebar()

    // Estado para almacenar el índice del elemento expandido
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    // Función para manejar el clic en el elemento con submenú
    const handleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index) // Alterna el índice expandido
    }

    return (
        <div className={`sidebar ${isOpen ? 'show' : 'minified'}`}>
            <div className='sidebar_bg' onClick={close}></div>
            <div className='l-navbar'>
                <nav className='nav position-relative'>
                    <a className='nav_logo'>
                        <img src='/assets/icons/isotipo_barra_lateral.svg' className='nav_logo_icon' />
                    </a>
                    <ul className='nav_list'>
                        {menuList.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.children ? 'has-sub' : ''} ${item.separator ? 'nav_title' : ''} ${
                                    expandedIndex === index ? 'expand' : ''
                                }`}>
                                {item.separator ? (
                                    <span>{item.title}</span>
                                ) : (
                                    <Link href={item.url || '#'} legacyBehavior>
                                        <a className='nav_link' onClick={() => handleExpand(index)}>
                                            <img src={item.icon} alt={`${item.title} icon`} className='nav_icon' />
                                            <span className='nav_name'>{item.title}</span>
                                        </a>
                                    </Link>
                                )}
                                {item.children && (
                                    <ul className={`sub_menu ${expandedIndex === index ? 'show' : ''}`}>
                                        {item.children.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={sub.url || '#'} legacyBehavior>
                                                    <a>
                                                        <img src={sub.icon} alt={`${sub.title} icon`} className='nav_icon' />
                                                        <span className='nav_name'>{sub.title}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
