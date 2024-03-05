import * as Basic from 'pixel_combats/basic'
import * as Room  from 'pixel_combats/room'

export function Main(args) {
    Room.Teams.Add('Blue', 'Teams/Blue', new Basic.Color(0, 0, 1, 0))
    
}