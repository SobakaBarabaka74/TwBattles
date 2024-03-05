import { Ui } as Room from 'pixel_combats/room'
import { Main } as PEnter from './Main.js'

try {
    PEnter.Main({
        version: '0.1'
    })
} catch(err) {
    Room.Ui.GetContext().Hint.Value = 
        `Room error: ${err.name}.\nDescription error: ${err.message}.`
}