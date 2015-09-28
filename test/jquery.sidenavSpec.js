describe('SPL jQuery jquery.sidenav Plugin', function() {

    var $jquery.sidenav;

    beforeEach(function() {
        /** MAGIc */
    });

    it('should be a jQuery plugin', function() {
        $jquery.sidenav = $('body').jquery.sidenav();
        expect($jquery.sidenav.jquery).toBeTruthy();
    });

});