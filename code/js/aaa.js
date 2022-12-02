bb = document.getElementsByClassName("box")[0]
var s = new XMLSerializer().serializeToString(bb)
a = new Image()
a.src = 'data:image/svg+xml;base64,'+btoa(s)