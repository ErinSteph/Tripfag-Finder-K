// ==UserScript==
// @name          Tripfag-Finder K
// @namespace     erin
// @description   Find threads.
// @license       CC BY-NC-SA 3.0; https://raw.github.com/bstats/Tripfag-Finder/master/license
// @author        terrance/erin
// @contributor   milky
// @run-at        document-start
// @match       https://boards.4chan.org/b/*
// @match       http://boards.4chan.org/b/*
// @updateURL     https://192.243.108.132/tfk/tfk.user.js
// @downloadURL     https://192.243.108.132/tfk/tfk.user.js
// @version       1.2.2
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGXGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDEtMjJUMTE6NDY6MTdaIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0yMlQxMTo0ODoxN1oiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDEtMjJUMTE6NDg6MTdaIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE1NjY2YzgwLTk3OGUtNDZhMS1iZjBlLWNkMDI1NWE0MGEzOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjcxMWYwYjM5LTY1MzMtNjg0Mi05ZDI0LWMzOWE5ZDk4N2RhYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVhOTdmMDZmLTcxYjYtNGM3ZC05YWZjLWMxMjgzMzg1NGFkNSI+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iSyIgcGhvdG9zaG9wOkxheWVyVGV4dD0iSyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWE5N2YwNmYtNzFiNi00YzdkLTlhZmMtYzEyODMzODU0YWQ1IiBzdEV2dDp3aGVuPSIyMDIyLTAxLTIyVDExOjQ2OjE3WiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1NjY2YzgwLTk3OGUtNDZhMS1iZjBlLWNkMDI1NWE0MGEzOCIgc3RFdnQ6d2hlbj0iMjAyMi0wMS0yMlQxMTo0ODoxN1oiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg3cQhAAAAkGSURBVHic7ZtZUFvXGcd/WhHCSIhFBiOwMGEx4A0vsTGujVeI0zQPnj60qZs8JJO8dDrtTPvc9imZupO+1FmmrafLS6d9MNTgesN2HC+kTex6YCSDsS5gDGjFWAta+3CELGJCnEhI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
// ==/UserScript==

