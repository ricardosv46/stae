import apiService from './axios/configAxios'

const customError = (error: any, str?: string): string => {
    return error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? error ?? str ?? ''
}

const api = {
    getCaptcha: async (): Promise<Blob | null> => {
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
    },
    monitoreo: {
        obtenerOdpe: async () => {
            try {
                const { data } = await apiService.get(`/generico/obtenerOdpeXFiltro`)
                return data
            } catch (error: any) {
                if (error?.hidden) {
                    throw ''
                } else {
                    throw customError(error)
                }
            }
        },
        obtenerDepartamentosPorOdpe: async ({idOdpe}: any) => {
            try {
                const { data } = await apiService.get(`/generico/obtenerDepartamentosPorIdOdpe/${idOdpe}`)
                return data
            } catch (error: any) {
                if (error?.hidden) {
                    throw ''
                } else {
                    throw customError(error)
                }
            }
        },
        obtenerProvinciasPorDepartamento: async ({idOdpe, departamento}: any) => {
            try {
                const { data } = await apiService.get(`/generico/obtenerProvinciasPorDepartamento/1/${idOdpe}/${departamento}`)
                return data
            } catch (error: any) {
                if (error?.hidden) {
                    throw ''
                } else {
                    throw customError(error)
                }
            }
        },
        obtenerDistritosPorProvincia: async ({idOdpe, departamento, provincia}: any) => {
            try {
                const { data } = await apiService.get(`/generico/obtenerDistritosPorProvincia/1/${idOdpe}/${departamento}/${provincia}`)
                return data
            } catch (error: any) {
                if (error?.hidden) {
                    throw ''
                } else {
                    throw customError(error)
                }
            }
        },
        obtenerLocalesPorUbigeo: async ({ubigeo}: any) => {
            try {
                const { data } = await apiService.get(`/generico/obtenerLocalesPorUbigeo/${ubigeo}`)
                return data
            } catch (error: any) {
                if (error?.hidden) {
                    throw ''
                } else {
                    throw customError(error)
                }
            }
        }

    }
}

export default api
