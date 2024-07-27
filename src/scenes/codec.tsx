import { Code, lines, makeScene2D, word } from "@motion-canvas/2d";
import { all, createRef, range, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const nameSignal = Code.createSignal("number");
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

  // insert code at line 2, column 0
  yield* code().code.insert([2, 0], "  return 7;\n", 1);

  // replace the word "Hello!" with "Goodbye!"
  yield* code().code.replace(word(1, 15, 6), "Goodbye!", 1);

  // remove line 2
  yield* code().code.remove(lines(2), 1);

  // animate multiple changes at the same time
  yield* all(
    code().code.replace(word(0, 9, 7), "greet", 1),
    code().code.replace(word(1, 15, 8), "Hello!", 1)
  );

  yield* waitFor(1);
});
