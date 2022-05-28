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
		const luckyNumber = memo.luckyNumber;
		const result = memo.result;
		const bigIntInvestment = memo.investment;
		const rawTimestamp = memo.timestamp;

		console.log(
			`At ${Date(
				rawTimestamp * 1000
			)}: Lucky Number ${luckyNumber} was generated and ${investor} ${result} their investment of ${hre.ethers.utils.formatEther(
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
	const LaxmiCryptFund = await LaxmiCryptFundContractFactory.deploy();
	await LaxmiCryptFund.deployed();
	console.log(`\nLaxmiCryptFund contract has been deplyed.`);
	console.log(`\nDeployed to: ${LaxmiCryptFund.address}`);
	console.log(`Deployed by: ${owner.address}`);

	// Displaying contract balance before funding
	let contractBalance = await LaxmiCryptFund.getBalance();
	console.log(
		`\nBalance of Smart Contract before funding is ${hre.ethers.utils.formatEther(
			contractBalance
		)}`
	);

	// Funding contract using FundContract function
	await LaxmiCryptFund.connect(owner).fundContract({
		value: hre.ethers.utils.parseEther("10"),
	});

	// Displaying contract balance after funding
	contractBalance = await LaxmiCryptFund.getBalance();
	console.log(
		`\nBalance of Smart Contract after funding is ${hre.ethers.utils.formatEther(
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
}

main().then(() =>
	process.exit(0).catch((error) => {
		console.log(error);
		process.exit(1);
	})
);
