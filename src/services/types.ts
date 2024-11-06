export type Response<T> = {
    success: boolean
    status: null | number
    message: string
    body: T
}

export type ResponseShort = {
    success: boolean
    message: string
    status?: number
}

export interface LoginResponse {
    token: string
    status: boolean
    success: boolean
    userdata: UserSession
    message: string
}

export interface UserSession {
    idUsuario: string
    codigoProceso: string
    proceso?: ProcesoElectoral
}

export interface GetLastResponse {
    resumen: null | Resumen
    id: number
    nombre: string
    validacion: string
    tipo: string
    cantidad: number
    fecha: number
    orden_entrega: number
    carga_revision_result: null | UploadPadronResponse
    validacion_result: null | Validacion
    carga_revision: string
    estado_comparacion: string
    cantidad_electores_generados: number
}

export interface UploadPadronRequest {
    padron: File
    idEntrega: number
}

export interface UploadPadronResponse {
    registros_validos: number
    fecha: number | string
    registros_dni_validos: number
    orden_entrega: number
    registros_otro_validos: number
    total_registros: number
    registros_invalidos: number
}

export interface CleanUploadPadronRequest {
    idEntrega: number
}

export interface PercentageRequest {
    entrega: number
    tipo: number
}

export interface ComparePadronRequest {
    idEntrega: number
}

export interface CorrectedRequest {
    idEntrega: number
}
export interface CorrectedResponse {
    cantidad: number
    idEntrega: number
}

export interface ListResponse {
    id: number
    orden: number
    nombre: string
    cargaRevision: string
    validacion: string
    tipo: string
    cantidad: number
    fecha: number
    numErrores: number
}
export interface Resumen {
    registros_total_subsanar: { cantidad: number; porcentaje: number }
    registros_errores: { cantidad: number; porcentaje: number }
    registros_dni_cancelados: { cantidad: number; porcentaje: number }
    registros_validos_otro: { cantidad: number; porcentaje: number }
    registros_total: { cantidad: number; porcentaje: number }
    registros_validos_dni: { cantidad: number; porcentaje: number }
    registros_dni_errados: { cantidad: number; porcentaje: number }
    registros_validos_total: { cantidad: number; porcentaje: number }
}

export interface Validacion {
    total_validados: number
    dni_cancelado: number
    dni_validos: number
    dni_no_validos: number
    dni_errado: number
}
export interface ComparePadronResponse {
    validacion: Validacion
    orden_entrega: number
    resumen: Resumen
    carga: {
        registros_validos: number
        fecha: number
        registros_dni_validos: number
        registros_otro_validos: number
        total_registros: number
        registros_invalidos: number
    }
}

export interface cleanUploadPadronRequest {
    token: string
    idEntrega: number
}

export interface ListaProcesoPinesRequest {
    idUsuario: string
}

export interface AvanceProcesoPinesRequest {
    codConProBatch: number
}

export interface GenerarEnvioPinesRequest {
    codTarea: number
}
export interface GenerarReEnvioPinesRequest {
    codTarea: number
    codConProBatch: number
}

export interface AvanceProcesoBatch {
    codigo: string
    tipoProceso: string
    fechaInicio: number
    fechaFin: number
    etapaDescripcion: string
    etapa: string
    indicadorFinProceso: string
    totalRegistrosProcesar: number
    registrosProcesados: number
    registrosCorrectos: number
    registrosError: number
    codigoTablaId: number
}

export interface AvanceProcesoPinesResponse {
    controlProcesoBatch: AvanceProcesoBatch
}
export interface ProcesoGenerarPinesResponse {
    codTarGenPin: number
    codConProGenPin: number
    codConProDisEle: number
    codConProEnvCorreo: number
    view: string
}

export interface ProcesoEnviarPinesResponse {
    codConProDisEle: number
    codConProEnvCorreo: number
}

