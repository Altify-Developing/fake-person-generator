function start() {
        setTimeout(r1, 1);
        setTimeout(r2, 10);
}
function r1() {
        var client = new XMLHttpRequest();
        client.open('GET', '/resc/states.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                let txt = client.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 1960) + 1;
                let combo = (txt[linenum]);
                document.getElementById("wintotal").innerHTML = ("State: "+combo);
            }
        }
        client.send();
}
      function r2() {
        let i = 1;
        var client2 = new XMLHttpRequest();
        client2.open('GET', '/resc/names.txt');
        client2.onreadystatechange = function()
        {
            if( client2.responseText != '' && i == 1)
            {
                let prev = document.getElementById("wintotal").innerHTML;
                let txt = client2.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 2999) + 1;
                let linenum2 = Math.floor(Math.random() * 2999) + 1;
                let combo = (txt[linenum]+' '+txt[linenum2]);
                document.getElementById("wintotal").innerHTML = (prev+" | Name: "+combo);
                let i = 2;
            }
        }
        client2.send();
    }
