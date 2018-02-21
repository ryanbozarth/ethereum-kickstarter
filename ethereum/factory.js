import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe2221Aeaa512d62824C29A791Ca819A55763280a'
);

export default instance;
