export const getVisiblePages = (totalPages: number, pageIndex: number) => {
    const maxVisible = 5
    const middleIndex = Math.floor(maxVisible / 2)

    if (totalPages <= maxVisible) {
        return Array.from({ length: totalPages }, (_, i) => i)
    }

    let start = Math.max(0, pageIndex - middleIndex)
    let end = Math.min(totalPages, start + maxVisible)

    if (end - start < maxVisible) {
        start = Math.max(0, end - maxVisible)
    }

    return Array.from({ length: end - start }, (_, i) => start + i)
}
