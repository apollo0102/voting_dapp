import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import PresaleContractABI from '../abi/PresaleContractABI.json';
import { PresaleContractAddress } from '../contracts';

const PresaleContractInterface = new ethers.utils.Interface(PresaleContractABI);

const PresaleContract = new Contract(
  PresaleContractAddress,
  PresaleContractInterface
);

export const useWhitelist = (address) => {
  const [whitelist] =
    useContractCall(
      address && {
        abi: PresaleContractInterface,
        address: PresaleContractAddress,
        method: 'whitelist',
        args: [address],
      }
    ) ?? [];
  return whitelist;
};

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    PDEFIREContract,
    'mint',
    {}
  );
  return { state, send, event };
};
