class InputHandler {
    constructor(player) {
        this.player = player;
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'd':
              this.player.state.isMovingRight = true;
              break;
            case 'a':
              this.player.state.isMovingLeft = true;
              break;
            case ' ':
              this.player.jump();
              break;
          }
    }
    handleKeyUp(event) {
        switch (event.key) {
            case 'd':
              this.player.state.isMovingRight = false;
              break;
            case 'a':
              this.player.state.isMovingLeft = false;
              break;
          }
    }
}
export default InputHandler;