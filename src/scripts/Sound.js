/**
 * @class
 */
export default class Sound {
    /**
     * @public
     */
    static soundNewFrame() {
        let sound = new Audio('./sound/new_frame.mp3');
        sound.volume = 0.7;
        sound.play().catch(error => {
            throw new Error('Ошибка воспроизведения звука!');
        });
    }
}