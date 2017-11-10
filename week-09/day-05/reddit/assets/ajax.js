const ajaxRequest = function(Config) {
    const request = new XMLHttpRequest();
    request.open(Config.method, Config.url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            Config.callback(request.responseText);
        }
    }
    request.send(Config.data);
}