(function () {
  var script = document.currentScript;
  var elementID=script.getAttribute("data-element-id")

  const iframe = document.createElement('iframe')
  const tid = Date.now()
  iframe.src = 'sdk/code_runner.html?tid=' + tid
  iframe.style.border = 'none'
  iframe.style.width = '100vw'
  iframe.style.height = '100vh'
  
  var  element = document.getElementById(elementID)
  element.style.display = "none";
  var code = element.innerHTML
  var language = element.getAttribute("data-language")
  element.innerHTML = ''
  element.style.display = "block";
  if(element){
    element.appendChild(iframe)   
  }
  var message = {'code':code,'language':language}
  iframe.onload = function() {
    iframe.contentWindow.postMessage(JSON.stringify(message), "*");
  }
})()
