(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"127":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(2)),o=a(60),i=_interopRequireDefault(a(61)),u=_interopRequireDefault(a(63)),c=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}var s={"large":"large","normal":"normal","small":"small"},f=function(e){function AtAvatar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtAvatar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtAvatar.__proto__||Object.getPrototypeOf(AtAvatar)).apply(this,arguments));return e.state={"isWEAPP":n.default.getEnv()===n.default.ENV_TYPE.WEAPP},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtAvatar,c.default),r(AtAvatar,[{"key":"render","value":function render(){var e,t=this.props,a=t.size,r=t.circle,n=t.image,i=t.text,c=t.openData,f=t.customStyle,p=(_defineProperty(e={},"at-avatar--"+s[a],s[a]),_defineProperty(e,"at-avatar--circle",r),e),m="";i&&(m=i[0]);var d=void 0;return d=c&&"userAvatarUrl"===c.type&&this.state.isWEAPP?l.default.createElement(o.OpenData,{"type":c.type}):n?l.default.createElement(o.Image,{"className":"at-avatar__img","src":n}):l.default.createElement(o.Text,{"className":"at-avatar__text"},m),l.default.createElement(o.View,{"className":(0,u.default)(["at-avatar"],p,this.props.className),"style":f},d)}}]),AtAvatar}();t.default=f,f.defaultProps={"size":"normal","circle":!1,"text":"","image":"","openData":{},"customStyle":{},"className":""},f.propTypes={"size":i.default.oneOf(["large","normal","small"]),"circle":i.default.bool,"text":i.default.string,"image":i.default.string,"openData":i.default.object,"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string])}},"128":function(e,t,a){},"17":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(2)),o=a(60),i=_interopRequireDefault(a(127)),u=_interopRequireDefault(a(66));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(128);var c=function(e){function AvatarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AvatarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AvatarPage.__proto__||Object.getPrototypeOf(AvatarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AvatarPage,n.default.Component),r(AvatarPage,[{"key":"onClick","value":function onClick(){console.log(arguments)}},{"key":"render","value":function render(){var e="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg";return l.default.createElement(o.View,{"className":"page"},l.default.createElement(u.default,{"title":"Avatar 头像"}),l.default.createElement(o.View,{"className":"doc-body"},l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"圆形头像"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"size":"small","image":e})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"image":e})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"size":"large","image":e}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"圆角矩形头像"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","image":e})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"image":e})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"large","image":e}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"圆形头像（支持文本）"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"size":"small","text":"凹"})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"text":"凹"})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"circle":!0,"size":"large","text":"凹"}))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"圆角矩形头像（支持文本）"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","text":"凹"})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"text":"凹"})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"large","text":"凹"}))))),n.default.getEnv()===n.default.ENV_TYPE.WEAPP&&l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"openData 头像（仅微信小程序支持）"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"example-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"openData":{"type":"userAvatarUrl"},"size":"small"})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"openData":{"type":"userAvatarUrl"}})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"large","openData":{"type":"userAvatarUrl"}})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"large","circle":!0,"openData":{"type":"userAvatarUrl"}})))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),AvatarPage}();t.default=c},"60":function(e,t,a){e.exports=a(0)(18)},"61":function(e,t,a){e.exports=a(64)()},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=a(1);_interopRequireDefault(l),_interopRequireDefault(a(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var o=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":n(e))){var t="";return Object.keys(e).forEach(function(a){var r=a.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[a]+";"}),t}return e&&"string"==typeof e?e:""},i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,l.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":n(e))&&t&&"object"===(void 0===t?"undefined":n(t))?Object.assign({},e,t):o(e)+o(t)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"63":function(e,t,a){e.exports=a(0)(19)},"64":function(e,t,a){"use strict";var r=a(65);function emptyFunction(){}e.exports=function(){function shim(e,t,a,n,l,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"65":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"66":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(1),l=(_interopRequireDefault(n),_interopRequireDefault(a(2))),o=_interopRequireDefault(a(61)),i=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(67);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":o.default.string}},"67":function(e,t,a){}}]);