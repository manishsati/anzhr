  <link rel="stylesheet" href="../../siteassets/cdn/jquery-ui.css">
  <script src="../../siteassets/cdn/jquery-3.3.1.js"></script>
  <script src="../../siteassets/cdn/jquery-ui.js"></script>
  <script>
  $(function() {
    var availableTags=function() {
        var results=null;
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                async: false,
                url: siteurl + "/_api/web/lists/getbytitle('candidate%20&%20role%20information')/items?$select=Candidate_x0020_ID",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                        if (data.d.results.length > 0 ) {                                             
                            results=data.d.results.map(function(i){return i.Candidate_x0020_ID.toString()})
                        }                           
                },
                error: function (data) {
                  console.log("Error: "+ data);
                }
        });  
          return results
        }();

    $("input[id^='Title']").autocomplete({
      source: availableTags
    });
      $("select[id^='Candidate_x0020_Name']").val(0);
      $("select[id^='Candidate_x0020_Name']").attr('disabled', true);
      $("input[id^='Title']").focusout(function() {
        
      var d = $("input[id^='Title']").val();

      var siteurl = _spPageContextInfo.webAbsoluteUrl+ "/_api/web/lists/getbytitle('candidate%20&%20role%20information')/items?$select=Title&$filter=Candidate_x0020_ID%20eq%20"+d;
      $.ajax({
              async: false,
              url: siteurl,
              method: "GET",
              headers: { "Accept": "application/json; odata=verbose" },
              success: function (data) {
                      if (data.d.results.length > 0 ) 
                      {                                             
                          results=data.d.results.map(function(i){return i.Title})               
                          $("select[id^='Candidate_x0020_Name'] option:contains('"+results+"')").attr('selected', true);  
                      }
                      else
                      {
                        $("select[id^='Candidate_x0020_Name']").val(0);
                        alert("Invalid candidate id!!! Please try Again")
                      }                           
              },
              error: function (data) {
                  console.log("Error: "+ data);
              }
      });  

     
    });

  });
  </script>