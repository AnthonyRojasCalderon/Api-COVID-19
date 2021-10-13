( async function (){
    const response = await fetch('https://api.covid19api.com/total/country/costa-rica');
    const result = await response.json();

    covid19 = result;

    for (let i = 0; i < result.length; i++) {
        document.getElementById('tabla').innerHTML +=         
                    "<tr>" +
                    "<td>" + new Date((covid19[i]["Date"])).toLocaleDateString() + "</td>" +
                    "<td>" + covid19[i]["Confirmed"] + "</td>" +
                    "<td>" + covid19[i]["Deaths"] + "</td>"+
                    "<td>" + covid19[i]["Active"] + "</td>"+
                    "</tr>";
    }
}());
