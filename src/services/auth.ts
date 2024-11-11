import apiService from '@utils/axios/configAxios'

export const login = async () => {}

export const getCaptcha = async (): Promise<Blob | null> => {
    try {
        const resp = (await apiService.get(`/generatecaptcha`, {
            responseType: 'blob'
        })) as any
        return new Blob([resp?.data])
    } catch (error: any) {
        if (error?.hidden) {
            throw ''
        } else {
            throw customError(error)
        }
    }
}
