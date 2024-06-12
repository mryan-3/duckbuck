import { Toaster } from 'sonner'
import Footer from './footer'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <main className='flex min-h-screen flex-col'>
            <div className='relative h-full w-full bg-slate-950'>
                <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
                <div className='absolute bottom-0 right-[0%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
            </div>
            <NavBar />
            <Outlet />
            <Toaster />
            <Footer />
        </main>
    )
}
