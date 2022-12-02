/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  YearnStrategy,
  YearnStrategyInterface,
} from "../../../contracts/yearn/YearnStrategy";

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
        name: "_vault",
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
    stateMutability: "pure",
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
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IYearnVault",
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
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200181f3803806200181f833981016040819052620000359162000143565b6001600160a01b03808416608052821660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0382811660c081905290821660e081905260405163095ea7b360e01b81526004810191909152600019602482015263095ea7b390604401602060405180830381600087803b158015620000e557600080fd5b505af1158015620000fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000120919062000197565b50505050620001c2565b6001600160a01b03811681146200014057600080fd5b50565b6000806000606084860312156200015957600080fd5b835162000166816200012a565b602085015190935062000179816200012a565b60408501519092506200018c816200012a565b809150509250925092565b600060208284031215620001aa57600080fd5b81518015158114620001bb57600080fd5b9392505050565b60805160a05160c05160e0516115ba62000265600039600081816102ec0152818161063f015281816106e701528181610808015281816108880152818161091d01528181610b4701528181610d5001528181610de60152610ec401526000818161028b015281816109ee01528181610a9d01528181610cc00152610f65015260006102c501526000818161025101528181610588015261077c01526115ba6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b8578063e30c39781161007c578063e30c397814610273578063e3575f05146101ed578063eb6d3a1114610286578063f3fef3a3146102ad578063f6b4dfb4146102c0578063fbfa77cf146102e757600080fd5b80638da5cb5b14610206578063afa91cc614610231578063ce845d1d146101ed578063db2e21bc14610244578063de4065771461024c57600080fd5b806348dcb0511161010a57806348dcb051146101cb5780634cce992d146101d25780634e71e0c8146101e557806350188301146101ed5780637284e416146101f5578063734daaa1146101fd57600080fd5b806306fdde0314610147578063078dfbe71461017a57806317d70f7c1461018f57806322a58c5d146101a557806330fa738c146101b6575b600080fd5b6040805180820190915260058152642cb2b0b93760d91b60208201525b604051610171919061117e565b60405180910390f35b61018d6101883660046111db565b61030e565b005b610197600081565b604051908152602001610171565b61018d6101b336600461123a565b50565b6101be600181565b60405161017191906112eb565b6000610197565b61018d6101e0366004611313565b610426565b61018d610491565b61019761054e565b61016461055d565b61019760035481565b600054610219906001600160a01b031681565b6040516001600160a01b039091168152602001610171565b61018d61023f366004611313565b61057d565b6101976105ed565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b600154610219906001600160a01b031681565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b61018d6102bb36600461132c565b610771565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031633146103415760405162461bcd60e51b815260040161033890611356565b60405180910390fd5b8115610404576001600160a01b03831615158061035b5750805b61039f5760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606401610338565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0385166001600160a01b0319909116179055505050565b6000546001600160a01b031633146104505760405162461bcd60e51b815260040161033890611356565b60035460408051918252602082018390527f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc910160405180910390a1600355565b6001546001600160a01b03163381146104ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610338565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b60006105586107e6565b905090565b606060405180606001604052806028815260200161155d60289139905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105e45760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610338565b6101b381610a7d565b600080546001600160a01b031633146106185760405162461bcd60e51b815260040161033890611356565b6040805160208101909152600090526040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561068957600080fd5b505afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c1919061138b565b604051631cc6d2f960e31b815260048101829052306024820152600060448201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e63697c890606401602060405180830381600087803b15801561073357600080fd5b505af1158015610747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076b919061138b565b91505090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107d85760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610338565b6107e28282610c44565b5050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561084a57600080fd5b505afa15801561085e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610882919061138b565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b1580156108df57600080fd5b505afa1580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610917919061138b565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561097457600080fd5b505afa158015610988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ac919061138b565b6109b790600a6114a0565b6109c183856114b3565b6109cb91906114d2565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b158015610a3057600080fd5b505afa158015610a44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a68919061138b565b9050610a7482826114f4565b94505050505090565b610a85610fdb565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015610ae757600080fd5b505afa158015610afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1f919061138b565b9050600354811115610c0557604051636e553f6560e01b8152600481018290523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f6590604401602060405180830381600087803b158015610b9357600080fd5b505af1158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb919061138b565b506040518181527fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39060200160405180910390a150610c3a565b6040518281527f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca9060200160405180910390a1505b6101b36001600255565b610c4c610fdb565b6000610c566107e6565b905081811015610ca85760405162461bcd60e51b815260206004820152601f60248201527f596561726e53747261746567793a20616d6f756e74206e6f742076616c6964006044820152606401610338565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015610d0a57600080fd5b505afa158015610d1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d42919061138b565b905080831115610f4c5760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015610da757600080fd5b505afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf919061138b565b90506000817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610e3d57600080fd5b505afa158015610e51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e75919061138b565b610e8090600a6114a0565b610e8a858861150c565b610e9491906114b3565b610e9e91906114d2565b604051631cc6d2f960e31b815260048101829052306024820152600060448201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e63697c890606401602060405180830381600087803b158015610f1057600080fd5b505af1158015610f24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f48919061138b565b5050505b610f8c84610f5b60018661150c565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611033565b836001600160a01b03167f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d884604051610fc791815260200190565b60405180910390a250506107e26001600255565b60028054141561102d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610338565b60028055565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161108f9190611523565b6000604051808303816000865af19150503d80600081146110cc576040519150601f19603f3d011682016040523d82523d6000602084013e6110d1565b606091505b50915091508180156110fb5750805115806110fb5750808060200190518101906110fb919061153f565b6111475760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610338565b5050505050565b60005b83811015611169578181015183820152602001611151565b83811115611178576000848401525b50505050565b602081526000825180602084015261119d81604085016020870161114e565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146111c857600080fd5b919050565b80151581146101b357600080fd5b6000806000606084860312156111f057600080fd5b6111f9846111b1565b92506020840135611209816111cd565b91506040840135611219816111cd565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561124c57600080fd5b813567ffffffffffffffff8082111561126457600080fd5b818401915084601f83011261127857600080fd5b81358181111561128a5761128a611224565b604051601f8201601f19908116603f011681019083821181831017156112b2576112b2611224565b816040528281528760208487010111156112cb57600080fd5b826020860160208301376000928101602001929092525095945050505050565b602081016005831061130d57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561132557600080fd5b5035919050565b6000806040838503121561133f57600080fd5b611348836111b1565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006020828403121561139d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156113f55781600019048211156113db576113db6113a4565b808516156113e857918102915b93841c93908002906113bf565b509250929050565b60008261140c5750600161149a565b816114195750600061149a565b816001811461142f576002811461143957611455565b600191505061149a565b60ff84111561144a5761144a6113a4565b50506001821b61149a565b5060208310610133831016604e8410600b8410161715611478575081810a61149a565b61148283836113ba565b8060001904821115611496576114966113a4565b0290505b92915050565b60006114ac83836113fd565b9392505050565b60008160001904831182151516156114cd576114cd6113a4565b500290565b6000826114ef57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611507576115076113a4565b500190565b60008282101561151e5761151e6113a4565b500390565b6000825161153581846020870161114e565b9190910192915050565b60006020828403121561155157600080fd5b81516114ac816111cd56fe596561726e20737472617465677920666f722077726170706564206e617469766520617373657473a26469706673582212200dc6c9917fd1658af0b1891db47493f6eec13da257d9a1d4fc24cfc17f3e87ae64736f6c63430008090033";

type YearnStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnStrategy__factory extends ContractFactory {
  constructor(...args: YearnStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YearnStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _vault,
      overrides || {}
    ) as Promise<YearnStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _vault,
      overrides || {}
    );
  }
  override attach(address: string): YearnStrategy {
    return super.attach(address) as YearnStrategy;
  }
  override connect(signer: Signer): YearnStrategy__factory {
    return super.connect(signer) as YearnStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnStrategyInterface {
    return new utils.Interface(_abi) as YearnStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnStrategy {
    return new Contract(address, _abi, signerOrProvider) as YearnStrategy;
  }
}