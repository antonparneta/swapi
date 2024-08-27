/* eslint-disable */
module.exports = (_, { nodeEnv }) => require(`./${nodeEnv}.js`);