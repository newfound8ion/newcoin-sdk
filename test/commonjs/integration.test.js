// requires from transpiled code to ensure the build is working as expected
const { NCO_BlockchainAPI, devnet_services, devnet_urls } = require('../../src/index');


test('it should perform a test call correctly', async () => {

    const api = new NCO_BlockchainAPI({ urls: devnet_urls, services: devnet_services, is_proxy: false, debug: true} );
    const keyPair = await api.createKeyPair();
    expect(keyPair.prv_key).toBeDefined();
    expect(keyPair.pub_key).toBeDefined();
})
