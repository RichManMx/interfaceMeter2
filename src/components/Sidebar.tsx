import React from 'react'
import { Home, BarChart2, Settings, HelpCircle, LogOut, User, ChevronLeft, ChevronRight } from 'lucide-react'

interface SidebarProps {
  darkMode: boolean
  language: string
  activeTab: string
  setActiveTab: (tab: string) => void
  sidebarOpen: boolean
  toggleSidebar: () => void
  sidebarCompact: boolean
  toggleSidebarCompact: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ 
  darkMode, 
  language, 
  activeTab, 
  setActiveTab, 
  sidebarOpen, 
  toggleSidebar,
  sidebarCompact,
  toggleSidebarCompact
}) => {
  const menuItems = [
    { id: 'home', icon: Home, labelEs: 'Inicio', labelEn: 'Home' },
    { id: 'analysis', icon: BarChart2, labelEs: 'Análisis', labelEn: 'Analysis' },
    { id: 'config', icon: Settings, labelEs: 'Configuración', labelEn: 'Settings' },
    { id: 'help', icon: HelpCircle, labelEs: 'Ayuda', labelEn: 'Help' },
  ]

  return (
    <>
      <aside className={`${sidebarCompact ? 'w-16' : 'w-64'} ${darkMode ? 'bg-gray-800' : 'bg-white'} fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 apple-box-shadow`}>
        <div className="flex justify-between items-center p-4">
          {!sidebarCompact && <span className="text-xl font-semibold apple-text-shadow">{language === 'es' ? 'Menú' : 'Menu'}</span>}
          <button onClick={toggleSidebar} className="md:hidden">✕</button>
          <button onClick={toggleSidebarCompact} className="hidden md:block">
            {sidebarCompact ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => { setActiveTab(item.id); toggleSidebar(); }}
                  className={`flex items-center w-full p-2 rounded ${activeTab === item.id ? (darkMode ? 'bg-blue-900' : 'bg-blue-100') : ''} ${darkMode ? 'text-blue-300 hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'}`}
                >
                  <item.icon className={sidebarCompact ? 'mx-auto' : 'mr-2'} size={24} />
                  {!sidebarCompact && <span>{language === 'es' ? item.labelEs : item.labelEn}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {!sidebarCompact && (
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center mb-4">
              <User className="mr-2" size={24} />
              <span>John Doe</span>
            </div>
            <button className="flex items-center w-full p-2 rounded bg-red-500 text-white hover:bg-red-600">
              <LogOut className="mr-2" size={24} />
              <span>{language === 'es' ? 'Cerrar Sesión' : 'Log Out'}</span>
            </button>
          </div>
        )}
      </aside>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={toggleSidebar}></div>
      )}
    </>
  )
}

export default Sidebar