
'use client'
import { useStore } from "@/src/store/store"


const DashboardPage = () => {
  const { message, fetchData } = useStore()
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-800">
        Привет! Это мой первый корпоративный дашборд.
      </h1>
      <div>
        <h1>Данные с бэкенда: {message}</h1>
        <button onClick={fetchData}>Получить данные</button>
      </div>
      <p className="text-slate-500">Сервер работает, роутинг настроен.</p>
    </div>
  )
}


export default DashboardPage