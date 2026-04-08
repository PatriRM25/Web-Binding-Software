import { motion } from "framer-motion";


export default function HeroImagen() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
            <motion.img
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/src/assets/images/banner.jpg"
                alt="Binding Software"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-white/20 z-10" />

            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-black text-5xl md:text-8xl font-serif tracking-tight"
                >
                    Binding Software
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-black mt-4 text-sm md:text-xl uppercase tracking-[0.4em] font-light"
                >
                    Revoluciona tu hotel con tecnología de vanguardia
                </motion.p>

               
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="mt-10"
                >
                    <a href="/es#solutions" className="group">
                        <button
                            type="button"
                            className="relative inline-flex h-16 w-48 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
                        >
                           
                            <span
                                className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#4f46e5_30%,#2563eb_60%,#1e3a8a_100%)] "
                            ></span>

                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl"
                            >
                                <p className="m-0 p-0 text-center text-sm font-bold tracking-widest uppercase">
                                    Contactar
                                </p>
                            </span>
                        </button>
                    </a>
                </motion.div>
            </div>


            <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-30">
                <svg
                    class="relative block w-[calc(100%+1.3px)] h-12.5 md:h-25"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 120L1200 120 1200 0z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
}