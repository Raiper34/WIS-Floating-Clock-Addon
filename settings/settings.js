/**
 * Settings.js
 * @Author: Filip Raiper34 Gulan
 * @email: raipergm34@gmail.com
 * @web: http://www.raiper34.net
 */

$(document).ready(function() {
  chrome.storage.sync.get('allow', function(data) {
      $('#allowCheckbox').prop('checked', data.allow);
  });
  $('#saveButton').click(function() {
    chrome.storage.sync.set({ allow: $('#allowCheckbox').prop('checked')});
  })
});