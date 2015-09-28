// UMD dance - https://github.com/umdjs/umd
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }
})(this, function($) {
    'use strict';


    var defaults = {};

    /**
     * @constructor
     * @ignore
     */
    var JquerySidenav = function JquerySidenav (element, options) {
        this.$el     = $(element);
        this.options = options;

        this.init();
        this.addEventListeners();
    };

    /** @access private */
    JquerySidenav.prototype.init = function init() {

    };

    /** @access private */
    JquerySidenav.prototype.addEventListeners = function addEventListeners() {

    };


    /**
     * @class
     * @name jQuery.fn.jquery.sidenav
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
    $.fn.jquery.sidenav  = function (settings) {
        /**
         * @memberOf jQuery.fn.jquery.sidenav
         * @property {Object} options - Settings passed to the function merged with $.fn.jquery.sidenav.defaults
         * @private
         */
        var options = $.extend(true, {}, $.fn.jquery.sidenav.defaults, settings);

        return this.each(function() {
            return new JquerySidenav(this, options);
        });

    };

    /**
     * @name jQuery.fn.jquery.sidenav.defaults
     * @memberOf jQuery.fn.jquery.sidenav
     * @description Default options
     * @public
     */
    $.fn.jquery.sidenav.defaults = defaults;

    /**
     * @name jQuery.fn.jquery.sidenav.JquerySidenav
     * @memberOf jQuery.fn.jquery.sidenav
     * @public
     */
    $.fn.jquery.sidenav.JquerySidenav = JquerySidenav;

});
