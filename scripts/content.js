/**
 * Content.js
 * @Author: Filip Raiper34 Gulan
 * @email: raipergm34@gmail.com
 * @web: http://www.raiper34.net
 */

$(document).ready(function(){
  chrome.storage.sync.get('allow', function(data) {
    if(data.allow) {
      $('#clock')
        .css('font-size', '16px')
        .css('font-weight', '700')
        .css('position', 'fixed')
        .css('right', '10px')
        .css('top', '50px')
        .css('color', 'white')
        .css('background-color', '#3498db')
        .css('padding', '5px')
        .css('border-radius', '5px');
    }
  });
});
