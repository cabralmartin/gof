define(['require', 'jquery', 'app/gameRender'], function (require) {
    return describe("gameRender Module Tests >>", function () {

        beforeEach(function () {
            $("#gridTest").empty();
        });

        afterEach(function () {
            $("#gridTest").empty();
        });

        it("Should append the board to the DOM", function () {

            var render = require('app/gameRender');

            var boardHeight = 4;
            var boardWidth = 4;

            render.renderGameBoard(boardWidth, boardHeight, "#gridTest");

            var boardIsAppended = ($("#gridTest").children().length > 0);

            expect(boardIsAppended).toBe(true);

        });

        it("Should render a simetric game board", function () {

            var render = require('app/gameRender');

            var boardHeight = 4;
            var boardWidth = 4;

            render.renderGameBoard(boardWidth, boardHeight, "#gridTest");

            var rowCount = $(".row").length;
            var columnCount = $(".row").first().children().length;
            var cellCount = $(".cell").length;

            expect(rowCount).toEqual(boardHeight);
            expect(columnCount).toEqual(boardWidth);
            expect(cellCount).toEqual(boardWidth * boardHeight);

        });

        it("Should render an asimetric game board", function () {

            var render = require('app/gameRender');

            var boardHeight = 2;
            var boardWidth = 4;

            render.renderGameBoard(boardWidth, boardHeight, "#gridTest");

            var rowCount = $(".row").length;
            var columnCount = $(".row").first().children().length;
            var cellCount = $(".cell").length;


            expect(rowCount).toEqual(boardHeight);
            expect(columnCount).toEqual(boardWidth);
            expect(cellCount).toEqual(boardWidth * boardHeight);

        });

    });
});