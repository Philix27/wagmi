import {
  Circle,
  Code,
  Layout,
  makeScene2D,
  Node,
  Txt,
} from "@motion-canvas/2d";
import {
  createRef,
  Direction,
  slideTransition,
  waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const titleText = createRef<Layout>();
  const smartContractText = createRef<Layout>();
  const introText = createRef<Txt>();
  const smartContractEth = createRef<Layout>();
  const codeContent = createRef<Node>();
  const code = createRef<Code>();
  const circle = createRef<Circle>();
  const circle2 = createRef<Circle>();

  view.add(
    <>
      <Layout
        ref={titleText}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        // opacity={0}
        // x={-2000}
      >
        <Txt fontSize={50} fill={"white"} ref={introText}>
          Introduction to Solidity
        </Txt>
      </Layout>
      <Layout
        ref={smartContractEth}
        layout
        gap={20}
        alignItems={"center"}
        direction={"column"}
        // opacity={0}
      ></Layout>
      <Node ref={codeContent}></Node>
      <Circle opacity={0} ref={circle} x={-400} size={240} fill={"#e13238"} />,
      <Circle opacity={0} ref={circle2} x={-400} size={240} fill={"#32E1A1"} />,
    </>
  );

  yield* waitFor(1);
  yield* titleText().opacity(1, 0.2).wait(2);
  // yield* waitUntil("intro");
  yield* introText().opacity(0, 0.5);
  yield* smartContractText().opacity(1, 0.5).wait(2);
  yield* smartContractText().opacity(0, 0.5);

  // yield* smartContractEth().opacity(1, 0.3).wait(2);
  // yield* waitUntil("sc");
  // yield* codeContent().opacity(1, useDuration("evn")).wait(3);
  // yield* code().size(1).opacity(1, 0.3);
  // yield* waitUntil("codeContent");

  yield* slideTransition(Direction.Left);

  // proceed with the animation
  yield* waitFor(3);

  // yield* all(
  //   titleText().opacity(1, 0.2).to(0, 0.5).wait(2),
  //   smartContractEth().opacity(1, 0.3).to(0, 1).wait(2),
  //   codeContent().opacity(1, 1).wait(2),
  //   code().size(1).opacity(1, 0.3),
  //   spring(PlopSpring, -400, 400, 1, (value) => {
  //     circle().opacity(1).position.x(value);
  //   }),
  //   spring(SmoothSpring, 400, -400, (value) => {
  //     circle2().opacity(1).position.x(value);
  //   })
  // );
});
