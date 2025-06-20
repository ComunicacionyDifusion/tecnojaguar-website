import React, { useState, useEffect, useRef } from 'react';
import { Home, MessageCircle, Phone, Facebook, Instagram, MessageSquare, Youtube, Twitter, Send, Bot, User, X, Menu, ExternalLink, Calculator, Briefcase, LineChart as ChartLine, Laptop, Microwave as Microchip, HardHat, FlaskRound as Flask, Smartphone, Cog as Cogs } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface Response {
  keywords: string[];
  respuesta: string;
}

function App() {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const socialMenuRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Close social menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target as Node)) {
        setShowSocialMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const responses: Response[] = [
    {
      keywords: ["hola", "buenas", "saludos", "buenos días", "buenas tardes", "Buenos dias","Buenas tardes", "Buenas noches","Buen dia", "buen dia"],
      respuesta: "¡Hola! Soy tu Jaguar Asistente 🐆, ¿En qué puedo ayudarte? 😊"
    },
    {
      keywords: ["cómo estás", "como estas", "que tal", "qué tal", "como te encuentras", "cómo te encuentras", "todo bien"],
      respuesta: "¡Muy bien, gracias por preguntar! 😊 Estoy aquí para ayudarte con toda la información que necesites sobre el Instituto Tecnológico de Tuxtepec. ¿En qué puedo asistirte hoy? 🐆✨"
    },
    {
      keywords: ["gracias", "thanks", "thank you"],
      respuesta: "¡De nada! Estamos para servirte 😊"
    },
    {
      keywords: ["adiós", "bye", "hasta luego", "nos vemos"],
      respuesta: "¡Hasta luego! Cualquier duda estaremos a tu disposición 😊"
    },
    {
      keywords: ["carreras", "licenciatura", "ingeniería", "estudiar", "oferta académica"],
      respuesta: `🎓 Ofrecemos las siguientes carreras:

📱 Ingeniería en Sistemas Computacionales
💻 Ingeniería en Informática  
🔌 Ingeniería en Electrónica
📊 Ingeniería en Gestión Empresarial
⚙️ Ingeniería Electromecánica
🏗️ Ingeniería Civil
🧪 Ingeniería en Bioquímica
📱 Ingeniería en Desarrollo de Aplicaciones
🧮 Licenciatura en Contador Público
💼 Licenciatura en Administración

También contamos con una extensión en Loma Bonita.`
    },
    {
      keywords: ["especialidad", "especialidades"],
      respuesta: "📘 Contamos con la Especialidad en Semiconductores"
    },
    {
      keywords: ["maestría", "maestrias", "posgrado", "posgrados"],
      respuesta: `🎓 Programas de posgrado:

🍎 Maestría en Ciencias en Alimentos
💼 Maestría en Administración  
💰 Maestría en Economía Social y Solidaria`
    },
    {
      keywords: ["contacto", "redes sociales", "contactar", "comunicar"],
      respuesta: `📱 Puedes contactarnos a través de nuestras redes sociales:

📘 Facebook: tecnologicode.tuxtepec
📸 Instagram: @tecnm_tuxtepec
📱 WhatsApp: +52 2871 104437
📺 YouTube: Tecnológico Nacional de México
🐦 X (Twitter): @ittuxtepec
🎵 TikTok: @tecnmcampustuxtepec`
    },
    {
      keywords: ["examen de admisión", "examen", "admision"],
      respuesta: "📝 El simulacro será el 17 de julio de 2025 y el examen oficial el 18 de julio de 2025."
    },
    {
      keywords: ["ficha de admision", "fichas", "ficha"],
      respuesta: "📋 La ficha puedes obtenerla hasta el 11 de julio de 2025. Costo: $900.00 MXN."
    },
    {
      keywords: ["curso de homogeneizacion", "homogeneizacion"],
      respuesta: "📚 Costo: $1,500 (Escolarizado), $1,000 (Escolarizado-Sabatino y extensión de Loma Bonita)."
    },
    {
      keywords: ["inscripcion", "inscripción"],
      respuesta: "💰 Costo de inscripción: $2,100 MXN (Escolarizado) y $3,500 MXN (Sabatino y extensión de Loma Bonita)."
    },
    {
      keywords: ["curso de induccion", "induccion", "inducción"],
      respuesta: "📅 Se realizará del 21 al 25 de julio de 2025 de forma PRESENCIAL."
    },
    {
      keywords: ["horario", "atención", "atencion"],
      respuesta: "🕘 Horario de atención: Lunes a Viernes de 9:00 a 16:00 hrs."
    },
    {
      keywords: ["carreras sabatinos", "sabatico", "sabatinas", "sabaticas", "sabados"],
      respuesta: `📅 Nuestras carreras sabatinas son:

🏫 TUXTEPEC:
• Licenciatura en Contador Público
• Licenciatura en Administración
• Ingeniería en Gestión Empresarial
• Ingeniería en Sistemas Computacionales

🏫 LOMA BONITA:
• Ingeniería en Gestión Empresarial
• Ingeniería en Sistemas Computacionales
• Licenciatura en Contador Público
• Licenciatura en Administración
• Ingeniería en Electrónica`
    },
    {
      keywords: ["costo", "cuota", "pago", "pagar", "precio"],
      respuesta: `💳 Formas de pago:

🏦 TRANSFERENCIA/DEPÓSITO:
• Banco: Santander
• Cuenta: 65-507172002
• CLABE: 014855655071720028
• Beneficiario: TNM/Instituto Tecnológico de Tuxtepec

💳 PAGO CON TARJETA:
• TUXTEPEC: Lunes a Viernes 9:00-15:30 hrs
• LOMA BONITA: Lunes, Miércoles y Sábados 9:00-15:30 hrs

⚠️ IMPORTANTE: No hay reembolsos después del pago.`
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'http://www.facebook.com/tecnologicode.tuxtepec',
      icon: Facebook,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+522871104437',
      icon: MessageSquare,
      color: 'text-green-500 hover:text-green-600'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/ittuxtepec',
      icon: Twitter,
      color: 'text-gray-800 hover:text-gray-900'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tecnm_tuxtepec',
      icon: Instagram,
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@tecnmcampustuxtepec',
      icon: MessageCircle,
      color: 'text-black hover:text-gray-800'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@tecnologiconacionaldemexic7515',
      icon: Youtube,
      color: 'text-red-500 hover:text-red-600'
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    for (const response of responses) {
      if (response.keywords.some(keyword => message.includes(keyword))) {
        return response.respuesta;
      }
    }
    return "Lo siento, no entiendo tu mensaje. Por favor específica tu pregunta de nuevo. Puedes preguntarme sobre carreras, admisión, costos, horarios o contacto. 🤔";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-900/95 to-purple-900/95 backdrop-blur-sm shadow-2xl sticky top-0 z-40 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">TJ</span>
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">TecnoJaguar</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center backdrop-blur-sm border border-white/10 hover:border-white/20">
                  <Home className="w-4 h-4 mr-2" />
                  Inicio
                </button>
                
                {/* Contact Dropdown */}
                <div className="relative" ref={socialMenuRef}>
                  <button
                    onClick={() => setShowSocialMenu(!showSocialMenu)}
                    className="text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contacto
                  </button>
                  
                  {showSocialMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 z-50">
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200/50">
                          Síguenos en:
                        </div>
                        {socialLinks.map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center px-4 py-3 text-sm hover:bg-gray-50/80 transition-all duration-200 ${social.color}`}
                          >
                            <social.icon className="w-5 h-5 mr-3" />
                            <span className="font-medium">{social.name}</span>
                            <ExternalLink className="w-3 h-3 ml-auto text-gray-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowChatbot(true)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Bot className="w-4 h-4 mr-2" />
                  IA Jaguar
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-indigo-900/50 backdrop-blur-sm rounded-lg mt-2 border border-white/10">
                <button className="text-white hover:bg-white/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                  <Home className="w-4 h-4 inline mr-2" />
                  Inicio
                </button>
                <button
                  onClick={() => setShowSocialMenu(!showSocialMenu)}
                  className="text-white hover:bg-white/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Contacto
                </button>
                <button
                  onClick={() => setShowChatbot(true)}
                  className="text-white hover:bg-white/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  <Bot className="w-4 h-4 inline mr-2" />
                  IA Jaguar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-slate-900/90"></div>
        </div>
        
        <div className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                TecnoJaguar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-8 font-light">
              Instituto Tecnológico de Tuxtepec
            </p>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Celebrando 50 años de excelencia académica y formación profesional en el corazón de Oaxaca
            </p>
            <div className="mt-12">
              <button
                onClick={() => setShowChatbot(true)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105"
              >
                <Bot className="w-6 h-6 inline mr-3" />
                Habla con IA Jaguar
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Descubre TecnoJaguar
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Tu futuro profesional comienza aquí
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-amber-500/50 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChartLine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">10 Carreras</h3>
              <p className="text-purple-200 leading-relaxed">Diversas opciones de ingeniería y licenciaturas para forjar tu futuro profesional</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-amber-500/50 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IA Jaguar</h3>
              <p className="text-purple-200 leading-relaxed">Asistente virtual inteligente para resolver todas tus dudas académicas las 24 horas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-amber-500/50 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <HardHat className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">50 Años</h3>
              <p className="text-purple-200 leading-relaxed">Medio siglo de tradición formando profesionistas exitosos en toda la región</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Nuestras Carreras
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Programas académicos de vanguardia para el futuro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Laptop, title: "Ing. Sistemas Computacionales", color: "from-blue-500 to-cyan-500" },
              { icon: Microchip, title: "Ing. Electrónica", color: "from-purple-500 to-pink-500" },
              { icon: HardHat, title: "Ing. Civil", color: "from-orange-500 to-red-500" },
              { icon: Briefcase, title: "Ing. Gestión Empresarial", color: "from-green-500 to-emerald-500" },
              { icon: Flask, title: "Ing. Bioquímica", color: "from-teal-500 to-cyan-500" },
              { icon: Calculator, title: "Lic. Contador Público", color: "from-amber-500 to-yellow-500" }
            ].map((career, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-br ${career.color} rounded-lg flex items-center justify-center mb-4`}>
                  <career.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{career.title}</h3>
                <p className="text-purple-200 text-sm">Programa académico de excelencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border border-white/20">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">IA Jaguar</h3>
                  <p className="text-sm text-purple-100">Asistente Virtual</p>
                </div>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              ref={chatBodyRef}
              className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-slate-50/90 to-purple-50/90"
            >
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-700 mb-2 font-semibold">¡Hola! Soy tu Jaguar Asistente 🐆</p>
                  <p className="text-sm text-gray-500">Pregúntame sobre carreras, admisión, costos o contacto</p>
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200/50'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-gray-200/50 bg-white/90 backdrop-blur-sm rounded-b-3xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-3 border border-gray-300/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative py-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
              <span className="text-white font-bold text-2xl">TJ</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">TecnoJaguar</h3>
              <p className="text-purple-300">Instituto Tecnológico de Tuxtepec</p>
            </div>
          </div>
          <p className="text-purple-200 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            50 años de excelencia académica • Horario de atención: Lunes a Viernes 9:00 - 16:00 hrs
          </p>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;