export interface ItemProcesoResponse {
    cantidadElectores: number
    codigo: string
    controlProcesoDisEleId: number
    controlProcesoEnvCorreoId: number
    controlProcesoGenPinId: number
    distribucionStockId: number
    dnie: number
    enviados: number
    estadoProcesoDisEle: string
    estadoProcesoEnvCorreo: string
    existeParams: number
    fechaFinProcesoDisEle: number
    fechaFinProcesoEnvCorreo: number
    fechaFinProcesoGenPin: number
    noEnviados: number
    nombre: string
    pinPorGenerar: number
    pinPorDistribuir: number
    tareaGeneracionPinId: number
}
export interface Recordatorio {
    item: number
    codigo: string
    nombre: string
    cantidadElectores: number
    enviados: number
    noEnviados: number
    dnie: number
    fechaCreacion: number
    controlProcesoRecordatorio: number
    estadoProcesoRecordatorio: string
    fechaFinProcesoRecordatorio: null
}

export interface ReportePinesRequest {
    codigoProceso: string
}

export interface ProcesoRequest {
    codigoProceso: string
}

export enum ROLES {
    ROL_EMP = 'OPERADOREMP',
    ROL_PAD = 'OPERADORPAD',
    ROL_CRE = 'OPERADORCRE',
    ROL_JOR = 'OPERADORJOR',
    ROL_CED = 'OPERADORCED',
    ROL_ADM = 'OPERADORADM'
}

export interface ProcesoElectoral {
    codigo: string
    nombre: string
    nombreCorto?: string
    padronCodigo?: number
}

export interface TipoInstitucion {
    codigo: string
    valor: string
    order?: number
}

export interface InstitucionCombo {
    codigo: number
    nombre: string
}

export interface InstitucionRequest {
    codigo?: number
    nombre: string
    tipoInstitucion: string
    direccion: string
    telefono: string
    anexo: string
    contacto: string
    telefonoContacto: string
    correoContacto: string
    nombreUsuario: string | null
}

export interface InstitucionResponse {
    id?: number | null
    codigo: string
    nombre: string
    tipo: string
    direccion: string
    telefono: string
    anexo: string
    contacto: string
    telefonoContacto: string
    correoContacto: string
    usuario: string | null
    editar?: number
    eliminar?: number
    fileName?: string
    estComparacionPadron?: string
}

export interface ProcesoElectoralItem {
    orden: number
    descripcion: string
    sigla: string
}
export interface ProcesoElectoralRequest {
    codigo?: string
    nombre: string
    nombreCorto: string
    institucionCodigo: number
    isSimulacro: string
    elecciones: Array<ProcesoElectoralItem>
    nombreUsuario: string
    padronCodigo?: number
    fechaCreacion?: string | undefined
    fechaFinEntregaPin?: string
    fechaIniEntregaPin?: string
    fechaVotacion: string
}

export interface UploadLogoInstRequest {
    logo: File
    codInstitucion: number
}

export interface UploadLogoInstResponse {
    success: boolean
    message: string
}

interface Envios {
    no_enviado: number
    enviado: number
    fallido: number
}

export interface EstadoCorreosResponse {
    estado: string
    proceso: string
    numero_electores: number
    envios: Envios
}

export interface Anexo {
    codigo: number
    anexo: string
}
export interface Telefono {
    id: string
    codigo: number
    telefono: string
    anexos: Array<Anexo>
}

export interface ProcesoElectoralParamDataRequest {
    codigo?: number
    codigoProceso: string
    fechaVotacion: string
    fechaFinVotacion: string
    fechaInicioPractica: string
    fechaFinPractica: string
    fechaInicioSoporte: string
    horaInicioVotacion: string
    horaFinVotacion: string
    horaInicioPractica: string
    horaFinPractica: string
    horaInicioSoporte: string
    intentosPermitidos: number
    tiempoSesion: string
    mostrarEnlace: boolean
    olvideClave: boolean
    mostrarEnlaceSimulacro: boolean
    mostrarEnlacePractica: boolean
    correoSoporte: string
    horarioAtencionSoporte: string
    telefonos: Array<Telefono>
    visualizarResumen: boolean
    visualizarDetalle: boolean
    visualizarDescarga: boolean
    permitirEnvio: boolean
    enviarCorreoCada: string
    correoEnvio: string
    intentosFallidos: number
    fechaIniEntregaPin?: string
    fechaFinEntregaPin: number
    fechaFinEntregaPines?: string | number | undefined
    fechaCreacion?: string

    fechaIniMigraProceso?: string | number | undefined
    fechaFinMigraProceso?: string | number | undefined
}

