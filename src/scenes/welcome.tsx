import { Code, Layout, makeScene2D, Node, Txt } from "@motion-canvas/2d";
import { all, createRef, waitFor, waitUntil } from "@motion-canvas/core";
import { PlainCode } from "../nodes";
import { RowItem } from "./comps/Row";

export default makeScene2D(function* (view) {
  const titleText = createRef<Layout>();
  const smartContractEth = createRef<Layout>();
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
          Introduction to Solidity
        </Txt>
      </Layout>
      <Layout
        ref={smartContractEth}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        opacity={0}
      >
        <RowItem title="Smart contract" subtitle="Ethereum Blockchain" />
      </Layout>
      <Node ref={codeContent} opacity={0}>
        <PlainCode
          fontSize={32}
          fill={"white"}
          ref={code}
          code={`
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
`}
        />
      </Node>
    </>
  );

  yield* waitFor(1);
  yield* titleText().position.x(-2000, 0.3).to(0, 1);
  yield* waitUntil("intro");
  yield* titleText().opacity(0, 0.5);
  yield* smartContractEth().opacity(1, 0.3).wait(2).to(0, 1);
  yield* waitUntil("smartContract");
  yield* codeContent().opacity(1, 0.3);
});
