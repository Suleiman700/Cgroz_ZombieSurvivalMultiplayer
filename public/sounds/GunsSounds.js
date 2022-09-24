
class GunsSounds {
    constructor() {}

    /**
     * Play bullet sound
     * @param _gun_name {String} > Example: AK-47
     */
    play(_gun_name) {
        // console.log('play bullet sound')

        const wanted_gun = guns.find(gun => {
            return gun.name === _gun_name
            // return gun.name === 'AK-47'
        })

        // Play sound
        wanted_gun.play_bullet_sound()
    }

    /**
     * Play bullet sound
     * @param _gun_name {String} > Example: AK-47
     */
    play_reload(_gun_name) {

        const wanted_gun = guns.find(gun => {
            return gun.name === _gun_name
            // return gun.name === 'AK-47'
        })

        // Play sound
        wanted_gun.play_reload_sound()
    }
}
