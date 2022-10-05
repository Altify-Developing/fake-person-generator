function readfileautomatically() {
        var client = new XMLHttpRequest();
        client.open('GET', '/resc/states.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 1960) + 1;
                let combo = (txt[linenum]);
                document.getElementById("wintotal").innerHTML = ("State: "+combo);
            }
        }
        client.open('GET', '/resc/names.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                let prev = document.getElementById("wintotal").innerHTML;
                var txt = client.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 2999) + 1;
                let linenum2 = Math.floor(Math.random() * 2999) + 1;
                let combo = (txt[linenum]+' '+txt[linenum2]);
                document.getElementById("wintotal").innerHTML = (prev+" | Name: "+combo);
            }
        }
        client.send();
    }
