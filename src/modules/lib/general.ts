const formatDateFull = (time: number) => {
    const date = new Date(time)
    const month = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Setiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ]
    return `${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()}`
}
const formatDate = (time: number, withHour = true) => {
    const date = new Date(time)
    const ampm = date.getHours() > 12 ? 'pm' : 'am'
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    }
    return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()} - ${String(
        date.getHours()
    )}:${String(date.getMinutes()).slice(-2)} ${ampm}`
}

const localeDate = (strDate: string | number | undefined) => {
    if (strDate) {
        const date = new Date(strDate)
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()} ${String(
            '0' + date.getHours()
        ).slice(-2)}:${String('0' + date.getMinutes()).slice(-2)}:${String('0' + date.getSeconds()).slice(-2)}`
    } else {
        return new Date().toLocaleDateString()
    }
}

const isoDate = (strDate: string) => {
    const date = new Date(strDate)
    return date.toISOString().split('T')[0]
}

const getFormatDateNow = (withHour = true) => {
    const date = new Date()
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    } else {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(
            -2
        )}/${date.getFullYear()}  ${String(date.getHours())}:${String(date.getMinutes())}:${String(date.getSeconds())}`
    }
}

const getFormatDate = (dateLimit: Date, withHour = true) => {
    const date = new Date(dateLimit.setDate(dateLimit.getDate() + 1))
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    } else {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(
            -2
        )}/${date.getFullYear()}  ${String(date.getHours())}:${String(date.getMinutes())}:${String(date.getSeconds())}`
    }
}

const getFormatDateMax = (dateLimit: String, withHour = true) => {
    let newDate: any
    if (dateLimit) {
        const dateLimitArr = dateLimit.split('/')
        newDate = new Date(dateLimitArr[1] + '-' + dateLimitArr[0] + '-' + dateLimitArr[2])
    } else {
        newDate = new Date('2999-12-31')
    }

    const date = new Date(newDate.setDate(newDate.getDate() - 1))
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    } else {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(
            -2
        )}/${date.getFullYear()}  ${String(date.getHours())}:${String(date.getMinutes())}:${String(date.getSeconds())}`
    }
}

const dateMinDefault = (withHour = true) => {
    let dateMin = new Date('1999-12-31')

    const date = new Date(dateMin.setDate(dateMin.getDate() + 1))
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    } else {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(
            -2
        )}/${date.getFullYear()}  ${String(date.getHours())}:${String(date.getMinutes())}:${String(date.getSeconds())}`
    }
}

const dateMaxDefault = (withHour = true) => {
    let dateMin = new Date('2999-12-31')

    const date = new Date(dateMin.setDate(dateMin.getDate() - 1))
    if (!withHour) {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    } else {
        return `${('0' + String(date.getDate())).slice(-2)}/${('0' + String(date.getMonth() + 1)).slice(
            -2
        )}/${date.getFullYear()}  ${String(date.getHours())}:${String(date.getMinutes())}:${String(date.getSeconds())}`
    }
}

const fmtDate = (dt: string, format: string) => {
    if (!dt) dt = new Date().toISOString().split('T')[0]
    const strip_hour = dt.split(' ')[0]
    if (strip_hour.indexOf('-') !== -1) return strip_hour
    const dtArry: string[] = strip_hour.split('/')

    if (Array.isArray(dtArry) === false) return dt
    if (format === 'dd/mm/yyyy') {
        return dtArry[2] + '-' + dtArry[1] + '-' + dtArry[0]
    } else {
        return dt
    }
}

export {
    formatDate,
    localeDate,
    isoDate,
    getFormatDateNow,
    getFormatDate,
    getFormatDateMax,
    dateMinDefault,
    dateMaxDefault,
    fmtDate,
    formatDateFull
}
