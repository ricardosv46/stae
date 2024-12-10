import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'login-bg': "url('/assets/images/fondo_transmision.jpg')"
            },
            colors: {
                blue: '#003770',
                darkblue: '#003770',
                skyblue: '#0073cf',
                yellow: '#FFB81C',
                green: '#76BD43',
                'green-light': '#7EC04E',
                'light-skyblue': '#AAEFF6',
                'extra-light-skyblue': '#d9ecf9',
                gray: '#BCBCBC',
                'gray-700': 'rgb(107 114 128)',
                'gray-light': '#BDBDBD',
                'gray-extra-light': '#E0E0E0',
                'disabled-text': '#F2F2F2',
                red: '#e3002b'
            }
        }
    },
    plugins: []
}
export default config
