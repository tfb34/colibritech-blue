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

window.toggleMenu = toggleMenu;
window.toggle = toggle;
window.fadeUp = fadeUp;
window.mouseOver = mouseOver;
window.mouseOut = mouseOut;
window.isFormSent = isFormSent;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNILG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuXHRpZighJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpe1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Zvcm1TZW50KCl7XHJcblx0dmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdHZhciBtc2cgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1zZ1wiKTtcclxuXHRpZihtc2c9PVwiZm9ybV9zdWJtaXR0ZWRcIil7XHJcblx0XHRhbGVydChcIllvdXIgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQhIFRoYW5rIHlvdS5cIik7XHJcblx0fVxyXG59XHJcbi8vIEFkZHMgYW4gY2xpY2sgbGlzdGVuZXIgdG8gY2VydGFpbiBlbGVtZW50cyBpbiBpbmRleCBwYWdlLlxyXG5jb25zdCBzZXJ2aWNlQm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXJ2aWNlLWJveCcpO1xyXG5jb25zdCBzZXJ2aWNlQm94TGlua3MgPSBbJ25ldHdvcmstc3VwcG9ydC5odG1sJywgJ3dlYi1kZXNpZ24uaHRtbCcsICdjb21wdXRlci1yZXBhaXIuaHRtbCcsICd2b2ljZS1hbmQtZGF0YS5odG1sJ107XHJcbmZvcihsZXQgaT0wO2k8c2VydmljZUJveGVzLmxlbmd0aDtpKyspe1xyXG5cdHNlcnZpY2VCb3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmPXNlcnZpY2VCb3hMaW5rc1tpXTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcclxuICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG4gIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51Jyk7XHJcbiAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgc2V0VGltZW91dChmYWRlVXAsIDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZSgpe1xyXG5cdGxldCBzdWJsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdWItbGlua3NcIik7XHJcblx0Zm9yKGxldCBpID0gMDsgaTwgc3VibGlua3MubGVuZ3RoOyBpKyspe1xyXG5cdFx0c3VibGlua3NbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBmYWRlVXAoKXtcclxuXHRsZXQgYXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKS5jaGlsZHJlbjtcclxuXHRmb3IobGV0IGk9MDtpPGFyci5sZW5ndGg7aSsrKXtcclxuXHRcdGFycltpXS5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlVXAnKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3Zlcih4KXtcclxuXHR4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uc3R5bGUuY29sb3I9XCJ3aGl0ZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZU91dCh4KXtcclxuXHR4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uc3R5bGUuY29sb3I9XCJyZ2JhKDEsMSwxLDAuNSlcIjtcclxufVxyXG5cclxubGV0IGEgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuaW1hdGUnKSk7XHJcbi8vIENyZWF0ZSBhbiBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgZm9yIGVhY2ggZWxlbWVudCB3aXRoIHRoZSBjbGFzcyBuYW1lIGFuaW1hdGVcclxuXHJcbmlmKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KXtcclxuXHJcbmxldCBvYnNlcnZlcnMgPSBbXTtcclxuXHJcbmxldCBvYnNlcnZlck9wdGlvbnMgPSB7XHJcblx0cm9vdDogbnVsbCwgLy8gYmMgd2Ugd2FudCByb290IHRvIGJlIGRvY3VtZW50J3Mgdmlld3BvcnRcclxuXHRyb290TWFyZ2luOiAnMHB4JyxcclxuXHR0aHJlc2hvbGQ6IDAuOCAvLyB0cmlnZ2VyZWQgd2hlbiB3aG9sZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0XHJcbn1cclxuXHJcbmZvcihsZXQgaSA9MDtpPGEubGVuZ3RoO2krKyl7XHJcblx0b2JzZXJ2ZXJzW2ldID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGludGVyc2VjdGlvbkNhbGxiYWNrLCBvYnNlcnZlck9wdGlvbnMpO1xyXG5cdG9ic2VydmVyc1tpXS5vYnNlcnZlKGFbaV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb25DYWxsYmFjayhlbnRyaWVzKXtcclxuXHRlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpe1xyXG5cdFx0aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xyXG5cdFx0XHRsZXQgZWwgPSBlbnRyeS50YXJnZXQ7XHJcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygncGFyYWxsYXgtaW1nJykpe1xyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ21vdmVVcCcpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdkb1NvbWV0aGluZycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8qb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTsqL1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbn1lbHNle1xyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbihlKXtcclxuXHRpZihhWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA9PT0gMClcclxuXHRcdGEuc2hpZnQoKTtcclxuXHRcclxuXHRpZihhWzBdICYmIGlzVmlzaWJsZShhWzBdKSl7XHJcblx0XHRpZihhWzBdLmNsYXNzTGlzdC5jb250YWlucygncGFyYWxsYXgtaW1nJykpe1xyXG5cdFx0XHQvKmFsZXJ0KCdtb3ZldXAnKTsqL1xyXG5cdFx0XHRhWzBdLmNsYXNzTGlzdC50b2dnbGUoJ21vdmVVcCcpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdC8qYWxlcnQoJ2ZhZGUnKTsqL1xyXG5cdFx0XHRhWzBdLmNsYXNzTGlzdC5hZGQoJ2RvU29tZXRoaW5nJyk7XHJcblx0XHR9XHJcblx0XHRhLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHQvL2FycltdIGlmIHZpc2libGUgZmFkZUluXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XHJcblx0XHJcblx0bGV0IHNjcmVlbkggPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcclxuXHRsZXQgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcblx0aWYocmVjdCA+IDAgJiYgcmVjdCA8IChzY3JlZW5ILShzY3JlZW5ILzUpKSl7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XHJcbn1cclxuXHJcbndpbmRvdy50b2dnbGVNZW51ID0gdG9nZ2xlTWVudTtcclxud2luZG93LnRvZ2dsZSA9IHRvZ2dsZTtcclxud2luZG93LmZhZGVVcCA9IGZhZGVVcDtcclxud2luZG93Lm1vdXNlT3ZlciA9IG1vdXNlT3Zlcjtcclxud2luZG93Lm1vdXNlT3V0ID0gbW91c2VPdXQ7XHJcbndpbmRvdy5pc0Zvcm1TZW50ID0gaXNGb3JtU2VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==