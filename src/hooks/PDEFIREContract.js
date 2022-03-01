import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import PDEFIREContractABI from '../abi/PDEFIREContractABI.json';
import { PDEFIREContractAddress } from '../contracts';

const PDEFIREContractInterface = new ethers.utils.Interface(PDEFIREContractABI);
const PDEFIREContract = new Contract(
  PDEFIREContractAddress,
  PDEFIREContractInterface
);

export const useAllowance = (owner, spender) => {
  const [allowance] =
    useContractCall(
      owner &&
        spender && {
          abi: PDEFIREContractInterface,
          address: PDEFIREContractAddress,
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
        abi: PDEFIREContractInterface,
        address: PDEFIREContractAddress,
        method: 'balanceOf',
        args: [account],
      }
    ) ?? [];
  return balanceOf;
};

export const useName = () => {
  const [name] =
    useContractCall({
      abi: PDEFIREContractInterface,
      address: PDEFIREContractAddress,
      method: 'name',
      args: [],
    }) ?? [];
  return name;
};

export const useTotalSupply = () => {
  console.log(PDEFIREContractInterface);
  const [totalSupply] =
    useContractCall({
      abi: PDEFIREContractInterface,
      address: PDEFIREContractAddress,
      method: 'totalSupply',
      args: [],
    }) ?? [];
  return totalSupply;
};

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    PDEFIREContract,
    'mint',
    {}
  );
  return { state, send, event };
};
