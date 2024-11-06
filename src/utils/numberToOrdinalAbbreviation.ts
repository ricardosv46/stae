const numberToOrdinalAbbreviation = (number: number): string => {
    if (number < 1) {
        return 'Número fuera de rango'
    }

    const units = ['er', 'do', 'ro']
    const tens = Math.floor((number % 100) / 10)
    const unit = number % 10

    if (number === 11) {
        return number + 'avo'
    } else if (number === 12) {
        return number + 'avo'
    } else if (unit === 0 || (unit >= 4 && unit <= 9) || (tens >= 2 && unit >= 2)) {
        return number + 'mo'
    } else {
        return number + units[unit - 1]
    }
}

export { numberToOrdinalAbbreviation }
