/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onbeforeunload = function (){
	if(!'IntersectionObserver' in window){
		window.scrollTo(0,0);
	}
}

function isFormSent(){
	var url = new URL(window.location.href);
	var msg = url.searchParams.get("msg");
	if(msg=="form_submitted"){
		alert("Your form has been submitted! Thank you.");
	}
}
// Adds an click listener to certain elements in index page.
const serviceBoxes = document.getElementsByClassName('service-box');
const serviceBoxLinks = ['network-support.html', 'web-design.html', 'computer-repair.html', 'voice-and-data.html'];
for(let i=0;i<serviceBoxes.length;i++){
	serviceBoxes[i].addEventListener("click", function(){
		window.location.href=serviceBoxLinks[i];
	});
}


function toggleMenu(){
  let menuBtn = document.getElementById('menu-btn');
  let menu = document.getElementById('mobile-menu');
  menuBtn.classList.toggle("change");
  menu.classList.toggle("show");
  setTimeout(fadeUp, 100);
}

function toggle(){
	let sublinks = document.getElementsByClassName("sub-links");
	for(let i = 0; i< sublinks.length; i++){
		sublinks[i].classList.toggle('show');
	}
}
function fadeUp(){
	let arr = document.getElementById('list').children;
	for(let i=0;i<arr.length;i++){
		arr[i].classList.toggle('fadeUp');
	}
}

function mouseOver(x){
	x.getElementsByTagName('p')[0].style.color="white";
}

function mouseOut(x){
	x.getElementsByTagName('p')[0].style.color="rgba(1,1,1,0.5)";
}

let a = Array.from(document.getElementsByClassName('animate'));
// Create an intersection observer for each element with the class name animate

if('IntersectionObserver' in window){

let observers = [];

let observerOptions = {
	root: null, // bc we want root to be document's viewport
	rootMargin: '0px',
	threshold: 0.8 // triggered when whole element is in viewport
}

for(let i =0;i<a.length;i++){
	observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
	observers[i].observe(a[i]);
}

function intersectionCallback(entries){
	entries.forEach(function(entry){
		if(entry.isIntersecting){
			let el = entry.target;
			if(el.classList.contains('parallax-img')){
				el.classList.add('moveUp');
			}else{
				el.classList.add('doSomething');
			}
			/*observer.unobserve(el);*/
		}
	})
}

}else{
window.onscroll = function(e){
	if(a[0].getBoundingClientRect().height === 0)
		a.shift();
	
	if(a[0] && isVisible(a[0])){
		if(a[0].classList.contains('parallax-img')){
			/*alert('moveup');*/
			a[0].classList.toggle('moveUp');
		}else{
			/*alert('fade');*/
			a[0].classList.add('doSomething');
		}
		a.shift();
	}

	//arr[] if visible fadeIn
}

function isVisible(el){
	
	let screenH = window.screen.height;
	let rect = el.getBoundingClientRect().top;

	if(rect > 0 && rect < (screenH-(screenH/5))){
		return true;
	}else{
		return false;
	}
}

window.isVisible = isVisible;
}

function scrollToElement(id){
	var el = document.getElementById(id);
	el.scrollIntoView({behavior: "smooth",block:"start"});
}

