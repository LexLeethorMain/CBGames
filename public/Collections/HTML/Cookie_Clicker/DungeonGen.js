"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}!function(r,s,a,h){function n(t){var i,o=t.length,a=this,e=0,r=a.i=a.j=0,s=a.S=[];for(o||(t=[o++]);e<h;)s[e]=e++;for(e=0;e<h;e++)s[e]=s[r=u&r+t[e%o]+(i=s[e])],s[r]=i;(a.g=function(t){for(var i,o=0,e=a.i,r=a.j,s=a.S;t--;)i=s[e=u&e+1],o=o*h+s[u&(s[e]=s[r=u&r+i])+(s[r]=i)];return a.i=e,a.j=r,o})(h)}function l(t,i){for(var o,e=t+"",r=0;e.length>r;)i[u&r]=u&(o^=19*i[u&r])+e.charCodeAt(r++);return p(i)}function p(t){return String.fromCharCode.apply(0,t)}var f=a.pow(h,6),d=a.pow(2,52),c=2*d,u=255;a.seedrandom=function(t,i){var o=[],i=l(function t(i,o){var e,r=[],s=_typeof(i)[0];if(o&&"o"==s)for(e in i)try{r.push(t(i[e],o-1))}catch(t){}return r.length?r:"s"==s?i:i+"\0"}(i?[t,p(s)]:0 in arguments?t:function(t){try{return r.crypto.getRandomValues(t=new Uint8Array(h)),p(t)}catch(t){return[+new Date,r,r.navigator.plugins,r.screen,p(s)]}}(),3),o),e=new n(o);return l(p(e.S),s),a.random=function(){for(var t=e.g(6),i=f,o=0;t<d;)t=(t+o)*h,i*=h,o=e.g(1);for(;c<=t;)t/=2,i/=2,o>>>=1;return(t+o)/i},i},l(a.random(),s)}(void 0,[],Math,256);var _choose=function(t){return 0==t.length?0:t[Math.floor(Math.random()*t.length)]},DungeonGen=function(){function s(t,i,o,e){return t==o&&i[e]?r[i[e]]:0}function h(t,i){return Math.floor(Math.random()*(i-t+1)+t)}var w=100,b=110,S=200,W=500,F=510,n=[],p=(n[0]="000",n[-100]="900",n[w]="ffc",n[b]="ff9",n[S]="f9f",n[300]="990",n[400]="99f",n[W]="960",n[F]="630",n[250]="f9f",n[260]="f9f",[]),a=(this.Pattern=function(t,i){this.name=t,this.func=i,p.push(this)},new this.Pattern("Pillars",function(t,i,o){return(t+o.x)%2==0&&(i+o.y)%2==0&&Math.random()<.8?300:0}),new this.Pattern("Large pillars",function(t,i,o){return(t+o.x)%3<2&&(i+o.y)%3<2&&Math.random()<.8?300:0}),new this.Pattern("Sparse pillars",function(t,i,o){return(t+o.x)%3==0&&(i+o.y)%3==0&&Math.random()<.8?300:0}),new this.Pattern("Lines",function(t,i,o){return o.x%2==0&&(t+o.x)%2==0&&Math.random()<.98||o.x%2==1&&(i+o.y)%2==0&&Math.random()<.98?300:0}),this.Map=function(t,i,o,e){null!=o?this.seed=o:(Math.seedrandom(),this.seed=Math.random()),Math.seedrandom(this.seed),this.seedState=Math.random,this.w=t||20,this.h=i||20,this.roomsAreHidden=0,this.rooms=[],this.freeWalls=[],this.freeTiles=[],this.doors=[],this.tiles=this.w*this.h,this.tilesDug=0,this.digs=0,this.stuck=0,this.data=[];for(var r=0;r<this.w;r++){this.data[r]=[];for(var s=0;s<this.h;s++)this.data[r][s]=[0,-1,0],0!=r&&0!=s&&r!=this.w-1&&s!=this.h-1||(this.data[r][s]=[-100,-1,0])}if((o=this).roomSize=10,o.corridorSize=5,o.fillRatio=1/3,o.corridorRatio=.2,o.pillarRatio=.2,o.waterRatio=0,o.branching=4,o.sizeVariance=.2,o.fillRatio=.1+.4*Math.random(),o.roomSize=Math.ceil(h(5,15)*o.fillRatio*2),o.corridorSize=Math.ceil(h(1,7)*o.fillRatio*2),o.corridorRatio=.8*Math.random()+.1,o.pillarRatio=.5*Math.random()+.5,o.waterRatio=Math.pow(Math.random(),2),o.branching=Math.floor(6*Math.random()),o.sizeVariance=Math.random(),e)for(var a in e)this[a]=e[a];Math.seedrandom()},this.Map.prototype.getType=function(t,i){return this.data[t][i][0]},this.Map.prototype.getRoom=function(t,i){return-1!=this.data[t][i][1]?this.rooms[this.data[t][i][1]]:-1},this.Map.prototype.getTile=function(t,i){return this.rooms[this.data[t][i][2]]},this.Map.prototype.isWall=function(t,i){var o,e=0;for(o in this.freeWalls){if(this.freeWalls[o][0]==t&&this.freeWalls[o][1]==i)return e;e++}return-1},this.Map.prototype.isFloor=function(t,i){var o,e=0;for(o in this.freeTiles){if(this.freeTiles[o][0]==t&&this.freeTiles[o][1]==i)return e;e++}return-1},this.Map.prototype.removeFreeTile=function(t,i){this.freeTiles.splice(this.isFloor(t,i),1)},this.Map.prototype.fill=function(t){var i=0;"function"==typeof t&&(i=1);for(var o=0;o<this.w;o++)for(var e=0;e<this.h;e++)this.data[o][e]=i?[t(this,o,e),-1,0]:[t,-1,0];this.rooms=[]},this.Map.prototype.fillZone=function(t,i,o,e,r){for(var s=t;s<t+o;s++)for(var a=i;a<i+e;a++)this.data[s][a][0]=r},this.Map.prototype.getRoomTile=function(t,i,o){var e,r=0;for(e in t.tiles){if(t.tiles[e].x==i&&t.tiles[e].y==o)return r;r++}return-1},this.Map.prototype.getFloorTileInRoom=function(t){var i,o=[];for(i in t.tiles)t.tiles[i].type!=w&&t.tiles[i].type!=b||o.push(t.tiles[i]);return choose(o)},this.Map.prototype.canPlaceRoom=function(t,i,o,e){if(t<2||i<2||t+o>=this.w-1||i+e>=this.h-1)return!1;for(var r=t;r<t+o;r++)for(var s=i;s<i+e;s++){var a=this.getType(r,s),h=this.getRoom(r,s);if(-100==a)return!1;if(-1!=h)return!1}return!0},this.Map.prototype.setRoomTile=function(t,i,o,e){var r=this.getRoomTile(t,i,o),s=-1!=r?t.tiles[r].type:-1;return(-1==r||e!=W&&e!=F&&(e!=w||s!=b))&&(-1!=r&&t.tiles.splice(r,1),t.tiles.push({x:i,y:o,type:e,score:0}),e!=w&&e!=b||s==w||s==b?e==w||e==b||s!=w&&s!=b||t.freeTiles--:t.freeTiles++,!0)},this.Map.prototype.expandRoom=function(t,i,o,e,r){for(var s=0,a=0,s=i;s<i+e;s++)for(a=o;a<o+r;a++)this.setRoomTile(t,s,a,w);for(s=i+1;s<i+e-1;s++)for(a=o+1;a<o+r-1;a++)this.setRoomTile(t,s,a,b);for(a=o-1,s=i;s<i+e;s++)this.setRoomTile(t,s,a,W);for(a=o+r,s=i;s<i+e;s++)this.setRoomTile(t,s,a,W);for(s=i-1,a=o;a<o+r;a++)this.setRoomTile(t,s,a,W);for(s=i+e,a=o;a<o+r;a++)this.setRoomTile(t,s,a,W);this.setRoomTile(t,s=i-1,a=o-1,F),this.setRoomTile(t,s=i+e,a=o-1,F),this.setRoomTile(t,s=i-1,a=o+r,F),this.setRoomTile(t,s=i+e,a=o+r,F);for(var h=Math.random()<this.waterRatio?1:0,n=Math.random()<this.pillarRatio?choose(p):0,s=i;s<i+e;s++)for(var l,a=o;a<o+r;a++)t.tiles[this.getRoomTile(t,s,a)].type==b&&(l=0!=h?400:0,0!=(l=0!=n&&n.func(s,a,t)||l))&&this.setRoomTile(t,s,a,l)},this.Map.prototype.newRoom=function(t,i,o,e,r){var s={};return s.id=this.rooms.length,s.w=o,s.h=e,s.x=t||h(1,this.w-s.w-1),s.y=i||h(1,this.h-s.h-1),s.tiles=[],s.freeTiles=0,s.parent=r||-1,s.children=[],s.gen=0,s.door=0,s.corridor=Math.random()<this.corridorRatio?1:0,s.hidden=this.roomsAreHidden,s},this.Map.prototype.planRoom=function(t){for(var i=this.branching+1,o=[],e=t.w,r=t.h;0<e&&0<r;)0<e&&(o.push(1,3),e--),0<r&&(o.push(2,4),r--);for(var s=0;s<i;s++){var a,h,n,l=[],p=t.corridor?(l=choose([[1,3],[2,4]]),this.corridorSize):(l=[1,2,3,4],this.roomSize);p=Math.max(t.w+t.h,Math.ceil(p*(1-Math.random()*this.sizeVariance)));for(var f=(0==t.tiles.length?(h=t.x,t):(h=(a=this.getFloorTileInRoom(t)).x,a)).y,d=n=1,c=0;c<p&&0!=l.length;c++){var u=0,m=0,y=0,g=0,v=choose(l);1==(v=0<o.length?o[0]:v)?(u=-1,y=1):2==v?(m=-1,g=1):3==v?y=1:4==v&&(g=1),this.canPlaceRoom(h+u,f+m,n+y,d+g)?(h+=u,f+=m,n+=y,d+=g):l.splice(l.indexOf(v),1),0<o.length&&o.splice(0,1)}(1<n||1<d)&&this.expandRoom(t,h,f,n,d)}},this.Map.prototype.carve=function(t){for(var i in t.tiles){var o=(i=t.tiles[i]).x,e=i.y,r=(this.data[o][e][0],i.type);r!=W&&r!=F||-1==this.isWall(o,e)||this.freeWalls.splice(this.isWall(o,e),1),(-1==this.data[o][e][1]||r!=W&&r!=F)&&(-1==this.data[o][e][1]&&this.tilesDug++,this.data[o][e]=[i.type,t.id,0],1<o&&1<e&&o<this.w-2&&e<this.h-2&&r==W&&this.freeWalls.push([o,e]),r!=w&&r!=b||this.freeTiles.push([o,e]))}this.rooms[t.id]=t},this.Map.prototype.newRandomRoom=function(t){var i=1,o=(t=t||{},choose(this.freeWalls));if(o){var e=this.getRoom(o[0],o[1]),r=[];if(0==this.getType(o[0]-1,o[1])&&r.push([-1,0]),0==this.getType(o[0]+1,o[1])&&r.push([1,0]),0==this.getType(o[0],o[1]-1)&&r.push([0,-1]),0==this.getType(o[0],o[1]+1)&&r.push([0,1]),r=choose(r)){var s,a=this.newRoom(o[0]+r[0],o[1]+r[1],0,0,e);for(s in t)a[s]=t[s];this.planRoom(a),0<a.tiles.length&&0<a.freeTiles?(this.carve(a),this.data[o[0]][o[1]][0]=S,a.door=[o[0],o[1]],this.data[o[0]][o[1]][1]=a.id,this.freeWalls.splice(this.isWall(o[0],o[1]),1),this.doors.push([o[0],o[1],a]),-1!=this.isFloor(o[0]+r[0],o[1]+r[1])&&this.removeFreeTile(o[0]+r[0],o[1]+r[1]),-1!=this.isFloor(o[0]-r[0],o[1]-r[1])&&this.removeFreeTile(o[0]-r[0],o[1]-r[1]),(a.parent=e).children.push(a),a.gen=e.gen+1):(this.freeWalls.splice(this.isWall(o[0],o[1]),1),i=0)}else this.freeWalls.splice(this.isWall(o[i=0],o[1]),1)}else i=0;return i?a:0},this.Map.prototype.getRandomSpotInRoom=function(t){var i,o=[];for(i in t.tiles)t.tiles[i].type!=w&&t.tiles[i].type!=b||-1==this.isFloor(t.tiles[i].x,t.tiles[i].y)||o.push(t.tiles[i]);return 0==o.length?-1:choose(o)},this.Map.prototype.getBestSpotInRoom=function(t){var i,o=-1,e=[];for(i in t.tiles)t.tiles[i].type!=w&&t.tiles[i].type!=b||-1==this.isFloor(t.tiles[i].x,t.tiles[i].y)||(t.tiles[i].score>o?(o=t.tiles[i].score,(e=[]).push(t.tiles[i])):t.tiles[i].score==o&&e.push(t.tiles[i]));return 0==e.length?-1:choose(e)},this.Map.prototype.getEarliestRoom=function(){return this.rooms[0]},this.Map.prototype.getDeepestRoom=function(){var t,i=0,o=this.rooms[0];for(t in this.rooms)this.rooms[t].gen+.05*Math.sqrt(this.rooms[t].freeTiles)>=i&&0==this.rooms[t].corridor&&4<this.rooms[t].freeTiles&&(i=this.rooms[t].gen+.05*Math.sqrt(this.rooms[t].freeTiles),o=this.rooms[t]);return o},this.Map.prototype.dig=function(){Math.random=this.seedState;var t,i=0,o=(0==this.digs?(t=h(3,7),o=h(3,7),(t=this.newRoom(Math.floor(this.w/2-t/2),Math.floor(this.h/2-o/2),t,o)).corridor=0,this.planRoom(t),this.carve(t)):0==this.newRandomRoom()&&i++,0<i&&this.stuck++,this.digs++,0);if(this.tilesDug>=this.tiles*this.fillRatio&&(o=1),1==(o=100<this.stuck?1:o))for(var e=0;e<10;e++){var r=this.newRandomRoom({corridor:0,w:h(3,7),h:h(3,7)});if(0!=r&&15<r.freeTiles)break}return Math.seedrandom(),1==o?1:0<i?-1:0},this.Map.prototype.finish=function(){for(var t in this.rooms){var i,o=Math.random()<this.pillarRatio;for(i in this.rooms[t].tiles){var e,r,s,a,h,n=this.rooms[t].tiles[i].x,l=this.rooms[t].tiles[i].y,p=this.data[n][l][0],f=this.data[n-1][l][0],d=this.data[n+1][l][0],c=this.data[n][l-1][0],u=this.data[n][l+1][0],m=this.data[n-1][l-1][0],y=this.data[n+1][l-1][0],g=this.data[n-1][l+1][0],v=this.data[n+1][l+1][0],M=0,x=(f!=W&&f!=F||M++,c!=W&&c!=F||M++,d!=W&&d!=F||M++,u!=W&&u!=F||M++,m!=W&&m!=F||M++,y!=W&&y!=F||M++,g!=W&&g!=F||M++,v!=W&&v!=F||M++,0),R=(f!=b&&f!=w||x++,c!=b&&c!=w||x++,d!=b&&d!=w||x++,u!=b&&u!=w||x++,m!=b&&m!=w||x++,y!=b&&y!=w||x++,g!=b&&g!=w||x++,v!=b&&v!=w||x++,0);(h=M+x==8?1:0)&&(a=s=r=e=0,m!=W&&m!=F||c!=W&&c!=F||y!=W&&y!=F?m!=b&&m!=w||c!=b&&c!=w||y!=b&&y!=w||(e=-1):e=1,y!=W&&y!=F||d!=W&&d!=F||v!=W&&v!=F?y!=b&&y!=w||d!=b&&d!=w||v!=b&&v!=w||(s=-1):s=1,m!=W&&m!=F||f!=W&&f!=F||g!=W&&g!=F?m!=b&&m!=w||f!=b&&f!=w||g!=b&&g!=w||(r=-1):r=1,g!=W&&g!=F||u!=W&&u!=F||v!=W&&v!=F?g!=b&&g!=w||u!=b&&u!=w||v!=b&&v!=w||(a=-1):a=1,1==e&&-1==a||-1==e&&1==a||1==r&&-1==s||-1==r&&1==s)&&(R=1),o&&Math.random()<.8&&4<this.rooms[t].freeTiles&&(1==R||h&&7==M)&&p==w&&f!=S&&d!=S&&c!=S&&u!=S&&(p=this.data[n][l][0]=300,this.removeFreeTile(n,l),this.rooms[t].freeTiles--),1!=e&&1!=a&&1!=r&&1!=s||(this.rooms[t].tiles[i].score+=2),(5<M||5<x)&&(this.rooms[t].tiles[i].score+=1),7!=M&&8!=x||(this.rooms[t].tiles[i].score+=5),(p!=b&&p!=w||f==S||d==S||c==S||u==S)&&(this.rooms[t].tiles[i].score=-1)}}var T=this.getBestSpotInRoom(this.getEarliestRoom()),T=(this.data[T.x][T.y][0]=250,this.entrance=[T.x,T.y],T.score=0,this.removeFreeTile(T.x,T.y),this.getBestSpotInRoom(this.getDeepestRoom()));this.data[T.x][T.y][0]=260,this.exit=[T.x,T.y],this.removeFreeTile(T.x,T.y),T.score=0},this.Map.prototype.isObstacle=function(t,i){var o,e=[w,b,S,250,260];for(o in e)if(this.data[t][i][0]==e[o])return 0;return 1},this.Map.prototype.getPic=function(f,d){var t,i;return a[this.data[f][d][2]]?"join"==a[this.data[f][d][2]].joinType?(i=[(i=a[this.data[f][d][2]].pic)[0],i[1]],t=[],this.data[f][d][0]==W?t.push(F):this.data[f][d][0]==S&&t.push(W,F),i[0]+=function(t,i){var o=1,e=t.data[f][d][0],r=t.data[f-1][d][0],s=t.data[f+1][d][0],a=t.data[f][d-1][0],h=t.data[f][d+1][0],n=(i.push(e),0);for(l in i)r==i[l]&&n++,s==i[l]&&n++;var l,p=0;for(l in i)a==i[l]&&p++,h==i[l]&&p++;return 2==n&&2==p?o=1:2==n?o=2:2==p&&(o=3),o}(this,t)-1,i):"random3"==a[this.data[f][d][2]].joinType?((i=[(i=a[this.data[f][d][2]].pic)[0],i[1]])[0]+=Math.floor(3*Math.random()),i):a[this.data[f][d][2]].pic:[0,0]},[]),r=[];this.Tile=function(t,i,o){this.name=t,this.pic=i,this.joinType=o||"none",this.id=a.length,a[this.id]=this,r[this.name]=this},new this.Tile("void",[0,0]),this.loadTiles=function(t){for(var i in t){var o=t[i][0],e=t[i][1],i=t[i][2];new this.Tile(o,e,i)}},this.Map.prototype.assignTiles=function(t,i){for(var o in t.tiles){var e=a[0],o=t.tiles[o],r=this.data[o.x][o.y][0],e=s(r,i,F,"wall corner")||e;e=s(r,i,W,"wall")||e,e=s(r,i,w,"floor edges")||e,e=s(r,i,b,"floor")||e,e=s(r,i,300,"pillar")||e,e=s(r,i,S,"door")||e,e=s(r,i,400,"water")||e,e=s(r,i,250,"entrance")||e,e=s(r,i,260,"exit")||e,this.data[o.x][o.y][2]=e.id}},this.Map.prototype.draw=function(t){for(var i="",t=t||10,o=0;o<this.h;o++){for(var e=0;e<this.w;e++){var r="",s=(-1!=this.isFloor(e,o)&&(r="o"),-1!=this.isWall(e,o)&&(r+="x"),this.getRoom(e,o)),a=Math.max(.1,1-this.getRoom(e,o).gen/10),s=s.freeTiles,r="";i+='<div style="opacity:'+a+";width:"+t+"px;height:"+t+"px;position:absolute;left:"+e*t+"px;top:"+o*t+"px;display:block;padding:0px;margin:0px;background:#"+n[this.data[e][o][0]]+';color:#999;" title="'+s+'">'+r+"</div>"}i+="<br>"}return'<div style="position:relative;width:'+this.w*t+"px;height:"+this.h*t+"px;background:#000;font-family:Courier;font-size:"+t+'px;float:left;margin:10px;">'+i+"</div>"},this.Map.prototype.drawDetailed=function(){for(var t="",i=0;i<this.h;i++){for(var o=0;o<this.w;o++){var e=1,r="void",s=(-1!=(s=this.getRoom(o,i))&&(e=Math.max(.1,1-s.gen/5),250!=this.data[o][i][0]&&260!=this.data[o][i][0]||(e=1),r=(s.corridor?"corridor":"room")+" "+s.id+" | depth : "+s.gen+" | children : "+s.children.length),this.getPic(o,i));t+='<div style="opacity:'+e+";width:16px;height:16px;position:absolute;left:"+16*o+"px;top:"+16*i+"px;display:block;padding:0px;margin:0px;background:#"+n[this.data[o][i][0]]+" url(img/dungeonTiles.png) "+16*-s[0]+"px "+16*-s[1]+'px;color:#999;" title="'+r+'"></div>'}t+="<br>"}return'<div style="box-shadow:0px 0px 12px 6px #00061b;position:relative;width:'+16*this.w+"px;height:"+16*this.h+'px;background:#00061b;font-family:Courier;font-size:16px;float:left;margin:10px;">'+t+"</div>"},this.Map.prototype.getStr=function(){for(var t="",i=0;i<this.h;i++){for(var o=0;o<this.w;o++){var e=this.getRoom(o,i),r="void",s=this.getPic(o,i);-1!=e&&(e.hidden&&(s=[0,0]),r=(e.corridor?"corridor":"room")+" "+e.id+" | depth : "+e.gen+" | children : "+e.children.length),t+='<div style="opacity:1;width:16px;height:16px;position:absolute;left:'+16*o+"px;top:"+16*i+"px;display:block;padding:0px;margin:0px;background:#"+n[this.data[o][i][0]]+" url(img/dungeonTiles.png) "+16*-s[0]+"px "+16*-s[1]+'px;color:#999;" title="'+r+'"></div>'}t+="<br>"}return t}};