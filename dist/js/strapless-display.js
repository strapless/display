/**
 * Determines which breakpoint is currently active.
 *
 * @returns {jQuery}
 */
jQuery.fn.extend( {
  isBreakpoint: function ( points ) {
    var test  = false;
    var $body = $( 'body' );
    var cls = ' d-none d-sm-none d-md-none d-lg-none d-xl-none';
    if ( !points.constructor === Array ) { points = [ points ]; }
    $.each( points, function ( index, alias ) {
      if ( !$body.find( '.detect-' + alias ).length ) {
        var tCls = 'detect-' + alias + cls;
        tCls = (alias === 'xs') ? tCls.replace('d-none','d-inline') : tCls.replace(alias + '-none',alias + '-inline');
        $body.append( '<span class="' + tCls + '"></span>' );
      }
      if ( $( '.detect-' + alias ).first().is( ':visible' ) ) {
        test = true;
        return false;
      }
    } );
    return test
  }
} );