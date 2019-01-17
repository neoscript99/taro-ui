(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"219":function(e,t,n){},"54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),o=n(60),l=_interopRequireDefault(n(66));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(219);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));e.config={"navigationBarTitleText":"Taro UI"},e.handleChange=function(t){var n=t.detail.value;e.setState({"year":e.state.years[n[0]],"month":e.state.months[n[1]],"day":e.state.days[n[2]],"value":n})};for(var t=new Date,n=[],r=[],a=[],i=1990;i<=t.getFullYear();i++)n.push(i);for(var o=1;o<=12;o++)r.push(o);for(var l=1;l<=31;l++)a.push(l);return e.state={"years":n,"year":t.getFullYear(),"months":r,"month":2,"days":a,"day":2,"value":[9999,5,17],"isWeapp":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=a.default.getEnv();this.setState({"isWeapp":e===a.default.ENV_TYPE.WEAPP,"isAlipay":e===a.default.ENV_TYPE.ALIPAY})}},{"key":"render","value":function render(){var e=this.state,t=e.years,n=e.months,r=e.days,a=e.value,u=e.year,s=e.month,c=e.day,f=e.isWeapp,p=e.isAlipay;return i.default.createElement(o.View,{"className":"page"},i.default.createElement(l.default,{"title":"Picker View 滚动选择器"}),i.default.createElement(o.View,{"className":"doc-body"},i.default.createElement(o.View,{"className":"panel"},i.default.createElement(o.View,{"className":"panel__title"},"基础用法"),i.default.createElement(o.View,{"className":"panel__content"},i.default.createElement(o.View,{"className":"example-item"},i.default.createElement(o.View,{"className":"example-item__desc"},"嵌入页面的滑动选择器"),f||p?i.default.createElement(o.View,null,i.default.createElement(o.View,{"className":"title-date"},u,"年",s,"月",c,"日"),i.default.createElement(o.PickerView,{"indicatorStyle":"height: 50px;","className":"picker","style":"width: 100%; height: 300px; text-align: center;","value":a,"onChange":this.handleChange},i.default.createElement(o.PickerViewColumn,null,t.map(function(e,t){return i.default.createElement(o.View,{"key":t,"style":"line-height: 50px"},e,"年")})),i.default.createElement(o.PickerViewColumn,null,n.map(function(e,t){return i.default.createElement(o.View,{"key":t,"style":"line-height: 50px"},e,"月")})),i.default.createElement(o.PickerViewColumn,null,r.map(function(e,t){return i.default.createElement(o.View,{"key":t,"style":"line-height: 50px"},e,"日")})))):i.default.createElement(o.View,{"className":"title-date"},"暂时仅支持微信小程序"))))))}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=u},"60":function(e,t,n){e.exports=n(0)(18)},"61":function(e,t,n){e.exports=n(64)()},"64":function(e,t,n){"use strict";var r=n(65);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"65":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),i=(_interopRequireDefault(a),_interopRequireDefault(n(2))),o=_interopRequireDefault(n(61)),l=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(67);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(l.View,{"className":"doc-header"},i.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":o.default.string}},"67":function(e,t,n){}}]);