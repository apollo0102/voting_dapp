import { Link } from 'react-router-dom';

const Voting = (props) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-3 w-full  mb-10'>
      <div className=' rounded-md bg-[#1c1b1b] p-3 shadow-lg shadow-emerald-700/50'>
        <a className='block relative h-48 rounded overflow-hidden' href="/#">
          <img
            alt='ecommerce'
            className='object-cover object-center w-full h-full block'
            src="https://st.depositphotos.com/1368414/3134/i/950/depositphotos_31341675-stock-photo-the-word-poll.jpg"
          />
        </a>
        <div className='mt-4'>
          <h2 className="text-white title-font text-lg font-medium text-center">{props.item.id}</h2>
          <div className='flex items-center justify-between gap-x-3 my-10'>
          <Link  className=' text-white mt-5 text-center w-full  rounded bg-[#0dba88] text-white  border-[#0dba88] border-2  text-base p-2 hover:bg-[#0dba88]-500  hover:text-[#0dba88]-300 bg-gray--500 active:bg-gray-700 focus:outline-none focus:ring focus:ring-cyan-300 shadow-lg shadow-stone-700/50'
            to={props.item.id}
          state={{ item: props.item }}
          >
            Vote
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Voting
