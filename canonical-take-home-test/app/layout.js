import { Ubuntu } from 'next/font/google'
import './globals.css'
import '../dist/style.css'

const inter = Ubuntu({
    weight: ['300','400','500','700'],
    subsets: ['latin']
})

export const metadata = {
    title: 'Canonical Take Home Test',
    description: 'Created by Ryan Sprague',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
