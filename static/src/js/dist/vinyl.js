/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vinyl.js":
/*!*************************!*\
  !*** ./src/js/vinyl.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wheel */ \"./src/js/wheel.js\");\n\n\n\nconsole.log('pickedVinyl', _wheel__WEBPACK_IMPORTED_MODULE_0__.pickedVinyl);\n\n//# sourceURL=webpack://music/./src/js/vinyl.js?");

/***/ }),

/***/ "./src/js/wheel.js":
/*!*************************!*\
  !*** ./src/js/wheel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pickedVinyl\": () => (/* binding */ pickedVinyl)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst raycaster = new THREE.Raycaster();\nconst pointer = new THREE.Vector2();\n\nconst scene = new THREE.Scene();\nconst image_radius = 200;\nconst number_of_images = 8;\nconst radius = 600;\nconst radian_interval = (6.0 * Math.PI) / number_of_images;\nconst center_of_wheel = {\n                            x: 0,\n                            y: 0\n                        }\n\n\nconst groupCards = new THREE.Group();\n\nlet scrollSpeed = 0.0;\nlet loader = null;\nlet texture = null;\nlet material = null;\nlet circle = null;\nlet mesh = null;\n\nlet pickedVinyl;\n\n\nfor (let i = 0; i < number_of_images; i++) {\n    // Create a texture loader so we can load our image file\n    loader = new THREE.TextureLoader();\n    let textureArray = ['./static/src/images/taylorswift.jpeg', './static/src/images/fearless.jpeg', './static/src/images/speaknow.jpeg', './static/src/images/1989.jpeg', './static/src/images/reputation.jpeg', './static/src/images/lover.jpeg', './static/src/images/evermore.jpeg', './static/src/images/midnights.jpeg']\n    texture = loader.load(textureArray[i]);\n    texture.minFilter = THREE.LinearFilter;\n\n\n    // Load an image file into a custom material\n    material = new THREE.MeshBasicMaterial({\n        map: texture,\n        transparent: true,\n        opacity: 1\n    });\n\n    circle = new THREE.CircleGeometry(image_radius, 100);\n    mesh = new THREE.Mesh(circle, material);\n\n    mesh.material.side = THREE.DoubleSide;\n\n    mesh.position.set(\n        center_of_wheel.x + (Math.cos(radian_interval * i) * radius),\n        center_of_wheel.y + (Math.sin(radian_interval * i) * radius),\n        0);\n\n    // set the ID for each meshes\n    mesh.name = i\n    // add the image to the group\n    groupCards.add(mesh);\n    // add group to scene\n    scene.add(groupCards);\n    // console.log(groupCards)\n}\n\n\n\n\n// Specify the portion of the scene visible at any time (in degrees)\nlet fieldOfView = 75;\n\nlet aspectRatio = window.innerWidth / window.innerHeight;\nlet nearPlane = 0.1;\nlet farPlane = 1000;\nlet camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, \n                                          nearPlane, farPlane);\n\ncamera.position.z = 1000;\n\nlet renderer = new THREE.WebGLRenderer({ antialias: true, alpha: three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader });\nrenderer.setSize(window.innerWidth, window.innerHeight);\n\n\n\n// Add the canvas to the DOM\ndocument.querySelector('body').appendChild(renderer.domElement);\n\nwindow.addEventListener('wheel', event => {\n    scrollSpeed = event.deltaY * (Math.PI / 180) * 0.4;\n    groupCards.rotation.z += -1.0 * scrollSpeed;\n    for (let i = 0; i < groupCards.children.length; i++) {\n        groupCards.children[i].rotation.z += scrollSpeed;\n    }\n});\n\n\n\nfunction onPointerMove( event ) {\n\t// calculate pointer position in normalized device coordinates\n\t// (-1 to +1) for both components\n\tpointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;\n\tpointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;\n}\n\n\nfunction onPointerReset( event ){\n    pointer.x = 0\n\tpointer.y = 0\n}\n\n\nfunction render() {\n\t// update the picking ray with the camera and pointer position\n\traycaster.setFromCamera( pointer, camera );\n\n\t// calculate objects intersecting the picking ray\n\tlet intersects = raycaster.intersectObjects( groupCards.children );\n    // for 문이 아니라 내가 클릭한 것으로 수정\n    if (intersects.length == 1){\n        intersects[0].object.scale.set(1.5, 1.5, 1.5);\n        onPointerReset();\n    } \n\n\trenderer.render( scene, camera );\n    \n}\n\n\n\nfunction animate() {\n    requestAnimationFrame(animate);\n    window.addEventListener( 'click', onPointerMove );\n    window.requestAnimationFrame(render);\n    renderer.render(scene, camera);\n    render();\n\n}\n\n\n\n\nanimate();\n\n\n\n// window.addEventListener( 'mouseup', onPointerMove );\n// window.requestAnimationFrame(render);\n\n\n\n\n\n\n//# sourceURL=webpack://music/./src/js/wheel.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/vinyl.js");
/******/ 	
/******/ })()
;