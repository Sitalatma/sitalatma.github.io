(function(b) {
    b.fn.jqm = function(a) {
        var k = {
            overlay: 50,
            overlayClass: "jqmOverlay",
            closeClass: "jqmClose",
            trigger: ".jqModal",
            ajax: d,
            ajaxText: "",
            target: d,
            modal: d,
            toTop: d,
            onShow: d,
            onHide: d,
            onLoad: d
        };
        return this.each(function() {
            if (this._jqm)
                return i[this._jqm].c = b.extend({}, i[this._jqm].c, a);
            g++;
            this._jqm = g;
            i[g] = {
                c: b.extend(k, b.jqm.params, a),
                a: d,
                w: b(this).addClass("jqmID" + g),
                s: g
            };
            k.trigger && b(this).jqmAddTrigger(k.trigger)
        })
    }
    ;
    b.fn.jqmAddClose = function(a) {
        return n(this, a, "jqmHide")
    }
    ;
    b.fn.jqmAddTrigger = function(a) {
        return n(this, a, "jqmShow")
    }
    ;
    b.fn.jqmShow = function(a) {
        return this.each(function() {
            a = a || window.event;
            b.jqm.open(this._jqm, a)
        })
    }
    ;
    b.fn.jqmHide = function(a) {
        return this.each(function() {
            a = a || window.event;
            b.jqm.close(this._jqm, a)
        })
    }
    ;
    b.jqm = {
        hash: {},
        open: function(a, k) {
            var c = i[a]
              , e = c.c
              , l = "." + e.closeClass
              , h = parseInt(c.w.css("z-index"))
              , h = 0 < h ? h : 3E3
              , f = b("<div></div>").css({
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                "z-index": h - 1,
                opacity: e.overlay / 100
            });
            if (c.a)
                return d;
            c.t = k;
            c.a = !0;
            c.w.css("z-index", h);
            e.modal ? (j[0] || o("bind"),
            j.push(a)) : 0 < e.overlay ? c.w.jqmAddClose(f) : f = d;
            c.o = f ? f.addClass(e.overlayClass).prependTo("body") : d;
            if (p && (b("html,body").css({
                height: "100%",
                width: "100%"
            }),
            f)) {
                var f = f.css({
                    position: "absolute"
                })[0], g;
                for (g in {
                    Top: 1,
                    Left: 1
                })
                    f.style.setExpression(g.toLowerCase(), "(_=(document.documentElement.scroll" + g + " || document.body.scroll" + g + "))+'px'")
            }
            e.ajax ? (h = e.target || c.w,
            f = e.ajax,
            h = "string" == typeof h ? b(h, c.w) : b(h),
            f = "@" == f.substr(0, 1) ? b(k).attr(f.substring(1)) : f,
            h.html(e.ajaxText).load(f, function() {
                e.onLoad && e.onLoad.call(this, c);
                l && c.w.jqmAddClose(b(l, c.w));
                q(c)
            })) : l && c.w.jqmAddClose(b(l, c.w));
            e.toTop && c.o && c.w.before('<span id="jqmP' + c.w[0]._jqm + '"></span>').insertAfter(c.o);
            e.onShow ? e.onShow(c) : c.w.show();
            q(c);
            return d
        },
        close: function(a) {
            a = i[a];
            if (!a.a)
                return d;
            a.a = d;
            j[0] && (j.pop(),
            j[0] || o("unbind"));
            a.c.toTop && a.o && b("#jqmP" + a.w[0]._jqm).after(a.w).remove();
            if (a.c.onHide)
                a.c.onHide(a);
            else
                a.w.hide(),
                a.o && a.o.remove();
            return d
        },
        params: {}
    };
    var g = 0
      , i = b.jqm.hash
      , j = []
      , p = !1
      , d = !1
      , r = b('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({
        opacity: 0
    })
      , q = function(a) {
        p && (a.o ? a.o.html('<p style="width:100%;height:100%"/>').prepend(r) : b("iframe.jqm", a.w)[0] || a.w.prepend(r));
        s(a)
    }
      , s = function(a) {
        try {
            b(":input:visible", a.w)[0].focus()
        } catch (d) {}
    }
      , o = function(a) {
        b()[a]("keypress", m)[a]("keydown", m)[a]("mousedown", m)
    }
      , m = function(a) {
        var d = i[j[j.length - 1]];
        (a = !b(a.target).parents(".jqmID" + d.s)[0]) && s(d);
        return !a
    }
      , n = function(a, g, c) {
        return a.each(function() {
            var a = this._jqm;
            b(g).each(function() {
                this[c] || (this[c] = [],
                b(this).click(function() {
                    for (var a in {
                        jqmShow: 1,
                        jqmHide: 1
                    })
                        for (var b in this[a])
                            if (i[this[a][b]])
                                i[this[a][b]].w[a](this);
                    return d
                }));
                this[c].push(a)
            })
        })
    }
}
)(jQuery);



