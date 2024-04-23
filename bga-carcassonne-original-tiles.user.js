// ==UserScript==
// @name         BGA Carcassone Original Tiles
// @description  Displays the original Carcassonne tiles on boardgamearena.com no matter which artwork is selected
// @version      1.4
// @author       yzemaze
// @include      https://boardgamearena.com/archive/replay/*
// @include      https://(\w*\.)?boardgamearena.com/(\d*/)?carcassonne.*
// @namespace    https://github.com/yzemaze/bga-original-carcassonne-tiles/
// @updateURL    https://github.com/yzemaze/bga-original-carcassonne-tiles/edit/master/bga-original-carcassonne-tiles.user.js
// @downloadURL  https://github.com/yzemaze/bga-original-carcassonne-tiles/edit/master/bga-original-carcassonne-tiles.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle (".second_edition { background-image: url('https://raw.githubusercontent.com/yzemaze/bga-original-carcassonne-tiles/master/img/original-tiles.jpg') !important; }");
