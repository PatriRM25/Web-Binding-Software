import { motion } from "framer-motion";


const iconsVariants = {
  digital: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M9 12m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M15 12v5" /></svg>
  ),
  cloud: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /></svg>
  ),
  dataProtect: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /><path d="M15 19l2 2l4 -4" /></svg>
  ),
  security: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 10v-5h-1m8 14v-5h-1" /><path d="M15 5m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z" /><path d="M10 14m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z" /><path d="M6 10h.01m-.01 9h.01" /></svg>
  ),
  userExperience: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h.5" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg>
  ),
  dollar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>
  ),
  help: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /></svg>
  ),
  edit: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
  )
};


const services = [
  { id: 1, title: "Nativo Digital", desc: "Lectura y firma 100% digital con identidades electrónicas.", icon: iconsVariants.digital },
  { id: 2, title: "Nativo en la nube", desc: "Impulsado por AWS, sin instalación ni mantenimiento.", icon: iconsVariants.cloud },
  { id: 3, title: "Conforme a derecho", desc: "Cumple con todas las regulaciones de protección de datos.", icon: iconsVariants.dataProtect },
  { id: 4, title: "Seguro", desc: "Datos encriptados para proteger la información de tus clientes.", icon: iconsVariants.security },
  { id: 5, title: "Experiencia de usuario optimizada", desc: "Interfaz intuitiva y fácil de usar para clientes y personal.", icon: iconsVariants.userExperience },
  { id: 6, title: "Rentable", desc: "Reduce costes operativos y optimiza procesos.", icon: iconsVariants.dollar },
  { id: 7, title: "Gestión integral", desc: "Control completo desde el Web Service corporativo.", icon: iconsVariants.help },
  { id: 8, title: "Personalizable", desc: "Adaptado a las necesidades específicas de tu hotel.", icon: iconsVariants.edit },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, 
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6,
      ease: "easeOut"
     }
  },
};

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-[5%] pt-40 pb-40">
      
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        
        
        <div className="w-full flex justify-center mb-24">
          <motion.h1 
            variants={titleVariants}
            className="font-avenir font-bold text-4xl md:text-6xl tracking-tight bg-linear-to-r from-[#7f4790] to-[#3977b4] bg-clip-text text-transparent text-center"
          >
            ¿Por qué Binding Software?
          </motion.h1>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 }}}
              className="group bg-white p-8 rounded-[40px] border border-black/10 shadow-lg hover:border-purple-800 flex flex-col items-center text-center h-full min-h-60 w-full"
            >
              <div className="text-blue-900 mb-6 group-hover:text-purple-800 transition-colors duration-300 text-4xl">
                {service.icon}
              </div>

              <h3 className="text-black font-extrabold mb-3 text-xl leading-tight">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed grow">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
