import React, { useState, useEffect } from 'react'
import { useEthers, shortenAddress } from '@usedapp/core'
// import { toast } from 'react-toastify'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import 'react-toastify/dist/ReactToastify.css'
import { Transition } from '@headlessui/react'
import { ReactComponent as IconLogo } from '../../assets/icons/Logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { account, activate, deactivate } = useEthers()

  const handleConnect = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: 'Metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    }

    if (!account) {
      const web3Modal = new Web3Modal({
        network: "ropsten",
        // network: "ropsten", // optional
        providerOptions,
      })
      const provider = await web3Modal.connect()
      await activate(provider)
    }
  }
  return (
    <div className=''>
      <nav className='fixed z-50 w-full bg-black opacity-90'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex justify-between items-center w-full'>
              <div className='hidden md:block flex-shrink-0'>
                <IconLogo></IconLogo>
              </div>
              <div className='hidden md:block '>
                {!account ? (
                  <button
                    className='border-[#577a30] border-2 rounded-lg p-2 text-[#577a30] font-bold hover:bg-gray-700 hover:text-white'
                    onClick={handleConnect}
                  >
                    CONNECT WALLET
                  </button>
                ) : (
                  <button
                    className='border-[#577a30] border-2 rounded-lg p-2 text-[#577a30] font-bold hover:bg-gray-700 hover:text-white'
                    onClick={() => deactivate()}
                  >
                    {shortenAddress(account)}
                  </button>
                )}
              </div>
            </div>
            <div className='flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className=' inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover: focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2 6h16M4 12h14M2 18h16M4 24h14'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-100'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div
                ref={ref}
                className='px-2 pt-2 pb-3 sm:px-3 bg-black z-50 opacity-90'
              >
                {!account ? (
                  <button
                    className='border-[#577a30] border-2 rounded-lg p-2 text-[#577a30] font-bold hover:bg-gray-700 hover:text-white text-center w-full px-20 mb-3'
                    onClick={handleConnect}
                  >
                    CONNECT WALLET
                  </button>
                ) : (
                  <button
                    className='border-[#577a30] border-2 rounded-lg p-2 text-[#577a30] font-bold hover:bg-gray-700 hover:text-white float-right w-full mb-3'
                    onClick={() => deactivate()}
                  >
                    {shortenAddress(account)}
                  </button>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Header
