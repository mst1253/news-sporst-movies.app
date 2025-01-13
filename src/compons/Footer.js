import { Footer } from "flowbite-react"
import {BsFacebook,BsInstagram,BsTiktok,BsYoutube} from 'react-icons/bs'
export default function MainFooter() {
    return (
      <Footer className="border border-t-2 border-slate-950 dark:border-white" container="true">
        <div className="flex justify-between w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-blue-500" by="mst" year={2024} />
          <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center text-blue-500">
            <Footer.Icon className="text-blue-500" href="#" icon={BsTiktok} aria-label="know more about us"/>
            <Footer.Icon className="text-blue-500" href="#" icon={BsYoutube} aria-label="know more about us"/>
            <Footer.Icon className="text-blue-500" href="#" icon={BsFacebook} aria-label="know more about us"/>
            <Footer.Icon className="text-blue-500" href="#" icon={BsInstagram} aria-label="know more about us"/>
          </div>
        </div>
      </Footer>
    )
  }