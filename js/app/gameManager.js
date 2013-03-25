define(['jquery', 'require', 'mediator/mediator', 'app/eventDefinitions', 'app/gameBoard', 'app/gameRender'], function ($, require, mediator, eventDefinitions) {

	"use strict";
	
    var init, bindButtons, bindCells, startSimulation, stopSimulation, evolve;

    var generationNumber = 0,
        gameBoard, gameRender, intervalId;

    init = function (domPlaceholder, width, height) {
        gameRender = require('app/gameRender');
        gameBoard = require('app/gameBoard');

        gameRender.init(domPlaceholder);
        gameBoard.init(width, height);

        bindButtons();
        bindCells();
    };

    bindButtons = function () {
        $("#startButton").on("click", startSimulation);
        $("#advanceOneButton").on("click", evolve);
    };

    bindCells = function () {
        $('.row div').click(function () {
            var $cell = $(this);

            var i = $cell.data("cell-i");
            var j = $cell.data("cell-j");

            mediator.publish(eventDefinitions.cellStateChanged, i, j, $cell);
        });
    };

    evolve = function () {
        gameBoard.updateState();
        generationNumber++;
        $("#generationCounter").text(generationNumber);
    };

    startSimulation = function () {
        $("#stopButton").removeClass("disabled");
		$("#startButton").addClass("disabled");
        $("#advanceOneButton").addClass("disabled");

		$("#stopButton").on("click", stopSimulation);
		$("#startButton").off("click");
        $("#advanceOneButton").off("click");

        intervalId = window.setInterval(evolve, 500);
    };

    stopSimulation = function () {
        $("#stopButton").addClass("disabled");
		$("#startButton").removeClass("disabled");
        $("#advanceOneButton").removeClass("disabled");

		$("#stopButton").off("click");
		$("#startButton").on("click", startSimulation);
        $("#advanceOneButton").on("click", evolve);

        window.clearInterval(intervalId);
    };

    return {
        init: init
    };

});