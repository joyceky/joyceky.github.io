$(document).ready(function () {
    randomInterest();
});


function randomInterest() {
  var myInterests = ['building neat stuff', 'warm wooly socks', 'quiet museums', 'passport stamps',
                      'art and design', 'new web technologies', 'peat smoke','snuggling my cat',
                      'everything to do with the Internet', 'Netflix binges' , 'typography',
                      'spotty bananas', 'Argentinian wine', 'baking bread and pastries',
                      'knitting lopsided hats', 'martial arts movies','creating digital art',
                      'astrophotography', 'alien civilizations', 'buttered toast',
                      'meeting new people',  'garden gnomes', 'landscape photography',
                      'hiking through clouds', 'exploring the Multiverse' ];

  var i = setInterval(function() {
  var num = Math.floor( Math.random() * (myInterests.length-1) );
  $('#interests').html( myInterests[ num ] );
}, 2500);
}
