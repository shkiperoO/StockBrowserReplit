import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {StockOverviewPage} from './pages/StockOverviewPage.jsx'
import {StockDetailPage} from './pages/StockDetailPage.jsx'
import './App.css'

export default function App() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage />}/>
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
