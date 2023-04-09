// ==UserScript==
// @name         TORN Dark Browser Checking Page
// @version      1.0.0
// @description  Make the browser checking page dark
// @author       juzraai
// @license      MIT
// @namespace    https://juzraai.github.io/
// @match        https://www.torn.com/
// @downloadURL  https://github.com/juzraai/torn-dark-browser-check/raw/main/torn-dark-browser-check.user.js
// @updateURL    https://github.com/juzraai/torn-dark-browser-check/raw/main/torn-dark-browser-check.user.js
// ==/UserScript==

if (document.querySelector('.cf-browser-verification')) {
	document.body.style.background = 'black';
	document.body.style.filter = 'invert(1)';
}