window.onload = function (){
    var inputField = document.getElementById("input");
    var resultButton  = document.getElementById("resultBtn");
    var outputField = document.getElementById("output");
    var partCheckbox = document.getElementById("part2");
    resultButton.onclick = function(){
        const input = inputField.value;
        const part2 = partCheckbox.checked;
        outputField.innerHTML = getLines(input, part2);
    }
    getLines = function(input, part2){
        let array = [];
        let sum = 0;
        array = input.split("\n");

        array.forEach(row => {
            sum += getLine(row, part2);
        });

        return sum;
    }

    getLine = function(input, part2){
    if(part2){
        var array = [];
        var divisible = [];
        array = input.split("	");

        array = array.sort();

        array.forEach(element => {
            var filtered = array.filter(function(a){
                return (a%element == 0 || element%a == 0) && a != element;
            });
            if(filtered.length > 0){
                divisible.push(x);
            }
                
        });

        var max = Math.max(...divisible);
        var min = Math.min(...divisible);
        return max/min;
    }else{
        var array = [];
        array = input.split("	");

        var max = Math.max(...array);
        var min = Math.min(...array);
        return max - min;
    };
  };
};
