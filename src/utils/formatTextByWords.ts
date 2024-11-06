export const formatTextByWords = (text: string, num: number): string => {
    if (!text) return ''
    const words = text?.split(' ')
    let formattedText: string[] = []

    for (const word of words) {
        if (word.length > num) {
            let sliceInit = 0
            let sliceEnd = num

            while (sliceInit < word.length) {
                const letters = word.slice(sliceInit, sliceEnd)
                formattedText.push(letters)

                sliceInit += num
                sliceEnd += num

                if (sliceEnd >= word.length) {
                    formattedText.push('\n')
                }
            }
        } else {
            formattedText.push(word, '\n')
        }
    }

    return formattedText.join(' ')
}
