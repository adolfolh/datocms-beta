import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import avatarImage from '@/images/avatar.jpg'
import { Fragment, useRef } from 'react'
import {
  AboutIcon,
  ArticlesIcon,
  ProjectsIcon,
  UsesIcon,
} from '@/components/MenuIcons'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="1.5"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M17.66,8.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,6.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,8.34ZM12,6a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V5A1,1,0,0,0,12,6ZM4,12H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM5.64,8.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,7.34ZM21,12H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm7-4h-.88a5.39,5.39,0,0,0,.38-2,5.5,5.5,0,0,0-11,0,5.39,5.39,0,0,0,.38,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2Zm-3.15,0H9.15a3.44,3.44,0,0,1-.65-2,3.5,3.5,0,0,1,7,0A3.44,3.44,0,0,1,14.85,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path>
      </g>
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="1.5"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm9-4H18.84A8.18,8.18,0,0,0,20,12.05a1,1,0,0,0-.34-.93,1,1,0,0,0-1-.19,6,6,0,0,1-1.92.32,6.06,6.06,0,0,1-6.06-6,6.93,6.93,0,0,1,.1-1,1,1,0,0,0-.35-.92,1,1,0,0,0-1-.18A8.06,8.06,0,0,0,4,10.68,8,8,0,0,0,5.27,15H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm-3.72,0H7.83a6,6,0,0,1,.88-9.36,8.06,8.06,0,0,0,8.05,7.61,7,7,0,0,0,.79,0A6.08,6.08,0,0,1,16.28,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path>
      </g>
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 h-screen w-screen bg-zinc-800/40 backdrop-blur dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-lg bg-white/80 p-8 ring-1 ring-zinc-900/5 backdrop-blur-lg dark:bg-zinc-900/80 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-900/5 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">
                  <div className="flex flex-row items-center gap-4">
                    <AboutIcon
                      className={clsx(
                        'h-6 w-6',
                        useRouter().pathname === '/about'
                          ? 'fill-violet-500 hover:fill-violet-400'
                          : 'fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300'
                      )}
                    />
                    <span className="text-lg font-semibold">About</span>
                  </div>
                </MobileNavItem>
                <MobileNavItem href="/articles">
                  <div className="flex flex-row items-center gap-4">
                    <ArticlesIcon
                      className={clsx(
                        'h-6 w-6',
                        useRouter().pathname === '/articles'
                          ? 'fill-violet-500 hover:fill-violet-400'
                          : 'fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300'
                      )}
                    />
                    <span className="text-lg font-semibold">Articles</span>
                  </div>
                </MobileNavItem>
                <MobileNavItem href="/projects">
                  <div className="flex flex-row items-center gap-4">
                    <ProjectsIcon
                      className={clsx(
                        'h-6 w-6',
                        useRouter().pathname === '/projects'
                          ? 'fill-violet-500 hover:fill-violet-400'
                          : 'fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300'
                      )}
                    />
                    <span className="text-lg font-semibold">Projects</span>
                  </div>
                </MobileNavItem>
                <MobileNavItem href="/uses">
                  <div className="flex flex-row items-center gap-4">
                    <UsesIcon
                      className={clsx(
                        'h-6 w-6',
                        useRouter().pathname === '/uses'
                          ? 'fill-violet-500 hover:fill-violet-400'
                          : 'fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300'
                      )}
                    />
                    <span className="text-lg font-semibold">Uses</span>
                  </div>
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children, icon: Icon, ...props }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={'relative block px-3 py-2'}
        aria-label={props}
      >
        <Icon
          className={clsx(
            'h-6 w-6',
            isActive
              ? 'fill-violet-500 hover:fill-violet-400'
              : 'fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300'
          )}
        />
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-0 h-1 rounded-t-full bg-violet-500/40 dark:bg-violet-400/40 " />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-4 rounded-full bg-white/80 px-3 text-sm font-medium text-zinc-800  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/80 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about" aria-label="About" icon={AboutIcon} />
        <NavItem href="/articles" aria-label="Articles" icon={ArticlesIcon} />
        <NavItem href="/projects" aria-label="Projects" icon={ProjectsIcon} />
        <NavItem href="/uses" aria-label="Uses" icon={UsesIcon} />
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/80 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/80 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 fill-violet-500 transition hover:fill-violet-400 dark:block" />
    </button>
  )
}

function AvatarContainer({ className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        className,
        'pointer-events-auto flex h-10 flex-row items-center rounded-full bg-white/80 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/80 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Image
      src={avatarImage}
      alt="Home"
      sizes={large ? '16rem' : '2.25rem'}
      className={clsx(
        'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
        large ? 'h-16 w-16' : 'h-9 w-9'
      )}
      priority
    />
  )
}

export function Header() {
  let headerRef = useRef()

  return (
    <>
      <header className="pointer-events-none fixed top-0 z-50  w-full p-4 md:px-20">
        <div ref={headerRef} className="z-10 h-16">
          <div className="relative z-50 w-full rounded-full bg-violet-400/20 p-2 shadow-lg shadow-violet-800/10 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-violet-500/10 dark:ring-white/10 md:p-3 ">
            <div className="relative flex gap-4">
              <div className="flex flex-1 flex-row items-center gap-4">
                <AvatarContainer>
                  <Avatar />
                  <h1 className="hidden px-4 text-sm font-medium text-zinc-800 dark:text-zinc-100 md:block">
                    adolfo l.h.
                  </h1>
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto relative z-50 md:hidden" />
                <DesktopNavigation className="pointer-events-auto relative z-50 hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
