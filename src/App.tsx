import { useState, useRef } from 'react'
import {
  Phone,
  MapPin,
  Zap,
  ClipboardList,
  Wrench,
  Shield,
  CheckCircle,
  Clock,
  Award,
  ThumbsUp,
  Menu,
  X,
  Send,
  Home,
  Building,
  FileText,
  AlertTriangle,
  Cable,
  BadgeCheck,
  Receipt,
  Timer,
  Image as ImageIcon,
  Video as VideoIcon,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const touchStartXRef = useRef(0)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá Sandro! Me chamo ${formData.nome}.\n\nPreciso de um orçamento para: ${formData.servico}\nCidade: ${formData.cidade}\n\nDetalhes: ${formData.mensagem}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/5551986318828?text=${encodedMessage}`, '_blank')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instalação de Pontos',
      description: 'Instalação de pontos de luz, tomadas e interruptores com segurança e praticidade para o seu dia a dia.'
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Quadros de Distribuição',
      description: 'Montagem, organização e manutenção de quadros elétricos com total segurança e dentro das normas.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Manutenção e Reparos',
      description: 'Soluções rápidas para falhas e problemas elétricos, restaurando o funcionamento com eficiência.'
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: 'Troca de Fiação',
      description: 'Atualização completa da instalação elétrica com qualidade e dentro das normas técnicas.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Aterramento',
      description: 'Instalação de sistemas de proteção e aterramento para sua família e equipamentos.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Diagnóstico de Falhas',
      description: 'Identificação precisa de problemas elétricos com soluções ágeis e eficientes.'
    }
  ]

  const differentials = [
    { icon: <Award className="w-6 h-6" />, text: 'Mais de 10 anos de experiência' },
    { icon: <Clock className="w-6 h-6" />, text: 'Atendimento rápido e responsável' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Serviço limpo, organizado e seguro' },
    { icon: <Shield className="w-6 h-6" />, text: 'Profissional qualificado e certificado' },
    { icon: <ThumbsUp className="w-6 h-6" />, text: 'Preços justos e transparentes' },
    { icon: <HeartIcon className="w-6 h-6" />, text: 'Foco na sua satisfação' }
  ]

  const cities = ['Gravataí', 'Cachoeirinha', 'Porto Alegre', 'Canoas']

  const trustBadges = [
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />, title: 'Certificado NR-10', desc: 'Normas de segurança elétrica' },
    { icon: <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />, title: 'Garantia de 30 Dias', desc: 'Em todos os serviços' },
    { icon: <Receipt className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />, title: 'Nota Fiscal', desc: 'Emitida em todo serviço' },
    { icon: <Timer className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />, title: 'Atendimento 24h', desc: 'Emergências e urgências' },
    { icon: <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />, title: 'Atendimento a Domicílio', desc: 'Vamos até você' }
  ]

  const singlePhotos = [
    { src: '/gallery/quadro-distribuicao.jpg', caption: 'Quadro de distribuição organizado e revisado' },
    { src: '/gallery/letreiro-comercial.jpg', caption: 'Instalação elétrica de letreiro comercial' },
    { src: '/gallery/iluminacao-led-cozinha.jpg', caption: 'Iluminação em LED para cozinha planejada' }
  ]

  const stepPhotos = [
    { src: '/gallery/preparacao-ponto-1.jpg', caption: 'Etapa 1: Preparação do ponto elétrico no teto' },
    { src: '/gallery/preparacao-ponto-2.jpg', caption: 'Etapa 2: Organização e identificação da fiação' },
    { src: '/gallery/preparacao-ponto-3.jpg', caption: 'Etapa 3: Fiação pronta para instalação do ponto de luz' }
  ]

  const nextStep = () => setStepIndex((prev) => (prev + 1) % stepPhotos.length)
  const prevStep = () => setStepIndex((prev) => (prev - 1 + stepPhotos.length) % stepPhotos.length)

  const handleStepTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
  }
  const handleStepTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX
    if (diff > 40) nextStep()
    else if (diff < -40) prevStep()
  }

  const galleryVideos = [
    { src: '/gallery/video-servico-1.mp4', caption: 'Serviço em execução (vídeo sem áudio)' },
    { src: '/gallery/video-servico-2.mp4', caption: 'Serviço em execução (vídeo sem áudio)' }
  ]

  const faqs = [
    {
      question: 'O profissional é certificado?',
      answer: 'Sim, o Sandro atua em conformidade com as normas de segurança elétrica (NR-10).'
    },
    {
      question: 'Qual a garantia dos serviços?',
      answer: 'Todos os serviços executados têm 30 dias de garantia.'
    },
    {
      question: 'Vocês emitem nota fiscal?',
      answer: 'Sim, emitimos nota fiscal para todos os serviços realizados.'
    },
    {
      question: 'Vocês atendem emergências fora do horário comercial?',
      answer: 'Sim, temos atendimento 24h para emergências e urgências elétricas.'
    },
    {
      question: 'Em quais cidades vocês atendem?',
      answer: 'Atendemos a domicílio em Gravataí, Cachoeirinha, Porto Alegre e Canoas.'
    },
    {
      question: 'Como faço para solicitar um orçamento?',
      answer: 'É só chamar no WhatsApp ou preencher o formulário aqui no site com os detalhes do serviço que você precisa.'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-red-600" />
              <span className="text-xl font-bold">ELETRICISTA <span className="text-red-600">SANDRO ALANIZ</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-red-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="hover:text-red-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('galeria')} className="hover:text-red-600 transition-colors">Galeria</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-red-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-red-600 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-red-600 transition-colors">Contato</button>
              <a
                href="https://www.instagram.com/sandroalanizeletricista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-red-600 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5551986318828"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-red-600/30">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 hover:text-red-600">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left py-2 hover:text-red-600">Serviços</button>
              <button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 hover:text-red-600">Galeria</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 hover:text-red-600">Sobre</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-red-600">FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 hover:text-red-600">Contato</button>
              <a 
                href="https://wa.me/5551986318828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (inclui os selos de confiança, tudo dentro da 1ª tela) */}
      <section id="inicio" className="relative min-h-screen lg:h-screen flex flex-col pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-900/20"></div>

        <div className="relative flex-1 min-h-0 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-3">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 lg:space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="text-red-500 font-bold text-sm sm:text-base lg:text-base">Fala neni!</span>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight">
                ELETRICISTA<br />
                <span className="text-red-600">SANDRO ALANIZ</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-300 font-medium">
                Instalação elétrica com <span className="text-red-500 font-bold">SEGURANÇA</span>, <span className="text-red-500 font-bold">QUALIDADE</span> e <span className="text-red-500 font-bold">CONFIANÇA</span>!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base lg:text-base transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-red-600/30"
                >
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                  FAÇA SEU ORÇAMENTO
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-red-600 hover:bg-red-600/10 text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base lg:text-base transition-all"
                >
                  NOSSOS SERVIÇOS
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-4 pt-2 lg:pt-2 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-base">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-red-500" />
                  <span>Gravataí, Cachoeirinha, POA, Canoas</span>
                </div>
              </div>
            </div>

            <div className="relative block">
              <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-3xl"></div>
              <img
                src="/images/electrician-sandro.png"
                alt="Eletricista Sandro Alaniz"
                className="relative w-full max-w-[140px] sm:max-w-xs md:max-w-sm lg:max-w-xl mx-auto drop-shadow-2xl lg:max-h-[60vh] lg:w-auto lg:h-auto object-contain"
              />

              {/* Floating Badge */}
              <div className="absolute top-0 right-2 sm:top-4 sm:right-4 bg-red-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-bold shadow-lg transform rotate-6">
                <span className="text-sm sm:text-2xl">10+</span>
                <span className="block text-[8px] sm:text-xs">Anos de<br/>Experiência</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selos de Confiança (dentro da mesma tela do hero) */}
        <div className="relative border-t border-red-600/20 bg-black/50 backdrop-blur-sm py-3 sm:py-4 lg:py-4">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-1 sm:gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-red-600/10 rounded-full flex items-center justify-center text-red-600">
                    {badge.icon}
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs lg:text-sm leading-tight">{badge.title}</span>
                  <span className="hidden sm:block text-[10px] lg:text-xs text-gray-500 leading-tight">{badge.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-14 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              NOSSOS <span className="text-red-600">SERVIÇOS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Do projeto à execução, tudo com segurança! Especialista em instalações elétricas residenciais e prediais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-red-600/50 transition-all group hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Projeto Section */}
          <div className="mt-10 sm:mt-16 bg-gradient-to-r from-red-900/30 to-black border border-red-600/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/20 rounded-full px-4 py-2 mb-4">
                  <FileText className="w-5 h-5 text-red-500" />
                  <span className="text-red-400 font-semibold">SERVIÇO ESPECIALIZADO</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Leitura e Execução de Projetos</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Trabalho em parceria com arquitetos e engenheiros na criação e execução de projetos elétricos completos. 
                  Desde o planejamento até a entrega final, garantindo qualidade e conformidade com as normas técnicas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Building className="w-5 h-5 text-red-500" />
                    <span>Projetos Prediais</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Home className="w-5 h-5 text-red-500" />
                    <span>Projetos Residenciais</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <ClipboardList className="w-5 h-5 text-red-500" />
                    <span>Laudos Técnicos</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-2xl"></div>
                  <div className="relative bg-zinc-800 rounded-2xl p-8 text-center">
                    <Zap className="w-20 h-20 text-red-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Precisa de um projeto?</h4>
                    <p className="text-gray-400 mb-4">Entre em contato para uma consultoria especializada</p>
                    <a 
                      href="https://wa.me/5551986318828" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Solicitar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-14 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/20 rounded-full px-4 py-2 mb-4">
              <ImageIcon className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">PORTFÓLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              TRABALHOS <span className="text-red-600">REALIZADOS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Fotos e vídeos reais de serviços executados pelo Sandro
            </p>
          </div>

          {/* Fotos: cada bloco mostra a imagem inteira, sem corte */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
            {singlePhotos.map((item, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col"
              >
                <div className="aspect-square bg-black overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 p-2 sm:p-3 text-center leading-snug">
                  {item.caption}
                </p>
              </div>
            ))}

            {/* Card com carrossel: etapas do mesmo processo */}
            <div
              className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col"
              onTouchStart={handleStepTouchStart}
              onTouchEnd={handleStepTouchEnd}
            >
              <div className="relative aspect-square bg-black overflow-hidden">
                <img
                  src={stepPhotos[stepIndex].src}
                  alt={stepPhotos[stepIndex].caption}
                  className="w-full h-full object-cover select-none"
                />
                <button
                  onClick={prevStep}
                  aria-label="Etapa anterior"
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 rounded-full p-1 sm:p-1.5 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={nextStep}
                  aria-label="Próxima etapa"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 rounded-full p-1 sm:p-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <span className="absolute top-1 right-1 bg-black/70 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full">
                  {stepIndex + 1}/{stepPhotos.length}
                </span>
              </div>
              <div className="p-2 sm:p-3 text-center">
                <p className="text-[11px] sm:text-xs text-gray-400 leading-snug">{stepPhotos[stepIndex].caption}</p>
                <div className="flex justify-center gap-1.5 mt-1.5 sm:mt-2">
                  {stepPhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStepIndex(i)}
                      aria-label={`Ir para etapa ${i + 1}`}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === stepIndex ? 'bg-red-600' : 'bg-zinc-700'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vídeos sem áudio */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {galleryVideos.map((item, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900"
              >
                <video
                  src={item.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[320px] sm:max-h-[420px] bg-black"
                />
                <div className="p-3 sm:p-4 flex items-center gap-2 text-gray-400">
                  <VideoIcon className="w-4 h-4 text-red-500" />
                  <span className="text-xs sm:text-sm">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="sobre" className="py-14 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              POR QUE ESCOLHER O <span className="text-red-600">ELETRICISTA SANDRO ALANIZ</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 hover:border-red-600/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-white">{item.icon}</div>
                </div>
                <span className="font-semibold text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="mt-10 sm:mt-16 bg-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <Zap className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
              QUALIDADE QUE VOCÊ VÊ,<br />SEGURANÇA QUE VOCÊ SENTE!
            </h3>
            <p className="text-sm sm:text-xl opacity-90">
              Sua casa em boas mãos! Pode contar com o Sandro Alaniz!
            </p>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-12 sm:py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg sm:text-2xl font-bold mb-8 sm:mb-12 text-gray-400">ATENDIMENTO NA REGIÃO</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 sm:gap-3 bg-black rounded-xl p-4 sm:p-6 border border-zinc-800 hover:border-red-600 transition-all"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <span className="text-base sm:text-xl font-bold">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/20 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              PERGUNTAS <span className="text-red-600">FREQUENTES</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-14 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              SOLICITE SEU <span className="text-red-600">ORÇAMENTO</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
              Preencha o formulário abaixo e receba seu orçamento via WhatsApp
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Seu Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="(51) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Cidade</label>
                  <select
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione a cidade</option>
                    <option value="Gravataí">Gravataí</option>
                    <option value="Cachoeirinha">Cachoeirinha</option>
                    <option value="Porto Alegre">Porto Alegre</option>
                    <option value="Canoas">Canoas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Serviço</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="Instalação de Pontos">Instalação de Pontos (luz/tomadas)</option>
                    <option value="Quadro de Distribuição">Quadro de Distribuição</option>
                    <option value="Manutenção/Reparo">Manutenção ou Reparo</option>
                    <option value="Troca de Fiação">Troca de Fiação Completa</option>
                    <option value="Projeto Elétrico">Projeto Elétrico</option>
                    <option value="Diagnóstico">Diagnóstico de Falhas</option>
                    <option value="Aterramento">Aterramento e Proteção</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Detalhes do Serviço</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Descreva o que você precisa..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" />
                ENVIAR ORÇAMENTO VIA WHATSAPP
              </button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Ou entre em contato diretamente:</p>
            <a 
              href="https://wa.me/5551986318828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-xl sm:text-3xl font-black text-red-600 hover:text-red-500 transition-colors"
            >
              <Phone className="w-8 h-8" />
              51 98631-8828
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-red-600" />
                <span className="text-xl font-bold">ELETRICISTA <span className="text-red-600">SANDRO ALANIZ</span></span>
              </div>
              <p className="text-gray-400">Instalação elétrica com segurança, qualidade e confiança!</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Áreas de Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> Gravataí</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> Cachoeirinha</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> Porto Alegre</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> Canoas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5551986318828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  51 98631-8828
                </a>
                <a
                  href="https://www.instagram.com/sandroalanizeletricista/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  @sandroalanizeletricista
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 space-y-2">
            <p>© 2025 Eletricista Sandro Alaniz. Todos os direitos reservados.</p>
            <p>
              Site desenvolvido por{' '}
              <a
                href="https://wa.me/5551982165186"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors font-medium"
              >
                TF Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5551986318828" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110 z-50"
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  )
}

// Helper icon component
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export default App