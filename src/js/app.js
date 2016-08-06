var ua = require('universal-analytics');
var visitor = ua('UA-71079130-1');
visitor.pageview("/").send();