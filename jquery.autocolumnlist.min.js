/*!
 * jQuery AutoColumnList Plugin
 * Version: 1.2.0 (02/26/2017)
 * Requires: jQuery v1.8 or later
 * Repository: https://github.com/Neolot/jQuery.AutoColumnList
 * License: MIT, http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2011-2017 Yuriy Pokhylko
 * Author URI: https://neolot.com
 */
!function(n){var a={columns:4,classname:"column",min:1};n.fn.autocolumnlist=function(l){var s=n.extend({},a,l);return this.each(function(){var a=n(this).data();a&&n.each(a,function(n,a){s[n]=a});var l=n(this).find("> li"),c=l.length;if(c>0){var t=Math.ceil(c/s.columns);t<s.min&&(t=s.min);var e=0,u=t;for(i=0;i<s.columns;i++)i+1==s.columns?l.slice(e,u).wrapAll('<div class="'+s.classname+' last" />'):l.slice(e,u).wrapAll('<div class="'+s.classname+'" />'),e+=t,u+=t}})}}(jQuery);