export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Conoce nuestro catálogo de herramientas.</h2>
            <p className="text-xl text-gray-400">Bnext Monitor cuenta ya con una amplia gama de herramientas que ayudan a nuestros colaboradores a dar un servicio calidad a nuestros clientes.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <svg x="15" width={35} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                  <path d=" M23.995,13.089C23.996,13.059,24,13.03,24,13c0-4.418-3.582-8-8-8c-3.814,0-6.998,2.671-7.8,6.242C5.208,12.038,3,14.757,3,18 c0,3.866,3.134,7,7,7h13c3.314,0,6-2.686,6-6C29,16.026,26.834,13.564,23.995,13.089z" fill="none" id="XMLID_24_" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                  <path d=" M11,17c0,2.761,2.239,5,5,5c0.711,0,1.387-0.148,1.999-0.416" fill="none" id="XMLID_25_" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                  <path d=" M21,17c0-2.761-2.239-5-5-5c-0.712,0-1.39,0.149-2.003,0.418" fill="none" id="XMLID_26_" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                    <polygon fill="none" id="XMLID_27_" points=" 9,17 11,15 13,17 " stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></polygon>
                    <polygon fill="none" id="XMLID_28_" points=" 23,17 21,19 19,17 " stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></polygon>
                  </g>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Bnext Sync</h4>
              <p className="text-lg text-gray-400 text-center">Actualiza la información en las máquinas y en el servidor central en todo momento.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <svg width={35} x="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M18.4721 16.7023C17.3398 18.2608 15.6831 19.3584 13.8064 19.7934C11.9297 20.2284 9.95909 19.9716 8.25656 19.0701C6.55404 18.1687 5.23397 16.6832 4.53889 14.8865C3.84381 13.0898 3.82039 11.1027 4.47295 9.29011C5.12551 7.47756 6.41021 5.96135 8.09103 5.02005C9.77184 4.07875 11.7359 3.77558 13.6223 4.16623C15.5087 4.55689 17.1908 5.61514 18.3596 7.14656C19.5283 8.67797 20.1052 10.5797 19.9842 12.5023M19.9842 12.5023L21.4842 11.0023M19.9842 12.5023L18.4842 11.0023" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    <path d="M12 8V12L15 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                  </g>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Bnext Updater</h4>
              <p className="text-lg text-gray-400 text-center">Calendariza la instalación, actualización o desinstalación de cualquier software en las terminales.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Bnext Service</h4>
              <p className="text-lg text-gray-400 text-center">Ejecuta las tareas programadas en el Bnext Service al instante.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Servicios</h4>
              <p className="text-lg text-gray-400 text-center">Visualización rápida de estatus y caracteristicas del software / servicios dentro de las sucursales.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1340.4 945.8">
                  <path fill="#ffffff" className="st0" d="M791.8,714.3h18.7l-3.9,28.6h11.9l-2.2,16.2h-11.9l-8.2,60.5h-18.8l8.3-60.5h-7.5l2.2-16.2h7.5L791.8,714.3z"/>
                  <path fill="#ffffff" className="st0" d="M374.8,744.4c-7.5-4-16.8-5.1-21.5-5.1c-6.3-0.1-12.4,2-17.2,6c-4.8,3.8-7.5,9.6-7.3,15.7
                    c0.1,4.8,1.7,9.4,4.6,13.1c2.2,3,6.2,6.5,12,10.6c5,3.6,8.1,6,9.2,7.4c1,1.1,1.6,2.5,1.7,4c0,1.8-0.7,3.4-2.1,4.6
                    c-1.7,1.2-3.9,1.8-6,1.7c-6.2,0-16.2-2.7-22.6-8.4l-10.9,13c4.8,4.2,10.3,7.6,16.2,9.9c5.3,1.9,10.8,2.8,16.4,2.8
                    c8.9,0.1,15.6-2.5,20.3-7.6s7-10.4,7-16.1c0-4.2-1.2-8.4-3.4-12c-2.2-3.6-7-8.1-14.2-13.2c-4.5-3.3-7.2-5.4-8.1-6.6
                    c-0.9-0.9-1.4-2.1-1.4-3.4c0-1.3,0.7-2.5,1.7-3.2c1.3-0.9,2.8-1.4,4.3-1.4c5.3-0.6,12.5,1.5,15.2,2.9c2.9,1.4,5.6,3,8.1,5l8.1-12.9
                    C381.9,748.5,378.5,746.2,374.8,744.4z"/>
                  <polygon fill="#ffffff" className="st0" points="483.5,819.5 502.2,819.5 516.7,713.4 497.9,713.4 "/>
                  <path fill="#ffffff" className="st0" d="M565.8,739.5c-7.1,0.4-13.8,1.9-20.3,5.8c-6.5,3.8-11.8,9.4-15.4,16c-3.8,6.6-5.8,14-5.8,21.6
                    c-0.1,9.5,3,18.7,9,26c6,7.5,14.1,11.2,24.2,11.2c4.1,0.1,8.1-0.7,11.9-2.3c4.2-2,8.1-4.7,11.4-7.9l-1.1,9.1h18.6
                    c0,0,5.5-30.7,5.8-36c0.3-5.3,1.7-16-6.3-27.2C589.4,744.1,575.2,739,565.8,739.5z M581.8,789.4c-1.9,4-4.9,7.3-8.7,9.7
                    c-3.7,2.1-7.9,3.2-12.1,3.1c-5.1,0.2-10.1-1.8-13.6-5.5c-3.5-3.7-5.3-8.5-5.3-14.5c0-7.8,2.3-14.2,7-19.1c4.4-4.8,10.6-7.5,17.1-7.4
                    c5.8,0,10.4,1.8,13.9,5.5s5.2,8.6,5.2,14.7C585.1,780.6,583.9,785.3,581.8,789.4L581.8,789.4z"/>
                  <path fill="#ffffff" className="st0" d="M739.1,740.9c-7.8,0-15.2,3.3-22.4,9.7l5.1-37.3h-18.7l-14.5,106.1h18.7l3.7-27c1.4-10.7,3-17.9,4.6-21.8
                    c1.5-3.7,4.1-6.8,7.3-9.1c2.7-2,6-3.2,9.4-3.3c3.3,0,5.8,0.8,7.5,2.5c1.8,1.7,2.6,4,2.6,7.1c-0.1,3.3-0.4,6.5-0.8,9.7l-5.8,41.9
                    h18.7l5.9-42.9c0.7-4.5,1.1-9,1.2-13.5c0.2-5.9-2.1-11.7-6.3-15.9C751.2,743.1,745.7,740.9,739.1,740.9z"/>
                  <path fill="#ffffff" className="st0" d="M886.2,744.3c-5.7-3.2-12.1-4.8-18.6-4.7c-11.7,0-21.9,4.2-30.7,12.8c-8.8,8.5-13.2,19.2-13.2,32
                    c0,10.7,3.3,19.3,9.7,25.8s15.1,9.9,26,9.9c12.5,0,23-4.2,31.5-12.6c8.3-7.9,12.9-19,12.8-30.5c0.1-6.8-1.5-13.5-4.6-19.5
                    C896.2,752,891.7,747.4,886.2,744.3z M879,794.6c-4.2,5.3-10.1,8-18.1,8c-5.6,0-10-1.7-13.4-5.3s-5-8.1-5-13.8
                    c0-6.5,2.2-12.8,6.2-17.9c4.1-5.5,10-8.3,17.7-8.3c5.1-0.2,10,1.7,13.6,5.3c3.5,3.5,5.3,8.1,5.3,13.7
                    C885.4,782.9,883.1,789.4,879,794.6L879,794.6z"/>
                  <path fill="#ffffff" className="st0" d="M672.8,744.4c-7.5-4-16.8-5.1-21.5-5.1c-6.3-0.1-12.4,2-17.2,6c-4.8,3.8-7.5,9.6-7.3,15.7
                    c0.1,4.8,1.7,9.4,4.6,13.1c2.2,3,6.2,6.5,12,10.6c5,3.6,8.1,6,9.2,7.4c1,1.1,1.6,2.5,1.7,4c0,1.8-0.7,3.4-2.1,4.6
                    c-1.7,1.2-3.9,1.8-6,1.7c-6.2,0-16.2-2.7-22.7-8.4l-10.9,13c4.8,4.2,10.3,7.6,16.2,9.9c5.3,1.9,10.8,2.8,16.4,2.8
                    c8.8,0.1,15.7-2.5,20.3-7.6s7-10.4,7-16.1c0-4.2-1.2-8.4-3.4-12c-2.2-3.7-7-8.1-14.2-13.3c-4.5-3.3-7.2-5.4-8.1-6.6
                    c-0.9-0.9-1.4-2.1-1.4-3.4c0.1-1.3,0.7-2.5,1.8-3.2c1.3-0.9,2.8-1.4,4.3-1.4c5.3-0.6,12.5,1.5,15.2,2.9c2.9,1.4,5.6,3,8.1,5
                    l8.1-12.9C679.9,748.4,676.5,746.2,672.8,744.4z"/>
                  <path fill="#ffffff" className="st0" d="M441.7,739.7c-12.3-0.8-24.3,3.5-33.4,11.9c-3.2,2.8-9.3,10.9-11.1,21.9c-1,6-10.1,72.4-10.1,72.4l18.7-7.3
                    l5.2-31.3c2.3,3.9,5.7,7.2,9.7,9.4c4,2.2,8.4,3.3,12.9,3.2c7,0,13.9-2,19.9-5.7c6.4-3.9,11.7-9.4,15.2-15.9c3.7-6.6,5.6-14,5.6-21.5
                    c0.1-9.4-3-18.5-8.8-25.8C459.7,743.5,451.7,740.2,441.7,739.7z M448.9,795.4c-4.2,4.8-10.3,7.5-16.7,7.3c-5.6,0-10.2-1.8-13.6-5.5
                    s-5.2-8.5-5.2-14.5c0-4.7,1.2-9.3,3.4-13.5c1.9-4,4.9-7.3,8.5-9.7c3.6-2.1,7.7-3.2,11.9-3.1c5-0.2,9.9,1.8,13.4,5.5
                    c3.5,3.7,5.2,8.5,5.2,14.5C455.8,784.2,453.5,790.4,448.9,795.4z"/>
                  <path fill="#ffffff" className="st0" d="M963.3,739c-12.3-0.8-24.3,3.5-33.4,11.8c-3.2,2.8-9.3,10.9-11.1,21.9c-1,6-10.1,72.5-10.1,72.5l18.7-7.3
                    l5.2-31.2c2.4,3.9,5.7,7.2,9.7,9.4c4,2.2,8.4,3.3,13,3.3c7,0,13.9-2,19.9-5.8c6.4-3.9,11.7-9.4,15.2-16c3.7-6.6,5.6-14,5.6-21.5
                    c0.1-9.4-3-18.6-8.8-25.9C981.3,742.8,973.4,739.5,963.3,739z M970.5,794.6c-4.2,4.8-10.3,7.5-16.7,7.3c-5.6,0-10.2-1.8-13.6-5.5
                    s-5.2-8.5-5.2-14.5c0-4.7,1.2-9.3,3.4-13.5c1.9-4,4.8-7.3,8.5-9.7c3.6-2.1,7.7-3.2,11.9-3.1c5.1-0.2,10,1.8,13.4,5.5
                    c3.5,3.7,5.2,8.5,5.2,14.5C977.4,783.4,975.1,789.7,970.5,794.6z"/>
                  <path fill="#ffffff" className="st0" d="M1021.1,727.9c0-0.2-0.1-0.4-0.1-0.6v-0.5c0-0.2-0.1-0.5-0.1-0.7c0-0.2-0.1-0.4-0.2-0.6
                    c-0.1-0.2-0.2-0.3-0.4-0.5c-0.2-0.1-0.4-0.2-0.6-0.3l0,0c0.5-0.1,0.8-0.5,1.1-0.9c0.3-0.4,0.4-0.9,0.4-1.4c0-0.3-0.1-0.6-0.2-1
                    c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1.1-0.2h-4.9v9h2v-3.5h2c0.4,0,0.8,0.1,1.1,0.3
                    c0.3,0.3,0.4,0.7,0.4,1.1c0.1,0.4,0.1,0.8,0.1,1.1c0,0.3,0,0.7,0.2,1h2c-0.1-0.2-0.2-0.3-0.2-0.5
                    C1021.1,728.4,1021.1,728.2,1021.1,727.9z M1018.8,723.7c-0.3,0.2-0.6,0.3-1,0.3h-2.2v-2.5h2.2c0.4,0,0.7,0.1,1,0.3
                    c0.3,0.3,0.4,0.6,0.3,1C1019.2,723.1,1019.1,723.5,1018.8,723.7z"/>
                  <path fill="#ffffff" className="st0" d="M1017,716.2c-4.7,0-8.5,3.9-8.5,8.6c0,4.7,3.9,8.5,8.6,8.5c4.7,0,8.5-3.8,8.5-8.5
                    C1025.6,720,1021.7,716.2,1017,716.2z M1017,731.7c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S1020.9,731.7,1017,731.7z"/>
                  <path fill="#ffffff" className="st1" d="M853.6,398.8c0,0-0.3-1.4-0.9-3.8c-5.9-27-11.7-87.6,27.3-113.7c38.7-25.8,76.8,4.3,82.5,20.4
                    c8.4,23.2-10.6,33.8-43.9,42.7C866.3,358.2,854.5,392,853.6,398.8z"/>
                  <path fill="#ffffff" className="st1" d="M865,440.7c-78-38-69.5-100.8-79.2-132.4C730.3,114.2,619.7,100.3,607,99.9c-30.7-0.9-84.6,13.1-88.7,74.9
                    c-5.8,88,117.9,82.2,163.5,117.9c31.2,24.4,52.9,78.5-4.5,66.7c-69.5-26-150.8-18.5-184.4-4.4c-57,23.9-77,54.9-82.7,61.3
                    S334.1,521,420,601.8c67.6,63.5,159.3,18.6,195.6-32c21.8-30.3,37.1-60.3,54.2-86.7c67.2-82.4,148-28.4,169.1,9.8
                    c32.6,58.5,55.4,88,84.6,68.3C952.7,541.6,948.7,481.5,865,440.7z"/>
                  <rect x="270.2" y="72.9" fill="none" className="st2" width="800" height="800"/>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Splashtop</h4>
              <p className="text-lg text-gray-400 text-center">Integra la funcionalidad que nos ofrece Splashtop, dentro de Bnext Monitor.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <svg x="15" width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M17.5 6.75H15.5V6C15.5 5.04 14.71 4.25 13.75 4.25H4.5C3.54 4.25 2.75 5.04 2.75 6V15C2.75 15.96 3.54 16.75 4.5 16.75H4.78C4.91 18.42 6.3 19.75 8 19.75C9.7 19.75 11.09 18.42 11.22 16.75H12.77C12.9 18.42 14.29 19.75 15.99 19.75C17.69 19.75 19.08 18.42 19.21 16.75H19.49C20.45 16.75 21.24 15.96 21.24 15V10.5C21.24 8.43 19.56 6.75 17.49 6.75H17.5ZM4.25 15V6C4.25 5.86 4.36 5.75 4.5 5.75H13.75C13.89 5.75 14 5.86 14 6V13.94C14 13.94 13.95 14 13.92 14.02C13.77 14.15 13.63 14.29 13.5 14.44C13.46 14.49 13.42 14.53 13.39 14.58C13.24 14.79 13.1 15 13.01 15.24H11.01C11.01 15.24 11.01 15.24 11.01 15.23C10.94 15.06 10.84 14.89 10.74 14.74C10.71 14.7 10.68 14.66 10.65 14.61C10.57 14.49 10.48 14.39 10.38 14.28C10.34 14.24 10.31 14.2 10.27 14.16C10.14 14.04 10.01 13.93 9.87 13.83C9.85 13.82 9.84 13.8 9.82 13.79C9.67 13.69 9.51 13.61 9.35 13.53C9.29 13.5 9.23 13.48 9.17 13.46C9.04 13.41 8.92 13.37 8.79 13.34C8.73 13.33 8.67 13.31 8.61 13.3C8.42 13.26 8.22 13.24 8.02 13.24C7.82 13.24 7.63 13.26 7.43 13.3C7.37 13.31 7.31 13.33 7.25 13.34C7.12 13.37 6.99 13.41 6.87 13.46C6.81 13.48 6.75 13.5 6.69 13.53C6.53 13.6 6.37 13.69 6.22 13.79C6.2 13.8 6.19 13.81 6.17 13.83C6.03 13.93 5.89 14.04 5.77 14.16C5.73 14.2 5.69 14.24 5.66 14.28C5.56 14.38 5.47 14.49 5.39 14.61C5.36 14.65 5.33 14.69 5.3 14.74C5.2 14.9 5.11 15.06 5.03 15.23C5.03 15.23 5.03 15.23 5.03 15.24H4.53C4.39 15.24 4.28 15.13 4.28 14.99L4.25 15ZM8 18.25C7.04 18.25 6.25 17.46 6.25 16.5C6.25 16.38 6.26 16.26 6.29 16.15C6.33 15.97 6.4 15.8 6.49 15.65C6.5 15.62 6.52 15.6 6.53 15.57C6.62 15.43 6.73 15.3 6.86 15.19C6.89 15.17 6.91 15.15 6.94 15.13C7.07 15.03 7.22 14.94 7.38 14.88C7.4 14.88 7.43 14.86 7.46 14.86C7.63 14.8 7.82 14.76 8.01 14.76C8.2 14.76 8.38 14.8 8.56 14.86C8.59 14.86 8.61 14.87 8.64 14.88C8.8 14.94 8.95 15.03 9.08 15.13C9.11 15.15 9.13 15.17 9.16 15.19C9.29 15.3 9.4 15.43 9.49 15.57C9.51 15.59 9.52 15.62 9.53 15.65C9.62 15.81 9.69 15.97 9.73 16.15C9.75 16.26 9.77 16.38 9.77 16.5C9.77 17.46 8.98 18.25 8.02 18.25H8ZM16 18.25C15.04 18.25 14.25 17.46 14.25 16.5C14.25 16.38 14.26 16.26 14.29 16.15C14.32 16.03 14.35 15.91 14.4 15.8C14.4 15.8 14.4 15.79 14.4 15.78C14.45 15.68 14.5 15.58 14.57 15.49C14.58 15.47 14.6 15.46 14.61 15.44C14.67 15.36 14.73 15.29 14.8 15.22C14.82 15.2 14.84 15.19 14.86 15.17C14.93 15.11 15.01 15.05 15.09 15C15.11 14.99 15.14 14.97 15.17 14.96C15.26 14.91 15.36 14.87 15.46 14.84C15.5 14.83 15.54 14.81 15.59 14.8C15.72 14.77 15.86 14.75 16 14.75C16.19 14.75 16.37 14.79 16.55 14.85C16.58 14.85 16.6 14.86 16.63 14.87C16.79 14.93 16.94 15.02 17.07 15.12C17.1 15.14 17.12 15.16 17.15 15.18C17.28 15.29 17.39 15.42 17.48 15.56C17.5 15.58 17.51 15.61 17.52 15.64C17.61 15.8 17.68 15.96 17.72 16.14C17.74 16.25 17.76 16.37 17.76 16.49C17.76 17.45 16.97 18.24 16.01 18.24L16 18.25ZM15.5 11.25V8.25H17.5C18.74 8.25 19.75 9.26 19.75 10.5V11.25H15.5Z" fill="#ffffff"></path> 
                  </g>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Pedelec</h4>
              <p className="text-lg text-gray-400 text-center">Seguimiento y conciliación de los procesos de la generación del pedido electrónico.</p>
            </div>
            
            {/* 7th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <svg x="17" width={30} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.874 172.874" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <g> 
                      <path fill="#ffffff" d="M100.806,81.731c0-8.415-6.822-15.237-15.237-15.237c-8.415,0-15.237,6.822-15.237,15.237 c0,5.667,3.101,10.602,7.692,13.227l0.122,51.174c0.01,4.136,3.366,7.482,7.5,7.482c0.006,0,0.012,0,0.018,0 c4.143-0.01,7.492-3.376,7.482-7.518l-0.122-51.083C97.665,92.401,100.806,87.436,100.806,81.731z"></path> 
                      <path fill="#ffffff" d="M30.421,30.496L20.077,19.261c-28.291,37.061-26.359,88.93,3.752,123.863l10.225-11.106 C10.165,103.108,8.449,61.261,30.421,30.496z"></path> 
                      <path fill="#ffffff" d="M45.2,46.549L34.711,35.156c-19.371,28.138-17.718,65.87,3.585,92.254l10.29-11.177 C33.411,95.99,31.993,68.224,45.2,46.549z"></path> 
                      <path fill="#ffffff" d="M42,79.171c0,11.66,4.081,22.926,11.369,31.867l10.302-11.19C59.376,93.87,57,86.634,57,79.171 c0-5.53,1.288-10.919,3.708-15.778L50.067,51.834C44.832,59.933,42,69.396,42,79.171z"></path> 
                      <path fill="#ffffff" d="M138.821,132.018l10.225,11.106c30.111-34.933,32.043-86.802,3.752-123.863l-10.344,11.236 C164.425,61.261,162.71,103.108,138.821,132.018z"></path> 
                      <path fill="#ffffff" d="M138.163,35.156l-10.489,11.393c13.207,21.676,11.789,49.441-3.386,69.685l10.29,11.177 C155.881,101.026,157.535,63.294,138.163,35.156z"></path> 
                      <path fill="#ffffff" d="M130.875,79.171c0-9.775-2.833-19.238-8.067-27.337l-10.642,11.559 c2.42,4.859,3.708,10.248,3.708,15.778c0,7.463-2.376,14.699-6.671,20.677l10.302,11.19 C126.794,102.097,130.875,90.831,130.875,79.171z"></path> 
                    </g> 
                  </g>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Conectividad</h4>
              <p className="text-lg text-gray-400 text-center">Monitoreo y análisis del estatus de la conexión a internet de todas las sucursales.</p>
            </div>

            {/* 8th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                <svg x="17" width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M10.0576 6H20.9424M10.0576 6C10.021 6.46774 10 6.97527 10 7.5V9M10.0576 6C10.1603 4.68497 10.3857 3.68441 10.6111 3.5C10.9167 3.25 13.0556 3 15.5 3C17.9444 3 20.0833 3.25 20.3889 3.5C20.6143 3.68441 20.8397 4.68497 20.9424 6M20.9424 6C20.979 6.46774 21 6.97527 21 7.5C21 8.94595 20.8403 10.2612 20.6363 10.9735C20.5306 11.3428 20.1854 11.5206 19.8055 11.5776C18.9164 11.7111 18.1325 11.8864 16.8568 11.9623L16.8612 12M10 9C6.88889 9 4.16667 9.30556 3.77778 9.61111C3.5321 9.80414 3.28642 10.7288 3.13879 12M10 9C13.1111 9 15.8333 9.30556 16.2222 9.61111C16.4679 9.80414 16.7136 10.7288 16.8612 12M16.8612 12C16.9473 12.741 17 13.5998 17 14.5C17 16.9444 16.6111 19.0833 16.2222 19.3889C15.8333 19.6944 13.1111 20 10 20C6.88889 20 4.16667 19.6944 3.77778 19.3889C3.38889 19.0833 3 16.9444 3 14.5C3 13.5998 3.05273 12.741 3.13879 12M16.8612 12H3.13879" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                  </g>
                </svg>
              </svg>
              <h4 className="h4 mb-2">Interfaces</h4>
              <p className="text-lg text-gray-400 text-center">Monitoreo y alertas de los procesos de comunicación directa con el cliente.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
