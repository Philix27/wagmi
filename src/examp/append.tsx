import { makeScene2D, Code } from "@motion-canvas/2d";
import { createRef, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(<Code ref={code} fontSize={28} offsetX={-1} x={-400} />);

  // append immediately
  code().code.append(`const one = 1;`);

  // animate using the signal signature
  yield* code().code.append("\nconst two = 2;", 0.6);

  // animate using the template tag signature
  yield* code().code.append(0.6)`
const three = 3;`;

  // prepend works analogically
  yield* code().code.prepend("// example\n", 0.6);

  yield* waitFor(0.6);
});
