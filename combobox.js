temp = retrieveAllChoices();
console.log(temp);

for(var i=0;i<Object.keys(temp).length;i++){
    for(var j=0;j<Object.keys(temp[i+1][1]).length;j++){
        if(i+1==Object.keys(temp).length){
            document.getElementById('select_9').innerHTML = temp[i+1][0][1];
            document.getElementById('select_10').innerHTML = temp[i+1][1][1];
        }
        else
        {
             document.getElementById('select_'+(i*Object.keys(temp[i+1][1]).length+j+1)).innerHTML = temp[i+1][1][j][1];
        }
}

}


