var questions = {};

questions.BaseQuestion = function(id, formHandler, botHandler) {
	this.id = id;
	this.onTransition = function() {};
	this.onInput = function(input) {};
}