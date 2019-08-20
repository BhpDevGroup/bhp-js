export default {
  MainNet: {
    Name: "MainNet",
    ProtocolConfiguration: {
      Magic: 48876898,
      AddressVersion: 23,
      StandbyValidators: [
        "02b04702f0175741c2bcdfff69e453f2b3dd037c8c0459c67af548201ce7e83506",
        "03f9a44380fbfc090b430f76a6cf7e3e098e881f0bdb30d71d79ce0bdb13fbbf57",
        "02d40e3fbd71a99ed26789d4f0be4c92470c368da6a020631d4bb0021fd354e658",
        "0318e1ff45ced5a497394ded4698128d1b3b2b5568394687aa97fe05d95fda8d6e"
      ],
      SeedList: [
        "192.168.1.170:10555",
        "192.168.1.170:20555",
        "192.168.1.170:30555",
        "192.168.1.170:40555"
      ],
      SystemFee: {
        EnrollmentTransaction: 1000,
        IssueTransaction: 500,
        PublishTransaction: 500,
        RegisterTransaction: 10000
      }
    },
    ExtraConfiguration: {
      bhpDB: "http://api.wallet.bhp.io",
      bhpscan: "https://api.bhpscan.io/api/main_net"
    }
  },
  TestNet: {
    Name: "TestNet",
    ProtocolConfiguration: {
      Magic: 48876898,
      AddressVersion: 23,
      StandbyValidators: [
        "02b04702f0175741c2bcdfff69e453f2b3dd037c8c0459c67af548201ce7e83506",
        "03f9a44380fbfc090b430f76a6cf7e3e098e881f0bdb30d71d79ce0bdb13fbbf57",
        "02d40e3fbd71a99ed26789d4f0be4c92470c368da6a020631d4bb0021fd354e658",
        "0318e1ff45ced5a497394ded4698128d1b3b2b5568394687aa97fe05d95fda8d6e"
      ],
      SeedList: [
        "192.168.1.170:10555",
        "192.168.1.170:20555",
        "192.168.1.170:30555",
        "192.168.1.170:40555"
      ],
      SystemFee: {
        EnrollmentTransaction: 10,
        IssueTransaction: 5,
        PublishTransaction: 5,
        RegisterTransaction: 100
      }
    },
    ExtraConfiguration: {
      bhpDB: "http://localhost:20557/api/main_net",
      bhpscan: "http://localhost:20558"
    }
  },
  CozNet: {
    Name: "CozNet",
    ProtocolConfiguration: {
      Magic: 48876898,
      AddressVersion: 23,
      StandbyValidators: [
        "02b04702f0175741c2bcdfff69e453f2b3dd037c8c0459c67af548201ce7e83506",
        "03f9a44380fbfc090b430f76a6cf7e3e098e881f0bdb30d71d79ce0bdb13fbbf57",
        "02d40e3fbd71a99ed26789d4f0be4c92470c368da6a020631d4bb0021fd354e658",
        "0318e1ff45ced5a497394ded4698128d1b3b2b5568394687aa97fe05d95fda8d6e"
      ],
      SeedList: [
        "192.168.1.170:10555",
        "192.168.1.170:20555",
        "192.168.1.170:30555",
        "192.168.1.170:40555"
      ],
      SystemFee: {
        EnrollmentTransaction: 1000,
        IssueTransaction: 500,
        PublishTransaction: 500,
        RegisterTransaction: 10000
      }
    },
    ExtraConfiguration: {
      bhpscan: "https://coz.bhpscan-testnet.io/api/main_net"
    }
  }
};
