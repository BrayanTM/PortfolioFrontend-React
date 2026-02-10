export const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-300 p-8 lg:p-16 xl:scroll-mt-0 xl:p-30 dark:bg-gray-950">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 xl:text-5xl dark:text-gray-200">
              Contacto
            </h2>
            <p className="mb-6 text-gray-600 lg:text-lg xl:max-w-7xl xl:text-xl dark:text-gray-400">
              Si deseas ponerte en contacto conmigo, puedes enviarme un correo
              electrónico a{" "}
              <a href="mailto:example@example.com">example@example.com</a>
            </p>
          </div>
          <div
            className="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="josebtm"
            data-version="v1"
          ></div>
        </div>
      </section>
    </>
  );
};
