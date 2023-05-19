/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StargateStrategy,
  StargateStrategyInterface,
} from "../../../contracts/stargate/StargateStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ethRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpStaking",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingPid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stgEthPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "addLiquidityRouter",
    outputs: [
      {
        internalType: "contract IRouterETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpRouterPid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpStaking",
    outputs: [
      {
        internalType: "contract ILPStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpStakingPid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stgEthPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stgNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stgTokenReward",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x610140806040523462000413578062002b6a8038038091620000228285620004f1565b833961010092839181010312620004135780516001600160a01b0381168103620004135762000054602083016200052b565b62000062604084016200052b565b90602062000073606086016200052b565b9360046080870151936200008a60a089016200052b565b95620000a760e06200009f60c08c016200052b565b9a016200052b565b936080528160a0523360018060a01b0319600054161760005560405195869485933360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002556001600160a01b0390811660c052600380546001600160a01b03199081168e84161790915586541691811691909117855591821660e081905291891661012052600555632a795bcf60e21b82525afa908115620003c457600091620004af575b506001600160a01b03908116855260e051604051631f06e1a760e11b81529160209183916004918391165afa8015620003c45760009062000469575b61ffff1660065550600780546001600160a01b0319166001600160a01b0392831690811790915560405163095ea7b360e01b80825293909216600483015260001960248301819052939190602090829060449082906000905af18015620003c45762000445575b5060075484516040518481526001600160a01b039182166004820152602481018690529160209183916044918391600091165af18015620003c45762000421575b5061012051604051633604cef760e11b815290602090829060049082906001600160a01b03165afa908115620003c457600091620003d0575b50600880546001600160a01b0319166001600160a01b0392831690811790915560405193845291166004830152602482019290925290602090829060449082906000905af18015620003c4576200038e575b5060405161260f91826200055b833960805182818161024201528181610c820152611298015260a051826101e1015260c05182818161028201528181610bcc01528181610e3a01528181610fe2015281816112df0152818161188e015281816120c7015281816122260152612433015260e051828181610c10015261228101525181818161019a0152818161057f0152610e040152610120518181816104b901528181610d0d015281816113c501528181611795015281816120590152818161230201526124910152f35b620003b49060203d602011620003bc575b620003ab8183620004f1565b81019062000540565b5038620002c3565b503d6200039f565b6040513d6000823e3d90fd5b90506020813d60201162000418575b81620003ee60209383620004f1565b8101031262000413576020926000620004096044936200052b565b9250509262000271565b600080fd5b3d9150620003df565b6200043d9060203d602011620003bc57620003ab8183620004f1565b503862000238565b620004619060203d602011620003bc57620003ab8183620004f1565b5038620001f7565b506020813d602011620004a6575b816200048660209383620004f1565b8101031262000413575161ffff81168103620004135761ffff9062000190565b3d915062000477565b90506020813d602011620004e8575b81620004cd60209383620004f1565b810103126200041357620004e1906200052b565b3862000154565b3d9150620004be565b601f909101601f19168101906001600160401b038211908210176200051557604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200041357565b90816020910312620004135751801515810362000413579056fe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600092833560e01c91826306fdde0314611c5a57508163078dfbe714611b4957816317d70f7c14611b2e57816322a58c5d146117035781632b3297f9146116da57816330fa738c146116be57816341852dc21461169557816347b3f37c1461166d57816348dcb051146116495781634cce992d146115e95781634e71e0c8146115365781635018830114610c3f578163637d895d1461150d5781637284e41614611479578163734daaa11461145a5781637e9e576c1461143b5781638da5cb5b146114135781639a3f7aa0146113f45781639bf1401c146113b0578163afa91cc614611271578163ce845d1d14610c3f578163db2e21bc14610cb1578163de40657714610c6d578163e30c397814610c44578163e3575f0514610c3f578163e9e6d51214610bfb578163eb6d3a1114610bb7578163ec32e1b914610a51578163f3fef3a31461021057508063f6b4dfb4146101cd5763f887ea40146101875780610012565b346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b50346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b905034610a4d5781600319360112610a4d5761022a611d06565b6001600160a01b0392909160248035929190610269337f000000000000000000000000000000000000000000000000000000000000000088161461254a565b610271612585565b8361027a61240a565b10610a0157857f0000000000000000000000000000000000000000000000000000000000000000168351956370a0823160e01b80885230858901528960209889818781885afa9081156105f15782916109d0575b5080891161048f575b50508551908152308582015287818581865afa908115610485578a91610453575b50861161041a57889182918287519a8a8c019263a9059cbb60e01b8452169a8b878201528960448201526044815261032f81611d46565b51925af13d15610413573d61034381611da0565b9061035086519283611d7e565b81523d898883013e5b816103d7575b5015610397575050519081527f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d89190a2600160025580f35b601c9085606494519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b809150518681159182156103f0575b505090503861035f565b838092935001031261040f57856104079101611e3e565b8086386103e6565b8780fd5b6060610359565b845162461bcd60e51b8152808501889052601481850152730a6e8c2e4cec2e8ca7440dcdee840cadcdeeaced60631b6044820152606490fd5b90508781813d831161047e575b61046a8183611d7e565b810103126104795751386102f8565b600080fd5b503d610460565b86513d8c823e3d90fd5b81885161049b81611d62565b526005548851632f607fdd60e01b81528089019182523060208301527f00000000000000000000000000000000000000000000000000000000000000008d1692918c90829081906040010381865afa90811561084d57849161099f575b5061064c575b610508908a612003565b90600554813b1561064857839060448a838d519586948593630441a3e760e41b8552840152878d8401525af1801561062a57908391610634575b50600654895163c4de93a560e01b815261ffff9091168982019081526020810184905230604082015290918c9183918f91839190829060600103927f0000000000000000000000000000000000000000000000000000000000000000165af1801561062a57908b916105fb575b5050843b156101c957818791895192838092630d0e30db60e41b8252895af180156105f157156102d7576105e290611d1c565b6105ed5789386102d7565b8980fd5b88513d84823e3d90fd5b90809293503d8311610623575b6106128183611d7e565b81010312610479578a9089386105af565b503d610608565b89513d85823e3d90fd5b61063d90611d1c565b6101c9578138610542565b8380fd5b868b8d600854168b51928380928982528d30908301525afa90811561084d57849161096e575b50823b15610648578951631c57762b60e31b815260028a820152888101859052848160448183885af1801561096457908591610950575b50508c60085416908a51868152308b8201528d818b81865afa90811561094657918f92918c92889161090f575b508181116106e9575b50505050506104fe565b61072192916106fd91989495969798612003565b9360035416938d5180938192631fd177af60e11b83528d610140998a968501611f40565b0381865afa938415610905578c8f928d9285976108ce575b505051630b7ecdc960e31b81529190829081906107599088908301611fe3565b0381865afa9182156108c35791610896575b50603281028181046032148215171561088357928f9594938b876107b6958f9561079d906127106101c4960490612003565b865163efa84c6d60e01b81529788968795860190611f77565b610144840152306101648401526101a0610184840152816101a48401525af1801561084d57610857575b50885184815230898201528b8189818a5afa90811561084d578491610818575b509061080e6105089261221c565b908c8938806106df565b809294508c8092503d8311610846575b6108328183611d7e565b8101031261047957518c929061080e610800565b503d610828565b8a513d86823e3d90fd5b610876908a3d8c1161087c575b61086e8183611d7e565b810190612206565b506107e0565b503d610864565b50634e487b7160e01b8f5260118a52888ffd5b90508c81813d83116108bc575b6108ad8183611d7e565b8101031261047957513861076b565b503d6108a3565b8c51903d90823e3d90fd5b6107599493975090816108f592903d106108fe575b6108ed8183611d7e565b810190611e4b565b95919238610739565b503d6108e3565b8c513d84823e3d90fd5b9750509150508c85813d831161093f575b61092a8183611d7e565b8101031261047957898f95918f9251386106d6565b503d610920565b8c513d88823e3d90fd5b61095990611d1c565b6106485783386106a9565b8b513d87823e3d90fd5b8094508c8092503d8311610998575b6109878183611d7e565b81010312610479578c925138610672565b503d61097d565b8094508c8092503d83116109c9575b6109b88183611d7e565b81010312610479578c9251386104f8565b503d6109ae565b8092508a8092503d83116109fa575b6109e98183611d7e565b81010312610479578a9051386102ce565b503d6109df565b6022906020608494519362461bcd60e51b85528401528201527f537461726761746553747261746567793a20616d6f756e74206e6f742076616c6044820152611a5960f21b6064820152fd5b8280fd5b91905034610a4d576020908160031936011261064857610a6f611d06565b845490936001600160a01b0391610a899083163314611ddf565b81806003541695169486845187837fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8480a3868160448185896008541663095ea7b360e01b988984528a8401528160248401525af18015610bad57908794939291610b6f575b506044929394886001600160601b0360a01b60035416176003556008541686519889958694855284015260001960248401525af1908115610b665750610b33578280f35b81813d8311610b5f575b610b478183611d7e565b810103126101c957610b5890611e3e565b5038808280f35b503d610b3d565b513d85823e3d90fd5b929383813d8311610ba6575b610b858183611d7e565b81010312610ba3578694610b9a604494611e3e565b50949392610aef565b80fd5b503d610b7b565b86513d84823e3d90fd5b5050346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b611dbc565b5050346101c957816003193601126101c95760015490516001600160a01b039091168152602090f35b5050346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b91905034610a4d5782600319360112610a4d57610d3d9260018060a01b0392610cde848354163314611ddf565b818351610cea81611d62565b526005548351632f607fdd60e01b815282810191825230602083810191909152967f0000000000000000000000000000000000000000000000000000000000000000871692889183918291604090910190565b0381855afa908115610ef4578491611244575b50610f2c575b60055484516393f1a40b60e01b8152838101828152306020820152909291908690849081906040010381855afa928315610f22578593610f02575b50813b15610efe5784916044839288519485938492630441a3e760e41b8452898401528760248401525af18015610ef45787918591610edd575b5050600654855163c4de93a560e01b815261ffff90911684820190815260208101939093523060408401529182908190606001038186897f0000000000000000000000000000000000000000000000000000000000000000165af18015610ed357908691610eaa575b505047937f00000000000000000000000000000000000000000000000000000000000000001690813b15610a4d578351630d0e30db60e41b81529183918391829088905af18015610ea057610e8c575b505051908152f35b610e968291611d1c565b610ba35780610e84565b83513d84823e3d90fd5b813d8311610ecc575b610ebd8183611d7e565b81010312610479578438610e34565b503d610eb3565b84513d85823e3d90fd5b610ee8919250611d1c565b610a4d57858338610dcb565b85513d86823e3d90fd5b8480fd5b610f1a919350863d881161087c5761086e8183611d7e565b509138610d91565b86513d87823e3d90fd5b846008541684519087826024816370a0823160e01b9485825230898301525afa918215610f22578592611215575b50823b15610efe578551631c57762b60e31b815260028582015260248101869052858160448183885af1801561115757908691611201575b505086600854169186519082825230868301528982602481875afa9182156111f75787926111c8575b50808211610fcd575b50505050610d56565b610fd691612003565b876003541690611023897f0000000000000000000000000000000000000000000000000000000000000000169485928a5180938192631fd177af60e11b83526101409687958d8501611f40565b0381865afa9182156111a15788926111ab575b50508751630b7ecdc960e31b81528a8180611053858b8301611fe3565b0381865afa9081156111a1578891611174575b506032810281810460321482151715611161578992896110916110ac946127106101c4950490612003565b958551968795869463efa84c6d60e01b86528d860190611f77565b610144840152306101648401526101a0610184840152816101a48401525af18015611157579089929161113b575b506024875180948193825230888301525afa8015610ef457849061110c575b611103915061221c565b38808080610fc4565b508681813d8311611134575b6111228183611d7e565b810103126104795761110390516110f9565b503d611118565b61115190883d8a1161087c5761086e8183611d7e565b506110da565b87513d88823e3d90fd5b634e487b7160e01b895260118852602489fd5b90508a81813d831161119a575b61118b8183611d7e565b81010312610479575138611066565b503d611181565b89513d8a823e3d90fd5b6111c19250803d106108fe576108ed8183611d7e565b3880611036565b9091508981813d83116111f0575b6111e08183611d7e565b8101031261047957519038610fbb565b503d6111d6565b88513d89823e3d90fd5b61120a90611d1c565b610efe578438610f92565b9091508781813d831161123d575b61122d8183611d7e565b8101031261047957519038610f5a565b503d611223565b90508681813d831161126a575b61125b8183611d7e565b81010312610479575138610d50565b503d611251565b905034610a4d576020908160031936011261064857602492826001600160a01b036112bf337f000000000000000000000000000000000000000000000000000000000000000083161461254a565b6112c7612585565b82516370a0823160e01b8152308582015295869182907f0000000000000000000000000000000000000000000000000000000000000000165afa80156113a6578590611359575b7f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca9450600954811161134a575b505190358152a1600160025580f35b6113539061221c565b3861133b565b508284813d831161139f575b61136f8183611d7e565b81010312610479577f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca935161130e565b503d611365565b81513d87823e3d90fd5b5050346101c957816003193601126101c957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101c957816003193601126101c9576020906006549051908152f35b5050346101c957816003193601126101c957905490516001600160a01b039091168152602090f35b5050346101c957816003193601126101c9576020906005549051908152f35b5050346101c957816003193601126101c9576020906009549051908152f35b828434610ba35780600319360112610ba357508051906060820182811067ffffffffffffffff8211176114f8576114f493508152602b82527f537461726761746520737472617465677920666f722077726170706564206e6160208301526a746976652061737365747360a81b818301525191829182611cbd565b0390f35b604184634e487b7160e01b6000525260246000fd5b5050346101c957816003193601126101c95760085490516001600160a01b039091168152602090f35b91905034610a4d5782600319360112610a4d576001546001600160a01b039290918383169190338390036115a65750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b905034610a4d576020366003190112610a4d577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90359161163460018060a01b038554163314611ddf565b6009548151908152836020820152a160095580f35b5050346101c957816003193601126101c957602090611666612026565b9051908152f35b905034610a4d5782600319360112610a4d575490516001600160a01b03909116815260209150f35b5050346101c957816003193601126101c95760075490516001600160a01b039091168152602090f35b5050346101c957816003193601126101c9576020905160018152f35b5050346101c957816003193601126101c95760035490516001600160a01b039091168152602090f35b91905034610a4d57602090816003193601126106485782359167ffffffffffffffff8311610efe5736602384011215610efe5784838501359361174585611da0565b9461175285519687611d7e565b80865260249536878385010111610648578187869401848301370101526005548251632f607fdd60e01b81528086019182523060208301526001600160a01b03957f000000000000000000000000000000000000000000000000000000000000000087169590929091908490829081906040010381895afa908115611a0c578891611b01575b506117e1578680f35b856008541687855196858885816370a0823160e01b96878252308a8301525afa978815611af7578298611ac8575b50803b156101c95781906044885180948193631c57762b60e31b835260028a84015281898401525af18015611abe57611aab575b508660085416958551908282523085830152858285818b5afa918215611a55578a92611a7c575b5080821161187a575b5050508680f35b61188391612003565b6118cf8860035416987f000000000000000000000000000000000000000000000000000000000000000016978892885180938192631fd177af60e11b83526101409687958b8501611f40565b03818c5afa918215611a55578a92611a5f575b50508551630b7ecdc960e31b81528581806118ff85898301611fe3565b03818c5afa908115611a55578a91611a28575b506032810281810460321482151715611a165787928b61193d611958946127106101c4950490612003565b9b85519c8d95869463efa84c6d60e01b86528b860190611f77565b610144840152306101648401526101a0610184840152816101a48401525af1968715611a0c57849596976119f0575b5085519687938492835230908301525afa918215610b66575083916119c0575b506119b2915061221c565b388080808080808080611873565b905081813d83116119e9575b6119d68183611d7e565b81010312610479576119b29051386119a7565b503d6119cc565b611a0690873d891161087c5761086e8183611d7e565b50611987565b85513d8a823e3d90fd5b634e487b7160e01b8b5260118652848bfd5b90508581813d8311611a4e575b611a3f8183611d7e565b81010312610479575138611912565b503d611a35565b87513d8c823e3d90fd5b611a759250803d106108fe576108ed8183611d7e565b38806118e2565b9091508581813d8311611aa4575b611a948183611d7e565b810103126104795751903861186a565b503d611a8a565b611ab790989198611d1c565b9638611843565b86513d8b823e3d90fd5b9097508581813d8311611af0575b611ae08183611d7e565b810103126101c95751963861180f565b503d611ad6565b87513d84823e3d90fd5b90508381813d8311611b27575b611b188183611d7e565b8101031261040f5751386117d8565b503d611b0e565b5050346101c957816003193601126101c95751908152602090f35b91905034610a4d576060366003190112610a4d57611b65611d06565b91602435918215158303610efe57604435928315158403611c565760018060a01b03948591611b98838954163314611ddf565b15611c3a571692831590811591611c32575b5015611bf75750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160601b0360a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038611baa565b9350505050166001600160601b0360a01b600154161760015580f35b8580fd5b838534610ba35780600319360112610ba3578183019083821067ffffffffffffffff831117611caa57506114f4935081526008825267537461726761746560c01b60208301525191829182611cbd565b634e487b7160e01b815260418552602490fd5b6020808252825181830181905290939260005b828110611cf257505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611cd0565b600435906001600160a01b038216820361047957565b67ffffffffffffffff8111611d3057604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff821117611d3057604052565b6020810190811067ffffffffffffffff821117611d3057604052565b90601f8019910116810190811067ffffffffffffffff821117611d3057604052565b67ffffffffffffffff8111611d3057601f01601f191660200190565b34610479576000366003190112610479576020611dd761240a565b604051908152f35b15611de657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b51906001600160a01b038216820361047957565b5190811515820361047957565b809103610140811261047957604080519267ffffffffffffffff926060850184811186821017611d30578084526080821261047957611e8981611d46565b611e9283611e2a565b815260208301516080870152611ea9848401611e2a565b60a0870152606083015160c087015285526080607f198201126104795782908151611ed381611d46565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126104795781519283830190811184821017611d3057611f3591610120918452611f2d6101008201611e3e565b855201611e3e565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b611ff08161018093611f77565b6000610160806101408401528201520190565b9190820391821161201057565b634e487b7160e01b600052601160045260246000fd5b60055460408051632f607fdd60e01b815260048101929092523060248301526001600160a01b03929190602080836044817f000000000000000000000000000000000000000000000000000000000000000089165afa9283156121fb576000936121cc575b506000948361209b575b50505050565b90919294506120f1816003541691806008541696855180938192631fd177af60e11b83526101409a8b957f0000000000000000000000000000000000000000000000000000000000000000169060048501611f40565b0381855afa9586156121c1579161212a95969184936000936121a2575b505084518080978194630b7ecdc960e31b835260048301611fe3565b03915afa918215612198575060009161216c575b50905060328102908082046032148115171561201057612710612162920490612003565b9038808080612095565b82813d8311612191575b6121808183611d7e565b81010312610ba3575051803861213e565b503d612176565b513d6000823e3d90fd5b6121b9929350803d106108fe576108ed8183611d7e565b90388061210e565b84513d6000823e3d90fd5b90928382813d83116121f4575b6121e38183611d7e565b81010312610ba3575051913861208b565b503d6121d9565b82513d6000823e3d90fd5b9190826040910312610479576020825192015190565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690813b156104795760409182518091632e1a7d4d60e01b82528160246000948580948a60048401525af180156123f3576123e4575b5090807f000000000000000000000000000000000000000000000000000000000000000016803b15610a4d57828591600486518094819363ed99530760e01b83525af18015610ed3579083916123d0575b5050806020602492600754168551938480926370a0823160e01b82523060048301525afa918215610ed357839261239d575b507f00000000000000000000000000000000000000000000000000000000000000001690600554823b156106485790604484928387519586948593631c57762b60e31b8552600485015260248401525af18015610ea057612389575b50507fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39160209151908152a1565b6123938291611d1c565b610ba3578061235b565b9091506020813d82116123c8575b816123b860209383611d7e565b81010312610479575190386122ff565b3d91506123ab565b6123d990611d1c565b6101c95781386122cd565b6123ed90611d1c565b3861227c565b84513d84823e3d90fd5b9190820180921161201057565b604080516370a0823160e01b81523060048201529091906001600160a01b0390836020826024817f000000000000000000000000000000000000000000000000000000000000000087165afa91821561253f57600092612509575b5060055481516393f1a40b60e01b815260048101919091523060248201529283908180604481015b03917f0000000000000000000000000000000000000000000000000000000000000000165afa9182156121c1576124e093946000936124e3575b50506124db906124d5612026565b926123fd565b6123fd565b90565b6124db929350908161250092903d1061087c5761086e8183611d7e565b509190386124c7565b9190506020823d8211612537575b8161252460209383611d7e565b81010312610ba35750518361248d612465565b3d9150612517565b50513d6000823e3d90fd5b1561255157565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b60028054146125945760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfea2646970667358221220ec145ed7d80e16ab1162845768347b180757e98942346794670c61fee81030ff64736f6c63430008120033";

type StargateStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateStrategy__factory extends ContractFactory {
  constructor(...args: StargateStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _ethRouter: PromiseOrValue<string>,
    _lpStaking: PromiseOrValue<string>,
    _stakingPid: PromiseOrValue<BigNumberish>,
    _lpToken: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _stgEthPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _ethRouter,
      _lpStaking,
      _stakingPid,
      _lpToken,
      _swapper,
      _stgEthPool,
      overrides || {}
    ) as Promise<StargateStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _ethRouter: PromiseOrValue<string>,
    _lpStaking: PromiseOrValue<string>,
    _stakingPid: PromiseOrValue<BigNumberish>,
    _lpToken: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _stgEthPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _ethRouter,
      _lpStaking,
      _stakingPid,
      _lpToken,
      _swapper,
      _stgEthPool,
      overrides || {}
    );
  }
  override attach(address: string): StargateStrategy {
    return super.attach(address) as StargateStrategy;
  }
  override connect(signer: Signer): StargateStrategy__factory {
    return super.connect(signer) as StargateStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateStrategyInterface {
    return new utils.Interface(_abi) as StargateStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateStrategy {
    return new Contract(address, _abi, signerOrProvider) as StargateStrategy;
  }
}
