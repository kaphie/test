function plagawhat(){
    var string = prompt("i did not plagerise");
    var number=parseInt(string.charAt(string.length-1));
    var out=string.slice(0,string.length-1);
    
    if(isNaN(number)===true) {
    alert(string + "plagerise");
    }else {
    alert(out+(number+1));
    }
    }
    plagawhat();