(function(){
var $,c,d,Admin,Prefs,Options,Finder,API,CSS;

$ = {
    qa : function(query, scope){
        if(scope == null)
            scope = d.body;
        return scope.querySelectorAll(query);
    },
    q : function(query, scope){
        return $.qa(query,scope)[0];
    },
    id : function(id){
        return d.getElementById(id);
    },
    el : function(tag, properties){
        return $.extend(d.createElement(tag),properties);
    },
    extend : function(object, properties) {
        var key, val;
        for (key in properties) {
            val = properties[key];
            object[key] = val;
        }
        return object;
    },
    on : function(el, event, func, cap){
        if(el !== null)
            el.addEventListener(event,func,cap ? cap : false);
    },
    off : function(el, event, func){
        el.removeEventListener(event,func);
    },
    append : function(parent, el){
        parent.appendChild(el);
    },
    prepend : function(parent, el){
        parent.insertBefore(el,parent.firstChild);
    },
    remove : function(el){
        if(el !== null)
            el.parentNode.removeChild(el);
    },
    width : function(el){
        if(typeof el === 'string')
            el = $.q(el);
        return parseInt(window.getComputedStyle(el).getPropertyValue("width").replace("px",""));
    },
    height : function(el){
        if(typeof el === 'string')
            el = $.q(el);
        return parseInt(window.getComputedStyle(el).getPropertyValue("height").replace("px",""));
    },
    ajax : function(method,url,payload,responseType,callbacks){
        var xhReq = new XMLHttpRequest();
        xhReq.open(method,url,true);
        xhReq.responseType = responseType;
        xhReq.timeout = 20000;
        if(method === 'POST')
            xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhReq.setRequestHeader("X-Requested-With","TripfagFinder"+c.VERSION);
        if(typeof callbacks.success === 'function')
            xhReq.onloadend = callbacks.success;
        if(typeof callbacks.failure === 'function'){
            xhReq.onerror = callbacks.failure;
            xhReq.ontimeout = callbacks.failure;
        }
        xhReq.send(payload);
    },
    dispatchEvent : function(type, detail) {
        if (detail === null) {
          detail = {};
        }
        return d.dispatchEvent(new CustomEvent(type, detail));
    },
    e : function(str){
        return encodeURIComponent(str);
    }
};

c = {
    NAMESPACE : "TripfagFinderK.",
    VERSION : "1.2.2",
    HOST : "192.243.108.132/tfk",
    API : "/api.php",
    chanX : false,
    offsetX : 120,
    offsetY : 110,
    flip : 1,
    adminpage : ""
};

c.protocol = window.location.protocol;
c.thread = window.location.pathname.match(/\/thread\//) ? window.location.pathname.split("/thread/")[1].substring(0,9) : "";
c.is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

d = window.document;
Prefs = {};

API = {
    get : function(){
        Finder.refreshing = true;
        $.ajax('POST',
            "//"+c.HOST+c.API,"a=get&t="+c.thread+"&p="+$.e(Options.get('Password'))+"&ap="+$.e(Options.get('AdminPassword'))+"&v="+c.VERSION,
            "json",
            {success: Finder.processResponse, failure: Finder.handleError });
    },
    mark : function(thread,type){
        $.ajax('POST',
            "//"+c.HOST+c.API,"a=set&t="+thread+"&type="+type+"&p="+Options.get('Password')+"&v="+c.VERSION,
            "json",
            {success: Finder.refresh, failure: Finder.handleError });
    },
    unmark : function(){
        $.ajax('POST',
            "//"+c.HOST+c.API,"a=unset&t="+c.thread+"&p="+Options.get('Password')+"&v="+c.VERSION,
            "json",
            {success: Finder.refresh, failure: Finder.handleError });
    },//Admin functions follow
    del : function(e){
        var threadId = e.target.parentNode['data-thread'];
        var type = e.target.parentNode['data-type'];
        $.ajax('POST',
            "//"+c.HOST+c.API,"a=delete&t="+threadId+"&y="+type+"&p="+Options.get('Password')+"&password="+Options.get('AdminPassword')+"&v="+c.VERSION,
            "json",
            {success: Finder.refresh, failure: Finder.handleError});
    }
};

Finder = {
    init : function(){
        Finder.refreshing = false;
        Options.init();
        Finder.createFinder();
        setInterval(Finder.refresh,15000);
        if(Finder.fresh)
            Finder.notifyUpdateSuccess();
    },
    createFinder : function(){
        Finder.destroyFinder();
        Finder.checkSettings();
        Finder.location = Options.get("Location");
        CSS.init();
        Finder.container = $.el('div',{id:'threadFinderContainer',className:'reply',innerHTML:'<strong>Threads</strong>'});
        Finder.hidden = true;


        if(Finder.location === "slideIn"){
            var handle = $.el('span',{id:"tf_open",innerHTML:'&nbsp;'});
            $.on(handle,'click',Finder.slide);
            $.append(Finder.container,handle);
        }
        if(Finder.location === 'float' || Finder.location === 'floatFixed'){
            var handle = $.el('div',{id:"tf_bar",innerHTML:'TripFag-Finder'});
            Finder.xpos = parseFloat(Options.get("PositionX"));
            Finder.ypos_abs = parseInt(Options.get("PositionY_abs"));
            Finder.ypos_rel = parseFloat(Options.get("PositionY_rel"));
            handle.onmousedown = Finder.grabStart;
            handle.ondblclick = Finder.windowShade;
            Finder.folded = false;
            Finder.grabbing = false;
            Finder.shade = $.el('a',{id:'tf_shade',href:'javascript:;',innerHTML:'-',onclick:Finder.windowShade});
            $.prepend(Finder.container,Finder.shade);
            $.prepend(Finder.container, handle);

            if(Finder.location === 'float'){
                Finder.container.style.top = Finder.ypos_abs + "px";
                Finder.container.style.left = Finder.xpos + "%";
            }
            else{
                Finder.container.style.top = Finder.ypos_rel + "%";
                Finder.container.style.left = Finder.xpos + "%";
            }
        }

        Finder.threadWrapper = $.el('div',{id:'tf_threadWrapper'});
        $.append(Finder.container, Finder.threadWrapper);

        Finder.refreshButton = $.el('input',{type:'button',value:'Refresh'});
        $.on(Finder.refreshButton,"click", Finder.refresh);
        $.append(Finder.container,Finder.refreshButton);

        if(/\/thread\//.test(d.location.href)){
            Finder.typeSelect = $.el('select',{id:'tf_type'});
            Finder.markButton = $.el('input',{type:'button',style:'width:auto',value:'Mark'});
            Finder.unmarkButton = $.el('input',{type:'button',style:'width:auto',value:'Unmark'});

            $.on(Finder.markButton,"click", Finder.mark);
            $.on(Finder.unmarkButton,"click", Finder.unmark);

            for(var type in Options.threadTypes){
                if(Prefs[type] && type != "ns")
                    $.append(Finder.typeSelect,$.el("option",{value:type,textContent:Options.threadTypes[type]}));
             };

             $.append(Finder.container,Finder.typeSelect);
             $.append(Finder.container,Finder.markButton);
             $.append(Finder.container,Finder.unmarkButton);
        }
        $.append(Finder.container,$.el('div',{id:"tf_notify",className:"tfHidden"}));
        $.append(Finder.container,$.el('div',{id:"tf_error",className:"tfHidden"}));


        switch(Finder.location){
            case "float":
            case "floatFixed":
            case "topCenter":
            case "topLeft":
                $.prepend($.id("delform"),Finder.container);
                break;
            case "bottomLeft":
            case "bottomCenter":
            default:
                $.append($.id("delform"),Finder.container);
        }

        Options.makeLink();


        if(Prefs["AutoSlide"])
            setTimeout(Finder.slide, 250);
        else
            Finder.refresh();
    },
    destroyFinder : function(){
        $.remove($.id("threadFinderContainer"));
    },
    refresh : function(){
        if(Finder.refreshing) return;
        Finder.disableRefresh();
        API.get();
    },
    processResponse : function(e){
        var response = e.target.response;
        var rows = response.data;
        var users = response.users;
        var announce = response.announce;
        c.adminpage = response.adminpage;
        Finder.admin = response.admin;
        if(Finder.admin) Admin.makeLink();
        var threads = new Array();
        if(rows) $.id('threadFinderContainer').style.borderLeft = "3px solid green";
        if(rows.length < 1){
            Finder.threadWrapper.innerHTML = "No threads are currently marked.";
        }
        else{
            var typeTotals = {};
            for(var r = 0; r < rows.length; r++)
                typeTotals[rows[r].type] = typeTotals[rows[r].type] == null ? rows[r].votes : typeTotals[rows[r].type] + rows[r].votes;
            for(var r = 0; r < rows.length; r++){
                var t = rows[r];
                if(t['type'] === "override")
                    threads[threads.length] = $.el('div',{className:"tf_override",innerHTML:t['thread']});
                else if(Prefs[t['type']]){
                    t.percent = ~~(t.votes/typeTotals[t.type]*100);
                    var pctVotes = ""
                    if(t['type'] === 'ns') {
                      pctVotes = "("+t.votes+" names)";
                    } else {
                      pctVotes = "("+t.percent+"%) ("+t.votes+")"
                    }
                    threads[threads.length] = $.el('div',{
                        className:"tf_thread",
                        "data-thread":t.thread,"data-votes":t.votes,"data-type":t.type,
                        "data-tim":t.tim,"data-replies":t.r,"data-images":t.i,"data-name":t.name,
                        "data-trip":t.trip,
                        innerHTML:"<a class='tf_threadLink' href='/b/thread/"+t.thread+"'>"+Options.threadTypes[t.type]+" Thread: "+t.thread+" "+pctVotes+"</a>"
                      });
                    if(t.thread == c.thread){
                        Finder.typeSelect.value = t.type;
                    }
                }

            }
            Finder.threadWrapper.innerHTML = "";
            for(var t = 0; t < threads.length; t++){
                if(Prefs['Counts'] && threads[t].className !== 'tf_override'){
                    $.append(threads[t],$.el('span',{className:'tf_Counts',textContent:" (R: "+threads[t]['data-replies']+" I: "+threads[t]['data-images']+")"}));
                }
                if(Finder.admin && threads[t].className !== 'tf_override'){
                    $.append(threads[t],$.el('a',{href:"javascript:;",textContent:"x",onclick:API.del,className:'tf_adminDelete'}));
                }
                $.append(Finder.threadWrapper,threads[t]);
            }
            if(Prefs['Users']) $.append(Finder.threadWrapper,$.el('span',{textContent:"Online Users: "+users}));
            if(Prefs['Hover']) Finder.thumbPreview();
        }
        if(announce != ""){
          $.append(Finder.threadWrapper,$.el('div',{className:"tf_notify",innerHTML:announce}));
        }
        $.id('tf_error').className = "tfHidden";
        $.id("tf_error").innerHTML = "";
        if(Finder.location == 'fixed' || Finder.location == 'floatFixed'){
          Finder.checkBounds();
        }
        Finder.enableRefresh();
    },
    handleError : function(e){
        if(e.type === 'timeout')
            Finder.err("Error loading threads. (Operation timed out)");
        else
            //Finder.err("Error loading threads. Try refreshing.");
          $.id('threadFinderContainer').style.borderLeft = "3px solid red";


        Finder.enableRefresh();
    },
    mark : function(){
        var thread = c.thread;
        var type = $.id('tf_type').value;
        API.mark(thread,type);
    },
    unmark : function(){
        API.unmark();
    },
    slide : function(){
        if(Finder.hidden){
            Finder.refresh();
            $.id('threadFinderContainer').style.right = "0em";
            Finder.hidden = false;
        }
        else{
            $.id('threadFinderContainer').style.right = "-24.1em";
            Finder.hidden = true;
        }
    },
    thumbPreview : function(){
        Finder.thumbRemove();
        $.remove($.id('tf_hover'));
        var threadLinks = $.qa("a.tf_threadLink");
        for(var l = 0; l < threadLinks.length; l++){
            $.on(threadLinks[l],'mouseover',Finder.thumbInit);
            $.on(threadLinks[l],'mouseout',Finder.thumbRemove);
            $.on(threadLinks[l],'mousemove',Finder.thumbMove);
        }
    },
    thumbInit : function(e){
        var div = e.target.parentNode;
        var tim = div['data-tim'];
        var nameblock = "<div class='postInfo'><span class='nameBlock'><span class='name'>"
        + div['data-name'] + "</span>&nbsp;<span class='postertrip'>" + div['data-trip'] + "</span></span></div>";
        var img = $.el('img');
        Finder.hover = $.el('div',{id:'tf_hover', innerHTML:nameblock+"<br>", className:"post"});

        Finder.hover.style.display = 'none';
        Finder.hover.style.position = 'fixed';
        $.append(d.body,Finder.hover);

        img.onload = function(){
           Finder.hover.style.display = 'block';
           Finder.thumbMove(e);
        };

        img.src = "//i.4cdn.org/b/thumb/"+ tim +"s.jpg";
        Finder.hover.appendChild(img);
    },
    thumbMove : function(e){
        var tf_hover = Finder.hover;
        var hoverHeight = $.height(tf_hover);
        var hoverWidth = $.width(tf_hover);
        var Y = e.clientY - c.offsetY;
        if(e.clientX > window.innerWidth/2) c.flip = -1;
        else c.flip = 1;

        if(e.clientY < c.offsetY)
            Y = 0;

        if(e.clientY > (window.innerHeight - (hoverHeight-c.offsetY)))
            Y = window.innerHeight - hoverHeight;
        if(c.flip === 1)
            tf_hover.style.left = ((e.clientX + c.offsetX) + "px");
        else
            tf_hover.style.left = ((e.clientX - c.offsetX - hoverWidth) + "px");
        tf_hover.style.top = (Y + "px");
    },
    thumbRemove : function(){
        $.remove($.id("tf_hover"));
    },
    grabStart : function(e){
        if (e.type === 'mousedown' && e.button !== 0) {
            return;
        }
        e.preventDefault();
        Finder.grabbed = true;
        Finder.grab = {};
        Finder.grab.mouseX = e.clientX;
        Finder.grab.mouseY = e.clientY;
        Finder.grab.xpos = isNaN(Finder.xpos) ? 0 : Finder.xpos;
        Finder.grab.ypos_abs = Finder.ypos_abs;
        Finder.grab.ypos_rel = Finder.ypos_rel;
        $.on(d,'mousemove',Finder.grabMove);
        $.on(d,'mouseup',Finder.grabEnd);
    },
    checkBounds : function(){
      var rect = Finder.container.getBoundingClientRect();
      if(rect.left / window.innerWidth < 0.02){
        Finder.container.style.left = '0';
        Finder.xpos = 0;
        rect = Finder.container.getBoundingClientRect();
        Finder.xpos = rect.left * 100 / window.innerWidth;
      }
      if(rect.right / window.innerWidth > 0.98){
        Finder.container.style.left = null;
        Finder.container.style.right = '0';
        rect = Finder.container.getBoundingClientRect();
        Finder.xpos = rect.left * 100 / window.innerWidth;
      }
      if(Finder.location === 'float'){
        if(rect.top / window.innerHeight < 0.02){
          Finder.container.style.top = '0';
          Finder.ypos_abs = 0;
        }
        if(rect.bottom / window.innerHeight > 0.98){
          Finder.container.style.top = null;
          Finder.container.style.bottom = '0';
        }
        rect = Finder.container.getBoundingClientRect();
        Finder.ypos_abs = rect.top * 100 / window.innerHeight;
      }
      else{
        if(rect.top / window.innerHeight < 0.02){
          Finder.container.style.top = '0';
          Finder.ypos_rel = 0;
        }
        if(rect.bottom / window.innerHeight > 0.98){
          Finder.container.style.top = null;
          Finder.container.style.bottom = '0';
        }
        rect = Finder.container.getBoundingClientRect();
        Finder.ypos_rel = rect.top * 100 / window.innerHeight;
      }


    },
    grabMove : function(e){
        if(!Finder.grabbed) return;
        var dx = e.clientX - Finder.grab.mouseX, dy = e.clientY - Finder.grab.mouseY;
        Finder.xpos = (dx/window.innerWidth)*100 + Finder.grab.xpos;
        Finder.container.style.left = Finder.xpos + "%";
        Finder.container.style.right = null;
        Finder.container.style.bottom = null;
        if(Finder.location === 'float'){
            Finder.ypos_abs = (e.clientY/window.innerHeight)*100;
            Finder.container.style.top = Finder.ypos_abs + "%";
        }
        else{
            Finder.ypos_rel = (dy/window.innerHeight)*100 + Finder.grab.ypos_rel;
            Finder.container.style.top = Finder.ypos_rel + "%";
        }
        Finder.checkBounds();
    },
    grabEnd : function(e){
        Options.set("PositionX",Finder.xpos);
        Options.set("PositionY_abs",Finder.ypos_abs);
        Options.set("PositionY_rel",Finder.ypos_rel);
        $.off(d,'mousemove',Finder.grabMove);
        $.off(d,'mouseup',Finder.grabEnd);
        Finder.grabbed = false;
    },
    windowShade : function(){
        if(!Finder.folded){
            Finder.folded = true;
            Finder.container.style.minHeight = "0px";
            Finder.container.style.height = "16px";
            Finder.container.style.overflow = "hidden";
            Finder.shade.innerHTML = '+';
        }
        else{
            Finder.folded = false;
            Finder.container.style.minHeight = null;
            Finder.container.style.height = null;
            Finder.shade.innerHTML = '-';
            Finder.refresh();
        }
        Finder.checkBounds();
    },
    checkSettings : function(){
        if(Finder.location == null && Options.get('Center') != null){
            Finder.fresh = true;
            if(Options.get("Peekaboo"))
                Finder.location = 'slideIn';
            else{
                if(Options.get("Top") === 'true')
                    if(Options.get("Center") === 'true')
                        Finder.location = 'topCenter';
                    else
                        Finder.location = 'topLeft';
                else
                    if(Options.get("Center") == 'true')
                        Finder.location = 'bottomCenter';
                    else
                        Finder.location = 'bottomLeft';
            }
            if(Options.get("adminPassword") != null)
                Options.set("AdminPassword",Options.get("adminPassword"));

            localStorage.removeItem("TripfagFinder.Center");
            localStorage.removeItem("TripfagFinder.Top");
            localStorage.removeItem("TripfagFinder.Peekaboo");
            Options.set("Location",Finder.location);
        }
        if(Finder.location === 'float' || Finder.location === 'floatFixed'){
            if(Options.get("PositionX") == null){
                Options.set("PositionX","0.0");
                Options.set("PositionY_abs","0");
                Options.set("PositionY_rel","0.0");
            }
        }
        if(Options.get("Version") !== c.VERSION){
            Finder.fresh = true;
            Options.set("Version",c.VERSION);
        }
    },
    disableRefresh : function(){
        Finder.refreshing = true;
        Finder.refreshButton.setAttribute("disabled","disabled");
        Finder.refreshButton.setAttribute("value","Loading...");
    },
    enableRefresh : function(){
        Finder.refreshing = false;
        Finder.refreshButton.removeAttribute("disabled");
        Finder.refreshButton.setAttribute("value","Refresh");
    },
    err : function(msg){
        if(c.chanX){
            $.dispatchEvent('CreateNotification', {
                    detail: {
                      type: 'error',
                      content: 'Tripfag-Finder: '+msg,
                      lifetime: 5
                    }
              });
        }
        else {
            $.id('tf_error').className = "";
            $.id('tf_error').textContent = msg;
        }
    },
    notifyUpdateSuccess : function(){
         if(c.chanX){
            $.dispatchEvent('CreateNotification', {
                    detail: {
                      type: 'info',
                      content: 'Tripfag-Finder has been updated to version '+c.VERSION+'!',
                      lifetime: 10
                    }
              });
        }
        else {
            $.id('tf_notify').className = "";
            $.id('tf_notify').textContent = 'Tripfag-Finder has been updated to version '+c.VERSION+'!';
        }
    }
};

Options = {
    init: function() {
        var pref;
        for (pref in Options.settings) {
            var stored = Options.get(pref);
            Prefs[pref] = stored == "true";
        }
    },
    makeLink: function() {
        var link = $.el("a",{href:"javascript:void(0);",title:"Show options",id:"tf_optionsLink",textContent:"Finder Options"});
        $.on(link,'click',Options.open);
        $.append($.id("threadFinderContainer"), link);
    },
    settings: {
        "animu": ["Show Animu threads", true],
        "gfur": ["Show Gfur threads", true],
        "hfur": ["Show Hfur threads", true],
        "sfur": ["Show Sfur threads", true],
        "cub": ["Show Cub threads", true],
        "waifu": ["Show Waifu threads", true],
        "pony": ["Show Pony threads", true],
        "trap": ["Show Trap threads", true],
        "draw": ["Show Draw threads", true],
        "loli": ["Show Loli threads", true],
        "shota": ["Show Shota threads", true],
        "poke": ["Show Poképorn threads", true],
        "ks": ["Show Katawa Shoujou threads", true],
        "ns": ["Show unmarked NameSync threads",true],
        "Hover": ["Show OP image preview on hover",true],
        "Counts": ["Show reply/image count in thread list",true],
        "Location": ["Location of the thread finder","topCenter"],
        "AutoSlide": ["Slide the finder in automatically",true],
        "Users":["Show online user count",true],
        "Password": ["Password, just in case",""],
        "AdminPassword": ["Admin password.",""]
    },
    locations : {
        "slideIn"   :   "Slide in from the right",
        "topCenter" :   "Top of page, centered",
        "topLeft"   :   "Top of page, left side",
        "bottomCenter": "Bottom of page, centered",
        "bottomLeft":   "Bottom of page, left side",
        "float":        "Floating, stuck to page (like watcher)",
        "floatFixed":   "Floating, stuck to window (like QR)"
    },
    threadTypes : {
        "animu":"Animu",
        "draw":"Draw",
        "gfur":"Gfur",
        "hfur":"Hfur",
        "cub":"Cub",
        "waifu":"Waifu",
        "pony":"Pony",
        "sfur":"Sfur",
        "trap":"Trap",
        "loli":"Loli",
        "shota":"Shota",
        "poke":"Poké",
        "ks":"KS",
        "ns":"NS"
    },
    generalSettings : {
        "Hover": "Show OP image preview on hover",
        "Counts": "Show reply/image count in thread list",
        "AutoSlide": "Slide the finder in automatically",
        "Users": "Show online user count"
    },
    get: function(name) {
      var fqName = c.NAMESPACE + name;
      if(!localStorage.hasOwnProperty(fqName) && typeof(Options.settings[name]) !== 'undefined'){
          localStorage.setItem(fqName, Options.settings[name][1]);
      }
      return localStorage.getItem(fqName);
    },
    set: function(name, value) {
        localStorage.setItem(c.NAMESPACE + name, value);
    },
    open: function() {
        d.body.style.overflow = 'hidden';
        var overlay = $.el('div',{id:"tf_optionsOverlay"});
        $.append(d.body,overlay);
        $.append(overlay,$.el('div',{className:"reply",id:"tf_optionsWrapper",innerHTML:'<div id="tf_optionsContent"><div id="tf_optionsMain"><h1>' + c.VERSION + '</h1><h2>Tripfag-Finder Options</h2></div></div>'}));
        $.on(overlay, "click", Options.close);
        $.on(overlay.firstElementChild, 'click', function(e) {
            return e.stopPropagation();
        });

        $.append($.id('tf_optionsMain'),$.el('fieldset',{innerHTML:'<legend>General Settings</legend>',id:"tf_generalSettings"}));
        var generalSettings = $.id("tf_generalSettings");
        for(var set in Options.generalSettings){
            var label = $.el('label',{innerHTML:"<span style='text-decoration: underline'>"+set + "</span>: "+Options.generalSettings[set]});
            var input = $.el('input',{type:"checkbox",name:set});
            var stored = Options.get(set);
            if(stored == null ? Options.settings[set][1] : stored == "true")
                input.setAttribute("checked","checked");
            $.prepend(label,input);
            $.append(generalSettings, label);
        }

        $.append(generalSettings,$.el('br'));
        $.append(generalSettings,$.el('label',{innerHTML:"Location: <select name='Location' id='tf_locationSelect'></select>"}));
        var locationSelect = $.id("tf_locationSelect");
        for(var loc in Options.locations){
            $.append(locationSelect,$.el('option',{value:loc,textContent:Options.locations[loc]}));
        }
        $.q("#tf_locationSelect").value = Options.get("Location");

        $.append($.id('tf_optionsMain'),$.el('br'));
        $.append($.id('tf_optionsMain'),$.el('fieldset',{innerHTML:'<legend>Thread Types</legend><strong>Show only:</strong><br>',id:"tf_threadTypes"}));
        var threadTypes = $.id("tf_threadTypes");
        for(var type in Options.threadTypes){
            var label = $.el('label',{innerHTML:"<span style='text-decoration: underline'>"+Options.threadTypes[type]+" threads</span>"});
            var input = $.el('input',{type:"checkbox",name:type});
            var stored = Options.get(type);
            if(stored == null ? Options.settings[type][1] : stored == "true")
                input.setAttribute("checked","checked");
            $.prepend(label,input);
            $.append(threadTypes, label);
        }

        $.append($.id('tf_optionsMain'),$.el('br'));
        $.append($.id('tf_optionsMain'),$.el('fieldset',{
            innerHTML:'<legend>Passwords</legend><label><input type="text" name="Password" placeholder="Access Password"> Typically not needed.</label><label><input type="text" name="AdminPassword" placeholder="Admin Password"> For administrative privileges.</label>',
            id:"tf_passwords"
        }));
        $.append($.id('tf_optionsMain'),$.el('br'));

        if(Options.get("Password"))
            $.q("#tf_passwords input[name=Password]").value = Options.get("Password");
        if(Options.get("AdminPassword"))
            $.q("#tf_passwords input[name=AdminPassword]").value = Options.get("AdminPassword");

        var textInputs = $.qa("input[type=text]",overlay);
        for(var text=0; text < textInputs.length; text++){
            textInputs[text].addEventListener("change",function(e){
                Options.set(e.target.name,e.target.value);
            });
        }
        var checkInputs = $.qa("input[type=checkbox]",overlay);
        for(var check=0; check<checkInputs.length;check++){
            checkInputs[check].addEventListener("change",function(e){
                Options.set(e.target.name,e.target.checked);
            });
        }
        var selects = $.qa("select",overlay);
        for(var select=0; select<selects.length; select++){
            selects[select].addEventListener("change",function(e){
                Options.set(e.target.name,e.target.value);
            });
        }
    },
    close: function() {
        Options.init();
        d.body.style.overflow = "auto";
        $.remove($.q("#tf_optionsOverlay"));
        Admin.linkMade = false;
        Finder.createFinder();
    }
};

Admin = {
  linkMade : false,
  makeLink: function() {
    if(Admin.linkMade) return;
    Admin.linkMade = true;
    var link = $.el("a",{href:"javascript:void(0);",title:"Show admin panel",id:"tf_adminLink",textContent:"  Admin Panel"});
    $.on(link,'click',Admin.open);
    $.append($.id("threadFinderContainer"), $.el("br"));
    $.append($.id("threadFinderContainer"), link);
  },
  open: function() {
        d.body.style.overflow = 'hidden';
        var overlay = $.el('div',{id:"tf_adminOverlay"});
        $.append(d.body,overlay);
        $.append(overlay,$.el('div',{className:"reply",id:"tf_adminWrapper",innerHTML:'<div id="tf_adminContent" style="height:100%"><div id="tf_adminMain" style="height:100%"></div></div>'}));
        $.q("#tf_adminWrapper").style.width = "550px";
        $.on(overlay, "click", Admin.close);
        $.on(overlay.firstElementChild, 'click', function(e) {
            return e.stopPropagation();
        });
        var frame = $.el('iframe',{src:c.adminpage});
        frame.style.height="100%";
        frame.style.width="100%";
        $.append($.id('tf_adminMain'),frame);
    },
    close: function() {
        d.body.style.overflow = "auto";
        $.remove($.q("#tf_adminOverlay"));
    }
};

CSS = {
    init: function(){
        var css = "\
        #tf_optionsOverlay { z-index: 99; box-sizing: border-box; -moz-box-sizing: border-box; position: fixed; display: flex; top: 0; left: 0; width: 100%; height: 100%; padding: 10px; background: rgba(0,0,0,.25); }\
        #tf_optionsWrapper * { margin: 0; padding: 0; }\
        #tf_optionsWrapper { box-sizing: border-box; -moz-box-sizing: border-box; display:block; padding: 12px; width: 450px; max-width: 100%; height: 580px; max-height:100%; z-index: 100; margin:auto; border: 1px solid rgba(0, 0, 0, 0.25); overflow-y: auto; box-shadow: 0px 0px 8px rgba(0,0,0,0.4);}\
        #tf_optionsWrapper label { width: 100%; margin-bottom: 2px; cursor: pointer; display: block; height: 18px; }\
        #tf_optionsWrapper a { text-decoration: none; }\
        #tf_optionsWrapper fieldset { border: 1px solid rgba(0,0,0,0.25); border-radius: 2px; padding: 4px; padding-left: 10px; margin: 0 10px; }\
        #tf_optionsWrapper legend { font-weight: bold; padding:0px 2px; }\
        #tf_optionsWrapper input[type=checkbox] { margin-right: 2px; position: relative; top: 2px; }\
        #tf_optionsWrapper p { margin-bottom: 10px; }\
        #tf_optionsWrapper h1 { font-size: 10pt; margin: 0 !important; color: rgba(0, 0, 0, 0.5); float: right; }\
        #tf_optionsWrapper h2 { font-size: 10pt; margin: 8px 0 6px 0 !important; text-align: left !important; }\
        #tf_optionsMain h2 { margin-top: 0 !important; }\
        #tf_adminOverlay { z-index: 99; box-sizing: border-box; -moz-box-sizing: border-box; position: fixed; display: flex; top: 0; left: 0; width: 100%; height: 100%; padding: 10px; background: rgba(0,0,0,.25); }\
        #tf_adminWrapper * { margin: 0; padding: 0; }\
        #tf_adminWrapper { box-sizing: border-box; -moz-box-sizing: border-box; display:block; padding: 12px; width: 550px; max-width: 100%; height: 580px; max-height:100%; z-index: 100; margin:auto; border: 1px solid rgba(0, 0, 0, 0.25); overflow-y: auto; box-shadow: 0px 0px 8px rgba(0,0,0,0.4);}\
        #threadFinderContainer { min-height:115px; padding-left:4px; width:24em; margin-top:2px; display:block; z-index: 9; }\
        #threadFinderContainer:hover { z-index: 20; }\
        #threadFinderContainer a{ text-decoration: none; }\
        .tf_Counts { font-size:0.8em; }\
        #tf_optionsLink {display: inline-block;} \
        #tf_hover { text-align:center; z-index: 1000; }\
        #tf_hover img { box-shadow: 2px 2px 5px rgba(0,0,0,0.5); }\n\
        #tf_open {float: left; height: 100%; display: inline; position: absolute; margin-left: 0px; left: 0px; width: 22px; cursor: pointer;}\
        #tf_bar { display:block; height: 16px; font-size: 14pt; line-height: 14px; color: rgba(0,0,0,0.6); cursor: move; -moz-user-select: none; -webkit-user-select: none; user-select: none;}\
        #tf_error, #tf_notify, .tf_notify { min-height: 0px; box-sizing: border-box; -moz-box-sizing: border-box; margin: 0 6px; padding: 2px 5px; border: 1px solid rgba(0,0,0,0.25); border-radius: 3px; display:block; }\
        #tf_error { border-color: #f22; }\
        .tfHidden { visibility: hidden; }\
        .tf_thread {display: table-row;}\
        .tf_Counts {display: table-cell;}\
        .tf_threadLink {display: table-cell;}\
        .tf_adminDelete {font-weight: bold; margin-left: 4px; text-decoration: none; }\n\
        #tf_shade {font-size:14pt; line-height:18px; position:absolute; right:2px; top:0; }";
        if(Finder.location === 'slideIn' || Finder.location === 'topCenter' || Finder.location === 'bottomCenter')
            css += "#threadFinderContainer { padding:auto; text-align:center; margin-left:auto; margin-right:auto; box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.3) }";
        if(Finder.location === 'slideIn')
            css += " #tf_threadWrapper { margin-left: 3px; } #threadFinderContainer { position: fixed; right: -24em; transition-duration: 0.75s; top: 33%; padding-left:20px; background-repeat:no-repeat; background-position:left center; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAB6CAYAAAClS5OpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGXGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDEtMjJUMjM6NDA6MzVaIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0yMlQyMzo1MjoyOFoiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDEtMjJUMjM6NTI6MjhaIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFlYWQ4ZGJkLWY3NDEtNGYyNy05NTg2LTg2OTdiMTUwN2Y2YSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY2NmY5N2EwLWVjOGEtN2I0NC1iMmEzLTQ1NmU3NjEzMWQyNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0YzZhOTU3LTI5MGUtNGE0ZS04YTc1LTYxY2QzZjBhNTkxYSI+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iSyIgcGhvdG9zaG9wOkxheWVyVGV4dD0iSyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDRjNmE5NTctMjkwZS00YTRlLThhNzUtNjFjZDNmMGE1OTFhIiBzdEV2dDp3aGVuPSIyMDIyLTAxLTIyVDIzOjQwOjM1WiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlYWQ4ZGJkLWY3NDEtNGYyNy05NTg2LTg2OTdiMTUwN2Y2YSIgc3RFdnQ6d2hlbj0iMjAyMi0wMS0yMlQyMzo1MjoyOFoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv30ZRMAAAgwSURBVGiB7ZpdbBTXFcd/u4vttevFGGxwQRgnfAUKCTzkA5KgQFI3rZqKCqlSQ0UlKrUPUZGah0oVD33KSyq1atRKVVW1QpUaKVEUk0ASpapQP2JCaFIQqEpboNgGhw8TDMbOYhtP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'); }";
        if(Finder.location === 'float' || Finder.location === 'floatFixed')
            css += " #threadFinderContainer { margin: 0; box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3); }";
        if(Finder.location === 'float')
            css += "#threadFinderContainer { position: absolute; }";
        if(Finder.location === 'floatFixed')
            css += "#threadFinderContainer { position: fixed; }";
        $.remove($.id("tf_css"));
        $.append(d.body, $.el('style',{textContent: css,id:"tf_css"}));
    }
};
console.log("TF Loaded: "+c.VERSION);
$.on(d, '4chanXInitFinished', function(){c.chanX = true;});
$.on(d, 'DOMContentLoaded',Finder.init);
}).call(this);
