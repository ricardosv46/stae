// Sidebar.tsx
import React from 'react'
import { useSidebar } from './SidebarContext'
import Link from 'next/link'
import { menuList } from './Sidebar.constants'

const Sidebar: React.FC = () => {
    const { isOpen, toggle, close } = useSidebar()

    return (
        <div className={`sidebar ${isOpen ? 'show' : ''}`}>
            <div className='sidebar_bg' onClick={close}></div>
            <div className='l-navbar'>
                <nav className='nav position-relative'>
                    <ul className='nav_list'>
                        {menuList.map((item, index) => (
                            <li key={index} className={`${item.children ? 'has-sub' : ''} ${item.separator ? 'nav_title' : ''}`}>
                                {item.separator ? (
                                    <span>{item.title}</span>
                                ) : (
                                    <Link href={item.url || '#'} legacyBehavior>
                                        <a className='nav_link' onClick={toggle}>
                                            <img src={item.icon} alt={`${item.title} icon`} className='nav_icon' />
                                            <span className='nav_name'>{item.title}</span>
                                        </a>
                                    </Link>
                                )}
                                {item.children && (
                                    <ul className='sub_menu'>
                                        {item.children.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={sub.url || '#'} legacyBehavior>
                                                    <a onClick={close}>
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
