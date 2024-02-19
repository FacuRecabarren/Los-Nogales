import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import Switcher7 from '../Switcher/Switcher';
import {useState, useEffect} from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const { t } = useTranslation()

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Desuscribirse del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `fixed z-20 w-full backdrop-filter backdrop-filter backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-[#252525] z-20' : ''}`;
  

  const navigation = [
    {id:1, name: <span>{t("home")}</span>, href: '#home', current: false },
    {id:2, name: <span>{t("about")}</span>, href: '#about', current: false },
    {id:3, name: <span>{t("menu")}</span>, href: '#menu', current: false },
    {id:4, name: <span>{t("contact")}</span>, href: '#contact', current: false },
  ]

  return (
    <Disclosure as="nav" className={navClasses}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4 z-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <div className='sm:mr-5'>
                  <Switcher7/>
                </div>
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='w-full'>
                <div className="flex flex-1 justify-start items-center ">
                    <a href='#home' className="sm:flex flex-shrink-0 duration-500 cursor-pointer 2xl:text-3xl text-2xl text-[#fff] font-lora font-black italic">Los Nogales</a>
                  <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full lg:ml-6">
                    <div className="flex space-x-4 ml-7">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-[#594225]' : 'text-white hover:text-[#A69B92] transform hover:scale-105 duration-500',
                            'rounded-md px-3 py-2 text-sm font-medium 2xl:text-base'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className='hidden lg:block'>
                      <Switcher7/>      
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden h-screen z-10">
            <div className="space-y-1 px-6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-palette-500' : 'text-gray-300 hover:text-palette-500 transform hover:scale-105 duration-500',
                  'block rounded-md px-3 py-2 text-base text-center font-medium bg-[#252525]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar