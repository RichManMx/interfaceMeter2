import React from 'react'

interface HelpProps {
  darkMode: boolean
  language: string
}

const Help: React.FC<HelpProps> = ({ darkMode, language }) => {
  const faqItems = [
    {
      question: language === 'es' ? '¿Cómo interpretar los gráficos?' : 'How to interpret the charts?',
      answer: language === 'es'
        ? 'Los gráficos muestran el consumo de energía y la eficiencia a lo largo del tiempo. Las barras azules representan el consumo, mientras que las verdes representan la eficiencia.'
        : 'The charts show energy consumption and efficiency over time. Blue bars represent consumption, while green bars represent efficiency.'
    },
    {
      question: language === 'es' ? '¿Qué significa "Medidores en Línea"?' : 'What does "Online Meters" mean?',
      answer: language === 'es'
        ? 'Indica el número de medidores que están actualmente conectados y transmitiendo datos en tiempo real.'
        : 'It indicates the number of meters that are currently connected and transmitting data in real-time.'
    },
    {
      question: language === 'es' ? '¿Cómo cambiar la configuración?' : 'How to change settings?',
      answer: language === 'es'
        ? 'Ve a la pestaña de Configuración en el menú lateral. Allí podrás ajustar el intervalo de actualización y las unidades de medida.'
        : 'Go to the Settings tab in the sidebar menu. There you can adjust the update interval and measurement units.'
    }
  ]

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg neon-border`}>
      <h2 className="text-2xl font-semibold mb-6 neon-blue">
        {language === 'es' ? 'Ayuda y FAQ' : 'Help and FAQ'}
      </h2>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
            <p className="text-sm opacity-70">{item.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">
          {language === 'es' ? 'Contacto de soporte' : 'Support Contact'}
        </h3>
        <p className="text-sm opacity-70">
          {language === 'es'
            ? 'Para más ayuda, contacta a nuestro equipo de soporte en support@example.com o llama al +1 (123) 456-7890.'
            : 'For further assistance, contact our support team at support@example.com or call +1 (123) 456-7890.'}
        </p>
      </div>
    </div>
  )
}

export default Help