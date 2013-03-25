define(["jquery", "underscore", "mediator/mediator", "app/eventDefinitions"], function ($, _, mediator, eventDefinitions) {

	"use strict";
	
    var init, onBlankBoardRequested, domElement, onBoardChanged, updateCell, renderGameBoard, invertCell;

	var width = 0, height = 0;
	
    var boardTemplate = "<% for(var i = 0; i < height; i++){ %><div class='row'><% for(var j = 0; j < width; j++){ %><div class='span1 cell' data-cell-i='<%= i %>' data-cell-j='<%= j %>'>&nbsp;</div><% } %></div><% } %>";

    init = function (domSelector) {
        domElement = domSelector;

        mediator.subscribe(eventDefinitions.blankBoardRequested, onBlankBoardRequested);
        mediator.subscribe(eventDefinitions.cellStateChanged, invertCell);
        mediator.subscribe(eventDefinitions.boardChanged, onBoardChanged);
    };

    onBoardChanged = function (board) {
        var $cells = $(domElement + " .cell");

        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                var cellState = board[i * width + j];
                var cell = $cells[i * width + j];
                updateCell(cell, cellState);
            }
        }
    };

    invertCell = function (i, j, $cell) {
        if ($cell.hasClass("live")) {
            $cell.removeClass("live");
        } else {
            $cell.addClass("live");
        }
    };

    updateCell = function (cell, state) {
        if (state === true) {
            $(cell).addClass("live");
        } else {
            $(cell).removeClass("live");
        }
    };

    renderGameBoard = function (boardWidth, boardHeight, domLocation) {
        var template = _.template(boardTemplate);
        var html = template({
            'width': boardWidth,
            'height': boardHeight
        });
        $(domLocation).html(html);
    };

    onBlankBoardRequested = function (boardWidth, boardHeight) {
        width = boardWidth;
        height = boardHeight;
        renderGameBoard(width, height, domElement);
    };

    return {
        init: init,
        renderGameBoard: renderGameBoard
    };

});