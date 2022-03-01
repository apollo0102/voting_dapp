import React, { useState, useEffect } from 'react'
import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import { useEthers, shortenAddress } from '@usedapp/core'
import AppLayout from '../AppLayout';
import './Home.scss';
import VotingList from './VotingList'

const nftsList = [
  {
    id: '1',
    title: "vote 1",
  },
  {
    id: '2',
    title: "vote 2",
  },
  {
    id: '3',
    title: "vote 4",
  },
  {
    id: '4',
    title: "vote 4",
  },
  
]
const Home = () => {
  const [votingList, setVotingList] = useState([]);
  const { account, activate, deactivate } = useEthers()
  useEffect(() => {
    if (account) {
      setVotingList(nftsList)
    }
  }, [account])

  return (
    <AppLayout>
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col items-center justify-center gap-y-10'>
      {votingList && <VotingList nfts={votingList} />}
    </main>
    </AppLayout>
  );
};

export default Home;
