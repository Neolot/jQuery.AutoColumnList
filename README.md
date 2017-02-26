jQuery.AutoColumnList
=====================
This simple jQuery-plugin divides lists into columns.

##Options##

* **columns** — columns number (default: 4)
* **classname** — column class, several classes need to divide the spaces (default: column)
* **min** — minimal number of columns (default: 1)

Also you can specify options via data-parameters: data-columns, data-classname, data-min.

##Example##

    <script type="text/javascript">
        (function($) {
            $(function() {
                $('#ol, #ul, .ol, .ul, ol, ul').autocolumnlist({
                    columns: 5,
                    classname: 'col',
                    min: 3
                });
            })
        })(jQuery)
    </script>
    
Other examples look inside the DEMO folder.
