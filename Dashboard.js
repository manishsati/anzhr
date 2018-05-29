  <link rel="stylesheet" href="../siteassets/cdn/jquery-ui.css">
  <script src="../siteassets/cdn/jquery-3.3.1.js"></script>
  <script src="../siteassets/cdn/jquery-ui.js"></script>
  <script>
  $(function() {
    var availableTags=function() {
        var results=null;
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                async: false,
                url: siteurl + "/_api/web/lists/getbytitle('candidate%20&%20role%20information')/items?$select=Title",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                        if (data.d.results.length > 0 ) {                                             
                            results=data.d.results.map(function(i){return i.Title.toString()})
                        }                           
                },
                error: function (data) {
                  console.log("Error: "+ data);
                }
        });  
          return results
        }();

    $("input[id^='ctl00_ctl40_g_f8026101_5f0c_4b3a_a851_aa9fb2966f5b_SPTextSlicerValueTextControl']").autocomplete({
      source: availableTags
    });
  });
  </script>