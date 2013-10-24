var require = {
    "paths": {
        "jquery": "./lib/jquery-1.9.1",
        "underscore": "./lib/underscore",
        "backbone": "./lib/backbone",
        "jquery-scrollstop": "./lib/jquery.scrollstop",
        "queryparams": "./lib/backbone.queryparams",
        "definition-view": "./views/sidebar/definition-view",
        "sub-head-view": "./views/header/sub-head-view",
        "sidebar-module-view": "./views/sidebar/sidebar-module-view",
        "toc-view": "./views/drawer/toc-view",
        "sidebar-view": "./views/sidebar/sidebar-view",
        "sidebar-head-view": "./views/sidebar/sidebar-head-view",
        "reg-view": "./views/main/reg-view",
        "konami": "./lib/konami",
        "analytics-handler": "./views/analytics-handler-view",
        "header-view": "./views/header/header-view",
        "section-footer-view": "./views/main/section-footer-view",
        "drawer-view": "./views/drawer/drawer-view",
        "history-view": "./views/drawer/history-view",
        "search-view": "./views/drawer/search-view",
        "sxs-list-view": "./views/sidebar/sxs-list-view",
        "sidebar-list-view": "./views/sidebar/sidebar-list-view",
        "sxs-view": "./views/breakaway/sxs-view",
        "search-results-view": "./views/main/search-results-view",
        "main-view": "./views/main/main-view",
        "permalink-view": "./views/sidebar/permalink-view"
    },
    "shim": {
        "underscore": {
            "deps": [
                "jquery"
            ],
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "konami": {
            "exports": "Konami"
        }
    }
};
