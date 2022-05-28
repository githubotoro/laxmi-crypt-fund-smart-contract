const hre = require("hardhat");

async function main() {
	const LaxmiCryptFundContractFactory = await hre.ethers.getContractFactory(
		"LaxmiCryptFund"
	);
	const LaxmiCryptFund = await LaxmiCryptFundContractFactory.deploy({
		value: hre.ethers.utils.parseEther("1"),
	});
	await LaxmiCryptFund.deployed();

	console.log(`\nLaxmiCryptFund contract has been deplyed.`);
	console.log(`\nDeployed to: ${LaxmiCryptFund.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
