describe('SPL jQuery sidenav Plugin', function() {

    var $sidenav;

    beforeEach(function() {
        /** MAGIc */
    });

    it('should be a jQuery plugin', function() {
        $sidenav = $('body').sidenav();
        expect($sidenav.jquery).toBeTruthy();
    });

});