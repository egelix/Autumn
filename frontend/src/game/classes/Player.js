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
        this.width= 20;
        this.height = 20;
        this.speed = 5;
        this.jumpSpeed = {
            acceleration: 1,
            max: 20,
            initial: 5,
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
    }
    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw();
        this.applyHorizontalMovement();
        this.applyGravity();
        this.collisionHandler.checkScoreBlockCollision();
        this.collisionHandler.checkForVerticalCollisions();
    }
    applyGravity() {
        this.position.y += this.velocity.y;
        if(this.canJump && this.hasPressedJump) {
            this.jump();
            return;
        }
        this.velocity.y += this.gravity;
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