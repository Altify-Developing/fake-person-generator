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
        client.send();
        var client2 = new XMLHttpRequest();
        client2.open('GET', '/resc/names.txt');
        client2.onreadystatechange = function()
        {
            if( client2.responseText != '' )
            {
                let prev = document.getElementById("wintotal").innerHTML;
                var txt2 = client2.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 2999) + 1;
                let linenum2 = Math.floor(Math.random() * 2999) + 1;
                let combo = (txt2[linenum]+' '+txt2[linenum2]);
                document.getElementById("wintotal").innerHTML = (prev+" | Name: "+combo);
            }
        }
        client2.send();
    }
