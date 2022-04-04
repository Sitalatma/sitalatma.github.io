 function togglejs(id) {
    
    var btn = document.getElementById(id);
    //var sp = document.getElementById(id).firstChild;
    //var t = sp.firstChild;
    //var st = getComputedStyle(t, null);
    //console.log (t);
    var x = document.getElementById(id).nextElementSibling;
    //var d = window.getComputedStyle(x, null).display;
    //console.log("got sibling display: " + d);
    if (window.getComputedStyle(x, null).display === "none") {
      x.style.display = "block";
      //btn.style.transform = 'rotate(-90deg)';
      btn.innerHTML = '<span class="stretch">▲</span>';
      var sp = document.getElementById(id).firstChild;
      //var st = getComputedStyle(sp, null);
      var st = sp.style;
      st.position = "relative";
      st.top = "-0.2em";
      
      //sp.firstChild = "▲";
      //console.log('t : ' + t);
      
      
      //st.position="relative";
      //st.top="-0.5em";
    } else {
      x.style.display = "none";
      //btn.style.transform = 'rotate(0deg)';
      btn.innerHTML = '<span class="stretch">▼</span>';
      //sp.firstChild = "▼";
      //console.log('t : ' + t);
    }
}
