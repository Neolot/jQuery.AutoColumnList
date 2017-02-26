/*!
 * jQuery AutoColumnList Plugin
 * Version: 1.2.0 (02/26/2017)
 * Requires: jQuery v1.8 or later
 * Repository: https://github.com/Neolot/jQuery.AutoColumnList
 * License: MIT, http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2011-2017 Yuriy Pokhylko
 * Author URI: https://neolot.com
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
            var data_parameters = $(this).data();
            if ( data_parameters ) {
                $.each(data_parameters, function (key, value) {
                    options[key] = value;
                });
            }

            var els = $(this).find('> li');
            var dimension = els.length;
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
