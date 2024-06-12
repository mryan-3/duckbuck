import { Toaster } from 'sonner'
import Footer from './footer'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <main className='flex min-h-screen flex-col bg-[#2a0f66]'>
            <NavBar />
            <Outlet />
            <Toaster />
            <Footer />
        </main>
    )
}