window.toggleMenu = toggleMenu;
window.toggle = toggle;
window.fadeUp = fadeUp;
window.mouseOver = mouseOver;
window.mouseOut = mouseOut;
window.isFormSent = isFormSent;
window.scrollToElement = scrollToElement;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNILG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIndpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG5cdGlmKCEnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyl7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9ybVNlbnQoKXtcclxuXHR2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0dmFyIG1zZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibXNnXCIpO1xyXG5cdGlmKG1zZz09XCJmb3JtX3N1Ym1pdHRlZFwiKXtcclxuXHRcdGFsZXJ0KFwiWW91ciBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZCEgVGhhbmsgeW91LlwiKTtcclxuXHR9XHJcbn1cclxuLy8gQWRkcyBhbiBjbGljayBsaXN0ZW5lciB0byBjZXJ0YWluIGVsZW1lbnRzIGluIGluZGV4IHBhZ2UuXHJcbmNvbnN0IHNlcnZpY2VCb3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlcnZpY2UtYm94Jyk7XHJcbmNvbnN0IHNlcnZpY2VCb3hMaW5rcyA9IFsnbmV0d29yay1zdXBwb3J0Lmh0bWwnLCAnd2ViLWRlc2lnbi5odG1sJywgJ2NvbXB1dGVyLXJlcGFpci5odG1sJywgJ3ZvaWNlLWFuZC1kYXRhLmh0bWwnXTtcclxuZm9yKGxldCBpPTA7aTxzZXJ2aWNlQm94ZXMubGVuZ3RoO2krKyl7XHJcblx0c2VydmljZUJveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWY9c2VydmljZUJveExpbmtzW2ldO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xyXG4gIGxldCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICBzZXRUaW1lb3V0KGZhZGVVcCwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCl7XHJcblx0bGV0IHN1YmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN1Yi1saW5rc1wiKTtcclxuXHRmb3IobGV0IGkgPSAwOyBpPCBzdWJsaW5rcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRzdWJsaW5rc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGZhZGVVcCgpe1xyXG5cdGxldCBhcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmNoaWxkcmVuO1xyXG5cdGZvcihsZXQgaT0wO2k8YXJyLmxlbmd0aDtpKyspe1xyXG5cdFx0YXJyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVVcCcpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyKHgpe1xyXG5cdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5zdHlsZS5jb2xvcj1cIndoaXRlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3V0KHgpe1xyXG5cdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5zdHlsZS5jb2xvcj1cInJnYmEoMSwxLDEsMC41KVwiO1xyXG59XHJcblxyXG5sZXQgYSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5pbWF0ZScpKTtcclxuLy8gQ3JlYXRlIGFuIGludGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgZWFjaCBlbGVtZW50IHdpdGggdGhlIGNsYXNzIG5hbWUgYW5pbWF0ZVxyXG5cclxuaWYoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpe1xyXG5cclxubGV0IG9ic2VydmVycyA9IFtdO1xyXG5cclxubGV0IG9ic2VydmVyT3B0aW9ucyA9IHtcclxuXHRyb290OiBudWxsLCAvLyBiYyB3ZSB3YW50IHJvb3QgdG8gYmUgZG9jdW1lbnQncyB2aWV3cG9ydFxyXG5cdHJvb3RNYXJnaW46ICcwcHgnLFxyXG5cdHRocmVzaG9sZDogMC44IC8vIHRyaWdnZXJlZCB3aGVuIHdob2xlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnRcclxufVxyXG5cclxuZm9yKGxldCBpID0wO2k8YS5sZW5ndGg7aSsrKXtcclxuXHRvYnNlcnZlcnNbaV0gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0aW9uQ2FsbGJhY2ssIG9ic2VydmVyT3B0aW9ucyk7XHJcblx0b2JzZXJ2ZXJzW2ldLm9ic2VydmUoYVtpXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyc2VjdGlvbkNhbGxiYWNrKGVudHJpZXMpe1xyXG5cdGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSl7XHJcblx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XHJcblx0XHRcdGxldCBlbCA9IGVudHJ5LnRhcmdldDtcclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJhbGxheC1pbWcnKSl7XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnbW92ZVVwJyk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2RvU29tZXRoaW5nJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0LypvYnNlcnZlci51bm9ic2VydmUoZWwpOyovXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxufWVsc2V7XHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKGUpe1xyXG5cdGlmKGFbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID09PSAwKVxyXG5cdFx0YS5zaGlmdCgpO1xyXG5cdFxyXG5cdGlmKGFbMF0gJiYgaXNWaXNpYmxlKGFbMF0pKXtcclxuXHRcdGlmKGFbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJhbGxheC1pbWcnKSl7XHJcblx0XHRcdC8qYWxlcnQoJ21vdmV1cCcpOyovXHJcblx0XHRcdGFbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZVVwJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0LyphbGVydCgnZmFkZScpOyovXHJcblx0XHRcdGFbMF0uY2xhc3NMaXN0LmFkZCgnZG9Tb21ldGhpbmcnKTtcclxuXHRcdH1cclxuXHRcdGEuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdC8vYXJyW10gaWYgdmlzaWJsZSBmYWRlSW5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNWaXNpYmxlKGVsKXtcclxuXHRcclxuXHRsZXQgc2NyZWVuSCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xyXG5cdGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRpZihyZWN0ID4gMCAmJiByZWN0IDwgKHNjcmVlbkgtKHNjcmVlbkgvNSkpKXtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxud2luZG93LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9FbGVtZW50KGlkKXtcclxuXHR2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0ZWwuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLGJsb2NrOlwic3RhcnRcIn0pO1xyXG59XHJcblxyXG53aW5kb3cudG9nZ2xlTWVudSA9IHRvZ2dsZU1lbnU7XHJcbndpbmRvdy50b2dnbGUgPSB0b2dnbGU7XHJcbndpbmRvdy5mYWRlVXAgPSBmYWRlVXA7XHJcbndpbmRvdy5tb3VzZU92ZXIgPSBtb3VzZU92ZXI7XHJcbndpbmRvdy5tb3VzZU91dCA9IG1vdXNlT3V0O1xyXG53aW5kb3cuaXNGb3JtU2VudCA9IGlzRm9ybVNlbnQ7XHJcbndpbmRvdy5zY3JvbGxUb0VsZW1lbnQgPSBzY3JvbGxUb0VsZW1lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=