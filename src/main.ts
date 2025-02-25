import Phaser from "phaser";
import "./style.css";
import { scenes } from "./scenes";

new Phaser.Game({
  type: Phaser.AUTO,
  scene: scenes,
  title: "Phaser Game",
  pixelArt: true,

  physics: {
    default: `arcade`,
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
  },
});
