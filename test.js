var fs = require('fs');

var ziptree = require('./lib/ziptree.js');

var foto = fs.readFileSync(process.cwd() + '/foto.jpg');

var file = new ziptree({
	'prueba1.txt': 'Hello Moto',
	'prueba2.txt': 23303030,
	'fotoguay.jpg': foto
});

var data = file.toBuffer();

fs.writeFileSync(process.cwd() + '/test.zip', data);