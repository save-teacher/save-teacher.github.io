var addata = [];
addata[0]={'title': '广告位招租啦', 'excerpt': '详情请看...', 'address': 'https://save-teacher.github.io/2022/08/31/contact.html'}
function ad(){
  var choose = addata[Math.floor(Math.random()*addata.length)];
  return '\n\
  <li class="post">\n\
      <h4><a href="'+choose['address']+'">'+choose['title']+'</a></h4>\n\
      <p></p><p>'+choose['excerpt']+'</p>\n\
\n\
<p></p><p style="text-align:right;color:#FFE4B5;">广告</p>\n\
    </li>';
}

