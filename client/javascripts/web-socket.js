(function() {

  var ws = WebSocket('/');

  ws.onclose = function() {
    console.log('ws.onclose');
  };

  ws.onerror = function() {
    console.log('ws.onerror', {
      protocol: ws.protocol,
      readyState: ws.readyState,
      url: ws.url
    });
  };

  ws.onmessage = function() {
    console.log('ws.onmessage');
  };

  ws.onopen = function() {
    console.log('ws.onopen');
  };

}())
