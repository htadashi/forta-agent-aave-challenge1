const BigNumber = require("bignumber.js");
const { Finding, FindingSeverity, FindingType } = require("forta-agent");

const SET_FALLBACK_ORACLE_FUNCTION = "function setFallbackOracle(address)";
const AAVE_ORACLE_ADDRESS = "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9";

const handleTransaction = async (txEvent) => {
  const findings = [];

  // filter the transaction input for setFallbackOracle function calls
  const setFallbackOracleInvocations = txEvent.filterFunction(
    SET_FALLBACK_ORACLE_FUNCTION,
    AAVE_ORACLE_ADDRESS
  );

  // fire alerts for each function call
  setFallbackOracleInvocations.forEach((transferFromInvocation) => {

    findings.push(
      Finding.fromObject({
        name: "setFallbackOracle function has been invoked",
        description: "setFallbackOracle invoked",
        alertId: "FORTA-1",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata: {
          by: txEvent.from,
        },
      })
    );
  });

  return findings;
};

module.exports = {
  handleTransaction,
};