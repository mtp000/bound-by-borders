import { Scene } from "phaser";

export class Catalyst extends Scene {

    constructor ()
    {
        super('Catalyst');
    }

    create ()
    {
        const { width, height } = this.scale; //get canvas height dynamically

        this.add.image(width / 2, height / 2, 'earth').setOrigin(0.5, 0.5);

        // Example: Change scene on pointer down
        this.input.on('pointerdown', () => {
            this.scene.start('GameOver'); // Replace 'NextScene' with the key of the next scene you want to load
        });
    }

    changeScene ()
    {
        this.scene.start('GameOver');
    }

}

