import { BrowserRouter, Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'

import AdminLayout from './components/layouts/AdminLayout'
import UserLayout from './components/layouts/UserLayout'

import './App.css'

const DashboardAdmin = lazy(() => import('./pages/DashboardAdmin'))
const DashboardUser = lazy(() => import('./pages/DashboardUser'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          </Route>

          <Route element={<UserLayout />}>
            <Route path="/user/dashboard" element={<DashboardUser />} />
          </Route>

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
