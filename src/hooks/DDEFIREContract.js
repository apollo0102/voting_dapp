import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import DDEFIREContractABI from '../abi/DDEFIREContractABI.json';
import { DDEFIREContractAddress } from '../contracts';

const DDEFIREContractInterface = new ethers.utils.Interface(DDEFIREContractABI);
const DDEFIREContract = new Contract(
  DDEFIREContractAddress,
  DDEFIREContractInterface
);

export const useAllowance = (owner, spender) => {
  const [allowance] =
    useContractCall(
      owner &&
        spender && {
          abi: DDEFIREContractInterface,
          address: DDEFIREContractAddress,
          method: 'allowance',
          args: [owner, spender],
        }
    ) ?? [];
  return allowance;
};

export const useBalanceOf = (account) => {
  const [balanceOf] =
    useContractCall(
      account && {
        abi: DDEFIREContractInterface,
        address: DDEFIREContractAddress,
        method: 'balanceOf',
        args: [account],
      }
    ) ?? [];
  return balanceOf;
};

export const useName = () => {
  const [name] =
    useContractCall({
      abi: DDEFIREContractInterface,
      address: DDEFIREContractAddress,
      method: 'name',
      args: [],
    }) ?? [];
  return name;
};

export const useTotalSupply = () => {
  console.log(DDEFIREContractInterface);
  const [totalSupply] =
    useContractCall({
      abi: DDEFIREContractInterface,
      address: DDEFIREContractAddress,
      method: 'totalSupply',
      args: [],
    }) ?? [];
  return totalSupply;
};

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    DDEFIREContract,
    'mint',
    {}
  );
  return { state, send, event };
};
