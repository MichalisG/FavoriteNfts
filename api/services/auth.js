import assert from 'assert';
import { ethers } from 'ethers';

const now = () => Date.now()

const hasExpired = ts => now() <= ts

export const getEvmAccount = async (signature, rawMessage) => {
  try {
    const [message, time] = rawMessage.split('|')

    assert(message === 'Favorite Nfts Login', 'Wrong message')
    assert(hasExpired(Number(time)), 'Unauthorized')

    const recoveredAddress = ethers.utils.verifyMessage(message, signature);

    return {account: recoveredAddress}
  }
  catch(error) {
    return {error}
  }
}
