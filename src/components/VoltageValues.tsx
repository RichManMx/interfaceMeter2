import React, { useState } from 'react'
import { Zap } from 'lucide-react'
import Modal from './Modal'

interface VoltageValuesProps {
  darkMode: boolean
  language: string
  voltage: number
}

const VoltageValues: React.FC<VoltageValuesProps> = ({ darkMode, language, voltage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const getVoltageData = (voltage: number) => {
    switch (voltage) {
      case 12:
        return { current: 11.8, min: 10.5, max: 14.5 }
      case 110:
        return { current: 109.5, min: 100, max: 120 }
      case 220:
        return { current: 218.7, min: 200, max: 240 }
      case 480:
        return { current: 475.2, min: 440, max: 520 }
      default:
        return { current: 0, min: 0, max: 0 }
    }
  }

  const { current, min, max } = getVoltageData(voltage)

  return (
    <>
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} apple-box-shadow cursor-pointer`} onClick={openModal}>
        <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
          <Zap className="mr-2" />
          {language === 'es' ? `Valores ${voltage}V` : `${voltage}V Values`}
        </h2>
        <p className="text-4xl font-bold">{current}V</p>
        <p className="text-sm opacity-70">
          {language === 'es'
            ? `Rango: ${min}V - ${max}V`
            : `Range: ${min}V - ${max}V`}
        </p>
        <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((current - min) / (max - min)) * 100}%` }}
          ></div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={`${voltage}V ${language === 'es' ? 'Detalles' : 'Details'}`} darkMode={darkMode}>
        <div className="space-y-4">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-6`}>
            <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
              <Zap className="mr-2" />
              {language === 'es' ? `Valores ${voltage}V` : `${voltage}V Values`}
            </h2>
            <p className="text-4xl font-bold">{current}V</p>
            <p className="text-sm opacity-70">
              {language === 'es'
                ? `Rango: ${min}V - ${max}V`
                : `Range: ${min}V - ${max}V`}
            </p>
            <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${((current - min) / (max - min)) * 100}%` }}
              ></div>
            </div>
          </div>
          <p>{language === 'es' ? `Voltaje actual: ${current}V` : `Current voltage: ${current}V`}</p>
          <p>{language === 'es' ? `Voltaje mínimo: ${min}V` : `Minimum voltage: ${min}V`}</p>
          <p>{language === 'es' ? `Voltaje máximo: ${max}V` : `Maximum voltage: ${max}V`}</p>
          <p>{language === 'es' ? `Estabilidad: ${((max - min) / voltage * 100).toFixed(2)}%` : `Stability: ${((max - min) / voltage * 100).toFixed(2)}%`}</p>
          <p>{language === 'es' ? `Última fluctuación: hace 5 minutos` : `Last fluctuation: 5 minutes ago`}</p>
          <h3 className="font-semibold mt-4">{language === 'es' ? "Historial de las últimas 24 horas:" : "Last 24 hours history:"}</h3>
          <ul className="list-disc pl-5">
            <li>{language === 'es' ? "Máximo: 12.1V (hace 3 horas)" : "Maximum: 12.1V (3 hours ago)"}</li>
            <li>{language === 'es' ? "Mínimo: 11.5V (hace 8 horas)" : "Minimum: 11.5V (8 hours ago)"}</li>
            <li>{language === 'es' ? "Promedio: 11.8V" : "Average: 11.8V"}</li>
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default VoltageValues