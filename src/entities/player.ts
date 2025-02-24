import { Entity } from "./entity";

export class Player extends Entity {
  textureKey: string;
  private moveSpeed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture, "Player");
    const anims = this.scene.anims;
    this.textureKey = texture;
    this.moveSpeed = 12;

    anims.create({
      key: "go",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 22,
        end: 30,
      }),
      frameRate: 7,
      repeat: 1,
    });

    anims.create({
      key: "run",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 44,
        end: 49,
      }),
      frameRate: 7,
      repeat: 1,
    });

    anims.create({
      key: "eat",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 11,
        end: 18,
      }),
      frameRate: 7,
      repeat: -1,
    });
  }

  update(delta: number) {
    const key = this.scene.input.keyboard?.createCursorKeys();
    if (key?.left.isDown && !key?.shift.isDown) {
      this.play("go", true);
      this.setVelocity(-delta * this.moveSpeed, 0);
      this.setFlipX(true);
    } else if (key?.right.isDown && !key?.shift.isDown) {
      this.play("go", true);
      this.setFlipX(false);
      this.setVelocity(delta * this.moveSpeed, 0);
    } else if (key?.left.isDown && key?.shift.isDown) {
      this.play("run", true);
      this.setVelocity(-delta * this.moveSpeed*2, 0);
      this.setFlipX(true);
    } else if (key?.right.isDown && key?.shift.isDown) {
      this.play("run", true);
      this.setFlipX(false);
      this.setVelocity(delta * this.moveSpeed*2, 0);
    } else if (
      key?.space.isDown &&
      !key?.left.isDown &&
      !key?.right.isDown &&
      !key?.shift.isDown
    ) {
      this.setVelocity(0, 0);
      this.play("eat", true);
    } else {
      this.stop();
      this.setVelocity(0, 0);
    }
  }
}
