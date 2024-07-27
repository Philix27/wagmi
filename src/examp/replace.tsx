import { makeScene2D, Code } from "@motion-canvas/2d";
import { createRef, waitFor } from "@motion-canvas/core";

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
  console.log('Hello!');
}`}
    />
  );

  yield* code().code.replace(
    // find the range of "example" and replace it with "greet"
    code().findFirstRange("example"),
    "greet",
    0.6
  );

  yield* waitFor(0.6);
});
