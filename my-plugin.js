jQuery.fn.imageAltAdder = function() { 
    var alt = this.attr ('alt');
    return this.after ('<span>'+alt+'</span>');
}; 
