import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  darkMode: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, darkMode }) => {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6 z-50">
          <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className={`${darkMode ? 'text-white' : 'text-black'} h-6 w-6 text-2xl block`}>
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" onClick={onClose}></div>
    </>
  )
}

export default Modal