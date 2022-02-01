import React from "react"
import { Fragment } from "react"
import logoWhite from '../logo-white.svg'

const footerLinks = [
  {
    title: "Solutions",
    menu: [
      {
        name: "Marketing",
        href: "#",
      },
      {
        name: "Analytics",
        href: "#",
      },
      {
        name: "Commerce",
        href: "#",
      },
      {
        name: "Insights",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    menu: [
      {
        name: "Pricing",
        href: "#",
      },
      {
        name: "Documentation",
        href: "#",
      },
      {
        name: "Guides",
        href: "#",
      },
      {
        name: "API Status",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    menu: [
      {
        name: "About",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Jobs",
        href: "#",
      },
      {
        name: "Press",
        href: "#",
      },
      {
        name: "Partners",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    menu: [
      {
        name: "Claims",
        href: "#",
      },
      {
        name: "Privacy",
        href: "#",
      },
      {
        name: "Terms",
        href: "#",
      },
    ],
  },
]

const socials = [
  {
    name: "facebook",
    href: "https://facebook.com",
  },
  {
    name: "instagram",
    href: "https://instagram.com",
  },
  {
    name: "twitter",
    href: "https://twitter.com",
  },
  {
    name: "github",
    href: "https://github.com",
  },
  {
    name: "dribble",
    href: "https://dribble.com",
  },
]

function Menu({ title, list, index }) {
  return (
    <div className={`flex flex-col gap-4 ${index > 1 && "mt-4 sm:mt-0"}`}>
      <h5 className="text-left uppercase font-semibold font-sans text-sm leading-5 tracking-wider text-gray-400">
        {title}
      </h5>
      <ul className="text-left font-normal font-sans text-base leading-6">
        {list.map((l, key) => (
          <li className="mb-4" key={`list-${key}`}>
            <a
              href={l.href}
              title={l.name}
              className="text-gray-200 hover:text-white"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footerWrapper bg-gray-900">
      <div className="mx-auto px-4 sm:px-0 ">
        <div className="grid grid-cols-2 md:grid-cols-6 col-gap-8 pb-12 row-gap-8">
          <Fragment>
            <div className="col-span-2">
              <div className="flex-shrink-0 flex items-center mb-8">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={logoWhite}
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto mr-1"
                  src={logoWhite}
                  alt="Workflow"
                />
              </div>
              <p className="text-base leading-6 font-normal text-gray-200 font-sans mb-8 pr-10">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <ul className="flex gap-5 mb-4">
                {socials.map((l, key) => (
                  <li className="mr-2" key={`social-link-${key}`}>
                    <a href={l.href} title={l.name}>
                      <img
                        src={`${l.name}.svg`}
                        alt={l.name}
                        className="h-5 w-5"
                      ></img>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {footerLinks.map((menu, key) => (
              <Menu
                key={`footer-col-${key}`}
                index={key}
                title={menu.title}
                list={menu.menu}
              ></Menu>
            ))}
          </Fragment>
        </div>
        <p
          className="text-base text-center leading-6 font-normal text-gray-400 font-sans pt-8 pb-12 md:pb-16 border-gray-700"
          style={{ borderTop: "1px solid" }}
        >
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
