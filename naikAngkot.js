function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = []
    
    function jarak(awal, ahir){
      return rute.indexOf(ahir) - rute.indexOf(awal)
    }
  
    for(var i=0;i<arrPenumpang.length;i++){
      var tampung= {}
      tampung.penumpang = arrPenumpang[i][0]
      tampung.naikDari = arrPenumpang[i][1]
      tampung.tujuan = arrPenumpang[i][2]
      tampung.bayar = jarak(tampung.naikDari,tampung.tujuan) * 2000
      result.push(tampung)
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot(
    [ ['Dimitri', 'B', 'F'], ['Icha', 'A', 'B'] ] ));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]