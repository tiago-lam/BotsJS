function produceReport()
{
    var wb = XLSX.utils.book_new();

    wb.Props = {
        Title: "Bot Report",
        Subject: "Test",
        Author: "Bot",
        CreatedDate: new Date(2020,11,7)
    };

    var ws_data = []
    wb.SheetNames.push("Bot Log 1");
    ws_data.push(['', '1', '2' , '3', '4', '5', '6', 'Correct Answers']); 
    for (const [key, value] of Object.entries(report)) {
        botData = [key, value[0], value[1], value[2], value[3], value[4], value[5], value[6]]
        ws_data.push(botData)
        //bws = XLSX.utils.aoa_to_sheet(botData);
        //wb.Sheets["Bot Log 1"] = bws;
    }
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Bot Log 1"] = ws;

    // for (const [key, value] of Object.entries(report)) {
    //     botData = [[key, value[1], value[2], value[3], value[4]]]
    //     bws = XLSX.utils.aoa_to_sheet(botData);
    //     wb.Sheets["Bot Log 1"] = bws;
    // }

    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});    
    return wbout;
}


function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}