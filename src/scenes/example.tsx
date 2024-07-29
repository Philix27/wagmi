import * as An from "@motion-canvas/2d";
import { all, createRef, range } from "@motion-canvas/core";

export default An.makeScene2D(function* (view) {
  const myRect = createRef<An.Rect>();
  const myCircle = createRef<An.Circle>();

  // view.add(
  //   <An.Rect
  //     ref={myRect}
  //     // try changing these properties:
  //     x={-700}
  //     width={140}
  //     height={140}
  //     fill="#e13238"
  //   />
  // );

  view.add(
    <An.Circle
      ref={myCircle}
      // try changing these properties:
      x={-700}
      width={140}
      height={140}
      fill="#3272e1"
    />
  );

  yield* all(
    myCircle().position.x(700, 1).to(-700, 1),
    // myRect().position.x(700, 2).to(-700, 10),
    // myRect().position.y(0, 1).to(500, 1),
    myCircle().fill("#e6a700", 1).to("#32e1a1", 1).to("#f367e7", 1)
  );
});
