import React, { useState } from 'react'
import { Sun, Moon, MessageCircle } from 'lucide-react'
import MeterDataChart from './components/MeterDataChart'
import Sidebar from './components/Sidebar'
import OnlineMedidores from './components/OnlineMedidores'
import VoltageValues from './components/VoltageValues'
import Analysis from './components/Analysis'
import Config from './components/Config'
import Help from './components/Help'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('es')
  const [activeTab, setActiveTab] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCompact, setSidebarCompact] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleSidebarCompact = () => setSidebarCompact(!sidebarCompact)

  const renderContent = () => {
    switch (activeTab) {
      case 'analysis':
        return <Analysis darkMode={darkMode} language={language} />
      case 'config':
        return <Config darkMode={darkMode} language={language} />
      case 'help':
        return <Help darkMode={darkMode} language={language} />
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} apple-box-shadow`}>
              <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">{language === 'es' ? 'Consumo de Energía' : 'Energy Consumption'}</h2>
              <MeterDataChart darkMode={darkMode} />
            </div>
            <OnlineMedidores darkMode={darkMode} language={language} />
            <VoltageValues darkMode={darkMode} language={language} voltage={12} />
            <VoltageValues darkMode={darkMode} language={language} voltage={110} />
            <VoltageValues darkMode={darkMode} language={language} voltage={220} />
            <VoltageValues darkMode={darkMode} language={language} voltage={480} />
          </div>
        )
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-blue-300' : 'bg-gray-100 text-blue-600'} transition-colors duration-300`}>
      <div className="flex">
        <Sidebar 
          darkMode={darkMode} 
          language={language} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar}
          sidebarCompact={sidebarCompact}
          toggleSidebarCompact={toggleSidebarCompact}
        />
        <div className={`flex-1 flex flex-col ${sidebarCompact ? 'md:ml-16' : 'md:ml-64'} transition-all duration-300`}>
          <header className="flex justify-between items-center p-6 bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <button onClick={toggleSidebar} className="md:hidden text-2xl">☰</button>
            <h1 className="text-3xl font-bold apple-text-shadow">{language === 'es' ? 'Panel de Control de Medidores' : 'Meter Control Panel'}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded ${darkMode ? 'bg-blue-500 text-gray-900' : 'bg-gray-200 text-blue-500'} transition-colors duration-300`}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-blue-500 text-gray-900' : 'bg-gray-200 text-blue-500'} transition-colors duration-300`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
      <button className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <MessageCircle size={24} />
      </button>
    </div>
  )
}

export default App