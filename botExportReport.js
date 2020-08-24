function produceReport()
{
    var wb = XLSX.utils.book_new();

    wb.Props = {
        Title: "Bot Report",
        Subject: "Test",
        Author: "Bot",
        CreatedDate: new Date(2020,23,8)
    };

    var ws_data = []
    wb.SheetNames.push("Bot Log");
    var botData = []
    //Headers -> ws_data.push(['', '1', '2' , '3', '4', '5', '6', 'Correct Answers']); 
    for (const [key, value] of Object.entries(report)) {
        value.forEach(function(element){
            botData.push(element)
        })
        ws_data.push(botData)
    }
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Bot Log"] = ws;

    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});    
    return wbout;
}

function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}