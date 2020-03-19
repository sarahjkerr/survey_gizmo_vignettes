//change the question elements (#sge-...) with relevant ones
$(document).ready(function(){
  var eventDateField = "#sgE-5504474-5-10-element";
  
  var updateEndDateTime = function() {
    var rawEventDate = $('#sgE-5504474-5-10-element');
    var eventDate = rawEventDate.val();
    
    var rawEndTime = $('#sgE-5504474-5-27-element');
    var endTime = rawEndTime.val();
    
    if(endTime.length == 0) {
      $('.sfdcEndDateTime input[type=text]').val('');
      return;
    }
    
    var endDateTimeString = eventDate.concat(" ", endTime);
    var endDateTime = new Date(endDateTimeString);
    var isoEndDateTime = endDateTime.toISOString();    
    var sfdcEndDateTime = isoEndDateTime.replace("Z", "-00:00");
    console.log(sfdcEndDateTime);
    
    $('.sfdcEndDateTime input[type=text]').val(sfdcEndDateTime).addClass('sfdcEndDateTime');
  };
  
  var updateStartDateTime = function() {
    var rawEventDate = $('#sgE-5504474-5-10-element');
    var eventDate = rawEventDate.val();
    var rawStartTime = $('#sgE-5504474-5-26-element');
    var startTime = rawStartTime.val();
    
    if(startTime.length == 0) {
      $('.sfdcStartDateTime input[type=text]').val('')
      return;
    }
    
    var startDateTimeString = eventDate.concat(" ",startTime);
    var startDateTime = new Date(startDateTimeString);
    var isoStartDateTime = startDateTime.toISOString();
    var sfdcStartDateTime = isoStartDateTime.replace("Z","-00:00");
    console.log(sfdcStartDateTime);
    
    $('.sfdcStartDateTime input[type=text]').val(sfdcStartDateTime).addClass('sfdcStartDateTime');
  }
  
  var updateStartAndEndDateTimes = function() {
    updateStartDateTime();
    updateEndDateTime();
  }
  
  $("#sgE-5504474-5-27-element").change(updateEndDateTime);
  
  $('#sgE-5504474-5-26-element').change(updateStartDateTime);
  
  $(eventDateField).change(updateStartAndEndDateTimes)
});
