class M1911 extends Pistol{

    constructor(xPos, yPos){
        super();
        this.startingIn = 8; //mag size/starting ammo
        this.startingOut = 120;
        this.reloadTime = 800;
        this.damage = 20;
        this.bulletVelocity = 8;
        this.name = "M1911";
        this.textSize = 45;
        this.yDisplacement = 40;
        this.img = loadImage('images/m1911(1).png');
        this.imgl = 52;
        this.imgw = 30;
        this.cost = 500;
        this.ammoCost = 500;
        this.damageDecreaseConstant = 5;

        this.gunIndex = 0;
    }

    play_bullet_sound() {
        // Play sound
        const audio = new Audio('./sounds/guns/M1911_bullet.mp3')
        audio.volume = 0.5
        audio.play()
    }

    play_reload_sound() {
        // Play sound
        const audio = new Audio('./sounds/guns/gun_reload.mp3')
        audio.volume = 0.5
        audio.play()
    }
}
