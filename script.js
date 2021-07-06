$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //check if page is scrolled greater than 100px
      $('.scroll-top').fadeIn();    //if this happens, fadein the button
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0    //when user clicks on button, scroll to top of the page to 0px
    }, 100);
    return false;
  });

});


main()

$('#othercountrydatabox').hide()
$('#othercountrybtn').show()
function main() {

  $('#othercountrydatabox').hide()
  var url = "https://api.covid19api.com/summary"
  var globaldata = ''
  var countrydata = ''
  $.get(url, function (data) {
    //  console.log(data.Global)

    globaldata = `<td> ${data.Global.TotalConfirmed}</td>
           <td> ${data.Global.TotalConfirmed - data.Global.TotalRecovered - data.Global.TotalDeaths}</td>
           <td> ${data.Global.TotalRecovered}</td>
           <td> ${data.Global.TotalDeaths}</td>
           <td> ${data.Global.NewConfirmed}</td>
           <td> ${data.Global.NewRecovered}</td>
           <td> ${data.Global.NewDeaths}</td>
          `
    $("#data").html(globaldata)

    countrydata = `<td> ${data.Countries[76].TotalConfirmed}</td>
         <td> ${data.Countries[76].TotalConfirmed - data.Countries[76].TotalRecovered - data.Countries[76].TotalDeaths}</td>
         <td> ${data.Countries[76].TotalRecovered}</td>
         <td> ${data.Countries[76].TotalDeaths}</td>
         <td> ${data.Countries[76].NewConfirmed}</td>
         <td> ${data.Countries[76].NewRecovered}</td>
         <td> ${data.Countries[76].NewDeaths}</td>
        `
    $("#countrydata").html(countrydata)
    console.log(data.Countries)
    console.log(data.Global)
  })
}
function othercountrydata() {
  $('#othercountrybtn').hide()
  $('#othercountrydatabox').show()
  var url = "https://api.covid19api.com/summary"
  //  var otherdata=''
  $.get(url, function (data) {
   
    for (let index = 0; index < 192; index++) {
      var table = document.getElementById("newtable");
      var row = table.insertRow(index + 1)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      cell1.innerHTML = data.Countries[index].Country
      cell2.innerHTML = data.Countries[index].TotalConfirmed
      cell3.innerHTML = data.Countries[index].TotalConfirmed - data.Countries[index].TotalDeaths - data.Countries[index].TotalRecovered
      cell5.innerHTML = data.Countries[index].TotalDeaths
      cell4.innerHTML = data.Countries[index].TotalRecovered
    }
  })

}
function RefreshData() {
  clearData()
  main()
  $('#othercountrybtn').show()
}
function clearData() {
  $("#data").empty
}
