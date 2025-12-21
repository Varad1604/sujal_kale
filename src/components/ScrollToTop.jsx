import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
            mainContent.scrollTo(0, 0)
        }
        window.scrollTo(0, 0) // Fallback
    }, [pathname])

    return null
}
