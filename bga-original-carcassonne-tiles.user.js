// ==UserScript==
// @name         BGA Original Carcassone Tiles
// @description  Displays the original carcassone tiles in boardgamearena.com when selecting the "Latest" "Artwork edition" from the playing menu.
// @version      1.3
// @author       yzemaze
// @match        https://boardgamearena.com/*
// @namespace    https://github.com/yzemaze/bga-original-carcassonne-tiles/
// @updateURL    https://github.com/yzemaze/bga-original-carcassonne-tiles/edit/master/bga-original-carcassonne-tiles.user.js
// @downloadURL  https://github.com/yzemaze/bga-original-carcassonne-tiles/edit/master/bga-original-carcassonne-tiles.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle (".second_edition { background-image: url('https://raw.githubusercontent.com/yzemaze/bga-original-carcassonne-tiles/master/img/original-tiles.jpg') !important; }");
