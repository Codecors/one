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


    var defaults = {animationSpeed: 500};

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
        this.$el.on('click', 'li a', function (e) {
            //Get the clicked link and the next element
            var $this = $(this);
            var checkElement = $this.next();

            //Check if the next element is a menu and is visible
            if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
                //Close the menu
                checkElement.slideUp(this.options.animationSpeed, function () {
                    checkElement.removeClass('menu-open');
                    //Fix the layout in case the sidebar stretches over the height of the window
                    //_this.layout.fix();
                });
                checkElement.parent('li').removeClass('active');
            }
            //If the menu is not visible
            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                //Get the parent menu
                var parent = $this.parents('ul').first();
                //Close all open menus within the parent
                var ul = parent.find('ul:visible').slideUp(this.options.animationSpeed);
                //Remove the menu-open class from the parent
                ul.removeClass('menu-open');
                //Get the parent li
                var parent_li = $this.parent('li');

                //Open the target menu and add the menu-open class
                checkElement.slideDown(this.options.animationSpeed, function () {
                    //Add the class active to the parent li
                    checkElement.addClass('menu-open');
                    parent.find('li.active').removeClass('active');
                    parent_li.addClass('active');
                });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is('.treeview-menu')) {
                e.preventDefault();
            }
        });
    };

    /** @access private */
    SideNav.prototype.addEventListeners = function addEventListeners() {

    };


    /**
     * @class
     * @name jQuery.fn.sidenav
     * @memberOf jQuery.fn
     * @example
     *    $('.sidenav').sidenav({
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
