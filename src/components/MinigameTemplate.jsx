/*
- when X condition is met, use setMainArea to put game in the foreground of the game section
    - if player is in another section (like stats/info), they should not see the game

- game stays onscreen until player either wins, loses, or forfeit/quit

- first test of this functionality should be:
    - a screen with a unique bg color or image
    - to unlock, have 3 totalBurgersProduced
    - three buttons: win, lose, quit
    - write handle functions for each of these outcomes
        - function should use setMainArea to revert to default game view
        - win=BPS++, lose=BPS--, quit has no effect to BPS
*/

import React, { useState } from "react";

export default function MinigameTemplate(props) {
  return <></>;
}
