import { SpeedInsights } from '@vercel/speed-insights/react';

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
      <p className="text-slate-400 max-w-lg mt-2">
        Puedes seguir mi progreso en mi{' '}
        <a href="https://github.com/BrayanTM" className="text-emerald-400 underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <p className="text-slate-500 mt-4">
        Vuelve pronto para ver el resultado final.
      </p>
      <SpeedInsights />
    </div>
  )
}

export default App
