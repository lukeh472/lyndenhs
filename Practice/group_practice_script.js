function ShowCountryOfSet(order,set,index) {
    $.ajax({
        data:{orderOfCountries:order,set:set,countryIndex:index},
        type:"POST",
        url: "getImage.php",
        success: function(data) {
            data = JSON.parse(data);
            if ($(".countryOfSet").length!=0) $(".countryOfSet").remove();
                
            $("body").append("<img class='countryOfSet'src='../Countries%20Info/Countries/" + data.country  + "'>");
        }
    })

}

ShowCountryOfSet(0,0,0)