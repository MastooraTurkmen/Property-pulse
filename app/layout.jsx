import '@/assets/styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Properties | Dind your Dental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties"
}

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout