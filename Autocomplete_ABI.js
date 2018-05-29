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

    $("input[id^='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl00_ctl00_ctl00_ctl04_ctl00_ctl00_TextField']").autocomplete({
      source: availableTags
    });
      $("select[id^='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl01_ctl00_ctl00_ctl04_ctl00_Lookup']").attr('style', "display:none")
      $("select[id^='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl01_ctl00_ctl00_ctl04_ctl00_Lookup']").after("<div id='Candidate'/>")
    
      $("input[id^='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl00_ctl00_ctl00_ctl04_ctl00_ctl00_TextField']").focusout(function() {
        
      var d = $("input[id^='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl00_ctl00_ctl00_ctl04_ctl00_ctl00_TextField']").val();

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
                          $("select[id*='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl01_ctl00_ctl00_ctl04_ctl00_Lookup'] option:contains('"+results+"')").attr('selected', true);  
                          $( "#Candidate" ).text(results).css( "color", "black" );
                      }
                      else
                      {
                        $("select[id*='ctl00_ctl40_g_8f84096e_823d_473a_a686_49a2fe5682e3_ctl00_ctl02_ctl01_ctl00_ctl00_ctl04_ctl00_Lookup']").val(0);
                        $( "#Candidate" ).text("Invalid candidate id!!! Please try again and select a valid candidate id").css( "color", "red" );
                      }                           
              },
              error: function (data) {
                  console.log("Error: "+ data);
              }
      });  

     
    });

  });
  </script>