dD = document;
ajax = "Microsoft Internet Explorer" == navigator.appName ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;

var profaneWords;
function profanityCheck(a) {
    profaneWords || (profaneWords = "r,e,k,n,a,w,|,t,u,l,s,|,k,c,i,r,p,|,r,e,g,g,i,n,|,e,l,o,h,e,s,r,a,|,e,l,o,h,s,s,a,|,k,c,i,d,|,k,c,o,c,|,y,s,s,u,p,|,s,t,i,t,|,t,1,h,s,|,t,n,u,c,|,k,c,u,f,|,t,i,h,s".split(",").reverse().join(""));
    return RegExp(profaneWords, "i").test(a) ? 1 : 0
}

var i = !0
  , k = null
  , l = !1;

//window.loadGameDataWeb = aa;

window.loadMyData = aaTh;
//console.log(text[0][0]);

window.init = m;
window.unHighlightCells = ba;
window.loadSettings = ca;

var myW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var myH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//window.alert('w=' + myW + ' h=' + myH);
//myW = document.documentElement.clientWidth;
//myH = document.documentElement.clientHeight;

var orient, cellNumber, cellSize, letterSize;

if(myW <= myH){
   //window.alert("portrait");
   orient = 'portrait';
      cellNumber = 10;
      cellSize = 32;
      letterSize = 12;
}else{
   //window.alert("landscape");
   orient = 'landscape';
   if(myW > 960){
      if(myH > 640){
         cellNumber = 14;
         cellSize = 44;
         letterSize = 16;
      }else{
         cellNumber = 10;
         cellSize = 32;
         letterSize = 12;
      }
   }else{
      window.alert("Your display size is reported as not big enough to play this game.\nWeird...");
   }
}
//window.alert('w=' + myW + ' h=' + myH + " " + orient);

//quiz settings here
//var n = k, o = k, p = k, q = k, da, r, s = k, u = k, v = 0.1, ea = k, w = [], y = k, z = 44, A = 0, C = 4, fa = "bold 16pt Calibri, Trebuchet MS, Arial", ga = "bold 12pt  Arial, Calibri, Trebuchet MS", D = "#ad00cc,#006633,#CC3300,#1c3fd3,#1dcb16,#9B4E00,#336666,#337c0c,#3c0879,#97001E".split(","), F = 14, G = 14, J = 176, K = 0, ha = F * G, L = [], M = [], ia = l, N = k, O = k, P = k, Q = 0, ja, ka, la, ma, na, R = ca();
var n = k, o = k, p = k, q = k, da, r, s = k, u = k, v = 0.1, ea = k, w = [], y = k, z = cellSize, A = 0, C = 4, fa = "bold "+letterSize+"pt Calibri, Trebuchet MS, Arial", ga = "bold 12pt  Arial, Calibri, Trebuchet MS", D = "#ad00cc,#006633,#CC3300,#1c3fd3,#1dcb16,#9B4E00,#336666,#337c0c,#3c0879,#97001E".split(","), F = cellNumber, G = cellNumber, J = 176, K = 0, ha = F * G, L = [], M = [], ia = l, N = k, O = k, P = k, Q = 0, ja, ka, la, ma, na, R = ca();

