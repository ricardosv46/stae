import { ChangeEvent } from 'react'

export const inputAlpha = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback: Function, hasEdited?: Function) => {
    let pattern = /[^a-zA-Z0-9áéíóúñÑ\- ]+/gi
    if (['telefono', 'telefonoContacto', 'anexo'].includes(e.target.name)) {
        if (e.target.name === 'telefonoContacto') {
            if (e.target.value.charAt(0) && e.target.value.length === 1) {
                pattern = /^[^9]+/gi
                e.target.maxLength = 9
            } else {
                pattern = /[^0-9]+/gi
                e.target.maxLength = 9
            }
        } else if (e.target.name === 'telefono') {
            pattern = /[^0-9]+/gi
            e.target.minLength = 11
            e.target.maxLength = 11
        } else if (e.target.name === 'anexo') {
            pattern = /[^0-9]+/gi
            e.target.maxLength = 5
        }
    } else if (e.target.name === 'direccion') {
        pattern = /[^a-zA-Z0-9\@\-\.\áéíóúñÑ"':\/,;äëïöü°() ]+/gi
    } else if (['nombre', 'nombreCorto', 'contacto', 'nombres', 'apellidoPaterno', 'apellidoMaterno'].includes(e.target.name)) {
        pattern = /[^a-zA-Z0-9\ áéíóúñÑ.'"\-:\/,;äëïöü°()]+/gi
    } else if (['nombres', 'apellidoPaterno', 'apellidoMaterno'].includes(e.target.name)) {
        pattern = /[^a-zA-Z0-9\ áéíóúÁÉÍÓÚñÑ.\-'"äëïöüÄËÏÖÜ°]+/gi
    } else if (['correoContacto', 'correoSoporte', 'correoEnvio'].includes(e.target.name)) {
        pattern = /[^a-zA-Z0-9\@\-\.\_]+/gi
    } else if (['setEleccionSiglaItem', 'EleccionSiglaItem'].includes(e.target.name)) {
        pattern = /[^a-zA-Z0-9]+/gi
    } else if (e.target.name === 'EleccionName') {
        pattern = /[^A-Z0-9\ ÁÉÍÍÓÚÑ.'"\-:\/,;äëïöü°()]+/gi
    } else if (['PhoneNumber', 'telefonoContacto', 'newPhoneNumber'].includes(e.target.name)) {
        pattern = /[^0-9]+/gi
        e.target.maxLength = 11
    } else if (['AnexoNumber', 'newAnexoNumber', 'PhoneAnexo'].includes(e.target.name)) {
        pattern = /[^0-9]+/gi
        e.target.value = e.target.value.replace(/^0+/gm, '')
        if (e.target.value.charAt(0) === '0') e.target.value = e.target.value.substring(1)
        e.target.maxLength = 5
    } else if (e.target.name === 'fechaFinEntregaPin') {
        pattern = /[^0-9\-\.\_\/\:\ ]+/gi
    } else if (e.target.name === 'horarioAtencionSoporte') {
        pattern = /[^a-zA-Z0-9\ áéíóúñÑ.\-'":\/,;äëïöü°()]+/gi
    } else if (['PhoneAnexo', 'newPhoneAnexo'].includes(e.target.name)) {
        pattern = /[^0-9]+/gi
        e.target.maxLength = 5
        e.target.value = e.target.value.replace(/^0+/gm, '')
        if (e.target.value.charAt(0) === '0') e.target.value = e.target.value.substring(1)
    }

    const cursorPosition = e.target.selectionStart || 0
    let value = e.target.value
        ? e.target.value
              .replace(pattern, '')
              .replace(/\s{3,}/g, '  ')
              .trimStart()
        : ''

    if (hasEdited) {
        hasEdited()
    }

    if (e.target.value !== value) {
        e.target.value = value
        e.target.setSelectionRange(cursorPosition - 1, cursorPosition - 1)
    }

    if (typeof callback === 'function') {
        return callback(e)
    }
}

export const cleanSpace = (value: string) => {
    return value.replace(/\s{2,}/g, ' ').trim()
}
