var admzip = require('adm-zip');

var ziptree = function(tree){
	var typeofTree = typeof(tree);
	if(typeofTree != 'object'){
		throw new Error('Object expected');
		return;
	}else if(Array.isArray(tree)){
		throw new Error('Arrays are not valid objects');
	}

	this.zipFile = new admzip();
	for(var e in tree){
		if(Buffer.isBuffer(tree[e])){
			this.zipFile.addFile(e, tree[e]);
		}else if(typeof(tree[e]) == 'number'){
			this.zipFile.addFile(e, new Buffer(tree[e].toString()));
		}else{
			this.zipFile.addFile(e, new Buffer(tree[e]));
		}
	}
	
	this.toBuffer = function(){
		return this.zipFile.toBuffer();
	}

}

module.exports = ziptree;