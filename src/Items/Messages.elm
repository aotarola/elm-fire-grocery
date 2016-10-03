module Items.Messages exposing (..)

import Http
import Items.Models exposing (Item, ItemId)


type Msg
    = ItemUpdate (List Item)
    | ReuseItem Item
    | ToggleItem Item Bool
    | SaveSuccess Item
    | SaveFail Http.Error
    | DoneShopping
    | ErrorOccured String
