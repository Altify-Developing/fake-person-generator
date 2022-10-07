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
                let linenum4 = Math.floor(Math.random() * 4) + 4961;
                let combo = (randomString(Math.floor(Math.random() * 8) + 2, '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')+txt[linenum]+txt[linenum4]+':'+txt[linenum2]+randomString(Math.floor(Math.random() * 12) + 1, '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')+" | Name: "+txt[linenum]+' '+txt[linenum2]+" | State: "+txt[linenum3]);
                document.getElementById("wintotal").innerHTML = (combo);
            }
        }
        client.send();
    }
