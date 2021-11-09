const {
  handleTransaction: handleSetFallbackOracleFunction,
} = require("./setFallBackOracleFn");

let findingsCount = 0;

const handleTransaction = async (txEvent) => {
  const findings = await handleSetFallbackOracleFunction(txEvent);
  findingsCount += findings.length;

  return findings;
};

module.exports = {
  handleTransaction,
};