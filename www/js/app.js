
var data = ["Apple", "Banana", "Carrot", "Durian", "Jack"];

function showList() {
  $('#list').empty();
  $(data).each(function (i, item) {
    $('#list').append('<li>' + item + '</li>');
  });
  $('#list').listview('refresh');
}

function addEntry() {
  console.log("adding entry ...");
  var activityname = $("#activity-name").val();
  data.push(activityname); //add item to list
  showList(); //refresh list
}