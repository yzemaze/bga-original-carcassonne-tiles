// ==UserScript==
// @name         Original Carcassone Tiles
// @namespace    https://github.com/yzemaze/bga-original-carcassonne-tiles/
// @version      1.1
// @description  Displays the original carcassone tiles in boardgamearena.com when selecting the "Latest" "Artwork edition" from the playing menu.
// @author       yzemaze
// @match        https://boardgamearena.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle (".second_edition { background-image: url('https://raw.githubusercontent.com/yzemaze/bga-original-carcassonne-tiles/master/img/original-tiles.jpg') !important; }");
