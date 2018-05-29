<script type="text/javascript" src="../../SiteAssets/cdn/jquery-3.3.1.js"></script>
<script type="text/javascript" src="../../SiteAssets/cdn/jquery.SPServices-0.7.2.min.js"></script>
<script type="text/javascript">

$(document).ready(function() {
    $().SPServices.SPAutocomplete({
        sourceList: "{5EE19DF1-8331-4F09-9E6C-995223529491}",
        sourceColumn: "Title",
        columnName: "lookupname",
        ignoreCase: true,
        numChars: 3,
        slideDownSpeed: 1000,
        debug: true
    });
});
</script>