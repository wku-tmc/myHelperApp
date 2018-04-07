
var data = ["Apple", "Banana", "Carrot"];

function showList() {
  $('#list').empty();
  $(data).each(function (i, item) {
    $('#list').append('<li>' + item + '</li>');
  });
  $('#list').listview('refresh');
}