var maxE=0;

var uth, vth, wth = []
//function aa(a) {
//   v = 0;
//   u = {
//      c: []
//   };
//   u.c[0] = {};
//   u.c[0].e = [];
//   a = JSON.parse(a);
//   u.c[0].e[0] = {};
//   u.c[0].e[0].id = a.id;
//   u.c[0].e[0].title = a.title;
//   u.c[0].e[0].j = a.words
//   //console.log("u: " + u.c[0].e[0].j);
//   u.c[0].e[0].jth = a.clues
//   //console.log('loaded ' + u.c[0].e[0].j.length + ' words');
//   //window.alert(u.c[0].e[0].jth);
//}
function aaTh() {
   //console.log("orientation: " + orient);
   var textW = []; 
   var textC = []; 
   lines = document.getElementById('clues').innerHTML.split("\n");
   wordcounter = 0;
   for(myi=0;myi < lines.length;myi++){
      //console.log("i="+i+"line:"+lines[i]);
      if(lines[myi].trim().length != 0){
         words = lines[myi].split(" ");
         //text[i] = [];
         textW[wordcounter] = words.shift();

         if(words.length > 0){
            textC[wordcounter] = words.join(' ');
         }else{
            textC[wordcounter] = textW[wordcounter].toUpperCase();
         }

         //console.log("added word: '"+textW[wordcounter]+"' with index="+wordcounter);
         if(orient == 'portrait' && textW[wordcounter].length > 10){
            continue;
         }
         if(orient == 'landscape' && textW[wordcounter].length > 14){
            continue;
         }
         //console.log(wordcounter + " " + text[i][0]);
         wordcounter++;
      }
   }
   u = {
      c: []
   };
   v = 0;
   u.c[0] = {};
   u.c[0].e = [];
   u.c[0].e[0] = {};
   //u.c[0].e[0].id = '108';
   u.c[0].e[0].title = 'Krishna Wordsearch';
   u.c[0].e[0].j = textW;
   u.c[0].e[0].jth = textC;
   //console.log(textW);
}

