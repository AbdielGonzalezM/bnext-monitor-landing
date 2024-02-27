import Image from 'next/image'

import TestimonialImage08 from '@/public/images/testimonials/8.png'
import TestimonialImage03 from '@/public/images/testimonials/3.png'
import TestimonialImage09 from '@/public/images/testimonials/9.png'
import TestimonialImage11 from '@/public/images/testimonials/11.png'
import TestimonialImage06 from '@/public/images/testimonials/6.png'
import Marquee from 'react-fast-marquee'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Testimonios</h2>
            <p className="text-xl text-gray-400">Los usuarios del Bnext Monitor se tomaron el tiempo de darnos sus comentarios, los cuales, son de valiosa ayuda.</p>
          </div>

            {/* Testimonials */}
            <div >

              <Marquee pauseOnHover speed={50} autoFill gradientColor="#151719" gradient className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

                <div className="mb-12 md:mb-0 mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src="/images/testimonials/1.png"
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-white text-lg font-bold">Arturo López</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Analista PEDELEC
                  </h6>
                  <p className="mb-4">
                    Ahora el monitoreo se termina más temprano.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Erika Parra' width={100} height={100} src={TestimonialImage11}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Erika Parra</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Consultor IN
                  </h6>
                  <p className="mb-4">
                  Ahora, crear una orden, darle seguimiento, asignarla a una sucursal o región y visualizar los resultados es más eficaz y rápida.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src="/images/testimonials/7.png"
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Miguel Torres</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Analista de Contabilidad
                  </h6>
                  <p className="mb-4">
                  El Monitor de Sync es una herramienta que me ha beneficiado en reducir mi carga de trabajo gracias a su eficiencia en tiempos de respuesta.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>

                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src="/images/testimonials/5.png"
                      className=" w-24 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Emma Primera</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Coordinador de operaciones
                  </h6>
                  <p className="mb-4">
                  El monitor permite agilizar los procesos, reducir tiempo de respuesta y el error humano.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
              
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Erika Parra' width={100} height={100} src={TestimonialImage06}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Ramiro Salazar</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Analista de PEDELEC
                  </h6>
                  <p className="mb-4">
                  El monitor web me ha ayudado a optimizar tiempos y a realizar de manera más sencilla y rápida.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src="/images/testimonials/2.png"
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Osvaldo Fraga</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Analista de Sincronización
                  </h6>
                  <p className="mb-4">
                  El monitor Sync me ha ayudado a que mi trabajo sea más eficaz.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src={TestimonialImage09}
                      className=" w-24 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Alberto Rodriguez</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Agente Operaciones 2do Nivel
                  </h6>
                  <p className="mb-4">
                  Antes, para realizar una programación, era aprox. 1 hora con toda la configuración, ahora lo haces todo en menos de 10 minutos.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Arturo López' width={100} height={100} src={TestimonialImage03}
                      className=" w-24 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Victor Carvajal</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Agente Operaciones 2do Nivel
                  </h6>
                  <p className="mb-4">
                  El monitor web se ha vuelto escencial en mi trabajo. Es una herramienta innovadora con un gran potencial para aumentar la productividad en cualquier entorno laboral.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>
                
                <div className="mb-12 md:mb-0  mx-6 max-w-[250px] justify-center text-center">
                  <div className="mb-6 flex justify-center">
                    <Image alt='Rosa Barbosa' width={100} height={100} src={TestimonialImage08}
                      className=" w-24 rounded-full shadow-lg dark:shadow-black/20" />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Rosa Barbosa</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Agente Operaciones 2do Nivel
                  </h6>
                  <p className="mb-4">
                  Siento que fue más notable el monitor Día 1, ya que antes, en esta actividad, se tenía que descargar varios reportes, agregar o quitar columnas, lo cual era muy tardado. Ya no es necesario descargar reportes de diferentes lugares. Nos ahorró mucho tiempo.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                      <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                    </svg>
                  </p>
                </div>

              </Marquee>
            </div>

        </div>
      </div>
    </section>
  )
}
