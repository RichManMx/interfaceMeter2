import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Modal from './Modal'

const data = [
  { name: '00:00', value: 400 },
  { name: '04:00', value: 300 },
  { name: '08:00', value: 600 },
  { name: '12:00', value: 800 },
  { name: '16:00', value: 700 },
  { name: '20:00', value: 500 },
  { name: '23:59', value: 400 },
]

interface MeterDataChartProps {
  darkMode: boolean
  language: string
}

const MeterDataChart: React.FC<MeterDataChartProps> = ({ darkMode, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
            <XAxis 
              dataKey="name" 
              stroke={darkMode ? '#9CA3AF' : '#4B5563'}
              tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
            />
            <YAxis 
              stroke={darkMode ? '#9CA3AF' : '#4B5563'}
              tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
              itemStyle={{ color: darkMode ? '#D1D5DB' : '#1F2937' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={2} 
              dot={{ fill: '#3B82F6', r: 4 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={language === 'es' ? "Detalles de Consumo de Energía" : "Energy Consumption Details"} darkMode={darkMode}>
        <div className="space-y-4">
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis 
                  dataKey="name" 
                  stroke={darkMode ? '#9CA3AF' : '#4B5563'}
                  tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
                />
                <YAxis 
                  stroke={darkMode ? '#9CA3AF' : '#4B5563'}
                  tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                  itemStyle={{ color: darkMode ? '#D1D5DB' : '#1F2937' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={2} 
                  dot={{ fill: '#3B82F6', r: 4 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p>{language === 'es' ? "Consumo total hoy: 3700 kWh" : "Total consumption today: 3700 kWh"}</p>
          <p>{language === 'es' ? "Pico de consumo: 800 kWh a las 12:00" : "Peak consumption: 800 kWh at 12:00"}</p>
          <p>{language === 'es' ? "Consumo promedio: 528.57 kWh" : "Average consumption: 528.57 kWh"}</p>
          <p>{language === 'es' ? "Tendencia: Aumento del 5% respecto a ayer" : "Trend: 5% increase compared to yesterday"}</p>
          <h3 className="font-semibold mt-4">{language === 'es' ? "Desglose por hora:" : "Hourly breakdown:"}</h3>
          <ul className="list-disc pl-5">
            {data.map((item, index) => (
              <li key={index}>
                {item.name}: {item.value} kWh
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default MeterDataChart