<!-- PROJECT HEADER -->

<br />
<div align="center">
  <a href="https://laxmi-crypt-fund.vercel.app/">
    <img src="Images/laxmi-crypt-fund-logo.svg" alt="logo" width="20%">
    <h1><b>Laxmi Crypt Fund</b><br/><b>21 sec Mein Crypto Double</b></h1>
  </a>
  
  <p align="center">
    <a href="https://www.producthunt.com/posts/laxmi-crypt-fund"><strong>Product Hunt »</strong></a>
    <br />
    <a href="https://laxmi-crypt-fund.vercel.app/">View Project</a>
    |
    <a href="https://github.com/githubotoro/laxmi-crypt-fund-smart-contract/issues">Report Bug</a>
    |
    <a href="https://github.com/githubotoro/laxmi-crypt-fund-smart-contract/issues">Request Feature</a>
    <br/>
    <a href="https://twitter.com/yupuday">Twitter</a>
    |
    <a href="https://mumbai.polygonscan.com/address/0x085d174c046DfdeAE987D27fF5446D31A570D6AA#code">PolygonScan</a>
    |
    <a href="https://github.com/githubotoro/laxmi-crypt-fund-web3-app">Web3 App</a>
    <br/> <br/>
    <b>If you like this project, don't forget to give it a star! <br/> Thanks! 😊</b>
  </p>
  
</div>

<!-- PROJECT HEADER -->

<!-- TABLE OF CONTENTS -->

## Table of Contents 📌

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#colour-palette">Colour Palette</a></li>
      </ul>
      <ul>
        <li><a href="#font-used">Font Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#project-links">Project Links</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ol>

<!-- TABLE OF CONTENTS -->

<!-- ABOUT THE PROJECT -->

<a name="about-the-project"></a>

## About The Project 📝

<div align="center">
<a href="https://laxmi-crypt-fund.vercel.app/">
    <img src="Images/laxmi-crypt-fund-title.png" alt="logo" width="90%">
</a>
</div>

This project is inspired from Neeraj Vora's directorial "Phir Hera Pheri" (2006). It's a Web3 parody of "Laxmi Chit Fund" on Polygon Mumbai Testnet. Whenever an investment is made, there is 50% chance of getting it doubled, and 50% chance of losing it all. "Save on Mainnet, Spend on Testnet!", that's our motto. 😄

<!-- ABOUT THE PROJECT -->

<!-- BUILT WITH -->

<a name="built-with"></a>

### Built With 🔍

