let country = 0;

$.ajax({
    type:"POST",
    url: "getImage.php",
    success: function(data) {
        $("#imageHolder").append("<img src='../Countries%20Info/Countries/" + data  + "'>")
    }
})


