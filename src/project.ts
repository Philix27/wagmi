import { makeProject } from "@motion-canvas/core";
import codec from "./scenes/codec?scene";

import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";
import welcome from "./scenes/welcome?scene";
import audio from "./audio/voice.mp3";

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    // Provide a space-separated list of dialects to enable:
    dialect: "jsx ts tsx",
  })
);

export default makeProject({
  experimentalFeatures: true,
  scenes: [welcome, codec],
  audio: audio,
});
