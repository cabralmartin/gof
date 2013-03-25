requirejs.config({

    baseUrl: 'js/ext',

    paths: {
        app: '../app',
		underscore: 'underscore/underscore'
    },

	shim: {
		underscore: {
			exports: '_'
		}
	}
	
});

// Start the main app logic.
requirejs(['jquery', 'app/gameManager'],
function ($, gameManager) {
	gameManager.init("#gridPlaceholder", 20, 20);
});