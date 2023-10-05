import GAME_SETTINGS from "../constants/GameSettings";
import CollisionHandler from "./CollisionHandler";

class Player {
    constructor({position, context, playerCharacter, game}) {
        this.name = playerCharacter.name;
        this.position = position;
        this.context = context;
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.width= GAME_SETTINGS.BLOCK_SIZE * playerCharacter.width;
        this.height = GAME_SETTINGS.BLOCK_SIZE * playerCharacter.height;
        this.hitBox = {
            width: GAME_SETTINGS.BLOCK_SIZE * playerCharacter.hitBox.width,
            height: GAME_SETTINGS.BLOCK_SIZE * playerCharacter.hitBox.height,
            position: {
                x: 0,
                y: 0,
            },
        }
        this.margin = {
            x: (this.width - this.hitBox.width) / 2,
            y: this.height - this.hitBox.height,
        }
        this.speed = 15 * GAME_SETTINGS.SPEED_UNIT;
        this.maxFallSpeed = GAME_SETTINGS.MAX_FALL_SPEED;
        this.jumpSpeed = {
            acceleration: 2 * GAME_SETTINGS.SPEED_UNIT,
            max: 40 * GAME_SETTINGS.SPEED_UNIT,
            initial: 8 * GAME_SETTINGS.SPEED_UNIT,
        };
        this.gravity = GAME_SETTINGS.GRAVITY;
        this.collisionHandler = new CollisionHandler({
            player: this,
            game: game,
        })
        this.state = {
            isMovingRight: false,
            isMovingLeft: false,
            isGrounded: false,
        }
        this.score = 0;
        this.hasPressedJump = false;
        this.canJump = false;
        this.jumpFrames = {
            current: 0,
            max: 10,
        }
        this.animations = playerCharacter.animations;
        this.currentImg = new Image();
        this.currentImg.src = playerCharacter.animations["idle"].src;
        this.elapsedFrames = 0;
    }
    loadImg() {
        this.currentImg.src = this.spriteSrc;
    }
    loadAnimations() {
        for(let key in this.animations) {
            const image = new Image();
            image.src = this.animations[key].src;
            this.animations[key].image = image;
        }
        this.switchSprite("idle");
    }
    switchSprite(key) {
        if (this.currentImg === this.animations[key].image) {
            return
        }
        this.currentFrame = 0
        this.image = this.animations[key].image
        this.frameBuffer = this.animations[key].frameBuffer
        this.frameRate = this.animations[key].frameRate
    }
    draw() {
        if (!this.currentImg) {
            return
        } 
        const cropbox = {
        position: {
            x: this.currentFrame * (this.currentImg.width / this.frameRate),
            y: 0,
        },
        width: this.currentImg.width / this.frameRate,
        height: this.currentImg.height,
        }
        this.context.drawImage(
            this.currentImg,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        this.context.fillStyle = 'rgba(255, 0, 255, 0.5)';
        this.context.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height);
    }
    update() {
        this.applyHorizontalMovement();
        this.applyGravity();
        this.updatehitBox();
        this.collisionHandler.checkScoreBlockCollision();
        this.collisionHandler.checkForVerticalCollisions();
        this.collisionHandler.checkPowerUpCollision();
        this.draw();
    }
    updatehitBox() {
        this.hitBox.position.x = this.position.x + this.margin.x;
        this.hitBox.position.y = this.position.y + this.margin.y;
    }
    applyGravity() {
        this.position.y += this.velocity.y;
        if(this.canJump && this.hasPressedJump) {
            this.jump();
            return;
        }
        if(this.velocity.y <= this.maxFallSpeed) {
            this.velocity.y += this.gravity;
        }
    }
    applyHorizontalMovement() {
        if(
            this.state.isMovingRight && 
            ((this.position.x + this.width + this.velocity.x) < GAME_SETTINGS.WIDTH) 
            ) {
            this.velocity.x = this.speed;
        }
        else if(
            this.state.isMovingLeft &&
            ((this.position.x + this.velocity.x) > 0)
            ) {
            this.velocity.x = -this.speed;
        }
        else {
            this.velocity.x = 0;
        }
        this.position.x += this.velocity.x;
        }
    jump() {
        if(this.state.isGrounded) {
            this.jumpFrames.current = 0;
            this.state.isGrounded = false;
            this.velocity.y = -this.jumpSpeed.initial;
            return;
        }
        if(this.velocity.y < this.jumpSpeed.max) {
            this.velocity.y -= this.jumpSpeed.acceleration;
        }
        this.jumpFrames.current++;
        if(this.jumpFrames.current >= this.jumpFrames.max) {
            this.canJump = false;
        }
    }
    
}
export default Player;