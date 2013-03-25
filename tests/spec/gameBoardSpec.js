define(['require', 'app/gameBoard'], function (require) {
    return describe("gameBoard Module Tests >>", function () {

        it("Should apply Rule #1: A living cell with no neightbours dies", function () {

            var board = require('app/gameBoard');

            var initialBoard = [
                    false, false, false,
                    false, true, false,
                    false, false, false
            ];

            var expectedBoard = [
                    false, false, false,
                    false, false, false,
                    false, false, false
            ];

            board.init(3, 3);

            var obteinedBoard = board.updateBoard(initialBoard);

            expect(obteinedBoard).toEqual(expectedBoard);
        });

        it("Should apply Rule #2: A dead cell with two neightbours survives", function () {
            var board = require('app/gameBoard');

            var initialBoard = [
                    false, false, false,
                    true, true, true,
                    false, false, false
            ];

            var expectedBoard = [
                    false, true, false,
                    false, true, false,
                    false, true, false
            ];

            board.init(3, 3);

            var obteinedBoard = board.updateBoard(initialBoard);

            expect(obteinedBoard).toEqual(expectedBoard);
        });

        it("Should apply Rule #3: A cell with more than three neightbours dies of overpopulation", function () {
            var board = require('app/gameBoard');

            var initialBoard = [
                    true, true, false,
                    true, true, true,
                    false, false, false
            ];

            var expectedBoard = [
                    true, false, true,
                    true, false, true,
                    false, true, false
            ];

            board.init(3, 3);

            var obteinedBoard = board.updateBoard(initialBoard);

            expect(obteinedBoard).toEqual(expectedBoard);
        });
    });
});