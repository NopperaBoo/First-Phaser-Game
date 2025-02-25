import { Player } from "../entities/player";

export class Home extends Phaser.Scene {
  private player: Player | undefined;

  constructor() {
    super("Home");
  }

  preload() {
    this.load.image("bcg", "src/assets/bcg.jpg");
    this.load.spritesheet("Player", "src/assets/Horse.png", {
      frameWidth: 80,
      frameHeight: 64,
    });
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const bcg = this.add.sprite(centerX, centerY + 80, "bcg");
    this.player = new Player(this, centerX, 680, "Player");
    this.player.setScale(2);

    this.cameras.main.setBounds(-1920, 0, bcg.width, bcg.height);
    this.physics.world.setBounds(-1920, 0, bcg.width, bcg.height);

    this.cameras.main.startFollow(this.player);
    this.player.setCollideWorldBounds(true);
  }

  update(_: number, delta: number) {
    this.player?.update(delta);
  }
}
