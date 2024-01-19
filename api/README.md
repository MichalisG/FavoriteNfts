## Favorites API

This api usses moralis to fetch NFT data and allow the user to store a list of NFT in the Database (MongoDB)

### Endpoints

#### Auth


POST `auth/login`: Alows user to login usign swie and wagmi sign message

Note all the end poind below use authentication you will need to login to use them

GET `collections/:address`: Gets the collection metadata

GET `nfts/:address`: Get the nfts for a collection

GET `nfts/:address/:tokenId`: Get the NFT with the specific tokenID

POST `favorites`: Adds and nft to the DB

GET `favorites`: Gets all the favorite NFTs from the DB


### Docker

To build the docker file run from the root directory

`docker build -t <name>:<tag> -f operations/api/Dockerfile .`

to run the image

`docker run -p 8080:8080 <name>:<tag>`