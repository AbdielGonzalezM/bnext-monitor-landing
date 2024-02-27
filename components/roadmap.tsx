export default function Roadmap() {
    return (
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16"  data-aos="fade-up">
            <div className="bg-indigo-700 p-4">

                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h2 mb-4">¿Qué sigue?</h1>
                    <p className="text-xl text-gray-300">Presentamos nuestro plan de trabajo para este año.</p>
                </div>
                
                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-sm">
                    <div className="flex md:contents flex-row-reverse"  data-aos="fade-up">
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"   data-aos="fade-up">
                            <ul className="max-w-md space-y-1 list-disc list-inside">
                                <li>
                                    Enviar más de un XML por orden de sincronización.
                                </li>
                                <li>
                                    Calendarización de ordenes del sync.
                                </li>
                                <li>
                                    Monitoreo de PEDELEC Día 3.
                                </li>
                                <li>
                                    Rollout de versión del Bnext Service con comunicación al Bnext Monitor.
                                </li>
                                <li>
                                    Extracción de información de las sucursales con el API de Splashtop.
                                </li>
                            </ul>
                            <span className="absolute text-lg text-indigo-100/75 -top-7 font-bold right-2 whitespace-nowrap">Q1</span>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto"  data-aos="fade-up">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents"  data-aos="fade-up">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto"  data-aos="fade-up">
                            <ul className="max-w-md space-y-1 list-disc list-inside">
                                <li>
                                    Integración total del API de Splashtop en Bnext Monitor.
                                </li>
                                <li>
                                    Automatización de acciones en PEDELEC (Día 1 y 3).
                                </li>
                                <li>
                                    Desarrollo de monitoreo de PEDELEC Día 2.
                                </li>
                                <li>
                                    Desarrollo de monitoreo de interfaces.
                                </li>
                            </ul>
                            <span className="absolute text-lg text-indigo-100/75 -top-7 font-bold left-2 whitespace-nowrap">Q2</span>
                        </div>
                    </div>

                    <div className="flex md:contents flex-row-reverse"  data-aos="fade-up">
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"  data-aos="fade-up">
                            
                            <ul className="max-w-md space-y-1 list-disc list-inside">
                                <li>
                                    Sincronización automática.
                                </li>
                                <li>
                                    Detección de escenarios antifraude en tiempo real.
                                </li>
                                <li>
                                    Herramienta de monitoreo para el comerciante.
                                </li>
                                <li>
                                    Alertas de prevención de escenarios.
                                </li>
                                <li>
                                    Analítica de Bnext Service.
                                </li>
                            </ul>
                            <span className="absolute text-lg text-indigo-100/75 -top-7 font-bold right-2 whitespace-nowrap">Q3</span>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto" data-aos="fade-up">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents"  data-aos="fade-up">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto" data-aos="fade-up">
                            <ul className="max-w-md space-y-1 list-disc list-inside">
                                <li>
                                    Programación de Workflows.
                                </li>
                                <li>
                                    Acceso de solo lectura a PostgreSQL de las sucursales.
                                </li>
                                <li>
                                    Ejecución de comandos remotamente.
                                </li>
                                <li>
                                    Automatización de la carga de archivos al FTP del Updater.
                                </li>
                                <li>
                                    Streaming de archivos.
                                </li>
                                <li>
                                    Separación de Monitor de Bnext Sync, Service y Updater en nueva plataforma.
                                </li>
                                <li>
                                    Multi tenant.
                                </li>
                                <li>
                                    Bnext App Store.
                                </li>
                            </ul>
                            <span className="absolute text-lg text-indigo-100/75 -top-7 font-bold left-2 whitespace-nowrap">Q4</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}