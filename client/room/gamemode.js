import { Ui } as my_Room from 'pixel_combats/room'
import * as PEnter from './Main.js'

try {
    PEnter.Main({
        version: '0.1'
    })
} catch(err) {
    my_Room.Ui.GetContext().Hint.Value = 
        `Error: ${err.name}.\nDescription: ${err.message}.`
}