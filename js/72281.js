(function(){
    var _qha_data = {};
    _qha_data['domain']=72281;
    _qha_data['e360']='1390215400';
    _qha_data['pageClk']=["http:\/\/www.leasom.com","http:\/\/www.leasom.com\/web.html","http:\/\/www.leasom.com\/app.html","http:\/\/www.leasom.com\/wechat.html","http:\/\/www.leasom.com\/sys.html","http:\/\/www.cccuu.com\/Home\/Case\/index.html","http:\/\/www.cccuu.com\/team.html","http:\/\/www.cccuu.com\/Home\/News\/index.html","http:\/\/www.cccuu.com\/about.html"];
    _qha_data['urlClk']=0;
    _qha_data['idClk']=null;
    _qha_data['mvid']='289527';
    _qha_data['host']='s.union.360.cn';
    window._qha_data = _qha_data;
    var element=document.createElement('script');
    element.type='text/javascript';
    element.async=true;
    var src="http://s3.qhres.com/static/63ef9c2972a1a5f9.js";
    if(document.location.protocol === 'https:'){
        src = src.replace(/http:\/\/([s|p])[0-9].(qhimg|qhres).com/, 'https://$10.ssl.qhimg.com');
    }
    element.src = src;
    var node=document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(element, node);

    var _ping = window.location.protocol + '//'+ _qha_data['host'] +'/s.gif'; //打点需要//发送到的地址
    var _img  = new Image();
    _img.src  = _ping + '?et=99&t=' + (+new Date()) + '&si=' + _qha_data.domain;
})();

