"use client";
import {BsFilm,BsNewspaper,BsTrophy} from "react-icons/bs";
import { useState } from "react";
import { List } from "flowbite-react";
import {CiMenuFries} from "react-icons/ci"
import { SiGoogleanalytics } from "react-icons/si";
import dynamic from "next/dynamic";
const AddNews=dynamic(()=>import("./news/addNews"),{ssr:false})
const AddSport=dynamic(()=>import("./sport/addSport"),{ssr:false})
const AddMovie=dynamic(()=>import("./movie/addMovie"),{ssr:false})
const UsersData=dynamic(()=>import("./usersData/usersData"),{ssr:false})
export default function Dashboard() {
  const [changeCompon,setChangecompon]=useState('news')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    };
    return (
          <>
              <button
                  onClick={toggleSidebar}
                  type="button"
                  className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                  <CiMenuFries className="w-6 h-6" aria-hidden="true" fill="currentColor" />
              </button>
              {isSidebarOpen && (
                  <div
                      className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
                      onClick={() => setIsSidebarOpen(false)}
                  ></div>
              )}
              <aside
                  id="default-sidebar"
                  className={`absolute top-0 left-0 z-40 w-64 h-screen transition-transform ${
                      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } sm:translate-x-0`}
                  aria-label="default-sidebar">
                  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                      <ul className="space-y-2 font-medium">
                          <List unstyled="true" className="m-[50px] space-y-10 dark:text-white">
                              <List.Item
                                  className="hover:text-orange-500 dark:hover:text-blue-500"
                                  onClick={() => {
                                      setChangecompon("news");
                                      setIsSidebarOpen(false);
                                  }}
                                  icon={BsNewspaper}
                              >
                                  news
                              </List.Item>
                              <List.Item
                                  className="hover:text-orange-500 dark:hover:text-blue-500"
                                  onClick={() => {
                                      setChangecompon("sports");
                                      setIsSidebarOpen(false);
                                  }}
                                  icon={BsTrophy}
                              >
                                  sports
                              </List.Item>
                              <List.Item
                                  className="hover:text-orange-500 dark:hover:text-blue-500"
                                  onClick={() => {
                                      setChangecompon("movies");
                                      setIsSidebarOpen(false);
                                  }}
                                  icon={BsFilm}
                              >
                                  movies
                              </List.Item>
                              <List.Item
                                  className="hover:text-orange-500 dark:hover:text-blue-500"
                                  onClick={() => {
                                      setChangecompon("usersData");
                                      setIsSidebarOpen(false);
                                  }}
                                  icon={SiGoogleanalytics}
                              >
                                  usersData
                              </List.Item>
                          </List>
                      </ul>
                  </div>
              </aside>
      
              <div className='p-8 sm:ml-64'>
                  {changeCompon === "news" && <AddNews />}
                  {changeCompon === "sports" && <AddSport />}
                  {changeCompon === "movies" && <AddMovie compon={changeCompon} />}
                  {changeCompon === "usersData" && <UsersData />}
              </div>
              </>
      );
  }

  