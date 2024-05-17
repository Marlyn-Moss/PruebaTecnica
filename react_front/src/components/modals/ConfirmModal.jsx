
function ConfirmModal(props) {
    const {
        options
    } = props

    const {
        title,
        text,
        visible,
        style,
        showIcon,
        onClose,
        onConfirm
    } = options

    const handleOnAction = () => {
        onConfirm()
    }

    const handleOnClose = () => {
        onClose()
    }

    if (visible === false) return <></>

    const RenderIcon = () => {
        if (showIcon === false)
            return <div className='p-2' />

        return (
            <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
        )
    }

    if (style === 'danger') {
        return (
            <div id="confirmModal" tabIndex="-1" className="absolute inset-0 m-auto z-50 flex justify-center items-center w-full p-4 md:inset-0 h-[calc(99%-1rem)] max-h-full">
                <div className="flex justify-center max-w-2xl max-h-full">
                    <div className="relative p-4 text-center bg-slate-500 rounded shadow dark:bg-gray-800 sm:p-5">
                        <div className='flex flex-row items-center'>
                            <span className='text-left text-white text-sm font-normal'>{title ? title : 'NOTIFICACION'}</span>
                            <button
                                onClick={handleOnClose}
                                type="button"
                                className="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <RenderIcon />
                        <p className="mb-6 text-white text-sm dark:text-gray-300">{text}</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button type="button" onClick={handleOnClose} className="py-2 px-3 text-sm text-gray-500 bg-slate-100 rounded hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancelar
                            </button>
                            <button type="button" onClick={handleOnAction} className="py-2 px-3 text-sm text-center text-white bg-red-500 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Si, Estoy seguro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="confirmModal" tabIndex="-1" className="absolute inset-0 m-auto z-50 flex justify-center items-center w-full p-4 md:inset-0 h-[calc(99%-1rem)] max-h-full">
            <div className="flex justify-center max-w-2xl max-h-full">
                <div className="relative p-4 text-center bg-slate-500 rounded shadow dark:bg-gray-800 sm:p-5">
                    <div className='flex flex-row items-center'>
                        <span className='text-left text-white text-sm font-normal'>{title ? title : 'NOTIFICACION'}</span>
                        <button
                            onClick={handleOnClose}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <RenderIcon />
                    <p className="mb-6 text-white text-sm dark:text-gray-300">{text}</p>
                    <div className="flex justify-center items-center space-x-4">
                        <button type="button" onClick={handleOnClose} className="py-2 px-3 text-sm text-gray-500 bg-slate-200 rounded hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, cancelar
                        </button>
                        <button type="button" onClick={handleOnAction} className="py-2 px-3 text-sm text-center text-white bg-sky-500 rounded hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                            Si, Estoy seguro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;