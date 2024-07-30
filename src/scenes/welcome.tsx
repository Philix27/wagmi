import { Code, Layout, makeScene2D, Node, Txt } from "@motion-canvas/2d";
import {
  all,
  createComputed,
  createRef,
  createSignal,
  easeInOutExpo,
  linear,
  loop,
  map,
  range,
  spawn,
  Vector2,
  waitFor,
} from "@motion-canvas/core";
import { PlainCode } from "../nodes";
import { CodeColors } from "../styles";
import { RowItem } from "./comps/Row";

export default makeScene2D(function* (view) {
  const titleText = createRef<Layout>();
  const identifyAccount = createRef<Layout>();
  const walletAddress = createRef<Layout>();
  const typesOfAddress = createRef<Layout>();
  const declareAddress = createRef<Layout>();
  const commonMethods = createRef<Layout>();
  const codeContent = createRef<Node>();
  const code = createRef<Code>();

  view.add(
    <>
      <Layout
        ref={titleText}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        x={-2000}
      >
        <Txt fontSize={100} fill={"white"}>
          Address
        </Txt>
        <Txt fontSize={40} fill={"white"}>
          in Solidity
        </Txt>
      </Layout>
      <Layout
        ref={identifyAccount}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
      >
        <RowItem
          title="20-byte values"
          subtitle="uniquely identify accounts and smart contracts"
        />
      </Layout>
      <Layout
        ref={walletAddress}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
        scale={1}
      >
        <Txt fontSize={40} fill={"white"}>
          0x20F50b8832f87104853df3FdDA47Dd464f885a49
        </Txt>
      </Layout>
      <Layout
        ref={typesOfAddress}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
        scale={1}
      >
        <Txt fontSize={80} fill={"white"} marginBottom={70}>
          Types of Address
        </Txt>
        <RowItem
          title={"Address"}
          subtitle={
            "Smart contract address without the receive fallback function"
          }
        />
        <RowItem
          title={"Address Payable"}
          subtitle={
            "Accepts crypto currencies and token. Both Wallet and Smart contract"
          }
        />
      </Layout>
      <Layout
        ref={declareAddress}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
        scale={1}
      >
        <Txt fontSize={80} fill={"white"} marginBottom={70}>
          address public myAddress;
        </Txt>
      </Layout>
      <Layout
        ref={commonMethods}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
        scale={1}
      >
        <Txt fontSize={80} fill={"white"} marginBottom={70}>
          Common methods
        </Txt>
        <RowItem
          title={"balance"}
          subtitle={"Returns the balance of the address in Wei."}
        />
        <RowItem
          title={"transfer"}
          subtitle={"Sends a specified amount of Wei to the address."}
        />
        <RowItem
          title={"send"}
          subtitle={
            "Similar to transfer, but returns a boolean indicating success."
          }
        />
        <RowItem
          title={"call"}
          subtitle={"Low-level function for calling other contracts."}
        />
      </Layout>

      <Node ref={codeContent} opacity={0}>
        <PlainCode
          fontSize={32}
          fill={"white"}
          ref={code}
          code={`
contract AddressExample {
   
}   
`}
        />
      </Node>
    </>
  );

  yield* waitFor(1);
  yield* titleText().position.x(-2000, 0.3).to(0, 1);
  yield* waitFor(2);
  yield* titleText().opacity(0, 0.5);
  yield* identifyAccount().opacity(1, 0.3).wait(2).to(0, 1);
  yield* all(
    walletAddress().scale(1.5, 1).to(1, 1),
    walletAddress().opacity(1, 0.3).wait(2).to(0, 1)
  );
  yield* typesOfAddress().opacity(1, 0.3).wait(2).to(0, 1);
  yield* declareAddress().opacity(1, 0.3).wait(2).to(0, 1);
  yield* commonMethods().opacity(1, 0.3).wait(2).to(0, 1);
  yield* codeContent().opacity(1, 0.3);
  yield* waitFor(2);
  yield* code()
    .code(
      `
contract AddressExample {
    address public myAddress;   
}
  `,
      0.7
    )
    .wait(2);
  yield* code()
    .code(
      `
contract AddressExample {
    address public myAddress;

    function setMyAddress(address _address) public {
        myAddress = _address;
    }

   
}
  `,
      0.7
    )
    .wait(2);

  yield* code()
    .code(
      `
contract AddressExample {
    address public myAddress;

    function setMyAddress(address _address) public {
        myAddress = _address;
    }

    function getBalance() public view returns (uint) {
        return myAddress.balance;
    }

}
  `,
      0.7
    )
    .wait(2);

  yield* code()
    .code(
      `
contract AddressExample {
    address public myAddress;

    function setMyAddress(address _address) public {
        myAddress = _address;
    }

    function getBalance() public view returns (uint) {
        return myAddress.balance;
    }

    function transferEther(address payable _to, uint _amount) public {
        _to.transfer(_amount);
    }

}
  `,
      0.7
    )
    .wait(2);
  //   yield* codeContent().opacity(1, 0.3).wait(3).to(0.7, 1);

  //   yield* codeContent().opacity(1, 0.3).wait(3).to(0.7, 1);
});
