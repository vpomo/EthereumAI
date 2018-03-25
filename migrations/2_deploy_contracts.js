const EthereumAI = artifacts.require('./EthereumAI.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x09B03c1E765049319b38Ac285B690E81e7C0A5fF";
    deployer.deploy(EthereumAI, owner);
};
