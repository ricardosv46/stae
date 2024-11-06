
import apiService from './axios/configAxios'

import {
    AvanceProcesoPinesRequest,
    AvanceProcesoPinesResponse,
    CargaDesbloqueoAsync,
    CargaPadronAsync,
    CargaPadronBatch,
    CleanUploadPadronRequest,
    ComparePadronRequest,
    ComparePadronResponse,
    CorrectedRequest,
    CorrectedResponse,
    EstadoCedulaElectoral,
    EstadoCorreosResponse,
    GenerarEnvioPinesRequest,
    GenerarReEnvioPinesRequest,
    GetLastResponse,
    InstitucionCombo,
    InstitucionRequest,
    InstitucionResponse,
    ItemProcesoResponse,
    JornadaValidate,
    ListResponse,
    LoginResponse,
    Member,
    MigrationStatus,
    MigrationVerify,
    OperadorSoporte,
    PercentageRequest,
    ProcesoElectoral,
    ProcesoElectoralParamDataRequest,
    ProcesoElectoralRequest,
    ProcesoGenerarPinesResponse,
    ProcesoInstitucionItem,
    ProcesoRequest,
    Recordatorio,
    ReportePinesRequest,
    RequestCreateMember,
    RequestCreatePersonero,
    RequestUpdateHourMember,
    RequestUpdateMember,
    Response,
    ResponseCiudadano,
    ResponseJornadaValidate,
    ResponseMember,
    ResponseReports,
    ResponseShort,
    TipoInstitucion,
    UploadLogoInstRequest,
    UploadLogoInstResponse,
    UploadPadronRequest,
    UploadPadronResponse,
    UsuariosGeneradosProcesoInstitucionItem
} from './types'

export const api = {
    login: async (user: string, pass: string, process: string, captcha: string, cf: string): Promise<LoginResponse> => {
        try {
            const params = new URLSearchParams()
            params.append('user', user)
            params.append('pass', pass)
            params.append('captcha', captcha)
            params.append('codProceso', process)
            const { data } = await apiService.post(`/login`, params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'token-c': cf
                }
            })
            if (!data?.success) {
                throw data
            }
            let resProceso = null
            if (process.trim().length > 0) {
                resProceso = await api.middleware.obtenerProceso(data?.token)
            }

            const userdata = { idUsuario: user, codigoProceso: process, proceso: resProceso }
            localStorage.setItem('token', data?.token)
            localStorage.setItem('session_user', JSON.stringify(userdata))

            return { ...data, userdata }
        } catch (error: any) {
            throw error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? 'Login inválido'
        }
    },
    middleware: {
        captcha: async (callBack: Function): Promise<Blob | null> => {
            try {
                const resp = (await apiService.get(`/generatecaptcha`, {
                    responseType: 'blob'
                })) as any
                callBack(resp?.headers?.get('token-c'))
                return new Blob([resp?.data])
            } catch (error: any) {
                throw error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? ''
            }
        },
        procesos: async (usuario: string): Promise<Array<ProcesoElectoral>> => {
            try {
                const { data } = await apiService.get(`/electoral/listar/combo/${usuario}`)
                return data
            } catch (error: any) {
                throw error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? ''
            }
        },
        obtenerProceso: async (token: string): Promise<ProcesoElectoral> => {
            try {
                const { data } = await apiService.get(`/jornadaelectoral/obtenerProceso`, {
                    headers: {
                        Authorization: token
                    }
                })
                return data
            } catch (error: any) {
                throw error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? ''
            }
        }
    }
}
