import Moralis from 'moralis';

import { EvmChain } from '@moralisweb3/common-evm-utils';

const defaultChain = EvmChain.ETHEREUM;

export const getContactNfts = async (address, cursor, chain = defaultChain) => {
  return await Moralis.EvmApi.nft.getContractNFTs({
    chain,
    address,
    cursor,
    mediaItems: true,
    normalizeMetadata: true,
    limit: 20,
  });
}

export const getNft = async (address, tokenId, chain = defaultChain) => {
  return await Moralis.EvmApi.nft.getNFTMetadata({
    chain,
    address,
    tokenId,
    normalizeMetadata: true,
    mediaItems: true,

  });
}