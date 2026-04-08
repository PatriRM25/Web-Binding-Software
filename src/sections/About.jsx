import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About({ imagePath }) {
  return (
    <section className="relative w-full max-w-7xl min-h-200 bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-50 mx-auto">
      
      
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full lg:w-2/5 h-80 lg:h-auto overflow-hidden"
      >
        <img
          src={imagePath} 
          alt="Hotel Sostenible" 
          className="absolute inset-0 w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 z-10 bg-linear-to-l from-white via-white/40 to-transparent pointer-events-none"></div>
      </motion.div>

      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full lg:w-3/5 flex flex-col justify-center p-8 md:p-16 lg:pl-20 z-10 bg-white"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter bg-linear-to-r from-[#632c70] to-[#265380] bg-clip-text text-transparent lg:-ml-32">
          Sobre <br /> Binding Software
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-6 text-slate-600 text-lg">
        <div class="space-y-8 text-slate-600 text-lg leading-relaxed max-w-3xl">
                
                <p class="text-xl font-medium text-slate-800 border-l-4 border-[#7f4790] pl-6 py-2">
                    En <span class="text-[#7f4790] font-bold">BINDING SOFTWARE</span>, creemos firmemente que la verdadera I+D+i se tiene que generar desde el sector pensando en el futuro para adelantarse a las necesidades siempre cambiantes.
                </p>

                <div class="space-y-4">
                    <p>
                        Nacimos en la hotelería con una visión: ofrecer soluciones a medida con la más alta tecnología. Nuestro objetivo es potenciar la industria con herramientas TIC intuitivas, combinando una visión a largo plazo con un enfoque práctico y ágil.
                    </p>
                    <p>
                        Estamos comprometidos con el desarrollo de <span class="text-green-700 font-semibold">soluciones sostenibles</span> que ayuden a los hoteles a reducir su huella ecológica, contribuyendo a una industria más verde y responsable.
                    </p>
                </div>

                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p class="mb-4">
                        Nuestra plataforma evoluciona de la mano de nuestros clientes, integrando <span class="font-bold text-slate-900">IA, IoT y automatización avanzada</span>. Esto garantiza que nuestros hoteles siempre estén a la vanguardia.
                    </p>
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-black uppercase tracking-widest text-[#265380] bg-[#265380]/10 px-3 py-1 rounded">Stack Tecnológico</span>
                        <span class="text-sm font-bold text-slate-700 underline decoration-[#3977b4]">AWS Sustainability</span>
                    </div>
                </div>

                <p class="text-base text-slate-500 italic">
                    Entendemos que la excelencia no es un objetivo estático. Nuestro departamento de I+D+i explora constantemente nuevas oportunidades para redefinir la experiencia hotelera y elevar la calidad del servicio.
                </p>
                <div class="py-6 border-t border-b border-slate-100 flex items-center justify-center lg:justify-start">
                    <p class="text-2xl md:text-3xl font-black tracking-widest text-center lg:text-left">
                        <span class="text-[#3977b4]">HOTELERÍA</span> 
                        <span class="mx-2 text-slate-300">+</span> 
                        <span class="text-[#7f4790]">TIC</span> 
                        <span class="mx-2 text-slate-400">=</span> 
                        <span class="bg-linear-to-r from-[#632c70] to-[#265380] bg-clip-text text-transparent uppercase">Binding Software</span>
                    </p>
                </div>
            </div>
        
        </motion.div>

        <motion.button variants={itemVariants} className="mt-12 ">
       
                <button className="bg-[#265380] hover:bg-[#632c70] text-white font-bold py-4 px-12 rounded-full transition-all duration-500 shadow-xl hover:shadow-[#632c70]/20 transform hover:-translate-y-1">
                    Saber más sobre nuestra tecnología
                </button>
           
        </motion.button>
      </motion.div>
    </section>
  );
}