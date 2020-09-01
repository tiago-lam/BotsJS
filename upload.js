  var result;
  document.getElementById('import').onclick = function() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }
  
    var fr = new FileReader();
  
    fr.onload = function(e) { 
      console.log(e);
      result = JSON.parse(e.target.result);
      document.getElementById("playTraces").style.display = "block"
    }
    fr.readAsText(files.item(0));
  };
