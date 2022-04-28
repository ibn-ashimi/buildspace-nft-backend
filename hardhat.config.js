require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cV-_EDQeq1jguFNVwbiqy8lmD82Y0k_w',
      accounts: ['504ee714c31b57b0f07d9922d290cba377272ca8deef1519780fc2c2aee750e6'],
    },
  },
};