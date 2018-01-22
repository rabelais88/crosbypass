const http = require('http')
const fs = require('fs')

http.get({
  host: 'www.kma.go.kr',
  path: '/DFSROOT/POINT/DATA/top.json.txt'
},function(res){
  var result = ''
  res.setEncoding('utf8')
  /*
  res.on('data',function(data){
    console.log('CROS data downloaded')
  })
  */
  res.on('end', function (){
    fs.writeFile('data.json', result, function (err){
      console.log(err)
    })
    console.log('finished reading JSON')
  }).on('data', function (data){
    result += data
  })
})