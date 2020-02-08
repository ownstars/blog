var poster_num = 66;
var index = Math.floor(new Date().getMilliseconds() % poster_num) + 1 + '';
document.getElementsByClassName("container")[0].innerHTML ='<img class="poster" src="/images/motivational/' + index + '.jpg">';


