kQ();iN();kK();oT();function iN(){var audio=document.getElementById('bible-audio').lastChild,p=document.getElementById('audio-download'),a=p.firstChild,aQ=audio.src||a.href,iQ=document.getElementById('bible'),qQ=iQ.childNodes[2],yK=document.getElementById('books'),xK=document.getElementById('chapter'),mH,uH='active',kT,tH,rB=1,qH,aN,jN=document.body.offsetWidth,eK,mE=[0,50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,5,5,3,5,1,1,1,16,16,13,6,6,4,4,5,3,6,4,3,1,13,22],nQ=document.getElementById('text'),eH=nQ.nextSibling,aH='/bible/sinod/',mp3Supported=true,dQ;if(audio.canPlayType&&audio.canPlayType('audio/mpeg')==''){mp3Supported=false;audio.parentNode.appendChild(audio.removeChild(p));}aQ=aQ.replace(/-[0-9]*\.mp3$/,'-');eK=location.href.slice(-3,-1);if(eK.charAt(0)=='l'){eK='40';}else if(eK.charAt(0)=='t'){eK='19';}else if(eK.charAt(0)=='0'){eK=eK.charAt(1);}tH=mE[eK];kT=document.createElement('span');kT.innerHTML='&times;';zH(qQ,function(){pK(qQ,yK);});var cH=yH('up',tB),kE=yH('down',wB);yK.appendChild(kE);if(tH>1){var qN;if(jN<336){qN=4;qH=12;}else if(jN<800){qN=5;qH=30;}else if(jN<981){qN=6;qH=48;}else{qN=6;qH=36;}if(tH>qH&&tH<=qH+qN){qH+=qN;}var str='<div id="chapters"><div><div>';if(tH>qH){if(eK!=19){str+='Главы:';}else{str+='Псалмы:';}}str+='</div></div>';aN=(qN-(tH%qN))%qN;var zE=tH;if(tH>qN&&tH<qH){zE+=aN;}for(var i=1;i<=zE&&i<=qH;i++){str+='<span';if(i<=tH){str+='>'+i;}else{str+=' class="a">'}str+='</span>';}str+='</div>';var div=document.createElement('div');div.innerHTML=str;iQ.appendChild(div);var mH=document.getElementById('chapters');if(tH>qH){if(jN<=799){mH.style.padding='32px 0 48px 0';}else{mH.style.padding='24px 0 44px 0';}var fE=yH('up',bB),pB=yH('down',cB);mH.appendChild(pB);}zH(iQ.childNodes[4],function(){aK(rB-1);});zH(iQ.childNodes[6],function(){aK(rB+1);});zH(xK,function(){pK(xK,mH);});zH(mH,nB);zH(audio,pH,'ended');}var iH=document.createElement('span');iH.innerHTML='Введение';zH(iH,bN);zH(nQ.firstChild,function(){dE(0);});zH(nQ.lastChild,function(){dE(1);});zH(eH.childNodes[2],function(){uB(cQ,eH,0,1000);});setTimeout(aB,2000);function jB(){return 2;}function dE(index){var e=nQ.childNodes[index];if(e.className!=uH){var eQ=nQ.childNodes[(index+1)%2],oQ,div=eH.firstChild;if(index==1){oQ='c';if(!div.hasChildNodes()){div.appendChild(iH);}iH.innerHTML='Введение';}else{oQ='';if(div.hasChildNodes()){div.removeChild(iH);}}e.className=uH;eQ.className='';if(yK.className==uH){yK.className='';qQ.className='';}pK(qQ,yK,false);if(xK){pK(xK,mH,false);}hK(hE(rB)+oQ+'/');}}function bN(){var jE;if(iH.innerHTML=='Введение'){iH.innerHTML=xK.innerHTML;hK('');}else{iH.innerHTML='Введение';hK(hE(rB)+'c/');}}function hB(xE,cK){for(var i=0;i<xE.length;i++){if(xE[i].innerHTML==cK){return xE[i];}}return null;}function aB(){var zQ=eH.childNodes[1],mK;if(zQ.contentWindow){mK=zQ.contentWindow.document.body;}else if(zQ.contentDocument){mK=zQ.contentDocument.body;}if(mK){eE(mK);mK.onresize=gB;}else{setTimeout(aB,10000);}}function gB(){if(dQ){clearTimeout(dQ);}dQ=setTimeout(function(){eE(this);},1000);}function eE(body){var mK=body,zQ=eH.childNodes[1],height=parseInt(zQ.height),gN=mK.scrollHeight;if(!gN||gN<mK.offsetHeight){gN=mK.offsetHeight;}if(gN>height||gN<(height-40)){gN+=20;zQ.height='470';zQ.height=gN.toString();}}function nB(hT){var nK=lE(hT);if(nK&&nK.nodeName=='SPAN'&&nK.className!='a'){aK(parseInt(nK.innerHTML));}}function aK(vE){pK(xK,mH,false);if(rB!=vE){rB=vE;xK.innerHTML=xK.innerHTML.replace(/[0-9]*$/,' '+vE);if(vE>1){iQ.childNodes[4].className=uH;}else{iQ.childNodes[4].className='';}if(vE<tH){iQ.childNodes[6].className=uH;}else{iQ.childNodes[6].className='';}var oQ='';if(eN(nQ.childNodes)[1]==1){oQ='c';iH.innerHTML='Введение';}hK(hE(vE)+oQ+'/');}pH(vE);}function pH(vE){var rK,play=false;if(vE&&!isNaN(vE)){rK=vE;}else{var m=audio.src.match(/-([0-9]+)\.mp3$/);if(m&&m.length>1){rK=parseInt(m[1]);if(!isNaN(rK)&&rK<tH){rK+=1;play=true;}else{return;}}else{return;}}var bT='';if(eK=='19'&&rK<=99){bT='0';}var url=aQ+bT+hE(rK)+'.mp3';if(audio.canPlayType){if(audio.src!=url){audio.src=url;audio.load();}if(mp3Supported){if(play){audio.play();}}else{a.href=url;}}else{a.href=url;}}function hE(yQ){if(yQ<10){return '0'+yQ;}return yQ.toString();}function hK(cN){var zQ=eH.childNodes[1];if(zQ.contentWindow){zQ.contentWindow.document.body.onresize=null;}else{zQ.contentDocument.body.onresize=null;}zQ.src=aH+hE(eK)+'/'+cN;setTimeout(aB,2000);}function eB(dN){var nE;if(dN){nE=Math.min(parseInt(dN.previousSibling.innerHTML),tH+aN-qH);}else{nE=Math.max(parseInt(mH.childNodes[1].innerHTML)-qH-1,0);}var pE;for(var i=1;i<=qH;i++){pE=i+nE;if(pE<=tH){mH.childNodes[i].innerHTML=pE;}else{mH.childNodes[i].innerHTML='';mH.childNodes[i].className='a';}}return pE;}function cQ(pos,gQ){gQ.scrollTop=pos;}function tE(e){if(e.className==uH){e.className='';}else{e.className=uH;}}function pK(rQ,list,uQ){if(uQ!==false){uQ=true;}if(rQ.lastChild.nodeType==1){rQ.removeChild(kT);rQ.className='';list.className='';}else if(uQ){if(kT.parentNode){pK(xK,mH,false);}rQ.appendChild(kT);rQ.className=uH;list.className=uH;}}function cB(){if(mH.firstChild.childNodes.length==1){mH.firstChild.appendChild(fE);}var last=eB(pB);if(last>=tH){mH.removeChild(pB);}}function bB(){var last=eB(null);if(last-qH==0){mH.firstChild.removeChild(fE);}if(mH.lastChild.tagName!=='DIV'){mH.appendChild(pB);}}function yH(vQ,func){var a=document.createElement('div');a.className='arrow-'+vQ;zH(a,func);return a;}function wB(){if(yK.firstChild.childNodes.length==1){yK.firstChild.appendChild(cH);}var cols=jB(),rN=eN(yK.childNodes)[0];rN.className='';for(var i=0;i<cols;i++){rN=rN.nextSibling;}rN.className="active";for(var i=0;i<cols;i++){rN=rN.nextSibling;}if(!rN||rN.tagName!=='UL'){yK.removeChild(kE);}}function tB(){var cols=jB(),rN=eN(yK.childNodes)[0];rN.className='';for(var i=0;i<cols;i++){rN=rN.previousSibling;}rN.className="active";if(rN.previousSibling.tagName!=='UL'){yK.firstChild.removeChild(cH);}if(yK.lastChild.tagName!=='DIV'){yK.appendChild(kE);}}function eN(e){for(var i=0;i<e.length;i++){if(e[i].className==uH){return[e[i],i];}}return[null,-1];}function uB(func,gQ,yN,uK){var raf=getR()||function(func){setTimeout(func,67);},jK,t=null,xN=true;if(gQ===window){jK=window.pageYOffset||document.documentElement.scrollTop;}else{jK=gQ.scrollTop;}var gT=(yN-jK)/uK;gT=gT.toFixed(2);if(jK>yN){xN=false;}raf(kN);function kN(hN){if(!hN)hN=new Date().getTime();if(!t)t=jK-Math.round(gT*hN);var fT=t+Math.round(gT*hN);if((xN&&fT<yN)||(!xN&&fT>yN)){func(fT,gQ);raf(kN);}else{func(yN,gQ);}}}function lE(e){if(e){if(e.target){return e.target;}if(e.srcElement){return e.srcElement;}}return null;}}function kQ(){if(document.body.offsetWidth<=640){var pQ=document.getElementById('header'),menu=document.createElement('div');pQ.insertBefore(menu,pQ.firstChild);zH(menu,iK);}function iK(){var mQ=document.getElementById('menu');for(var i=0;i<3;i++){mQ.appendChild(mQ.removeChild(mQ.firstChild));}}}function kK(){var d=['vk','od','ma','fb'];for(var i=0;i<4;i++){document.getElementById(d[i]).onclick=n;}function n(){var w=document.body.clientWidth-20;var h=document.body.clientHeight-20;if(w>600&&h>500){w=600;h=500;}open(this.href,'_blank','width='+w+',height='+h+',scrollbars');return false;}}function oT(){if(document.body.offsetWidth>640&&(!window.getComputedStyle||window.getComputedStyle(document.getElementById('header')).backgroundRepeat=='repeat')){e=document.createElement('link');e.rel='stylesheet';e.type='text/css';e.href='/style/oboge-ie8-1802.css';document.body.appendChild(e);}}function zH(e,func,type){if(e){if(!type){type='click';}if(e.addEventListener){e.addEventListener(type,func,false);}else if(e.attachEvent){e.attachEvent('on'+type,func);}else if(e['on'+type]){e['on'+type]=func;}}}