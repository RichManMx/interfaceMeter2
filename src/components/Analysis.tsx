import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface AnalysisProps {
  darkMode: boolean
  language: string
}

const Analysis: React.FC<AnalysisProps> = ({ darkMode, language }) => {
  const data = [
    { name: 'Ene', consumption: 4000, efficiency: 2400 },
    { name: 'Feb', consumption: 3000, efficiency: 1398 },
    { name: 'Mar', consumption: 2000, efficiency: 9800 },
    { name: 'Abr', consumption: 2780, efficiency: 3908 },
    { name: 'May', consumption: 1890, efficiency: 4800 },
    { name: 'Jun', consumption: 2390, efficiency: 3800 },
  ]

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg neon-border`}>
      <h2 className="text-2xl font-semibold mb-6 neon-blue">
        {language === 'es' ? 'Análisis de Consumo y Eficiencia' : 'Consumption and Efficiency Analysis'}
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
          <XAxis 
            dataKey="name" 
            stroke={darkMode ? '#9CA3AF' : '#4B5563'}
            // Add default values here
            padding={{ left: 0, right: 0 }}
            allowDataOverflow={false}
            allowDecimals={true}
            allowDuplicatedCategory={true}
          />
          <YAxis 
            stroke={darkMode ? '#9CA3AF' : '#4B5563'}
            // Add default values here
            padding={{ top: 0, bottom: 0 }}
            allowDataOverflow={false}
            allowDecimals={true}
            allowDuplicatedCategory={true}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          />
          <Legend />
          <Bar dataKey="consumption" fill="#3B82F6" name={language === 'es' ? 'Consumo' : 'Consumption'} />
          <Bar dataKey="efficiency" fill="#10B981" name={language === 'es' ? 'Eficiencia' : 'Efficiency'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Analysis