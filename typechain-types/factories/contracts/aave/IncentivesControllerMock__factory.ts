/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IncentivesControllerMock,
  IncentivesControllerMockInterface,
} from "../../../contracts/aave/IncentivesControllerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "REWARD_TOKEN",
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
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claimRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getRewardsBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
    name: "getUserUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161041538038061041583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610382806100936000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063198fa81e1461005c5780633111e7b31461008b5780638b599f261461009e57806399248ea7146100bd578063fc0c546a146100e2575b600080fd5b61007861006a36600461020b565b5068056bc75e2d6310000090565b6040519081526020015b60405180910390f35b610078610099366004610279565b6100f5565b6100786100ac3660046102d6565b68056bc75e2d631000009392505050565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610082565b6000546100ca906001600160a01b031681565b60008054604051637c928fe960e01b815268056bc75e2d6310000060048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561014457600080fd5b505af1158015610158573d6000803e3d6000fd5b505060005460405163a9059cbb60e01b81526001600160a01b03868116600483015268056bc75e2d631000006024830152909116925063a9059cbb91506044016020604051808303816000875af11580156101b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101db919061032a565b5068056bc75e2d6310000095945050505050565b80356001600160a01b038116811461020657600080fd5b919050565b60006020828403121561021d57600080fd5b610226826101ef565b9392505050565b60008083601f84011261023f57600080fd5b50813567ffffffffffffffff81111561025757600080fd5b6020830191508360208260051b850101111561027257600080fd5b9250929050565b6000806000806060858703121561028f57600080fd5b843567ffffffffffffffff8111156102a657600080fd5b6102b28782880161022d565b909550935050602085013591506102cb604086016101ef565b905092959194509250565b6000806000604084860312156102eb57600080fd5b833567ffffffffffffffff81111561030257600080fd5b61030e8682870161022d565b90945092506103219050602085016101ef565b90509250925092565b60006020828403121561033c57600080fd5b8151801515811461022657600080fdfea264697066735822122060e0bc90d401138400e85b2060f64ad10eb638fd865f245baf60adb5dc880e6664736f6c634300080f0033";

type IncentivesControllerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncentivesControllerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IncentivesControllerMock__factory extends ContractFactory {
  constructor(...args: IncentivesControllerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IncentivesControllerMock> {
    return super.deploy(
      _token,
      overrides || {}
    ) as Promise<IncentivesControllerMock>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): IncentivesControllerMock {
    return super.attach(address) as IncentivesControllerMock;
  }
  override connect(signer: Signer): IncentivesControllerMock__factory {
    return super.connect(signer) as IncentivesControllerMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncentivesControllerMockInterface {
    return new utils.Interface(_abi) as IncentivesControllerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncentivesControllerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IncentivesControllerMock;
  }
}
