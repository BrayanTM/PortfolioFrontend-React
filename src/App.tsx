function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 text-center">
      <div className="text-8xl mb-6 animate-bounce">
        🚧
      </div>
      <h1 className="text-5xl font-bold text-slate-100 mb-4">
        Sitio en Construcción
      </h1>
      <p className="text-xl text-slate-400 max-w-lg">
        Actualmente estoy construyendo el backend de mi portfolio utilizando{' '}
        <span className="text-emerald-400 font-semibold">FastAPI</span>
        {' '}y el frontend con{' '}
        <span className="text-cyan-400 font-semibold">React</span>.
      </p>
      <p className="text-slate-500 mt-4">
        Vuelve pronto para ver el resultado final.
      </p>
    </div>
  )
}

export default App
