import { Ui } as m_Room from 'pixel_combats/room'
import * as PEnter from './Main.js'

try {
    PEnter.Main({
        version: '0.1'
    })
} catch(err) {
    m_Room.Ui.GetContext().Hint.Value = 'Room error: ' + err.name + '\nDescription error: ' + err.message
}
