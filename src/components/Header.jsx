/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import logo from "../logo.svg"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 md:px-16 md:pb-1 xl:px-5">
            <div className="relative flex items-center justify-between border-b-2 border-transparent py-4 md:py-12 xl:py-4 md:justify-start">
              <div className="sm:flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex justify-start sm:mr-10">
                  <a href="#">
                    <img src={logo} alt="Logo" height="38px" width="42px" />
                  </a>
                </div>
                <div className="hidden sm:flex items-center">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-gray-900" : "text-gray-650",
                          "whitespace-nowrap text-base font-medium hover:text-gray-900 mr-8 font-serif"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-650 hover:text-gray-900 font-serif"
                >
                  Log in
                </a>
                <button className="bg-gray-900 py-2 px-4 ml-6 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl">
                  Start free trial
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-5 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    " text-gray-900 flex items-center text-base font-bold hover:text-gray-900 font-serif text-left h-12"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div style={{ borderTop: "2px solid #F9FAFB" }} className="mt-4">
                <button className="bg-gray-900 py-2  border-2 capitalize mb-4 border-gray-900 px-4 w-full rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:shadow-xl">
                  Start free trial
                </button>
                <p className="px-3 pt-2 pb-6 text-base font-medium font-sans text-center">
                  <span className="text-gray-500 ">Existing customer? </span>
                  <a
                    href="#"
                    className="text-gray-900 rounded-md"
                    aria-current="undefined"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
