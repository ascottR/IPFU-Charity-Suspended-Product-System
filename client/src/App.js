import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import ManagerDashboard from './pages/ManagerDashboard'

function App() {
    return (
        <div className='container'>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manager" element={<ManagerDashboard />} />
                </Route>
            </Routes>
        </Router>
        </div>
    )
}

export default App