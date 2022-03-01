import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useTotalSupply, useName } from '../../hooks/DDEFIREContract'
import { useEthers, shortenAddress } from '@usedapp/core'
import { useLocation, useNavigate  } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'
import AppLayout from '../AppLayout'
const Vote = () => {
  const [voteButton, setVoteButton] = useState(true)
  const [voteItem, setVoteItem] = useState([])
  const location = useLocation()
  let navigate = useNavigate(); 
  const { account, activate, deactivate } = useEthers()
  const { item } = location.state
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const handleVote = () => {
    // setOpen(false)
    // setVoteButton(false)
    toast.success('successful',{position: toast.POSITION.TOP_RIGHT, autoClose:5000})
    navigate("/");
  }
  useEffect(() => {
    if (account) {
      //add function to call contract  params: account, voteId
      setVoteItem(item)
    }
  }, [account])
  return (
    <AppLayout>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col items-center justify-center gap-y-10'>
        <div className='p-3 w-full  mb-10'>
          <div className=' rounded-md bg-[#1c1b1b] p-3 shadow-lg shadow-emerald-700/50'>
            <a
              className='block relative h-48 rounded overflow-hidden'
              href='/#'
            >
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://st.depositphotos.com/1368414/3134/i/950/depositphotos_31341675-stock-photo-the-word-poll.jpg'
              />
            </a>
            <div className='mt-4'>
              <h2 className='text-white title-font text-lg font-medium text-center'>
                {voteItem.title}
              </h2>
              {/* <p className=' text-white mt-5 text-center'>sssss</p> */}
              <div className='flex items-center justify-center gap-x-3 my-10'>
                {voteButton ? (
                  <button
                    className='w-full md:w-1/2 rounded bg-[#0dba88] text-white  border-[#0dba88] border-2  text-base p-2 
              hover:bg-[#0dba88]-500  hover:text-[#0dba88]-300 bg-gray--500 active:bg-gray-700 focus:outline-none 
              focus:ring focus:ring-cyan-300 shadow-lg shadow-stone-700/50'
                    onClick={() => setOpen(true)}
                    ///////////
                  >
                    Vote
                  </button>
                ) : (
                  <span>You already voted!</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as='div'
            className='fixed z-10 inset-0 overflow-y-auto'
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                  <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg leading-6 font-medium text-gray-900'
                        >
                          {item.title}
                        </Dialog.Title>
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>
                            Are you sure to confirm this voting? If you have
                            done once, you won't be able to change it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-sm'
                      //onClick={() => setOpen(false)}
                      onClick={handleVote}
                    >
                      Confirm
                    </button>
                    <button
                      type='button'
                      className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </main>
    </AppLayout>
  )
}
export default Vote
