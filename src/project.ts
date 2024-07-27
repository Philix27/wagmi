import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import codec from "./scenes/codec?scene";
import intro from "./scenes/intro?scene";

import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    // Provide a space-separated list of dialects to enable:
    dialect: "jsx ts tsx",
  })
);

export default makeProject({
  scenes: [example, codec, intro],
});
