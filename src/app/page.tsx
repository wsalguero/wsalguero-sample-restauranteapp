import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen min-h-screen pt-12">
      <div className="w-full max-w-5xl mx-auto mb-8 bg-yellow-100 border border-yellow-300 text-yellow-900 text-start text-sm md:text-base rounded-lg p-4 shadow-md">
        ⚠️ <strong>Aviso importante sobre esta demo</strong><br className="mb-1" />
        <p className="mt-2 leading-relaxed">
          Esta es una <strong>versión demo básica</strong> del sistema desarrollada exclusivamente para mostrar la estructura y algunas funcionalidades clave de la plataforma.
          Su diseño actual es intencionalmente simple y genérico, ya que <strong>no representa el producto final</strong>.
        </p>
        <p className="mt-3">
          <strong>Objetivo de la demo:</strong> permitir visualizar de forma rápida el flujo general de navegación, administración de productos, presentación al cliente y otros aspectos funcionales.
        </p>
        <p className="mt-3">
          Una vez aceptada la cotización y adquirida la solución, se realiza un <strong>análisis y personalización completa</strong> de la marca del cliente: diseño visual, identidad gráfica, estructura, colores, experiencia de usuario, funcionalidades específicas y adaptaciones solicitadas.
        </p>
        <p className="mt-3 font-semibold">
          En otras palabras: <em>este estilo es solo la base inicial</em>, el verdadero potencial se libera al personalizarlo para usted y su negocio.
          <br />
          <br />
          Att: Desarrolladores
        </p>

        {/* Alerta de versión demo */}
        <div className="w-full max-w-5xl mx-auto mb-8 bg-yellow-200 border border-yellow-300 text-yellow-800 text-start text-sm md:text-base rounded-lg p-4 mt-4">
          ⚠<strong>NOTA:</strong> Esta es una <strong>versión demo</strong> del sistema. Todos los datos visualizados son de prueba y la plataforma aún está sujeta a mejoras y cambios segun los comentarios y gustos del cliente, de igual forma la manera de manejar la seguridad del sistema (inicio de sesion y roles por usuario) son establecidas fuera de la version demo.
        </div>
      </div>



      {/* Cards */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-8 max-w-6xl">
        {/* Card: Vista de Edición */}
        <div className="flex flex-col items-center justify-center p-6 bg-green-50  border border-gray-200 dark:border-zinc-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-5xl mb-4">🛠️</div>
          <h2 className="text-2xl font-semibold mb-2">Vista de Edición</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Administra el menú desde esta vista (por ahora es una demo sin funcionalidad).
          </p>
          <a
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            href="/config"
          >
            Entrar
          </a>
        </div>

        {/* Card: Presentaciones */}
        <div className="flex flex-col items-center justify-center p-6 bg-blue-50  border border-gray-200 dark:border-zinc-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-5xl mb-4">📺</div>
          <h2 className="text-2xl font-semibold mb-2">Vista de Presentaciones</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Visualiza el menú en formato de diapositivas, ideal para pantallas grandes.
          </p>
          <a
            href="/presentation"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Ver
          </a>
        </div>

        {/* Card: Vista del Menú Compartible */}
        <div className="flex flex-col items-center justify-center p-6 bg-purple-50  border border-gray-200 dark:border-zinc-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-5xl mb-4">📱</div>
          <h2 className="text-2xl font-semibold mb-2">Vista del Menú</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Accede al menú desde cualquier dispositivo. Vista responsive para compartir con clientes.
          </p>
          <a
            href="/menu"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Ver Menú
          </a>
        </div>
      </div>
    </div>
  );
}
