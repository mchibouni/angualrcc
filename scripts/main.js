var app = angular.module('angularCCModule', [])

app
	.controller('DemoCtrlOne', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

		$scope.overallFilter = { 'name' : '', 'description' : ''};


		$scope.getQuizzes = ! function(){

			$http.get('https://demo2515969.mockable.io/angualrcc').then(function(response){
				$scope.quizzes = response.data;	
			})

		}()


	}])
	.controller('DemoCtrlTwo', ['$scope', function($scope) {

	}])
	.controller('DemoCtrlThree', ['$scope', function($scope) {

	}])
	.directive('ngStrLength', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				
				var text = iAttrs.toto;

				if (text.length < 5) {
					iElement.css({'color' : 'red'});
				}
				else {
					iElement.css({'color' : 'blue'});
				}

			}
		};
	}])