function m(a, c) {
   s = a;
   try {
      var b = new Audio("");
      b.canPlayType && ("no" != b.canPlayType("audio/mpeg") && "" != b.canPlayType("audio/mpeg") ? (ja = new Audio("sounds/success.mp3"),
      ka = new Audio("sounds/fail.mp3"),
      la = new Audio("sounds/finished.mp3")) : "no" != b.canPlayType("audio/ogg") && "" != b.canPlayType("audio/ogg") && (ja = new Audio("/sounds/success.ogg"),
      ka = new Audio("sounds/fail.ogg"),
      la = new Audio("sounds/finished.ogg")))
   } catch (j) {
      R.audio = l
   }
   N = (z + A) * F + C + C;
   O = (z + A) * G + C + C;
   da = N;// this is where we set main canvas width for portait
   r = O + K;//this is where is set canvas height for portrait
   var wthO = [];
      -1 == v ? (b = [],
      b[0] = Math.floor(Math.random() * u.c.length),
      b[1] = Math.floor(Math.random() * u.c[b[0]].e.length)) : (b = v.toString().split("."),
      b[1] || (b[1] = 0));
      ea = '108';//u.c[b[0]].e[b[1]].id;

   //console.log(u.c[b[0]].e[b[1]].j);
   for (h = 0; h < u.c[b[0]].e[b[1]].j.length; h++) {
      var fth = {};
      fth.i = u.c[b[0]].e[b[1]].jth[h];
      fth.g = fth.i.replace(/[ '-.]/gi, "");
      fth.d = l;
      fth.fth = k;
      fth.h = k;
      wth[h] = fth;            
   }
   if(orient == 'landscape'){

      //here we calculate witdh of the clues for landscape mode
      canvasW = document.createElement('canvas');
      ctx = canvasW.getContext("2d");
      ctx.font = ga;
      for (var d = 0; d < wth.length; d++) {
         var e = ctx.measureText(wth[d].i).width;
         if(e > maxE){
            maxE = e;
         }
      }
      //window.alert(canvasW);
      delete canvasW;
      delete ctx;
      //window.alert(ctx);
      //window.alert(maxE);
      da = N + maxE + 20;// this is where we set main canvas width
      r = O + K;
      }else{
         da = N;// this is where we set main canvas width for portait
         r = O + 30*wth.length + 10;//this is where is set canvas height for portrait
      }

//here we are setting canvas height to 1000 - should be enough for ten
//clues
   //document.getElementById(a).setAttribute("style", "position:relative;height:" + r + "px");
   document.getElementById(a).setAttribute("style", "position:relative;height:"+r+"px");
//window.alert(a);
   n = oa("wsGrid", da, r, a);
   //n = oa("wsGrid", 1000, r, a);//change width here
   //n = oa("wsGrid", r, 1000, a);
   n.setAttribute("style", "position:absolute;top:0px;left:0px;");
   o = n.getContext("2d");
   p = oa("wsGridOverlay", N, O, a);
   p.setAttribute("style", "position:absolute;top:0px;left:0px;");
   q = p.getContext("2d"); 
   if (c) {
      for (var d = 0; d < w.length; d++)
         w[d].d = l;
      $("#wsGridOverlay").bind("mousedown", pa);
      R.dragSelect && $("#wsGridOverlay").bind("mouseup", qa);
      $("#wsGrid").bind("mousedown", ra);
      P = S();
   } else if (M = [],
   w = [],
   L = [],
   $("#wsGridOverlay").bind("mousedown", pa),
   R.dragSelect && $("#wsGridOverlay").bind("mouseup", qa),
   $("#wsGrid").bind("mousedown", ra),
   ia) {
      if (d = localStorage.getItem("savedState"),
      d !== k) {
         window.alert('got local');
         d = JSON.parse(d);
         M = d.n;
         w = d.r;
         v = d.p;
         Q = d.q;
         P = S() - Q;
         for (d = 0; d < w.length; d++)
               if (w[d].d == i) {
                  sa(d, w[d].f, w[d].h);
                  var e = d
                     , b = w[d].f
                     , h = w[d].h;
                  w[e].d = i;
                  w[e].f = b;
                  w[e].h = h;
                  //console.log('words to ta here: ' + w.length + ' clues: ' + wth.length);
                  ta()
               }
      }
   } else {
      -1 == v ? (b = [],
      b[0] = Math.floor(Math.random() * u.c.length),
      b[1] = Math.floor(Math.random() * u.c[b[0]].e.length)) : (b = v.toString().split("."),
      b[1] || (b[1] = 0));
      ea = u.c[b[0]].e[b[1]].id;

   
      for (h = 0; h < u.c[b[0]].e[b[1]].j.length; h++) {

         var f = {};
         f.i = u.c[b[0]].e[b[1]].j[h].toUpperCase();
         f.g = f.i.replace(/[ '-.]/gi, "");
         f.d = l;
         f.f = k;
         f.h = k;
         w[h] = f
      }
      //console.log('words: ' + w.length);
      wlen = w.length;


      for (b = 0; b < w.length; b++) {
         var B, h = w[b].g.length, f = "tb,tb,tb,lr,lr,lr".split(",");
         R.allowReverseWords == i && (f = f.concat(["rl", "rl", "bt", "bt"]));
         h <= Math.min(F, G) && (R.allowDiagonalWords == i && (f = f.concat(["tlbr", "tlbr", "bltr"])),
         R.allowReverseWords == i && R.allowDiagonalWords == i && (f = f.concat(["trbl", "brtl"])));
         h > F && (T(f, "lr"),
         T(f, "rl"));
         h > G && (T(f, "tb"),
         T(f, "bt"));
         B = f[Math.floor(Math.random() * f.length)];
         var h = w[b].g
            , f = B
            , x = []
            , t = 0;
         if ("lr" == f || "rl" == f) {
               for (var g = 0; g < h.length; g++)
                  x[g] = h[g];
               "rl" == f && x.reverse()
         } else if ("tb" == f || "bt" == f) {
               for (g = 0; g < h.length; g++)
                  t = 0 == g ? 0 : g * F,
                  x[t] = h[g];
               "bt" == f && x.reverse()
         } else if ("tlbr" == f || "brtl" == f) {
               "brtl" == f && (h = h.reverse());
               for (g = 0; g < h.length; g++)
                  t = 0 == g ? 0 : g * F + g,
                  x[t] = h[g]
         } else if ("trbl" == f || "bltr" == f) {
               "bltr" == f && (h = h.reverse());
               for (g = 0; g < h.length; g++)
                  t = 0 == g ? h.length - 1 : g * F - g + (h.length - 1),
                  x[t] = h[g];
               for (g = 1; g < h.length; g++)
                  x[t + g] = k
         }
         h = x;
         f = l;
         if (20 > b) {
               var f = h
               , h = w[b].g
               , x = b
               , E = Math.ceil(f.length / F)
               , H = f.length + F - E * F;
               if (E * H < h.length)
                  f = l;
               else {
                  t = [];
                  for (g = 0; g < ha; g++) {
                     var I = F * (G - 1) + (g - Math.floor(g / F) * F);
                     g + H <= F * Math.ceil((g + 1) / F) && g + E * F <= I && M[g] == k && t.push(g)
                  }
                  E = l;
                  b: for (; 0 < t.length; ) {
                     d = M.slice();
                     H = Math.floor(Math.random() * (t.length - 1));
                     e = t[H];
                     for (g = 0; g < f.length; g++)
                           if (I = e + g,
                           f[g] != k)
                              if (d[I] == k || d[I] == f[g])
                                 d[I] = f[g];
                              else {
                                 t.splice(H, 1);
                                 continue b
                              }
                     E = i;
                     break
                  }
                  E == i ? (f = e + 1,
                  "rl" == B || "trbl" == B ? f = e + h.length : "bt" == B || "bltr" == B ? f = e + (h.length - 1) * F + 1 : "brtl" == B && (f = e + (h.length - 1) * F + h.length),
                  w[x].f = f,
                  M = d.slice(),
                  f = i) : f = l
               }
         }
         if(wlen != w.length){
            //console.log('words here: ' + w.length + ' b: ' + b + w[b].g);
         }
         f || (w.splice(b, 1), wth.splice(b,1),
         b--)
      }
      d = "";
      //console.log('words to ta: ' + w.length + ' clues: ' + wth.length);
      for (e = 0; e < w.length; e++)
         d += w[e].g;
      for (e = 0; e < ha; e++)
         R.kidMode && M[e] == k ? M[e] = " " : M[e] == k && (M[e] = d.charAt(Math.floor(Math.random() * d.length)));
      P = S()
   }
   for (d = 0; d < ha; d++)
      U(d, o);
   //console.log('words to ta: ' + w.length + ' clues: ' + wth.length);
   ta()
      //console.log('words here: ' + w.length);
}
function S() {
    return (new Date).getTime() / 1E3
}
function oa(a, c, b, j) {
   //window.alert(a+' '+c+' '+b+' '+j);
    var d = document.createElement("canvas");
    d.setAttribute("width", c);
    d.setAttribute("height", b);
    d.setAttribute("id", a);
    document.getElementById(j).appendChild(d);
    return d
}
function ta() {//this seems to be the place to draw clues
   if (!(1 > J && 1 > K)) {
      var a = l;
      0 < K && (a = i);
      if (a) {
         var c = 8
            , b = O + 12;
         o.clearRect(c - 8, b - 12, N, K);
         var j = 8
      } else
         if(orient=='landscape'){
            c = N + 10,
            b = 0,
            o.clearRect(c, b, J, O);
         }else{
            c = N + 10,
            b = 0,
            clueH = 30*wth.length + 10;
            o.clearRect(10, c, J, clueH);
         }
      o.globalAlpha = 1;
      o.font = ga;
      L = [];
      if(orient == 'landscape'){
         for (var d = 0; d < w.length; d++) {
            var e = o.measureText(wth[d].i).width;
            a ? (j + e + 10 > N ? (c = 8,
            b += 30,
            j = 8) : c = j,
            j = j + e + 10) : b += 30;
            o.textBaseline = "middle";
            o.fillStyle = w[d].d ? "#777" : "#000";
            o.fillText(wth[d].i, c, b); 
            w[d].d && (o.globalAlpha = 0.8,
            o.strokeStyle = ua(d),
            o.beginPath(),
            o.lineWidth = 2,
            o.lineCap = "round",
            o.moveTo(c, b),
            o.lineTo(c + e, b),
            o.stroke(),
            o.globalAlpha = 1);
            if (w[d].d == l) {
                  var h = {};
                  h.x = c;
                  h.y = b - 15;
                  h.l = h.x + e;
                  h.m = h.y + 30;
                  h.k = d;
                  L[L.length] = h
            }
         }
      }else{
         for (var d = 0; d < w.length; d++) {
            var e = o.measureText(wth[d].i).width;
            a ? (j + e + 10 > N ? (c = 8,
            b += 30,
            j = 8) : c = j,
            j = j + e + 10) : b += 30;
            o.textBaseline = "middle";
            o.fillStyle = wth[d].d ? "#777" : "#000";
            clueHeight = N + 20 + d*30;
            o.fillText(wth[d].i, 10, clueHeight);
            w[d].d && (o.globalAlpha = 0.8,
            o.strokeStyle = ua(d),
            o.beginPath(),
            o.lineWidth = 2,
            o.lineCap = "round",
            o.moveTo(10, clueHeight),
            o.lineTo(10 + e, clueHeight),
            o.stroke(),
            o.globalAlpha = 1);
            if (w[d].d == l) {//Construct L object for portrait here
                  var h = {};
                  //h.x = c;
                  //h.y = b - 15;
                  //h.l = h.x + e;
                  //h.m = h.y + 30;
                  //h.k = d;
                  h.x = 10;
                  h.y = c - 9 + b - 15;
                  h.l = h.x + e;
                  h.m = h.y + 30;
                  h.k = d;
                  L[L.length] = h
            }
         }
      }
   }
      //console.log('words: ' + w.length + ' clues: ' + wth.length);
}
function T(a, c) {
    for (var b = 0; b < a.length; b++)
        a[b] == c && (a.splice(b, 1),
        b--)
}
String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}
;
function U(a, c, b) {
    var j = Math.floor(a / F + 1) * (z + A) - (z + A) + C
      , d = Math.floor(a % F + 1) * (z + A) - (z + A) + C;
    c.globalAlpha = 1;
    b ? (c.strokeStyle = "#FF9933",
    c.fillStyle = "#FFCD9B",
    c.lineWidth = 3,
    c.fillRect(d, j, z, z),
    c.strokeRect(d - 1, j - 1, z + 2, z + 2)) : (c.fillStyle = "#FFF",
    c.fillRect(d, j, z, z),
    R.showGrid && (c.strokeStyle = "#CCC",
    c.lineWidth = 1,
    c.strokeRect(d, j, z, z)));
    c.font = fa;
    c.textBaseline = "middle";
    c.fillStyle = "#000";
    b = c.measureText(M[a]).width;
    c.fillText(M[a], d + Math.floor((z - b) / 2), j + z / 2 + 1)
}
function pa(a) {
    a = V(a);
    if (!(a.x <= C || a.y <= C) && !(a.x >= N - C || a.y >= O - C))
        R.dragSelect ? (y = W(a.x, a.y),
        $("#wsGridOverlay").bind("mousemove", va)) : y ? (a = W(a.x, a.y),
        U(a - 1, q, i),
        wa(a),
        setTimeout("unHighlightCells()", 300),
        y = k) : (y = W(a.x, a.y),
        U(y - 1, q, i))
}
function qa(a) {
    a = V(a);
    a = W(a.x, a.y);
    R.dragSelect && $("#wsGridOverlay").unbind("mousemove");
    X();
    wa(a);
}
function ra(a) {
   //console.log('x='+L[0].x + ' l=' + L[0].l + ' y=' + L[0].y + ' m' + L[0].m + ' k=' + L[0].k)
    if (R.allowHints)
        for (var a = V(a), c = 0; c < L.length; c++)
            a.x >= L[c].x && a.x <= L[c].l && a.y >= L[c].y && a.y <= L[c].m && (X(),
            y = w[L[c].k].f,
            U(y - 1, q, i))
}
function ba() {
    X()
}
function xa(a) {
    for (var c = 0; c < w.length; c++)
        if (a == w[c].g)
            return w[c].d ? -1 : c;
    a = a.reverse();
    for (c = 0; c < w.length; c++)
        if (a == w[c].g)
            if (w[c].d)
                break;
            else
                return c;
    return -1
}
function wa(a) {
    var c = y, b;
    a: if (c == a)
        b = "";
    else {
        b = "";
        var j = ya(c)
          , d = ya(a);
        if (j.b == d.b)
            if (j.a < d.a)
                for (var e = j.a; e < d.a + 1; e++)
                    b += M[Y(j.b, e) - 1];
            else
                for (e = j.a; e >= d.a; e--)
                    b += M[Y(j.b, e) - 1];
        else if (j.a == d.a)
            if (j.b < d.b)
                for (e = j.b; e < d.b + 1; e++)
                    b += M[Y(e, j.a) - 1];
            else
                for (e = j.b; e >= d.b; e--)
                    b += M[Y(e, j.a) - 1];
        else {
            if (Math.abs(j.b - d.b) != Math.abs(j.a - d.a)) {
                b = "";
                break a
            }
            if (a > c)
                if (d.a > j.a)
                    for (e = c; e <= a; e = e + F + 1)
                        b += M[e - 1];
                else
                    for (e = c; e <= a; e = e + F - 1)
                        b += M[e - 1];
            else if (j.a > d.a)
                for (e = c; e >= a; e = e - F - 1)
                    b += M[e - 1];
            else
                for (e = c; e >= a; e = e - F + 1)
                    b += M[e - 1]
        }
    }
    if (b)
        if (b = xa(b),
        -1 < b) {
            za("success");
            sa(b, c, a);
            w[b].d = i;
            w[b].f = c;
            w[b].h = a;
            ta();
            a: {
                for (a = 0; a < w.length; a++)
                    if (w[a].d == l) {
                        a = l;
                        break a
                    }
                a = i
            }
            a && Aa()
        } else
            za("fail")
}
function sa(a, c, b) {
    c = Ba(c);
    c.x = c.x - z / 2 + C;
    c.y = c.y - z / 2 + C;
    b = Ba(b);
    b.x = b.x - z / 2 + C;
    b.y = b.y - z / 2 + C;
    Ca(o, ua(a), c, b)
}
function ua(a) {
    for (; a >= D.length; )
        a -= D.length;
    return D[a]
}
function va(a) {
   var a = V(a)
      , c = Ba(y);
   c.x = c.x - z / 2 + C;
   c.y = c.y - z / 2 + C;
   X();
   Ca(q, "#3399FF", c, a)
}
function X() {
   q.clearRect(0, 0, q.canvas.width, q.canvas.height)
}
function Ca(a, c, b, j) {
   a.globalAlpha = 0.3;
   a.beginPath();
   a.strokeStyle = c;
   a.lineWidth = 70 * (z / 100);
   a.lineCap = "round";
   a.moveTo(b.x, b.y);
   a.lineTo(j.x, j.y);
   a.stroke()
}
function V(a) {
   for (var c = n, b = 0, j = 0; c && "BODY" != c.tagName; )
      b += c.offsetTop,
      j += c.offsetLeft,
      c = c.offsetParent;
   ma = b;
   na = j;
   c = {};
   c.x = a.clientX - na + window.pageXOffset;
   c.y = a.clientY - ma + window.pageYOffset; 
   return c
}
function W(a, c) {
   var b = z + A;
   return Y(Math.ceil((c - A / 2 - C) / b), Math.ceil((a - A / 2 - C) / b))
}
function Y(a, c) {
   var b = 0;
   0 < c && 0 < a && (b = a * F + c - F);
   return b
}
function ya(a) {
   var c = {};
   c.b = Math.ceil(a / F);
   c.a = a - (c.b - 1) * F;
   return c
}
function Ba(a) {
   var a = ya(a)
      , c = z + A
      , b = {};
   b.x = a.a * c;
   b.y = a.b * c;  
   return b
}
function Aa() {
   Q = S() - P;
   localStorage.removeItem("savedState");
   $("#wsGridOverlay").unbind();
   $("#wsGrid").unbind();
   setTimeout(function() {
      za("finished");
      if(orient == 'landscape'){
         var a = $("#gameGrid").offset()
            , c = '<p style="font-size:28px;font-weight:bold">Game finished in <br>' + parseInt(Q, 10) + " Seconds</p>"
            , c = '<div style="width:400px;height:130px;background:#DDDBD5;padding:16px;margin:230px auto;text-align:center;border-radius:10px;">' + (c + '') + "</div>";
         $("body").append('<div id="wsGridResult" style="width:100%;height:' + r + "px;left:" + a.left + "px;top:" + a.top + 'px;position:absolute;z-index:99;background:#ccc; background: rgba(0, 0, 0, .6);">' + c + "</div>");
      }else{
         var a = $("#gameGrid").offset()
            , c = '<p style="font-size:28px;font-weight:bold">Game finished in <br>' + parseInt(Q, 10) + " Seconds</p>"
            , c = '<div style="width:'+(0.8*N)+'px;height:130px;background:#DDDBD5;padding:16px;margin-top:230px;margin-left: auto;margin-right: auto;text-align:center;border-radius:10px;">' + (c + '') + "</div>";
         $("body").append('<div id="wsGridResult" style="width:100%;height:' + myH + "px;left:" + a.left + "px;top:" + a.top + 'px;position:absolute;z-index:99;background:#ccc; background: rgba(0, 0, 0, .6);">' + c + "</div>");
      }
   }, 700)
}
function za(a) {
    R.audio && ("success" == a && ja.play(),
    "fail" == a && ka.play(),
    "finished" == a && la.play())
}
function ca() {
   // here we can switch dragSelect from drag for computers to tap for mobiles
   // and mess with settings in general
   var mya ='{"audio":true,"showGrid":true,"dragSelect":true,"kidMode":false,"allowHints":true,"allowReverseWords":false,"allowDiagonalWords":true}'
   if (/Mobi/.test(navigator.userAgent)) {
      mya ='{"audio":true,"showGrid":true,"dragSelect":false,"kidMode":false,"allowHints":true,"allowReverseWords":false,"allowDiagonalWords":true}'
      //window.alert('mobile');
   }
   a = mya    
   return a === k ? (a = {
       audio: i,
       showGrid: i,
       dragSelect: i,
       kidMode: l,
       allowHints: i,
       allowReverseWords: i,
       allowDiagonalWords: i
   },
   //localStorage.setItem("settings", JSON.stringify(a)),
   a) : JSON.parse(a)
}
