!function(){"use strict";function e(e,t,r,n,o){function i(e){r.openURLContent(e.data)}t.getDescription=function(e){var t=e.name;return e.description&&(t=e.description,t.indexOf("{{")>-1&&t.indexOf("}}")>-1&&(t=t.replace("{{","").replace("}}",""),t=window.cronapi.i18n.translate(t,[]))),t},t.cloneElement=function(e){return angular.copy(e)},t.isVisibleParam=function(e){return"DATA_LIMIT"!=e.name&&(""===e.value||""==e.value)};var c=n.reportName.match(/\/(.*?)(.*?)(\.jrxml|\.report)/);t.report=n,t.report.name=c[2],t.htmlParameters=o,t.onPrint=function(){t.report.reportName.endsWith(".report")?r.openStimulsoftReport(t.report.contentData,t.report.parameters,t.report.datasourcesInBand):r.getPDFAsFile(t.report).then(i)},t.onCancel=function(){e.dismiss("cancel")}}angular.module("custom.controllers").controller("ParameterController",e).filter("trusted",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]).directive("compile",["$compile","$timeout",function(e,t){return{restrict:"A",link:function(r,n){t(function(){e(n.contents())(r)})}}}]).directive("formatDate",function(){return{require:"ngModel",link:function(e,t,r,n){n.$formatters.push(function(e){return e?new Date(e):null})}}}),e.$inject=["$modalInstance","$scope","ReportService","report","htmlParameters"]}();