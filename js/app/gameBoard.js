define(['jquery', 'mediator/mediator', 'app/eventDefinitions'], function ($, mediator, eventDefinitions) {

	"use strict";
	
    var init, updateState, calculateNextStateForCell, calculateNeightbors, onCellChanged, updateBoard;

    var boardState, width = 0,
        height = 0;

    init = function (initialWidth, initialHeight) {
        width = initialWidth;
        height = initialHeight;
        boardState = [];

        var count = width * height;
        while (count--) {
            boardState.push(false);
        }

        mediator.subscribe(eventDefinitions.cellStateChanged, onCellChanged);
        mediator.publish(eventDefinitions.blankBoardRequested, width, height);
    };

    onCellChanged = function (i, j) {
        var index = i * width + j;
        boardState[index] = !boardState[index];
    };

    updateBoard = function (currentBoard) {
        var nextBoard = [];

        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                var currentState = currentBoard[(i * width) + j];
                var nextState = calculateNextStateForCell(i, j, currentState, currentBoard);
                nextBoard.push(nextState);
        	}
		}

        return nextBoard;
    };

    updateState = function () {
        boardState = updateBoard(boardState);
        mediator.publish(eventDefinitions.boardChanged, boardState);
    };

    calculateNextStateForCell = function (i, j, currentState, board) {
        var neightbors = calculateNeightbors(i, j, board);
        return (currentState && (neightbors == 2 || neightbors == 3)) || (!currentState && neightbors == 3);
    };

    calculateNeightbors = function (i, j, board) {
        var count = 0;

        var movementVector = [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ];

        var movementCount = movementVector.length;

        for (var p = 0; p < movementCount; p++) {
            var delta = movementVector[p];

            var deltaX = i + delta[0];
            var deltaY = j + delta[1];

            if (deltaX < 0 || deltaX >= height || deltaY < 0 || deltaY >= width) {
                continue;
            }

            count += board[(deltaX * width) + deltaY] ? 1 : 0;
        }

        return count;
    };

    return {
        init: init,
        updateState: updateState,
        updateBoard: updateBoard
    };

});