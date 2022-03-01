import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import PDEFIREContractABI from '../abi/PDEFIREContractABI.json';
import PresaleContractABI from '../abi/PresaleContractABI.json';
import { PDEFIREContractAddress, PresaleContractAddress } from '../contracts';

const PDEFIREContractInterface = new ethers.utils.Interface(PDEFIREContractABI);
const PresaleContractInterface = new ethers.utils.Interface(PresaleContractABI);

const PDEFIREContract = new Contract(
  PDEFIREContractAddress,
  PDEFIREContractInterface
);
const PresaleContract = new Contract(
  PresaleContractAddress,
  PresaleContractInterface
);

// export const useMint = () => {
//   const { state, send, event } = useContractFunction(
//     dystoApezContract,
//     'mint',
//     {}
//   );

//   return { state, send, event };
// };
