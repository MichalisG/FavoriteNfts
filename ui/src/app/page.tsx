import Image from 'next/image'
import CollectionCard from '@@/components/CollectionCard'
import { Collection } from '@@/interfaces/nft'
import Link from 'next/link'

const popularCollections = [
  {
    "token_address": "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "name": "Azuki",
    "symbol": "AZUKI",
    "contract_type": "ERC721",
    "synced_at": "2022-01-10T05:19:57.000Z",
    "possible_spam": false,
    "verified_collection": true,
    "collection_logo": "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
    "collection_banner_image": "https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=s2500",
    "collection_category": "pfps",
    "project_url": "http://www.azuki.com",
    "wiki_url": null,
    "discord_url": "https://discord.gg/azuki",
    "telegram_url": null,
    "twitter_username": "Azuki",
    "instagram_username": "azuki"
  },
  {
    "token_address": "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949",
    "name": "Beanz",
    "symbol": "BEANZ",
    "contract_type": "ERC721",
    "synced_at": "2022-03-31T05:29:09.000Z",
    "possible_spam": false,
    "verified_collection": true,
    "collection_logo": "https://lh3.googleusercontent.com/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On=s120",
    "collection_banner_image": "https://lh3.googleusercontent.com/WRcl2YH8E3_7884mcJ0DRN7STGqA8xZQKd-0MFmPftlxUR6i1xB9todMXRW2M6SIpXKAZ842UqKDm1UrkKG8nr7l9NjCkIw-GLQSFQ=s2500",
    "collection_category": "pfps",
    "project_url": null,
    "wiki_url": null,
    "discord_url": null,
    "telegram_url": null,
    "twitter_username": "Azuki",
    "instagram_username": null
  },
  {
    "token_address": "0x524cab2ec69124574082676e6f654a18df49a048",
    "name": "LilPudgys",
    "symbol": "LP",
    "contract_type": "ERC721",
    "synced_at": "2021-12-19T17:09:05.000Z",
    "possible_spam": false,
    "verified_collection": true,
    "collection_logo": "https://lh3.googleusercontent.com/s4Td3KYsUlCblO6lQKAGAWdKwsCuumcxYpebM_YL-Pex-BP886JYAWjKBLeB5StNopAAD6kVx3QHqWm9AmudXyCaCZszHbt8SdteEQ=s120",
    "collection_banner_image": "https://openseauserdata.com/files/ff12374123ac5e8571b01d03874e8a76.png",
    "collection_category": "pfps",
    "project_url": "https://www.pudgypenguins.com/",
    "wiki_url": null,
    "discord_url": "https://discord.gg/pudgypenguins",
    "telegram_url": null,
    "twitter_username": "pudgy_penguins",
    "instagram_username": "pudgypenguins"
  },
  {
    "token_address": "0x81d6a3c844a9fb452ed069e9fc16cf37f137a58e",
    "name": "Ether Avatar",
    "symbol": "ETHR",
    "contract_type": "ERC721",
    "synced_at": "2023-07-12T03:30:23.000Z",
    "possible_spam": false,
    "verified_collection": true,
    "collection_logo": "https://raw.seadn.io/files/2ec7df3710428cdd6215261b6f3bfef0.jpg",
    "collection_banner_image": "https://openseauserdata.com/files/85605253f879810d86f2c069c786addf.png",
    "collection_category": "pfps",
    "project_url": "https://ether.site/",
    "wiki_url": null,
    "discord_url": "https://discord.gg/ether",
    "telegram_url": null,
    "twitter_username": "ether",
    "instagram_username": null
  },
  {
    "token_address": "0xc274a97f1691ef390f662067e95a6eff1f99b504",
    "name": "TinFun",
    "symbol": "TinFun",
    "contract_type": "ERC721",
    "synced_at": "2024-01-10T09:59:59.000Z",
    "possible_spam": false,
    "verified_collection": false,
    "collection_logo": "https://raw.seadn.io/files/a531bedf317b5ffe5a35d559b5c94cd9.jpg",
    "collection_banner_image": null,
    "collection_category": "pfps",
    "project_url": "https://tinfun.com",
    "wiki_url": null,
    "discord_url": "https://discord.gg/TSfgSMFTBW",
    "telegram_url": null,
    "twitter_username": "TinFunNFT",
    "instagram_username": null
  },
  {
    "token_address": "0x8821bee2ba0df28761afff119d66390d594cd280",
    "name": "DeGods",
    "symbol": "DEGODS",
    "contract_type": "ERC721",
    "synced_at": "2023-03-30T12:50:59.000Z",
    "possible_spam": false,
    "verified_collection": true,
    "collection_logo": "https://openseauserdata.com/files/c6cb0b1d6f2ab61c0efacf00e62e2230.jpg",
    "collection_banner_image": "https://openseauserdata.com/files/0f98e562496514deec72096435a77eef.jpg",
    "collection_category": null,
    "project_url": "https://degods.com",
    "wiki_url": null,
    "discord_url": "https://discord.gg/dexyz",
    "telegram_url": null,
    "twitter_username": "DeGodsNFT",
    "instagram_username": null
  }

]

export default function Home() {

  const renderCollectionCards = () => {
    return popularCollections.map((collection) => (
      <div key={collection.token_address} className='m-8'>
        <CollectionCard  collection={collection} />
      </div>
    ))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="hero" style={{backgroundImage: 'url(/herobg.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content py-24">
          <div className="max-w-screen-lg">
            <h1 className="mb-5 text-5xl font-bold">NFT Watchlist: Track and Treasure Your Favorite Digital Assets</h1>
            <p className="mb-5">Stay connected to the heartbeat of the NFT world with our app, NFT Watchlist. Discover, explore, and keep track of your favorite digital treasures effortlessly. Browse a curated selection of NFTs and build your personalized collection with just a tap. Elevate your digital art experience – start tracking your favorites today!</p>
            <Link href='/browse' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mt-28 text-4xl font-bold text-center">Popular Collections</h2>
      </div>

      <div className='flex flex-wrap justify-evenly p-24'>
        {renderCollectionCards()}
      </div>
    </main>
  )
}
