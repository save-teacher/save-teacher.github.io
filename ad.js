var addata = [];
addata[1]={'title': '广告位招租啦', 'excerpt': '详情请看...', 'href': '404.html'}
function ad(){
  var choose = addata[Math.floor(Math.random()*addata.length)];
  return '\n\
  <li class="post">\n\
      <h4><a href="'+choose['href']+'">'+choose['title']+'</a></h4>\n\
      <p></p><p>'+choose['excerpt']+'</p>\n\
\n\
<p></p><p style="font-size: 0.01px;">广告</p>\n\
    </li>';
}

