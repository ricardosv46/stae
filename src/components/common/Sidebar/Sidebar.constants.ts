export interface ISidebarMenu {
    title: string
    icon?: string
    url?: string
    params?: any
    selected?: boolean
    separator?: boolean
    expand?: boolean
    children?: ISidebarMenu[]
    roles?: string[]
}

export const menuList: ISidebarMenu[] = [
    {
        title: 'Inicio',
        icon: '/assets/icons/ico_inicio.svg',
        url: '/'
    },
    {
        title: 'Monitoreo',
        icon: '/assets/icons/ico_monitoreo.svg',
        roles: ['entity_representative', 'administrator'],
        children: [
            {
                title: 'Ubigeo',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '/monitoreo/ubigeo',
                params: { typeClass: '1' }
            },
            {
                title: 'Mesa',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '/monitoreo/mesa',
                params: { typeClass: '3' }
            }
        ]
    },
    {
        title: 'Gestión',
        icon: '/assets/icons/ico_gestion.svg',
        roles: ['entity_representative', 'administrator'],
        children: [
            {
                title: 'Puesta a cero',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '/gestion/puesta-cero',
                params: { typeClass: '1' }
            },
            {
                title: 'Usuarios',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '3' }
            },
            {
                title: 'Incidencias',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '3' }
            },
            {
                title: 'Logs PKI',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '3' }
            }
        ]
    },
    {
        title: 'Reportes',
        icon: '/assets/icons/ico_reportes.svg',
        roles: ['entity_representative', 'administrator'],
        children: [
            {
                title: 'General',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '1' }
            },
            {
                title: 'Archivos transmitidos',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '3' }
            },
            {
                title: 'Incidencias',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '',
                params: { typeClass: '3' }
            }
        ]
    },
    {
        title: 'Microformas',
        icon: '/assets/icons/ico_microformas.svg',
        roles: ['entity_representative', 'administrator'],
        children: [
            {
                title: 'Metadata',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '/microformas/metadata',
                params: { typeClass: '1' }
            },
            {
                title: 'Log de bitácora',
                icon: '/assets/icons/ico_menu_clase.svg',
                url: '/microformas/bitacora',
                params: { typeClass: '3' }
            }
        ]
    }
]
