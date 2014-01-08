var lotto = { 
    max : 37,
    num : 6,
    mega: 7
};
var results= [];

function lottery() {
    var numbers = [];
    for (var i= lotto.max; i > 0; i--){
        numbers.push(i);
    }
    numbers.sort(
        function(){
            return (Math.round(Math.random())-0.5);
        }
    );
    results= numbers.slice(0,lotto.num);
    results.push( (Math.round(Math.random() * 10000000000 ) % 7 ) + 1 );
}
lottery();


$(function() {
  for(var i=1; i<8; i++){
  	$( ".ballWrapper:nth-child(" + i + ") .number" ).text(results[i-1]);
  	
  }
});