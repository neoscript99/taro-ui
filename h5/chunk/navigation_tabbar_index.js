(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"175":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),a=n(60),i=_interopRequireDefault(n(61)),l=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(85)),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var f=function(e){function AtTabBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabBar.__proto__||Object.getPrototypeOf(AtTabBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabBar,c.default),r(AtTabBar,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.customStyle,r=t.className,i=t.fixed,c=t.backgroundColor,f=t.tabList,s=t.current,p=t.color,d=t.iconSize,b=t.fontSize,y=t.selectedColor,m={"color":p||""},_={"color":y||""},h={"fontSize":b?b+"px":""},v={"backgroundColor":c||""};return o.default.createElement(a.View,{"className":(0,l.default)({"at-tab-bar":!0,"at-tab-bar--fixed":i},r),"style":this.mergeStyle(v,n)},f.map(function(t,n){var r;return o.default.createElement(a.View,{"className":(0,l.default)("at-tab-bar__item",{"at-tab-bar__item--active":s===n}),"style":s===n?_:m,"key":t.title,"onClick":e.handleClick.bind(e,n)},t.iconType?o.default.createElement(u.default,{"dot":!!t.dot,"value":t.text,"max":t.max},o.default.createElement(a.View,{"className":"at-tab-bar__icon"},o.default.createElement(a.Text,{"className":(0,l.default)(""+(t.iconPrefixClass||"at-icon"),(r={},_defineProperty(r,(t.iconPrefixClass||"at-icon")+"-"+t.selectedIconType,s===n&&t.selectedIconType),_defineProperty(r,(t.iconPrefixClass||"at-icon")+"-"+t.iconType,!(s===n&&t.selectedIconType)),r)),"style":{"color":s===n?y:p,"fontSize":d?d+"px":""}}))):null,o.default.createElement(a.View,null,o.default.createElement(u.default,{"dot":!t.iconType&&!!t.dot,"value":t.iconType?"":t.text,"max":t.iconType?"":t.max},o.default.createElement(a.View,{"className":"at-tab-bar__title","style":h},t.title))))}))}}]),AtTabBar}();t.default=f,f.defaultProps={"customStyle":"","className":"","fixed":!1,"current":0,"scroll":!1,"tabList":[],"onClick":function onClick(){}},f.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"fixed":i.default.bool,"backgroundColor":i.default.string,"current":i.default.number,"iconSize":i.default.oneOfType([i.default.number,i.default.string]),"fontSize":i.default.oneOfType([i.default.number,i.default.string]),"color":i.default.string,"selectedColor":i.default.string,"scroll":i.default.bool,"tabList":i.default.array,"onClick":i.default.func}},"176":function(e,t,n){},"36":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(60),l=_interopRequireDefault(n(175)),u=_interopRequireDefault(n(66));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(176);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0,"current3":0,"current4":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o.default.Component),r(Index,[{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"current"+e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,r=e.current3,o=e.current4,c=[{"title":"待办事项","iconType":"bullet-list","text":"new"},{"title":"拍照","iconType":"camera"},{"title":"文件夹","iconType":"folder","text":"100","max":"99"}];return a.default.createElement(i.View,{"className":"page"},a.default.createElement(u.default,{"title":"TabBar 标签栏"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"文本标签栏"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":[{"title":"待办事项","text":8},{"title":"拍照"},{"title":"通讯录","dot":!0}],"onClick":this.handleClick.bind(this,1),"current":t}))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"图标文本标签栏"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":c,"onClick":this.handleClick.bind(this,2),"current":n}))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义图标颜色、字体颜色、背景颜色"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"backgroundColor":"#FAFBFC","color":"#ea6bb8","selectedColor":"#e64340","tabList":c,"onClick":this.handleClick.bind(this,3),"current":r}))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"固定底部"),a.default.createElement(i.View,{"className":"panel__content no-padding","style":"padding-bottom: 24px;"},a.default.createElement(l.default,{"fixed":!0,"tabList":c,"onClick":this.handleClick.bind(this,4),"current":o})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=c},"60":function(e,t,n){e.exports=n(0)(18)},"61":function(e,t,n){e.exports=n(64)()},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);_interopRequireDefault(a),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":o(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},l=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":o(e))&&t&&"object"===(void 0===t?"undefined":o(t))?Object.assign({},e,t):i(e)+i(t)}}]),AtComponent}();l.options={"addGlobalClass":!0},t.default=l},"63":function(e,t,n){e.exports=n(0)(19)},"64":function(e,t,n){"use strict";var r=n(65);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"65":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),l=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(67);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"67":function(e,t,n){},"68":function(e,t,n){var r=n(70).Symbol;e.exports=r},"69":function(e,t,n){var r=n(68),o=n(76),a=n(77),i="[object Null]",l="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?o(e):a(e)}},"70":function(e,t,n){var r=n(75),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},"74":function(e,t,n){e.exports=n(0)(15)},"75":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(74))},"76":function(e,t,n){var r=n(68),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[l]=n:delete e[l]),o}},"77":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"80":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"85":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(61))),a=_interopRequireDefault(n(2)),i=n(60),l=_interopRequireDefault(n(86)),u=_interopRequireDefault(n(63)),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var f=function(e){function AtBadge(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,c.default),r(AtBadge,[{"key":"formatValue","value":function formatValue(e,t){if(""===e||null===e)return"";var n=+e;return(0,l.default)(n)?e:n>t?t+"+":n}},{"key":"render","value":function render(){var e=this.props,t=e.dot,n=e.value,r=e.maxValue,o=e.customStyle,l=this.formatValue(n,r);return a.default.createElement(i.View,{"className":(0,u.default)(["at-badge"],this.props.className),"style":o},this.props.children,t?a.default.createElement(i.View,{"className":"at-badge__dot"}):""!==l&&a.default.createElement(i.View,{"className":"at-badge__num"},l))}}]),AtBadge}();t.default=f,f.defaultProps={"dot":!1,"value":"","maxValue":99,"customStyle":{},"className":""},f.propTypes={"dot":o.default.bool,"value":o.default.oneOfType([o.default.string,o.default.number]),"maxValue":o.default.number,"customStyle":o.default.oneOfType([o.default.object,o.default.string]),"className":o.default.oneOfType([o.default.array,o.default.string])}},"86":function(e,t,n){var r=n(87);e.exports=function isNaN(e){return r(e)&&e!=+e}},"87":function(e,t,n){var r=n(69),o=n(80),a="[object Number]";e.exports=function isNumber(e){return"number"==typeof e||o(e)&&r(e)==a}}}]);