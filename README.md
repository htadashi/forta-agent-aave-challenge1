# Monitoring Agent for Aave's Fallback Oracle Address

## Description

This agent detects `setFallBackOracle` function calls

## Supported Chains

- Ethereum

## Alerts

- FORTA-1
  - Fired when `setFallBackOracle` function is executed
  - Severity is always set to "info"
  - Type is always set to "info"
  - Metadata
    - by: sender of transaction

## Test Data

The agent behaviour can be verified with the following transactions:

- 0x9d2c419069be3ef6b78d6bdb47f6c195e4cb24b25e5706a497731ede033e0503
