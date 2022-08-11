![Newcoin](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/main/docs/media/newcoin-globe.png?raw=true)

# newcoin-sdk

This is the newcoin sdk, a starting point for a tooling environment that will make it easy to build applications on top of [https://newcoin.org](newcoin.org).

```
npm install --save @newcoin-foundation/newcoin-sdk
```

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

## Installation

Clone the repo. An npm package will be provided soon


See the tests for more examples.

## API Documentation 
See [here](./docs/modules.md)


## Usage
```
function async createUser() {
            const nco_struct : NCCreateUser = {
                newUser: name, 
                newacc_public_active_key: "<active-key>",
                newacc_public_owner_key:  "<owner-key>",
                payer: "io", 
                payer_prv_key: "<prv_key>",
                ram_amt : 8196, 
                cpu_amount : "100.0000 NCO", 
                net_amount : "100.0000 NCO", 
                xfer : true, // stake or transfer CPU/NET to the account
            };
            const resp :NCReturnTxs = await NCO_BlockchainAPI.createUser(nco_struct) ;
}
```

See the tests for more examples.

## Contributing
Pull requests are welcome. 
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
# newcoin-sdk
