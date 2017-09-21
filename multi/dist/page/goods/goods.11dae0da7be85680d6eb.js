webpackJsonp([2],{

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {

	(0, _jquery2.default)(document).click(function (event) {
		var arr = ["qqq", "aaa", "ccccc"];
		var newArr = arr.map(function (i) {
			return new _promise2.default(function (resolve, reject) {
				setTimeout(function () {
					resolve(i);
				}, 2000);
			});
		});
		_promise2.default.all(newArr).then(function (value) {
			console.log(value);
		});
		var test = function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(v) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return setTimeout(function () {
									return v;
								}, 2000);

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			return function test(_x) {
				return _ref.apply(this, arguments);
			};
		}();
		test(11111111111111111).then(function (val) {
			console.log(val);
		});
	});
});

/***/ })

},[42]);