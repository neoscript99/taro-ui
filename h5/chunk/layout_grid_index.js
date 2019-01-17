(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"100":function(e,t,n){var r=n(89),o=1/0,a=1.7976931348623157e308;e.exports=function toFinite(e){return e?(e=r(e))===o||e===-o?(e<0?-1:1)*a:e==e?e:0:0===e?e:0}},"101":function(e,t,n){var r=n(69),o=n(80),a="[object Symbol]";e.exports=function isSymbol(e){return"symbol"==typeof e||o(e)&&r(e)==a}},"186":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),a=n(60),i=_interopRequireDefault(n(187)),u=_interopRequireDefault(n(61)),l=_interopRequireDefault(n(63)),c=_interopRequireDefault(n(72)),f=_interopRequireDefault(n(71)),s=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function AtGrid(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtGrid);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=AtGrid.__proto__||Object.getPrototypeOf(AtGrid)).call.apply(e,[this].concat(o))),n.handleClick=function(e,t,r){for(var o=arguments.length,a=Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];var u=n.props,l=u.onClick,c=u.columnNum;if((0,f.default)(l)){var s=r*c+t;l.apply(void 0,[e,s].concat(a))}},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtGrid,s.default),r(AtGrid,[{"key":"render","value":function render(){var e=this,t=this.props,n=t.data,r=t.mode,u=t.columnNum,f=t.hasBorder;if(Array.isArray(n)&&0===n.length)return null;var s=(0,i.default)(n,u),p=(0,l.default)(["at-grid__flex-item","at-grid-item","at-grid-item--"+r],{"at-grid-item--no-border":!f});return o.default.createElement(a.View,{"className":(0,l.default)("at-grid",this.props.className)},s.map(function(t,n){return o.default.createElement(a.View,{"className":"at-grid__flex","key":n},t.map(function(t,r){return o.default.createElement(a.View,{"key":r,"className":(0,l.default)(p,{"at-grid-item--last":r===u-1}),"onClick":e.handleClick.bind(e,t,r,n),"style":{"flex":"0 0 "+100/u+"%"}},o.default.createElement(a.View,{"className":"at-grid-item__content"},o.default.createElement(a.View,{"className":"at-grid-item__content-inner"},o.default.createElement(a.View,{"className":"content-inner__icon"},t.image&&o.default.createElement(a.Image,{"className":"content-inner__img","src":t.image,"mode":"scaleToFill"}),(0,c.default)(t.iconInfo)&&!t.image&&o.default.createElement(a.Text,{"className":(0,l.default)(t.iconInfo.prefixClass||"at-icon",function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},(t.iconInfo.prefixClass||"at-icon")+"-"+t.iconInfo.value,t.iconInfo.value),t.iconInfo.className),"style":e.mergeStyle({"color":t.iconInfo.color,"fontSize":(t.iconInfo.size||24)+"px"},t.iconInfo.customStyle)})),o.default.createElement(a.Text,{"className":"content-inner__text"},t.value))))}))}))}}]),AtGrid}();t.default=p,p.defaultProps={"data":[],"columnNum":3,"mode":"square","hasBorder":!0},p.propTypes={"mode":u.default.string,"onClick":u.default.func,"hasBorder":u.default.bool,"columnNum":u.default.number,"data":u.default.arrayOf(u.default.shape({"image":u.default.string,"value":u.default.string,"iconInfo":u.default.shape({"size":u.default.number,"value":u.default.string,"color":u.default.string,"prefixClass":u.default.string,"customStyle":u.default.oneOfType([u.default.object,u.default.string]),"className":u.default.oneOfType([u.default.array,u.default.string])})}))}},"187":function(e,t,n){var r=n(188),o=n(189),a=n(194),i=Math.ceil,u=Math.max;e.exports=function chunk(e,t,n){t=(n?o(e,t,n):void 0===t)?1:u(a(t),0);var l=null==e?0:e.length;if(!l||t<1)return[];for(var c=0,f=0,s=Array(i(l/t));c<l;)s[f++]=r(e,c,c+=t);return s}},"188":function(e,t){e.exports=function baseSlice(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},"189":function(e,t,n){var r=n(190),o=n(191),a=n(193),i=n(72);e.exports=function isIterateeCall(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&a(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},"190":function(e,t){e.exports=function eq(e,t){return e===t||e!=e&&t!=t}},"191":function(e,t,n){var r=n(71),o=n(192);e.exports=function isArrayLike(e){return null!=e&&o(e.length)&&!r(e)}},"192":function(e,t){var n=9007199254740991;e.exports=function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},"193":function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function isIndex(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},"194":function(e,t,n){var r=n(100);e.exports=function toInteger(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},"195":function(e,t,n){},"41":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(60),u=_interopRequireDefault(n(186)),l=_interopRequireDefault(n(66));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(195);var c=function(e){function GridPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GridPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GridPage.__proto__||Object.getPrototypeOf(GridPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(e,t){console.log(e,t)},e.state={"data":[{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"领取中心"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"找折扣"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"领会员"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"新品首发"},{"image":"https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png","value":"领京豆"},{"value":"支持Icon","iconInfo":{"size":30,"color":"red","value":"bookmark"}}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GridPage,o.default.Component),r(GridPage,[{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page"},a.default.createElement(l.default,{"title":"Grid 栅格"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"正方形案例"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(u.default,{"data":this.state.data,"onClick":this.handleClick})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"矩形案例"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(u.default,{"mode":"rect","data":[].concat(_toConsumableArray(this.state.data),[{"image":"https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png","value":"手机馆"}])})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"没有边框"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(u.default,{"mode":"rect","data":[].concat(_toConsumableArray(this.state.data),[{"image":"https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png","value":"手机馆"}]),"hasBorder":!1}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),GridPage}();t.default=c},"60":function(e,t,n){e.exports=n(0)(18)},"61":function(e,t,n){e.exports=n(64)()},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);_interopRequireDefault(a),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":o(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":o(e))&&t&&"object"===(void 0===t?"undefined":o(t))?Object.assign({},e,t):i(e)+i(t)}}]),AtComponent}();u.options={"addGlobalClass":!0},t.default=u},"63":function(e,t,n){e.exports=n(0)(19)},"64":function(e,t,n){"use strict";var r=n(65);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"65":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),u=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(67);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(u.View,{"className":"doc-header"},a.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":i.default.string}},"67":function(e,t,n){},"68":function(e,t,n){var r=n(70).Symbol;e.exports=r},"69":function(e,t,n){var r=n(68),o=n(76),a=n(77),i="[object Null]",u="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?u:i:l&&l in Object(e)?o(e):a(e)}},"70":function(e,t,n){var r=n(75),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},"71":function(e,t,n){var r=n(69),o=n(72),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return t==i||t==u||t==a||t==l}},"72":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"74":function(e,t,n){e.exports=n(0)(15)},"75":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(74))},"76":function(e,t,n){var r=n(68),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},"77":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"80":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"89":function(e,t,n){var r=n(72),o=n(101),a=NaN,i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function toNumber(e){if("number"==typeof e)return e;if(o(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):u.test(e)?a:+e}}}]);