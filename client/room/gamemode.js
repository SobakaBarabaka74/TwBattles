import { Ui }   from 'pixel_combats/room'
import { Main } from './Main.js'

try {
    Main({
        version: '0.1'
    })
} catch(err) {
    Ui.GetContext().Hint.Value = 
        `Error: ${err.name}.\nDescription: ${err.message}.`
}