export interface ProcesoInstitucionItem {
    esCierreVotacionActivo: boolean
    codigo: string
    entregaPinMasiva: boolean
    institucionCodigo: number
    isSimulacro: boolean
    nombre: string
    nombreCorto: string
    padronCodigo: string
    reqConfInscripcion: boolean
    reqEmail: boolean
    existeParams: number
    editar: number
    estActCroCedElectoral: string
    estActCroIniciaJornada: string
    estComparacionPadron: string
}

export interface UsuariosGeneradosProcesoInstitucionItem {
    codigo: string
    nombreProceso: string
    nombreInstitucion: string
    registros: number
    noGenerados: number
    generados: number
    carga: boolean
    generacion: boolean
    correosEnviados: boolean
    fechaCargaOperadores: string
}

export interface OperadorSoporte {
    nombres: string
    apeMaterno: string
    apePaterno: string
    correo: string
    dni: string
    estado: string
}

export interface Personero {
    codigo: number
    tipoDocumento: {
        codigo: string
        descripcion: string
    }
    numeroDocumento: string
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    email: string
    recibeReporteParticipacion: string
}

export interface Member extends Personero {
    edit: string
    presente: boolean
    horaIngreso: string
    horaSalida: string
    cargo: {
        codigo: string
        nombre: string
    }
}

export interface ResponseJornadaValidate {
    migracion: boolean
    jornada: boolean
    cierre: boolean
    resultados: boolean
}

export interface ResponseReports {
    nombre: string
    generacion: string
    fecha: string
    estado: boolean
}

export interface JornadaValidate {
    codigoModulo: string
    cumpleCondiciones: boolean
}

export interface ResponseMember {
    presidente: Member
    secretario: Member
    tercer_miembro: Member
    primer_suplente: Member
    segundo_suplente: Member
    tercer_suplente: Member
}

export interface ResponseCiudadano {
    dni: string
    apellidoPaterno: string
    apellidoMaterno: string
    nombres: string
}

export interface RequestCreateMember {
    form: {
        codigoTipoDocumento: string
        apellidoPaterno: string
        apellidoMaterno: string
        nombres: string
        dni: string
        email: string
        codigoCargo: string
        recibeReporteParticipacion: string
    }
}

export interface RequestCreatePersonero {
    codigo: string
    form: {
        codigoTipoDocumento: string
        apellidoPaterno: string
        apellidoMaterno: string
        nombres: string
        dni: string
        email: string
    }
}

export interface RequestUpdateMember extends RequestCreateMember {
    codigo: string
}

export interface RequestUpdateHourMember {
    codigo: string
    form: {
        horaIngreso?: string
        horaSalida?: string
    }
}

export interface Candidato {
    codigo: string
    ordenEleccion: number
    eleccion: string
    departamento: string
    capitulo: string | null
    nombreLista: string | null
    posicion: number
    personero: Personero
}
export interface EstadoCedulaElectoral {
    codigoProceso?: string
    estadoCedulaElectoral?: string
    verPrimeraCedula?: string
    estado1ver?: string
    insPrimeraCedula?: string
    estado1ins?: string
    verSegundaCedula?: string
    estado2ver?: string
    insSegundaCedula?: string
    estado2ins?: string
    verTerceraCedula?: string
    estado3ver?: string
    insTerceraCedula?: string
    estado3ins?: string
}

export interface ActividadItem {
    orden: number
    nombre: string
    estado: string
    fechas: string | null
    hora: string | null
}

export interface MigrationStatus {
    etapa: string
    etapa_desc: string
    fecha_fin: number | null
    fecha_ini: number | null
    proceso: string
    proceso_desc: string
    registros: number
    avance: number
}
export interface CargaPadronBatch {
    codProcesoValidar: number
    codProcesoVerificar: number
}
export interface CargaPadronAsync {
    etapa: string
    error: string | null
    cod_error: string | null
    flag_fin_proceso: string
    total_registros: number
    num_registros_procesados: number
    num_registros_correctos: number
    num_registros_error: number
}

export interface MigrationVerify {
    proceso: string
    correcto: boolean
    mensaje: string
}

export interface CargaDesbloqueoAsync {
    id: string
    etapa: string
    error: string | null
    cod_error: string | null
    etapa_descripcion: string | null
    flag_fin_proceso: string
    total_registros: number
    num_registros_procesados: number
    num_registros_correctos: number
    num_registros_error: number
}
