var domains = {
    "huxiu.com": 1,
};
 
var server = "172.16.93.182";

var socks5_port = "8889";
var socks5_s = "SOCKS5 "+server+":"+socks5_port+"; ";

var http_port = "8888"
var http_s = "PROXY "+server+":"+http_port+"; ";

var proxy = socks5_s + http_s + "DIRECT;";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}