/*
 * jQuery AutoColumnList Plugin
 * Version: 1.0.2 (03/29/2011)
 * Requires: jQuery v1.3.2 or later
 * Repository: https://github.com/Neolot/jQuery.AutoColumnList
 * License: MIT, http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2011-2014 Yury Pokhylko aka Neolot
 * Author URI: http://neolot.com
 */

(function($) {
    var defaults = {
        columns: 4,
        classname: 'column',
        min: 1
    };

    $.fn.autocolumnlist = function(params){
        var options = $.extend({}, defaults, params);
        return this.each(function() {
            var els = $(this).find('> li');
            var dimension = els.size();
            if (dimension > 0) {
                var elCol = Math.ceil(dimension/options.columns);
                if (elCol < options.min) {
                    elCol = options.min;
                }
                var start = 0;
                var end = elCol;
                
                for (i=0; i<options.columns; i++) {
                    if ((i + 1) == options.columns) {
                        els.slice(start, end).wrapAll('<div class="'+options.classname+' last" />');
                    } else {
                            els.slice(start, end).wrapAll('<div class="'+options.classname+'" />');
                    }
                    start = start+elCol;
                    end = end+elCol;
                }
            }
        });
    };
})(jQuery);
