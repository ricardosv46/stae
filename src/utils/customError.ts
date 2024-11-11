const customError = (error: any, str?: string): string => {
    return error?.response?.data?.error ?? error?.response?.data?.errorMessage ?? error?.message ?? error ?? str ?? ''
}
