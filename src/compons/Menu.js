import { DarkThemeToggle} from "flowbite-react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import SearchByCategory from "./searchData/searchByCategory";
import { usePathname } from "next/navigation";
export default function Menu() {
  const pathName=usePathname()
  return (
    <Navbar className="p-4" fluid rounded>
      <NavbarBrand href="/" className='z-50'>
       <Image className="rounded-full" src="/img/logo.webp" width={35} height={35} alt="website's logo"  href="/" />
       </NavbarBrand>
       { pathName==="/"&&<SearchByCategory />}
      <NavbarToggle />
      <NavbarCollapse>
        <Link className="text-blue-500"href="/">Home</Link>
        <Link className="hover:text-blue-500 dark:text-white" href="/dashboard">Dashboard</Link>
        <DarkThemeToggle />
      </NavbarCollapse>
    </Navbar>
  );
}

//