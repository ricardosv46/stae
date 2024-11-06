export const generatedTotalPages = (items: number, itemporpage: number) => {
    if (!items) {
        return []
    }

    const n = Math.ceil(items / itemporpage)
    return Array(n)
        .fill(null)
        .map((_, i) => i + 1)
}
