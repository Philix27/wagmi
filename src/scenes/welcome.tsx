import {
  Circle,
  Layout,
  makeScene2D,
  Rect,
  Node,
  Txt,
} from "@motion-canvas/2d";
import { all, createRef, range, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const titleText = createRef<Layout>();
  const identifyAccount = createRef<Layout>();
  const walletAddress = createRef<Layout>();
  const typesOfAddress = createRef<Layout>();
  const declareAddress = createRef<Layout>();

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
        <Txt fontSize={60} fill={"white"}>
          20-byte values
        </Txt>
        <Txt fontSize={30} fill={"white"}>
          uniquely identify accounts and smart contracts
        </Txt>
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
        <Layout layout direction={"column"} width={"100%"}>
          <Txt fontSize={50} fill={"white"}>
            Address
          </Txt>
          <Txt fontSize={30} fill={"white"}>
            Smart contract address without the receive fallback function
          </Txt>
        </Layout>
        <Layout layout marginTop={50} direction={"column"} width={"100%"}>
          <Txt fontSize={50} fill={"white"}>
            Address Payable
          </Txt>
          <Txt fontSize={30} fill={"white"}>
            Accepts crypto currencies and token. Both Wallet and Smart contract
          </Txt>
        </Layout>
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
    </>
  );

  //   yield* waitFor(1);
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

  //   yield* walletAddress().opacity(1, 0.3).to(0.7, 1);
  //   yield* waitFor(2);
  //   yield* identifyAccount().opacity(0, 0.5);

  //   yield* all(
  //     titleText().position.x(700, 1).to(0, 1)
  //     // myRect().position.x(700, 2).to(-700, 10),
  //     // myRect().position.y(0, 1).to(500, 1),
  //     // myCircle().fill("#e6a700", 1).to("#32e1a1", 1).to("#f367e7", 1)
  //   );
});
