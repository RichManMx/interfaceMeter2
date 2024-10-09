import React, { useState } from 'react'
import { Wifi } from 'lucide-react'
import Modal from './Modal'

interface OnlineMedidoresProps {
  darkMode: boolean
  language: string
}

const OnlineMedidores: React.FC<OnlineMedidoresProps> = ({ darkMode, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onlineCount = 42
  const totalCount = 50

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} apple-box-shadow cursor-pointer`} onClick={openModal}>
        <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
          <Wifi className="mr-2" />
          {language === 'es' ? 'Medidores en Línea' : 'Online Meters'}
        </h2>
        <p className="text-4xl font-bold">{onlineCount}/{totalCount}</p>
        <p className="text-sm opacity-70">
          {language === 'es'
            ? `${onlineCount} medidores conectados de ${totalCount}`
            : `${onlineCount} meters connected out of ${totalCount}`}
        </p>
        <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(onlineCount / totalCount) * 100}%` }}></div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={language === 'es' ? "Detalles de Medidores en Línea" : "Online Meters Details"} darkMode={darkMode}>
        <div className="space-y-4">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-6`}>
            <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
              <Wifi className="mr-2" />
              {language === 'es' ? 'Medidores en Línea' : 'Online Meters'}
            </h2>
            <p className="text-4xl font-bold">{onlineCount}/{totalCount}</p>
            <p className="text-sm opacity-70">
              {language === 'es'
                ? `${onlineCount} medidores conectados de ${totalCount}`
                : `${onlineCount} meters connected out of ${totalCount}`}
            </p>
            <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(onlineCount / totalCount) * 100}%` }}></div>
            </div>
          </div>
          <p>{language === 'es' ? `Medidores en línea: ${onlineCount}` : `Online meters: ${onlineCount}`}</p>
          <p>{language === 'es' ? `Medidores offline: ${totalCount - onlineCount}` : `Offline meters: ${totalCount - onlineCount}`}</p>
          <p>{language === 'es' ? "Último medidor conectado: ID 1234 (hace 5 minutos)" : "Last connected meter: ID 1234 (5 minutes ago)"}</p>
          <p>{language === 'es' ? "Medidor más antiguo en línea: ID 5678 (conectado por 72 horas)" : "Oldest online meter: ID 5678 (connected for 72 hours)"}</p>
          <p>{language === 'es' ? "Tasa de conexión: 98% en las últimas 24 horas" : "Connection rate: 98% in the last 24 hours"}</p>
          <h3 className="font-semibold mt-4">{language === 'es' ? "Desglose por tipo de medidor:" : "Breakdown by meter type:"}</h3>
          <ul className="list-disc pl-5">
            <li>{language === 'es' ? "Residencial: 30" : "Residential: 30"}</li>
            <li>{language === 'es' ? "Comercial: 10" : "Commercial: 10"}</li>
            <li>{language === 'es' ? "Industrial: 2" : "Industrial: 2"}</li>
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default OnlineMedidores