import React from 'react'
import Image from 'next/image'
import { Collection } from '@@/interfaces/nft'
import Link from 'next/link'


type Props = {
  collection: Collection
}

const CollectionCard = (props: Props) => {
  const { collection } = props;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
      <Image
          className="h-56 w-full object-cover"
          src={collection.collection_logo} alt={'alt'}
          unoptimized
          width={500}
          height={500}
        />
        </figure>
      <div className="card-body min-w-60">
        <h2 className="card-title">{collection.name}</h2>
        <p>{collection.symbol}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-secondary w-full" href={`/browse?address=${collection.token_address}`}>More</Link>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;