import GAME_SETTINGS from "../constants/GameSettings";
import CollisionHandler from "./CollisionHandler";

class Player {
    constructor({position, context, platforms, scoreBlock}) {
        this.position = position;
        this.context = context;
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.width= 20;
        this.height = 20;
        this.speed = 5;
        this.jumpSpeed = 20;
        this.gravity = GAME_SETTINGS.GRAVITY;
        this.collisionHandler = new CollisionHandler({
            player: this,
            platforms: platforms,
            scoreBlock: scoreBlock,
        })
        this.state = {
            isMovingRight: false,
            isMovingLeft: false,
            isGrounded: false,
        }
        this.score = 0;
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
        if(!this.state.isGrounded) {
            return;
        }
        this.position.y -= 1;
        this.velocity.y = -this.jumpSpeed;
        this.state.isGrounded = false;
    }
    
}
export default Player;