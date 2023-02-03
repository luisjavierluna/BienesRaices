export function toBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
    })
}

export function parsearErroresAPI(response: any): string[] {
    const result: string[] = []

    if (response.error) {
        if (typeof response.error === 'string') {
            result.push(response.error)
        } else if (Array.isArray(response.error)) {
            response.error.forEach((value: any) => {
                console.log(response.error)
                result.push(value.description)});
        } else {
            const mapaErrores = response.error.errors
            const entradas = Object.entries(mapaErrores)
            entradas.forEach((arreglo: any[]) => {
                arreglo[1].forEach((mensajeError: any) => {
                    result.push(`${mensajeError}`)
                });
            });
        }
    }

    return result
}