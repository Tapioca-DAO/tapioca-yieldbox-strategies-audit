/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  YieldBoxURIBuilder,
  YieldBoxURIBuilderInterface,
} from "../../../../../../tapioca-sdk/dist/contracts/YieldBox/contracts/YieldBoxURIBuilder";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "uint8",
        name: "nativeDecimals",
        type: "uint8",
      },
    ],
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
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeName",
        type: "string",
      },
    ],
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
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeSymbol",
        type: "string",
      },
    ],
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
    inputs: [
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct NativeToken",
        name: "nativeToken",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x6080806040523461001657611479908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c9182635c6d84351461005c57505080636d7cd0371461005757806384b1017d146100525763aa1163b91461004d57600080fd5b6106a2565b61067c565b6105ed565b3461055a5760e036600319011261055a576100763661055e565b9160843567ffffffffffffffff811161055a57610097903690600401610574565b9260c4356100a481610582565b6100ac6111a8565b9460036100b8846106e9565b6100c1816106c9565b0361048e57506100cf61125e565b85526101376101526100fd6100f86100ec6100ec602088016106bc565b6001600160a01b031690565b610f0e565b61014461010d6060870135610d3f565b6101318951958694610131602087016008906722a92198989a9a9d60c11b81520190565b90610804565b602f60f81b815260010190565b03601f19810183528261072d565b602086015261015f61125e565b848601525b61016d826106e9565b610176816106c9565b1561040a57506101c46101d16101976100f86100ec6100ec602087016106bc565b85517016113a37b5b2b720b2323932b9b9911d1160791b6020820152928391610144919060318401610131565b601160f91b815260010190565b602085015192848601519560036101e7856106e9565b6101f0816106c9565b036103fc576101fd610ac7565b935b600361020a826106e9565b610213816106c9565b036103e957610220610ac7565b905b600361023b6100f86100ec6100ec6100ec8d87016106bc565b935194610247836106e9565b90610251826106c9565b50036103da5761028c61026a6060610144930135610d3f565b89516a16113a37b5b2b724b2111d60a91b6020820152928391602b8301610131565b945b8751683d913730b6b2911d1160b91b6020820152988997602989016102b291610804565b6b11161139bcb6b137b6111d1160a11b8152600c016102d091610804565b601160f91b81526001016102e391610804565b6102ec91610804565b7f2c2270726f70657274696573223a7b227374726174656779223a2200000000008152601b0161031b91610804565b6e1116113a37b5b2b72a3cb832911d1160891b8152600f0161033c91610804565b601160f91b815260010161034f91610804565b61035891610804565b617d7d60f01b81526002010391601f19928381018252610378908261072d565b6103819061135a565b81517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000602082015292908390603d82016103ba91610804565b0390810183526103ca908361072d565b516103d68192826105b6565b0390f35b506103e3610ac7565b9461028e565b6103f66060830151610d3f565b90610222565b6104046112c2565b936101ff565b61047961045e9161041c60a435610d3f565b906001600160a01b031661047e576101446104356112a2565b87516e16113a37ba30b629bab838363c911d60891b60208201529485936101319190602f860183565b6e16113334bc32b229bab838363c911d60891b8152600f0190565b6101d1565b610144610489611281565b610435565b600161049c849793976106e9565b6104a5816106c9565b036105025750506104bb6100ec602083016106bc565b60ff6104c682610b3a565b916104d96104d3826110b7565b91611139565b906104e261074f565b936104eb61123d565b855260208501528684015216606082015293610164565b61054a85610550926105159894986111de565b895261052b6105248280611200565b369161081b565b60208a01526105406105246020830183611200565b828a015201611233565b60ff1690565b6060860152610164565b5080fd5b608090600319011261056f57600490565b600080fd5b9081608091031261056f5790565b6001600160a01b0381160361056f57565b60005b8381106105a65750506000910152565b8181015183820152602001610596565b604091602082526105d68151809281602086015260208686019101610593565b601f01601f1916010190565b60ff81160361056f57565b3461056f5760a036600319011261056f57602061061e61060c3661055e565b60843590610619826105e2565b6110da565b60ff60405191168152f35b600319810160a0811261056f5760801361056f5760049160843567ffffffffffffffff9283821161056f578060238301121561056f578185013593841161056f576024848301011161056f576024019190565b3461056f576103d661069661069036610629565b91610f94565b604051918291826105b6565b3461056f576103d66106966106b636610629565b91610852565b356106c681610582565b90565b600511156106d357565b634e487b7160e01b600052602160045260246000fd5b35600581101561056f5790565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761072857604052565b6106f6565b90601f8019910116810190811067ffffffffffffffff82111761072857604052565b604051906080820182811067ffffffffffffffff82111761072857604052565b67ffffffffffffffff811161072857601f01601f191660200190565b60208183031261056f5780519067ffffffffffffffff821161056f570181601f8201121561056f5780516107be8161076f565b926107cc604051948561072d565b8184526020828401011161056f576106c69160208085019101610593565b6040513d6000823e3d90fd5b908092918237016000815290565b9061081760209282815194859201610593565b0190565b9291926108278261076f565b91610835604051938461072d565b82948184528183011161056f578281602093846000960137010152565b60409290838101906001600160a01b0361086b836106bc565b1661087e5750506106c69250369161081b565b91600161088d849593956106e9565b610896816106c9565b036109515750509060006108c66100ec6108c06108bb6100ec602060049998016106bc565b610b3a565b936106bc565b83516306fdde0360e01b815294859182905afa91821561094c576109186106c6936101449261090a96600092610925575b5061013190519687956020870190610804565b61040560f31b815260020190565b602960f81b815260010190565b6109459061013192933d8091833e61093d818361072d565b81019061078b565b91906108f7565b6107ea565b600361095c846106e9565b610965816106c9565b03610a4d5750509061013760006109de6100ec856109c56109a160606109996100f86100ec6100ec602060049f9e016106bc565b930135610d3f565b6101318951978894610131602087016008906722a92198989a9a9d60c11b81520190565b03946109d9601f199687810187528661072d565b6106bc565b84516306fdde0360e01b815295869182905afa92831561094c576109186106c694610a229261090a97600092610a2e575b5061013190519788956020870190610804565b0390810183528261072d565b610a469061013192933d8091833e61093d818361072d565b9190610a0f565b9150926000610a606100ec6004956106bc565b82516306fdde0360e01b815294859182905afa92831561094c576106c6936101449261091892600092610aa4575b5061090a610131915197889660208801916107f6565b610abf61090a9161013193943d8091833e61093d818361072d565b929150610a8e565b604051906020820182811067ffffffffffffffff8211176107285760405260008252565b3d15610b16573d90610afc8261076f565b91610b0a604051938461072d565b82523d6000602084013e565b606090565b60405190610b288261070c565b60038252623f3f3f60e81b6020830152565b6000809160405160208101906306fdde0360e01b825260048152610b5d8161070c565b51916001600160a01b03165afa610b72610aeb565b9015610b81576106c690610c41565b506106c6610b1b565b634e487b7160e01b600052603260045260246000fd5b908151811015610bb1570160200190565b610b8a565b634e487b7160e01b600052601160045260246000fd5b60ff1660ff8114610bdd5760010190565b610bb6565b604051906060820182811067ffffffffffffffff82111761072857604052602a8252604082602036910137565b90610c198261076f565b610c26604051918261072d565b8281528092610c37601f199161076f565b0190602036910137565b805160408110610c5f5750806020806106c69351830101910161078b565b602092908303610d34576000805b60ff81168581109081610d12575b5015610c8f57610c8a90610bcc565b610c6d565b92610c9d60ff809516610c0f565b92825b85811687811080610cf3575b15610ce8579081610cdd610cd4610cc6610ce39588610ba0565b516001600160f81b03191690565b871a9188610ba0565b53610bcc565b610ca0565b505094505050905090565b506001600160f81b0319610d0a610cc68387610ba0565b161515610cac565b6001600160f81b03199150610d2b90610cc69087610ba0565b16151538610c7b565b9150506106c6610b1b565b806000917a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000080821015610e74575b506d04ee2d6d415b85acef810000000080831015610e65575b50662386f26fc1000080831015610e56575b506305f5e10080831015610e47575b5061271080831015610e38575b506064821015610e28575b600a80921015610e1e575b600190816021610dd6828701610c0f565b95860101905b610de8575b5050505090565b600019019083906f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304918215610e1957919082610ddc565b610de1565b9160010191610dc5565b9190606460029104910191610dba565b60049193920491019138610daf565b60089193920491019138610da2565b60109193920491019138610d93565b60209193920491019138610d81565b604093508104915038610d68565b600281901b91906001600160fe1b03811603610bdd57565b9060028201809211610bdd57565b9060208201809211610bdd57565b8015610bdd576000190190565b15610eca57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b610f16610be2565b90815115610bb157603060208301538151600190811015610bb15790607860218401536029915b808311610f5057506106c6915015610ec3565b90600f8116906010821015610bb157610f8d916f181899199a1a9b1b9c1cb0b131b232b360811b901a610f838587610ba0565b5360041c92610eb6565b9190610f3d565b60409290838101906001600160a01b03610fad836106bc565b16610fc05750506106c69250369161081b565b916001610fcf849593956106e9565b610fd8816106c9565b036110025750509060006108c66100ec6108c0610ffd6100ec602060049998016106bc565b6110b7565b909161100f6003916106e9565b611018816106c9565b036110a5575050600061102f6100ec6004936106bc565b83516306fdde0360e01b815292839182905afa801561094c57610918926106c692600092611086575b5051664552433131353560c81b602082015261040560f31b6027820152928391610144919060298401610131565b61109e9061014492933d8091833e61093d818361072d565b9190611058565b90926000610a606100ec6004956106bc565b6000809160405160208101906395d89b4160e01b825260048152610b5d8161070c565b906110e4826106e9565b60058110156106d3576003036110fb575050600090565b6001611106836106e9565b61110f816106c9565b03611134575060206106c691013561112681610582565b6001600160a01b0316611139565b905090565b60008091604051602081019063313ce56760e01b82526004815261115c8161070c565b51916001600160a01b03165afa611171610aeb565b908061119d575b156111975760208180518101031261056f57602001516106c6816105e2565b50601290565b506020815114611178565b604051906080820182811067ffffffffffffffff8211176107285760405260006060838181528160208201528160408201520152565b604051906111eb8261070c565b60068252654e617469766560d01b6020830152565b903590601e198136030182121561056f570180359067ffffffffffffffff821161056f5760200191813603831361056f57565b356106c6816105e2565b6040519061124a8261070c565b6005825264045524332360dc1b6020830152565b6040519061126b8261070c565b60078252664552433131353560c81b6020830152565b6040519061128e8261070c565b600582526466616c736560d81b6020830152565b604051906112af8261070c565b60048252637472756560e01b6020830152565b604051906112cf8261070c565b600c82526b16113232b1b4b6b0b639911d60a11b6020830152565b604051906060820182811067ffffffffffffffff82111761072857604052604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b80511561143a576113696112ea565b6113856113806113798451610e9a565b6003900490565b610e82565b9161139761139284610ea8565b610c0f565b92835280815182019060208501935b8282106113e8575050506003905106806001146113d7576002146113c8575090565b603d60f81b6000199091015290565b50613d3d60f01b6001199091015290565b9091936004906003809401938451600190603f9082828260121c16880101518553828282600c1c16880101518386015382828260061c16880101516002860153168501015190820153019391906113a6565b506106c6610ac756fea2646970667358221220d45f1fdc46a4d7ab98f23d973584dea3699605f0806b25f1e1c8737fc825543164736f6c63430008120033";

type YieldBoxURIBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldBoxURIBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldBoxURIBuilder__factory extends ContractFactory {
  constructor(...args: YieldBoxURIBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldBoxURIBuilder> {
    return super.deploy(overrides || {}) as Promise<YieldBoxURIBuilder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YieldBoxURIBuilder {
    return super.attach(address) as YieldBoxURIBuilder;
  }
  override connect(signer: Signer): YieldBoxURIBuilder__factory {
    return super.connect(signer) as YieldBoxURIBuilder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldBoxURIBuilderInterface {
    return new utils.Interface(_abi) as YieldBoxURIBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldBoxURIBuilder {
    return new Contract(address, _abi, signerOrProvider) as YieldBoxURIBuilder;
  }
}