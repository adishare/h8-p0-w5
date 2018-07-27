function meleeRangedGrouping (str) {
    var strArr = str.split(',')
    var result= [[],[]]

    function type(string){
        return string.split('-')
    }

    for(var i=0;i<strArr.length;i++){
        if(type(strArr[i])[1] == 'Ranged') result[0].push(type(strArr[i])[0])
        if(type(strArr[i])[1] == 'Melee') result[1].push(type(strArr[i])[0])
    }
    
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []