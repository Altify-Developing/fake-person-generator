function readfileautomatically() {
        var client = new XMLHttpRequest();
        client.open('GET', '/states.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                let linenum = Math.floor(Math.random() * 2) + 1;
                let combo = (txt[linenum]);
                document.getElementById("wintotal").innerHTML = (combo);
                alert(combo);
            }
        }
        client.send();
    }
