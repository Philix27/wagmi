import { makeScene2D, Code } from "@motion-canvas/2d";
import { createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={28}
      offsetX={-1}
      x={-400}
      code={`\
function example() {
  const number = 9;
}`}
    />
  );

  yield* code().code("const nine = 9;", 0.6).wait(0.6).back(0.6).wait(0.6);
});
