function report(){
    
    //location.reload(true);
    //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    //var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);    
    var w = window.screen.width;
    var h = window.screen.height;
    hc = document.documentElement.clientHeight;
    var haval = window.screen.availHeight;
    var col = document.getElementById("colDiv");
    var colw = col.style.columnWidth;
    //alert('h: ' + h + ' hc: ' + hc + ' w: ' + w);
    
    //document.getElementById("colDiv").style.height = document.getElementById("colDiv").clientHeight;
    //if(document.getElementById("colDiv").style.height = hc){
    //alert('hc: ' + hc + ' set for real: ' + document.getElementById("colDiv").clientHeight + ' colWidth: ' + col.style.columnWidth);
    //}
    
    //window.scrollTo(0,1);
    
}

document.addEventListener("click", function(){
  scroll();
});


    
function scroll() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) + 16;
    scrollOptions = {
        left: w,
        top: 0,
        behavior: 'smooth'
    }
    document.getElementById("colDiv").scrollBy(scrollOptions);

    var pbar = document.getElementById("progress");
    var fullw = document.getElementById("content").clientWidth;
    var incr = fullw/5;
    //console.log('progress was : ' + barw + ' width is ' + w);
    curw = pbar.clientWidth;
    if(curw <  fullw){
        newW = curw + incr;
        pbar.style.width = newW + "px";
        //console.log('set progress to: ' + newW + ' new width: ' + document.getElementById("progress").clientWidth);
    }
}

function getColW() {
    document.getElementById("colDiv").style.WebkitColumnWidth = "90vw";
    console.log('colwidth: ' + document.getElementById("colDiv").style.columnWidth);
}

function openFullscreen() {
    
    var elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.webkitRequestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    }
}
