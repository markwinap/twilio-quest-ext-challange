const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  animations: {
    objectiveNotCompleted: {
      frames: [0],
      frameRate: 1,
    },
    objectiveCompleted: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 2,
    },
    objectiveCompleting: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 2,
    },
  },
  spriteSheets: {
    stoneGlow: {
      fileName: "stone-glow.png",
      frameDimensions: {
        width: 32,
        height: 96,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "stoneGlow",
      layers: [],
    },
  },
};
