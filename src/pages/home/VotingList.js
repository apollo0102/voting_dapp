import Voting from './component/Voting'

const VotingList = (props) => {
  return (
      <div className='pt-16 mx-auto text-gray-600 body-font w-full '>
        <div className='flex flex-wrap -m-4'>
        {props.nfts.map((item) => (
            <Voting
              item={item}
              key={item.id}
            ></Voting>
          ))}
        </div>
      </div>
  )
}

export default VotingList
