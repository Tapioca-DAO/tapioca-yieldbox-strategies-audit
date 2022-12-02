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
  StEthMock,
  StEthMockInterface,
} from "../../../contracts/lido/StEthMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isStakingPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "submit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x610100604052600a60c0908152692a32b9ba102a37b5b2b760b11b60e0526004906200002c9082620001ab565b50604080518082019091526002815261151560f21b6020820152600590620000559082620001ab565b506006805460ff191660121790553480156200007057600080fd5b506040516200114038038062001140833981016040819052620000939162000277565b4660a08190528190620000f990604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b6080526003555062000291565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200013157607f821691505b6020821081036200015257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001a657600081815260208120601f850160051c81016020861015620001815750805b601f850160051c820191505b81811015620001a2578281556001016200018d565b5050505b505050565b81516001600160401b03811115620001c757620001c762000106565b620001df81620001d884546200011c565b8462000158565b602080601f831160018114620002175760008415620001fe5750858301515b600019600386901b1c1916600185901b178555620001a2565b600085815260208120601f198616915b82811015620002485788860151825594840194600190910190840162000227565b5085821015620002675787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200028a57600080fd5b5051919050565b60805160a051610e89620002b76000396000610a1901526000610a4a0152610e896000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a1903eab11610059578063a1903eab1461027d578063a9059cbb14610290578063d505accf146102b0578063dd62ed3e146102d057600080fd5b806370a08231146101ec5780637c928fe9146102195780637ecebe001461023b57806395d89b411461026857600080fd5b80631ea7ca89116100c65780631ea7ca891461017757806323b872dd1461018b578063313ce567146101ab5780633644e515146101d757600080fd5b806306fdde03146100f8578063095ea7b31461012357806318160ddd1461015357600080fd5b366100f357005b600080fd5b34801561010457600080fd5b5061010d610308565b60405161011a9190610bfe565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004610c4d565b610396565b604051901515815260200161011a565b34801561015f57600080fd5b5061016960035481565b60405190815260200161011a565b34801561018357600080fd5b506000610143565b34801561019757600080fd5b506101436101a6366004610c77565b610402565b3480156101b757600080fd5b506006546101c59060ff1681565b60405160ff909116815260200161011a565b3480156101e357600080fd5b50610169610625565b3480156101f857600080fd5b50610169610207366004610cb3565b60006020819052908152604090205481565b34801561022557600080fd5b50610239610234366004610cd5565b610634565b005b34801561024757600080fd5b50610169610256366004610cb3565b60026020526000908152604090205481565b34801561027457600080fd5b5061010d610641565b61016961028b366004610cb3565b61064e565b34801561029c57600080fd5b506101436102ab366004610c4d565b61066b565b3480156102bc57600080fd5b506102396102cb366004610cee565b6107c2565b3480156102dc57600080fd5b506101696102eb366004610d61565b600160209081526000928352604080842090915290825290205481565b6004805461031590610d94565b80601f016020809104026020016040519081016040528092919081815260200182805461034190610d94565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103f19086815260200190565b60405180910390a350600192915050565b600081156105ce576001600160a01b038416600090815260208190526040902054828110156104715760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b60448201526064015b60405180910390fd5b836001600160a01b0316856001600160a01b0316146105cc576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461053657838110156105075760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606401610468565b6105118482610de4565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166105855760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610468565b61058f8483610de4565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906105c5908490610dfb565b9091555050505b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161061391815260200190565b60405180910390a35060019392505050565b600061062f610a15565b905090565b61063e3382610a6c565b50565b6005805461031590610d94565b600061065934610634565b610663333461066b565b503492915050565b6000811515806106835750336001600160a01b038416145b156107855733600090815260208190526040902054828110156106e15760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b6044820152606401610468565b336001600160a01b03851614610783576001600160a01b0384166107405760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610468565b61074a8382610de4565b33600090815260208190526040808220929092556001600160a01b0386168152908120805485929061077d908490610dfb565b90915550505b505b6040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016103f1565b6001600160a01b0387166108185760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606401610468565b8342106108585760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b6044820152606401610468565b6001600160a01b03871660008181526002602052604081208054600192610902927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d92916108ab83610e13565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120610b38565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610950573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146109b05760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152606401610468565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000004614610a475761062f46610b8d565b507f000000000000000000000000000000000000000000000000000000000000000090565b600081600354610a7c9190610dfb565b9050600354811015610ac05760405162461bcd60e51b815260206004820152600d60248201526c4d696e74206f766572666c6f7760981b6044820152606401610468565b60038190556001600160a01b03831660009081526020819052604081208054849290610aed908490610dfb565b90915550506040518281526001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060405180604001604052806002815260200161190160f01b815250610b5d610a15565b83604051602001610b7093929190610e2c565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610b70565b60005b83811015610be9578181015183820152602001610bd1565b83811115610bf8576000848401525b50505050565b6020815260008251806020840152610c1d816040850160208701610bce565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610c4857600080fd5b919050565b60008060408385031215610c6057600080fd5b610c6983610c31565b946020939093013593505050565b600080600060608486031215610c8c57600080fd5b610c9584610c31565b9250610ca360208501610c31565b9150604084013590509250925092565b600060208284031215610cc557600080fd5b610cce82610c31565b9392505050565b600060208284031215610ce757600080fd5b5035919050565b600080600080600080600060e0888a031215610d0957600080fd5b610d1288610c31565b9650610d2060208901610c31565b95506040880135945060608801359350608088013560ff81168114610d4457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610d7457600080fd5b610d7d83610c31565b9150610d8b60208401610c31565b90509250929050565b600181811c90821680610da857607f821691505b602082108103610dc857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610df657610df6610dce565b500390565b60008219821115610e0e57610e0e610dce565b500190565b600060018201610e2557610e25610dce565b5060010190565b60008451610e3e818460208901610bce565b9190910192835250602082015260400191905056fea2646970667358221220cc09c819a8102ac623285f82131d919413525dd9f7c2f8b7fc5103377c7e0d1c64736f6c634300080f0033";

type StEthMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StEthMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StEthMock__factory extends ContractFactory {
  constructor(...args: StEthMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StEthMock> {
    return super.deploy(initialSupply, overrides || {}) as Promise<StEthMock>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): StEthMock {
    return super.attach(address) as StEthMock;
  }
  override connect(signer: Signer): StEthMock__factory {
    return super.connect(signer) as StEthMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StEthMockInterface {
    return new utils.Interface(_abi) as StEthMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StEthMock {
    return new Contract(address, _abi, signerOrProvider) as StEthMock;
  }
}