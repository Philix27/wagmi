import { makeScene2D, Code, lines } from "@motion-canvas/2d";
import { createRef, DEFAULT, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={28}
      offsetX={-1}
      x={-400}
      code={`\
function hello() {
  console.log('Hello');
}`}
    />
  );

  // select all instances of "hello" (case-insensitive)
  yield* code().selection(code().findAllRanges(/hello/gi), 0.6);
  yield* waitFor(0.3);

  // select line 1
  yield* code().selection(lines(1), 0.6);
  yield* waitFor(0.3);

  // reset the selection
  yield* code().selection(DEFAULT, 0.6);
  yield* waitFor(0.3);
});
