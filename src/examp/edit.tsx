import { makeScene2D, Code, replace, insert, remove } from "@motion-canvas/2d";
import { createRef, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(<Code ref={code} fontSize={28} offsetX={-1} x={-400} />);

  yield* code().code.edit(0.6)`\
function example() {
  ${insert(`// This is a comment
  `)}console.log("${replace("Hello!", "Goodbye!")}");
${remove(`  return 7;
`)}}`;

  yield* waitFor(0.6);
});
