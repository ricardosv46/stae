import React, { useCallback, useState } from 'react'
import { Button } from '../Button/Button'

interface FileDropZoneProps {
    width?: string
    accept?: string
    labelCancel?: string
    colorButton?: string
    title?: string
    cancelable?: boolean
    onFileDrop: (files: FileList) => void
    onCancel?(): void
}

const FileDropZone: React.FC<FileDropZoneProps> = ({
    width,
    accept = '.xls,.xlsx',
    onFileDrop,
    onCancel,
    labelCancel = 'Cancelar',
    colorButton = 'bg-skyblue',
    title = '',
    cancelable = true
}) => {
    const [isDragging, setIsDragging] = useState(false)
    const [isFileDialogOpen, setIsFileDialogOpen] = useState(false)

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            setIsDragging(false)

            if (!isFileDialogOpen) {
                const files = e.dataTransfer.files
                if (files.length > 0) {
                    onFileDrop(files)
                }
            }
        },
        [onFileDrop, isFileDialogOpen]
    )

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()

        if (!isFileDialogOpen) {
            setIsDragging(true)
        }
    }

    const handleDragLeave = () => {
        if (!isFileDialogOpen) {
            setIsDragging(false)
        }
    }

    const openFileDialog = () => {
        if (isFileDialogOpen) return
        setIsFileDialogOpen(true)

        const input = document.createElement('input')
        input.type = 'file'
        input.accept = accept
        input.onchange = (e: any) => {
            const files = e.target?.files
            if (files && files.length > 0) {
                onFileDrop(files)
            }
            setIsFileDialogOpen(false)
        }

        input.click()

        input.addEventListener('cancel', () => {
            setIsFileDialogOpen(false)
        })
    }

    return (
        <div className={`${width ? width : 'w-[908px]'} flex justify-center flex-col items-center bg-white pb-5`}>
            <div className='border-gray-light border-b pl-8 w-full h-14 flex items-end mb-6'>
                <p>Cargar archivo</p>
            </div>
            <div className='px-4 w-full'>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`bg-[#F2F2F2] border h-[256px] flex flex-col justify-center items-center border-dashed border-gray w-full p-4 rounded-[10px]  text-center ${
                        isDragging ? 'bg-blue-100' : ''
                    }`}>
                    {' '}
                    {title && <div className='font-bold text-lg mb-10' dangerouslySetInnerHTML={{ __html: title }} />}
                    <button onClick={openFileDialog} className='bg-gray-light hover:bg-blue-700 text-black py-[11px] px-9 rounded-[10px]'>
                        Arrastra o selecciona un archivo de tu ordenador
                    </button>
                </div>
            </div>
            {cancelable && (
                <div className='mt-5'>
                    <Button color='blue' title={labelCancel} className='w-[200px] mr-5' onClick={onCancel} />
                </div>
            )}
        </div>
    )
}

export { FileDropZone }
