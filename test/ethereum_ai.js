var EthereumAI = artifacts.require("./EthereumAI.sol");
//import assertRevert from './helpers/assertRevert';

contract('EthereumAI', (accounts) => {
    var contract;
    //var owner = "0x09B03c1E765049319b38Ac285B690E81e7C0A5fF";
    var owner = accounts[0];
    var maxTotalSupply = 925670 * 10**3 * 10**18;

    it('should deployed contract', async ()  => {
        assert.equal(undefined, contract);
        contract = await EthereumAI.deployed();
        assert.notEqual(undefined, contract);
    });

    it('get address contract', async ()  => {
        assert.notEqual(undefined, contract.address);
    });

    it('verification balance contract', async ()  => {
        var totalSupplyTest = await contract.totalSupply.call();
        //console.log(JSON.stringify(totalSupplyTest));
        assert.equal(Number(totalSupplyTest), Number(maxTotalSupply));

        var balanceOwner = await contract.balanceOf(owner);
        assert.equal(Number(totalSupplyTest), balanceOwner);
    });

    it('verification of transfer Token', async ()  => {
        var balanceAccountTwoBefore = await contract.balanceOf(accounts[2]);
        var balanceAccountOwnerBefore = await contract.balanceOf(accounts[0]);

        await contract.transfer(accounts[2], 1*10**18, {from:accounts[0]});
        var balanceAccountTwoAfter = await contract.balanceOf(accounts[2]);
        var balanceAccountOwnerAfter = await contract.balanceOf(accounts[0]);

        //console.log("balanceAccountOwnerBefore = " + balanceAccountOwnerBefore);
        //console.log("balanceAccountOwnerAfter = " + balanceAccountOwnerAfter);
        assert.isTrue(balanceAccountTwoBefore < balanceAccountTwoAfter);
        assert.isTrue(Number(balanceAccountOwnerBefore) > Number(balanceAccountOwnerAfter));
        assert.equal(0, balanceAccountTwoBefore);
        assert.equal(1*10**18, balanceAccountTwoAfter);

    });

});



