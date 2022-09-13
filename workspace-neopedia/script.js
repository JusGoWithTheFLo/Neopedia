/*--CONTACT FORM POST TO GOOGLE--*/
function postToGoogle() {
  var field1 = $("#IGN").val();
  var field2 = $("#email").val();
  var field3 = $("#discord-id").val();
  var field4 = $("#referrer").val();
  var field5 = $("#file").val();
  var field6 = $("#message").val();

  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSclPNMFoEircVF9je2LvovHbnOGBnNvj_xXt-6B02ZxbNa0UQ/formResponse",
      
    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.1572885822": field1,
      "entry.165319336": field2,
      "entry.1200198732": field3,
      "entry.311974235": field4,
      "entry.1111930695": field5,
      "entry.1826451949": field6
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      $('#form-contact-form').trigger('reset');
    },
    error: function (x, y, z) {
      $('#form-contact-form').trigger('reset');
    }
  });
  return false;
}