-   [React.js](https://reactjs.org/)
-   [Moralis](https://moralis.io/)
-   [Ethers.js](https://docs.ethers.io/v5/)
-   [Alchemy](https://www.alchemy.com/)
-   [SweetAlert2](https://sweetalert2.github.io/)

<!-- BUILT WITH -->

<!-- COLOUR PALETTE -->

<a name="colour-palette"></a>

### Colour Palette 🎨

-   <b>#e8f9fd</b> (Foam)
-   <b>#79dae8</b> (Sky Blue)
-   <b>#0aa1dd</b> (Cerulean)
-   <b>#2155cd</b> (Mariner)
-   <b>#000000</b> (Black)

<!-- COLOUR PALETTE -->

<!-- FONT USED -->

<a name="font-used"></a>

### Font Used ✒️

-   [Lato](https://fonts.google.com/specimen/Lato)

<!-- FONT USED -->

<!-- ABOUT THE PROJECT -->

<!-- GETTING STARTED -->

<a name="getting-started"></a>

## Getting Started 🚀

All you need to get started with this project is to have seen **Phir Hera Pheri!** movie 😄

<a name="installation"></a>

### Installation 💻

1.  **Clone** this repo.

    ```sh
    git clone https://github.com/githubotoro/laxmi-crypt-fund-smart-contract.git
    ```

2.  Get your own **Alchemy API URL** on **"Polygon Mumbai Testnet"** from **[Alchemy](https://www.alchemy.com/).** Get your **Private Key** under Account Details from Metamask. Make a **.env** file in the root directory and enter the following lines.

    ```sh
    ALCHEMY_POLYGON_URL = "YOUR_ALCHEMY_POLYGON_API_URL"
    PRIVATE_KEY = "YOUR_PRIVATE_KEY"
    ```

    > **NOTE: Never push .env file to GitHub or you would lose all your funds as Mainnet and Testnet share the same Private Key.**

3.  **(Optional)** You can also add **PolygonScan API Key** from **[PolygonScan Mumbai](https://mumbai.polygonscan.com/)** and add it your .env file. This can be used to **verify** smart contract on PolygonScan.

    ```sh
    POLYGONSCAN_API_KEY = "YOUR_POLYGONSCAN_KEY";
    ```

    You can **verify smart contract** after deployemnt using below command:

    ```js
    npx hardhat verify "YOUR_SMART_CONTRACT_ADDRESS" --network mumbai
    ```

4.  **Install** NPM packages.

    ```sh
    npm install
    ```

5.  Modify **LaxmiCryptFund.sol** under **/contracts** as per your requirements.

6.  Deploying and testing **(Locally)**.

    ```sh
    npx hardhat run scrips/invest.js
    ```

7.  Deploying and testing **(Polygon Testnet)**. If you don't have **MATIC**, get some for free from **[Polygon Faucet](https://mumbaifaucet.com/)** for deployment and making transactions.

    ```sh
    npx hardhat run scrips/deploy.js --network mumbai
    ```

8.  **(Optional)** Refer this **[laxmi-crypt-fund-web3-app](https://github.com/githubotoro/laxmi-crypt-fund-web3-app)** project to make a **live web3 project** for interacting with the deployed smart contract.

    > **NOTE: Write down contract deployement address from console after deployment and don't forget to update CONTRACT_ADDRESS and LaxmiCryptFund.json in your web3 app.**

9.  **Time to invest and double that MATIC! 😁**

<!-- GETTING STARTED -->

<!-- CONTRIBUTING -->

<a name="contributing"></a>

## Contributing 🤝

"Laxmi Crypt Fund" is a community project and any contributions you make are greatly appreciated. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "Laxmi". 🏷

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/LaxmiFeature`)
3. Commit your Changes (`git commit -m 'Add some LaxmiFeature'`)
4. Push to the Branch (`git push origin feature/LaxmiFeature`)
5. Open a Pull Request

<!-- CONTRIBUTING -->

<!-- LICENSE -->

<a name="license"></a>

## License 📃

Distributed under the **MIT License**. See `LICENSE` for more information.

<!-- LICENSE -->

<!-- CONTACT -->

<a name="contact"></a>

## Contact ☎️

> **Uday Khokhariya**

-   **Twitter** - [yupuday](https://twitter.com/yupuday)
-   **Email** - uday.khokhariya@gmail.com

<!-- CONTACT -->

<!-- PROJECT LINKS -->

<a name="project-links"></a>

## Project Links 🔗

> **Product Hunt Link** : [https://www.producthunt.com/posts/laxmi-crypt-fund](https://www.producthunt.com/posts/laxmi-crypt-fund)

> **GitHub Web3 App Project Link** : [https://github.com/githubotoro/laxmi-crypt-fund-web3-app](https://github.com/githubotoro/laxmi-crypt-fund-web3-app)

> **GitHub Smart Contract Project Link** : [https://github.com/githubotoro/laxmi-crypt-fund-smart-contract](https://github.com/githubotoro/laxmi-crypt-fund-smart-contract)

> **Deployed Project Link** : [https://laxmi-crypt-fund.vercel.app](https://laxmi-crypt-fund.vercel.app)

> **Deployed Smart Contract Link** : [https://mumbai.polygonscan.com/address/0x085d174c046DfdeAE987D27fF5446D31A570D6AA#code](https://mumbai.polygonscan.com/address/0x085d174c046DfdeAE987D27fF5446D31A570D6AA#code)

> **Deployed Smart Contract Address** : [0x085d174c046DfdeAE987D27fF5446D31A570D6AA](https://mumbai.polygonscan.com/address/0x085d174c046DfdeAE987D27fF5446D31A570D6AA)

<!-- PROJECT LINKS -->

<!-- ACKNOWLEDGMENTS -->

<a name="acknowledgements"></a>

## Acknowledgments 🙌

-   [Phir Hera Pheri (2006)](https://www.youtube.com/watch?v=TmxYlA26Jr4)
-   [Alchemy](https://www.alchemy.com/)
-   [Moralis](https://moralis.io/)
-   [Choose an Open Source License](https://choosealicense.com)
-   [Get Emoji](https://getemoji.com/)
-   [Name that Color](https://chir.ag/projects/name-that-color/#D3D3D3)

<!-- ACKNOWLEDGMENTS -->

<div align="center">
  <a href="https://laxmi-crypt-fund.vercel.app">
    <img src="Images/laxmi-crypt-fund-illustration.png" alt="logo" width="100%">
    <h1><b>Zor-Zor se bolke Scheme bata dooo... 💯</b></h1>
  </a>
</div>
