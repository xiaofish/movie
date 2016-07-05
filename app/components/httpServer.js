/**
 * Created by 微软中国 on 2016/6/12.
 */
angular.module('myApp.service',[])
	.service('httpService',['$window',function($window){
		this.jsonp = function(url,params,callback){
			var cbName = 'jsonp_'+(Math.random()*Math.random()).toString().substr(2);
			window[cbName] = function(data){
				callback(data);
				document.body.removeChild(scriptElement);
			};
			var querystring = '';
			for(var k in params){
				querystring +=k+'='+params[k]+'&';
			}
			querystring +='callback='+cbName;
			url +='?'+querystring;

			var scriptElement = document.createElement('script');
			scriptElement.src = url;
			document.body.appendChild(scriptElement);
		}
	}]);
