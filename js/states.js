function start() {
        setTimeout(r2, 1);
}
      function r2() {
        var client = new XMLHttpRequest();
        client.open('GET', '/resc/names.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '')
            {
                let txt = client.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 2999) + 1;
                let linenum2 = Math.floor(Math.random() * 2999) + 1;
                let linenum3 = Math.floor(Math.random() * 1961) + 3000;
                let combo = (randomString(3, '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')+"@gmail.com | Name: "+txt[linenum]+' '+txt[linenum2]+" | State: "+txt[linenum3]);
                document.getElementById("wintotal").innerHTML = (combo);
            }
        }
        client.send();
    }
