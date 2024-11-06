import { validateEmail } from './validateEmail'

export const errorNombre = (value: string) => {
    if (value.length === 0) {
        return ''
    }

    if (value.length < 3) {
        return 'El nombre de la institución debe tener entre 3 y 350 caracteres.'
    }

    return ''
}

export const errorTipoInstitucion = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (!value) {
        return 'Debe seleccionar el tipo de institución.'
    }

    return ''
}

export const errorDireccion = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (value.length < 3) {
        return 'La dirección debe tener entre 3 y 250 caracteres.'
    }
    return ''
}

export const errorTelefono = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (
        value.match(/^(5100)0{7}$/) ||
        value.match(/^(5100)\d{7}$/) ||
        value.match(/^(5101)0{7}$/) ||
        value.match(/^(51)\d{2}0{7}$/) ||
        value.match(/^(?!51)\d{11}$/) ||
        value === '' ||
        value.length < 11
    ) {
        return 'Debe ingresar un teléfono fijo.'
    }
    return ''
}

export const errorAnexo = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (
        value.substr(0,1) == '0' ||
        value === ''
    ) {
        return 'Debe ingresar un anexo valido.'
    }
    return ''
}


export const errorContacto = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (value.length < 3) {
        return 'El nombre de contacto debe tener entre 3 y 100 caracteres.'
    }
    return ''
}

export const errorTelefonoContacto = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (value === '999999999') {
        return 'Debe ingresar un teléfono celular válido.'
    }
    if (value === '900000000') {
        return 'Debe ingresar un teléfono celular válido.'
    }
    if (value.charAt(0) !== '9') {
        return 'El número de celular debe iniciar con 9 y tener 9 dígitos.'
    } else if (!/^\d{9}$/g.test(value) || /^(9)0{8}$/g.test(value) || /^9{9}$/g.test(value)) {
        return 'El número de celular debe iniciar con 9 y tener 9 dígitos.'
    } else if (value.includes('-') && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
        return 'El número de celular debe iniciar con 9 y tener 9 dígitos.'
    }
    return ''
}

export const errorCorreoContacto = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (!validateEmail(value)) {
        return 'Debe ingresar un correo de contacto válido.'
    }
    return ''
}

export const errorNombreCorto = (value: string) => {
    if (value?.length === 0) {
        return ''
    }
    if (value?.length < 3) {
        return 'El nombre corto del proceso debe tener entre 3 y 100 caracteres.'
    }
    return ''
}

export const errorNombreProceso = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (value?.length < 10) {
        return 'El nombre del proceso debe tener entre 10 y 350 caracteres.'
    }
    return ''
}
export const errorElecciones = (value: string) => {
    if (value?.length === 0) {
        return ''
    }
    if (value?.length < 3) {
        return 'Las elecciones deben tener entre 3 y 100 caracteres.'
    }
    return ''
}

export const errorSigla = (value: string) => {
    // if (value.length === 0) {
    //     return ''
    // }
    if (value?.length < 1) {
        return 'Las sigla debe tener entre 1 y 5 caracteres.'
    }
    return ''
}

export const errorCorreoSoporte = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (!validateEmail(value)) {
        return 'Debe ingresar un correo de soporte válido.'
    }
    return ''
}

export const errorHorarioAtencionSoporte = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (value?.length < 5) {
        return 'El horario de atención debe tener entre 5 y 200 caracteres.'
    }
    return ''
}

export const errorCorreoEnvio = (value: string) => {
    if (value.length === 0) {
        return ''
    }
    if (!validateEmail(value)) {
        return 'Debe ingresar un correo de envío válido.'
    }
    return ''
}

export const errorTelefonoSoporte = (value: string, telefonos: string[]) => {
    let isValidNumber = true
    if (value.length === 0) {
        return ''
    }
    if (value.charAt(0) === '9') {
        isValidNumber = /^\d{9}$/g.test(value) && !/^(9)0{8}$/g.test(value) && !/^(9){9}$/g.test(value)
    } else {
        isValidNumber = /^(51){1}\d{9}$/g.test(value) && !/^(51)0{9}$/g.test(value)
    }

    if (!isValidNumber) {
        return 'Debe ingresar un teléfono fijo o celular válido.'
    }

    if (telefonos.includes(value)) {
        return `El número telefónico  ${value} ha sido ingresado anteriormente.`
    }
    return ''
}
