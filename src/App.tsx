import React, { useState } from 'react';
import { motion } from 'framer-motion'; // <--- ¡La magia de las animaciones!
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Pill, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Star
} from 'lucide-react';

export default function FarmaciaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Variantes de animación para reutilizar (DRY)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* NAV BAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-lg shadow-lg shadow-blue-600/20">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-mono tracking-tight text-slate-900">
                FARMACIAS VITALIS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
              <a href="#historia" className="hover:text-blue-600 transition-colors">Historia</a>
              <a href="#mision" className="hover:text-blue-600 transition-colors">Nosotros</a>
              <a href="#social" className="hover:text-blue-600 transition-colors">Comunidad</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 font-medium flex items-center gap-2 font-sans"
              >
                <MapPin className="w-4 h-4" />
                Sucursales
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 font-mono shadow-xl absolute w-full overflow-hidden"
          >
            <a href="#historia" className="block p-2 hover:bg-slate-50 rounded-lg text-slate-600" onClick={() => setIsMenuOpen(false)}>Historia</a>
            <a href="#mision" className="block p-2 hover:bg-slate-50 rounded-lg text-slate-600" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <a href="#social" className="block p-2 hover:bg-slate-50 rounded-lg text-slate-600" onClick={() => setIsMenuOpen(false)}>Comunidad</a>
            <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg flex justify-center items-center gap-2 font-medium font-sans">
              <MapPin className="w-4 h-4" />
              Ver Sucursales
            </button>
          </motion.div>
        )}
      </motion.nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-32 lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* Fondo con animación de zoom muy lenta */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=2079" 
            alt="Farmacéutica amable atendiendo" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-blue-100/50"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full text-xs font-mono font-bold mb-6 border border-blue-200">
              <Star className="w-3 h-3 fill-blue-600" /> DESDE 2012 CUIDANDO DE TI
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight font-sans">
              Medicamentos de calidad al precio que <span className="text-blue-600 inline-block">sí puedes pagar</span>.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-normal">
              En Farmacias Vitalis no solo vendemos medicamentos, acompañamos tratamientos. Salud accesible, certificada y humana.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30"
              >
                <MapPin className="w-5 h-5" />
                Encuentra tu farmacia
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-slate-700 border-2 border-slate-200/80 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:border-blue-200 transition-colors"
              >
                Conoce nuestros genéricos
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* HISTORIA */}
      <section id="historia" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Foto del Doctor animada */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1970" 
                alt="Dr. Andrés Beltrán, fundador" 
                className="rounded-3xl shadow-2xl relative z-10 object-cover aspect-[4/5] w-full border-4 border-white"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg z-20 border border-slate-100"
              >
                <p className="font-mono text-lg text-blue-900 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" /> Dr. Andrés Beltrán
                </p>
                <p className="text-sm text-slate-500 mt-1">Médico Fundador</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-sans tracking-tight text-slate-900 mb-8 leading-tight">Una misión que nació en el campo</h2>
              <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  Farmacias Vitalis nació en el año 2012, cuando el <strong>Dr. Andrés Beltrán</strong>, un médico rural, detectó que muchas familias dejaban tratamientos incompletos por no poder costearlos.
                </p>
                <p>
                  Con una idea clara —<strong>hacer accesible la salud sin sacrificar calidad</strong>— abrió una pequeña farmacia en su comunidad. El concepto creció rápidamente gracias a la confianza de la gente.
                </p>
                <motion.blockquote 
                  whileHover={{ x: 10 }}
                  className="text-xl font-medium text-blue-800 border-l-4 border-blue-500 pl-4 italic bg-blue-50 py-2 pr-4 rounded-r-lg cursor-default"
                >
                  "Hoy, mantenemos intacta esa misión original en todas nuestras sucursales."
                </motion.blockquote>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -5 }} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-700">Genéricos Certificados</span>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="text-blue-600 w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-700">Orientación Honesta</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section id="mision" className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              { title: "Nuestra Misión", icon: Heart, text: "Brindar acceso a medicamentos seguros, eficaces y económicos, acompañados de una atención cercana y profesional que mejore la calidad de vida." },
              { title: "Nuestra Visión", icon: Users, text: "Ser la cadena de farmacias genéricas de mayor confianza, reconocida por su compromiso social, innovación y cercanía con la comunidad." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-mono mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESPONSABILIDAD SOCIAL */}
      <section id="social" className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold font-mono mb-6">Responsabilidad Social</h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              Porque una comunidad sana es una comunidad fuerte. Impulsamos campañas permanentes de apoyo real.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Donación", icon: Pill, desc: "Programas de apoyo para asegurar tratamientos a quienes más lo necesitan." },
              { title: "Jornadas", icon: Heart, desc: "Acercamos servicios básicos y orientación preventiva a zonas rurales." },
              { title: "Educación", icon: ShieldCheck, desc: "Talleres sobre uso responsable para prevenir automedicación riesgosa." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors"
              >
                <item.icon className="w-12 h-12 text-blue-300 mb-6" />
                <h4 className="text-xl font-bold mb-4 font-mono">{item.title}</h4>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-sans tracking-tight text-center mb-16 text-slate-900"
          >
            Lo que dicen nuestros pacientes
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { text: "Gracias a Farmacias Vitalis puedo seguir mi tratamiento sin afectar mi economía. Es un alivio encontrar este nivel de atención.", name: "María G.", type: "Cliente Frecuente", initial: "MG" },
              { text: "Siempre me explican cómo tomar mis medicamentos con una paciencia increíble. Eso da mucha confianza y tranquilidad.", name: "Luis R.", type: "Paciente", initial: "LR" }
            ].map((testimonio, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-slate-50 p-10 rounded-3xl relative border border-slate-100 shadow-xl shadow-slate-200/50 ${index === 1 ? 'md:mt-8' : ''}`}
              >
                <div className="text-6xl text-blue-200 absolute top-4 left-6 font-serif">"</div>
                <div className="relative z-10 pt-6">
                   <div className="flex text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg leading-relaxed font-medium">
                    {testimonio.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg shadow-inner border-2 border-white">
                      {testimonio.initial}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">{testimonio.name}</p>
                      <p className="text-sm text-slate-500">{testimonio.type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-900/50">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-mono text-white tracking-tight">
                  FARMACIAS VITALIS
                </span>
              </div>
              <p className="text-base max-w-sm leading-relaxed mb-8">
                Medicamentos genéricos de calidad certificada, al alcance de todas las familias mexicanas. Salud justa para todos.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-mono font-bold mb-6 text-lg tracking-tight">Contacto Directo</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" /> 
                  <span>334535345</span>
                </li>
                <li className="flex items-start gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" /> 
                  <span>juanitoperez@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0" /> 
                  <span>Tampico Madero 12234,<br />México.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-mono font-bold mb-6 text-lg tracking-tight">Legal</h5>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Aviso de Privacidad</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Licencias Sanitarias</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-slate-500">
            <p>&copy; {new Date().getFullYear()} Farmacias Vitalis. Todos los derechos reservados.</p>
            <p>Desarrollado con <Heart className="w-3 h-3 inline text-blue-600 fill-blue-600" /> por MochiDevs</p>
          </div>
        </div>
      </footer>
    </div>
  );
}