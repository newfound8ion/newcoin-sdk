import { TxData } from "./atomicTypes";

const { ExplorerApi } = require("atomicassets");
const nfetch = require("node-fetch");

const readAsset = async (asset_id: string) => {
  const api = new ExplorerApi("https://atomic-nefty-devnet.newcoin.org", "atomicassets", { fetch: nfetch });
  const asset = await api.getAsset(asset_id);
  return asset;
};


const readTx = async (txId: string) => {
  const txr = await nfetch(`https://hyperion-dev.newcoin.org/v2/history/get_transaction?id=${txId}`);
  const jtxr = await txr.json();
  return jtxr as TxData;
}

const getActions = (txData: TxData, filterActionNames: string[]) => 
  txData.actions.filter(
    action => filterActionNames.includes(action.act.name)
  );

const atomicTxToAssetId = async (txId: string) => {
  const txData = await readTx(txId);
  const mints = getActions(txData, ["logmint"]);
  const assets = mints.map((a) => a.act.data.asset_id);
  return assets;
}

const test = async () => {
  const assetId = await atomicTxToAssetId("d02b8a148e102ab841a424023ec381f9e3ae0df53144aec9b8a133d8bbe285ab");
  const asset = await readAsset(assetId[0]);

  debugger;
  console.log(JSON.stringify(asset.data));
}

test();
