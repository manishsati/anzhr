  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="https://jqueryui.com//resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
$( function() {
    var availableTags=function() {
        var results=null;
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                async: false,
                url: siteurl + "/_api/web/lists/getbytitle('Role%20&%20Talent%20Segment')/items?$select=Title,TalentSegment&$top=1000",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                        if (data.d.results.length > 0 ) {
                        results=data.d.results
                        }       
                },
                error: function (data) {
                    alert("Error: "+ data);
                }
        });  
          return results
        }();


    $("input[id^='roles']").autocomplete({
      source: availableTags.map(function(i){return i.Title})
    });
    $("input[id^='talentsegment']").autocomplete({
      source: jQuery.unique(availableTags.map(function(i){return i.TalentSegment}))
    });
  } );
  </script>