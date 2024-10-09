import React from 'react'

interface ConfigProps {
  darkMode: boolean
  language: string
}

const Config: React.FC<ConfigProps> = ({ darkMode, language }) => {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg neon-border`}>
      <h2 className="text-2xl font-semibold mb-6 neon-blue">
        {language === 'es' ? 'Configuración' : 'Settings'}
      </h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">
            {language === 'es' ? 'Intervalo de actualización' : 'Update Interval'}
          </label>
          <select className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}>
            <option value="5">{language === 'es' ? '5 segundos' : '5 seconds'}</option>
            <option value="10">{language === 'es' ? '10 segundos' : '10 seconds'}</option>
            <option value="30">{language === 'es' ? '30 segundos' : '30 seconds'}</option>
            <option value="60">{language === 'es' ? '1 minuto' : '1 minute'}</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            {language === 'es' ? 'Unidad de medida' : 'Measurement Unit'}
          </label>
          <select className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}>
            <option value="kwh">kWh</option>
            <option value="wh">Wh</option>
            <option value="mwh">MWh</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {language === 'es' ? 'Guardar cambios' : 'Save changes'}
        </button>
      </form>
    </div>
  )
}

export default Config