import Link from "next/link"
import PropertyAddPage from "./add/page"

const PropertiesPage = ()=>  {
  return (
     <div>
        <h1 className="text-3xl">Properties</h1>
        <Link href="/">Go Home</Link>
        <PropertyAddPage />
        </div>
  )
}

export default PropertiesPage