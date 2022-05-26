const hre = require("hardhat");

// Gets balance of given address
async function getBalance(address) {
	const balanceBigInt = await hre.waffle.provider.getBalance(address);
	return hre.ethers.utils.formatEther(balanceBigInt);
}

// Prints balances of all the addresses
async function printBalances(addresses) {
	let idx = 0;
	for (const address of addresses) {
		console.log(
			`Balance of Address ${idx} is ${await getBalance(address)}`
		);

		idx++;
	}
}

// Logs all the stored memos
async function printMemos(memos) {
	for (const memo of memos) {
		const investor = memo.investor;
		const result = memo.result;
		const bigIntInvestment = memo.investment;
		const rawTimestamp = memo.timestamp;

		console.log(
			`At ${Date(
				rawTimestamp * 1000
			)}: ${investor} ${result} their investment of ${hre.ethers.utils.formatEther(
				bigIntInvestment
			)} ether.`
		);
	}
}

// Main function
async function main() {
	const [owner, investor1, investor2, investor3] =
		await hre.ethers.getSigners();

	// Deploying smart contract
	const LaxmiCryptFundContractFactory = await hre.ethers.getContractFactory(
		"LaxmiCryptFund"
	);
	const LaxmiCryptFund = await LaxmiCryptFundContractFactory.deploy({
		value: hre.ethers.utils.parseEther("10"),
	});
	await LaxmiCryptFund.deployed();
	console.log(`\nLaxmiCryptFund contract has been deplyed.`);
	console.log(`\nDeployed to: ${LaxmiCryptFund.address}`);
	console.log(`Deployed by: ${owner.address}`);

	// Displaying initial balances
	const addresses = [
		owner.address,
		investor1.address,
		investor2.address,
		investor3.address,
	];
	console.log(`\nDisplaying Initial Balances:`);
	await printBalances(addresses);

	// Displaying smart contract balance
	let contractBalance = await hre.ethers.provider.getBalance(
		LaxmiCryptFund.address
	);
	console.log(
		`Balance of smart contract is: ${hre.ethers.utils.formatEther(
			contractBalance
		)}`
	);

	// Investing
	await LaxmiCryptFund.connect(investor1).invest({
		value: hre.ethers.utils.parseEther("0.01"),
	});
	await LaxmiCryptFund.connect(investor2).invest({
		value: hre.ethers.utils.parseEther("0.01"),
	});
	await LaxmiCryptFund.connect(investor3).invest({
		value: hre.ethers.utils.parseEther("0.01"),
	});

	// Displaying all the memos
	console.log(`\nDisplaying Memos:`);
	const Memos = await LaxmiCryptFund.getMemos();
	printMemos(Memos);

	// Displaying smart contract balance
	contractBalance = await hre.ethers.provider.getBalance(
		LaxmiCryptFund.address
	);
	console.log(
		`Balance of smart contract is: ${hre.ethers.utils.formatEther(
			contractBalance
		)}`
	);

	// Displaying total investors
	const investors = await LaxmiCryptFund.investors();
	console.log(`\nTotal Investors: ${investors}`);

	// Withdrawing funds
	await LaxmiCryptFund.connect(owner).withdrawFunds();

	// Displaying final balances
	console.log(`\nDisplaying After Balances:`);
	await printBalances(addresses);
}

main().then(() =>
	process.exit(0).catch((error) => {
		console.log(error);
		process.exit(1);
	})
);
