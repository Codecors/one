// UMD dance - https://github.com/umdjs/umd
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';


    var defaults = {};

    /**
     * @constructor
     * @ignore
     */
    var SideNav = function SideNav(element, options) {
        this.$el = $(element);
        this.options = options;

        this.init();
        this.addEventListeners();
    };

    /** @access private */
    SideNav.prototype.init = function init() {

    };

    /** @access private */
    SideNav.prototype.addEventListeners = function addEventListeners() {

    };


    /**
     * @class
     * @name jQuery.fn.sidenav
     * @memberOf jQuery.fn
     * @example
     *    $('.jquery.sidenav').jquery.sidenav({
     *
     *    });
     *
     * @description My fancy plugin description
     * @param {Object} settings
     * @return {Object} jQuery
     */
    $.fn.sidenav = function (settings) {
        /**
         * @memberOf jQuery.fn.sidenav
         * @property {Object} options - Settings passed to the function merged with $.fn.sidenav.defaults
         * @private
         */
        var options = $.extend(true, {}, $.fn.sidenav.defaults, settings);

        return this.each(function () {
            return new SideNav(this, options);
        });

    };

    /**
     * @name jQuery.fn.sidenav.defaults
     * @memberOf jQuery.fn.sidenav
     * @description Default options
     * @public
     */
    $.fn.sidenav.defaults = defaults;
}));
