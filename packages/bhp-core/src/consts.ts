export const ADDR_VERSION = "17";

export const ASSETS: { [key: string]: string } = {
  BHP: "BHP",
  "13f76fabfe19f3ec7fd54d63179a156bafc44afc53a7f07a7a15f6724c0aa854": "BHP",
  GAS: "GAS",
  "a60b5dbb2b50022e3179a5a129b4d90bbb5bf5caabc40893fcdb83703e751225": "GAS"
};

export const ASSET_ID: { [key: string]: string } = {
  BHP: "13f76fabfe19f3ec7fd54d63179a156bafc44afc53a7f07a7a15f6724c0aa854",
  GAS: "a60b5dbb2b50022e3179a5a129b4d90bbb5bf5caabc40893fcdb83703e751225"
};

export const ASSET_TYPE: { [key: string]: number } = {
  CreditFlag: 0x40,
  DutyFlag: 0x80,
  GoverningToken: 0x00,
  UtilityToken: 0x01,
  Currency: 0x08,
  Share: 0x90, // (= DutyFlag | 0x10)
  Invoice: 0x98, // (= DutyFlag | 0x18)
  Token: 0x60 // (= CreditFlag | 0x20)
};
export const CONTRACTS: { [key: string]: string } = {
  RPX: "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9",
  TEST_RPX: "5b7074e873973a6ed3708862f219a6fbf4d1c411",
  TEST_LWTF: "d7678dd97c000be3f33e9362e673101bac4ca654",
  TEST_NXT: "0b6c1f919e95fe61c17a7612aebfaf4fda3a2214",
  TEST_RHTT4: "f9572c5b119a6b5775a6af07f1cef5d310038f55"
};

export const DEFAULT_RPC: { [key: string]: string } = {
  MAIN: "https://localhost:20557",
  TEST: "https://localhost:20557"
};

export const DEFAULT_REQ = {
  jsonrpc: "2.0",
  method: "getblockcount",
  params: [],
  id: 1234
};

export const DEFAULT_SCRYPT = {
  n: 16384,
  r: 8,
  p: 8,
  size: 64
};

export const DEFAULT_SYSFEE: { [key: string]: number } = {
  enrollmentTransaction: 1000,
  issueTransaction: 500,
  publishTransaction: 500,
  registerTransaction: 10000
};

export const DEFAULT_WALLET = {
  name: "myWallet",
  version: "1.0",
  scrypt: DEFAULT_SCRYPT,
  extra: null
};

export const DEFAULT_ACCOUNT_CONTRACT = {
  script: "",
  parameters: [
    {
      name: "signature",
      type: "Signature"
    }
  ],
  deployed: false
};

export const BHP_NETWORK: { [key: string]: string } = {
  MAIN: "MainNet",
  TEST: "TestNet"
};

// specified by brc2, same as bip38
export const BRC_HEADER = "0142";

export const BRC_FLAG = "e0";

export const RPC_VERSION = "2.3.2";

export const TX_VERSION: { [key: string]: number } = {
  CLAIM: 0,
  CONTRACT: 0,
  INVOCATION: 1,
  ISSUE: 0,
  STATE: 0,
  MINER: 0,
  ENROLLMENT: 0,
  PUBLISH: 0,
  REGISTER: 0
};
