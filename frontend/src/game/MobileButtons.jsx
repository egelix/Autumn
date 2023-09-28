const MobileButtons = () => {
    const KEY_DOWN = 'keydown';
    const KEY_UP = 'keyup';
    const A_KEY = {key: 'a', code: 'KeyA', keyCode: 65};
    const handleTouch = (eventType, keyEvent) => {
        return new KeyboardEvent(eventType, keyEvent);
    }
    return (
        <div className="mobile-btn-container">
            <button onTouchStart={() => handleTouch(KEY_DOWN, A_KEY)} onTouchEnd={() => handleTouch(KEY_UP, A_KEY)}>LEFT</button>
        </div>
    )
}
export default MobileButtons;