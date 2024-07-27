import { Code, Rect, makeScene2D } from "@motion-canvas/2d";
import { createRef, createSignal } from "@motion-canvas/core";

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

  const range = createSignal(() => {
    const range = code().findFirstRange("log");
    const bboxes = code().getSelectionBBox(range);
    // "getSelectionBBox" returns an array of bboxes,
    // one for each line in the range. You can just
    // use the first one for this example.
    const first = bboxes[0];
    return first.expand([4, 8]);
  });

  code().add(
    <Rect
      offset={-1}
      position={range().position}
      size={range().size}
      lineWidth={4}
      stroke={"white"}
      radius={8}
    />
  );
});
