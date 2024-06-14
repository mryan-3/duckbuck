import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import NotFound from './pages/404';
import ThemeProvider from "./components/theme-provider"
import RootLayout from "./components/layout/root-layout"

// Pages import
import App from './App';
import Whitepaper from './pages/whitepaper';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route element={<RootLayout />} >
                <Route index element={<App />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
