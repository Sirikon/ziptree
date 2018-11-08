var fs = require('fs');
var path = require('path');
var ziptree = require('../lib/ziptree.js');

var photo = fs.readFileSync(path.join(process.cwd(), '/assets/photo.jpg'));

var file = new ziptree({
    'testfile1.txt': 'This is a String',
    'testfile2.txt': 123456,
    'photo.jpg': photo,
    'folder': {
        'samephoto.jpg': photo,
        'im_gonna_get_you_too.txt': 'Another one bites the dust...',
        'folder-ception': {
            'photoagain.jpg': photo
        }
    }
});

var data = file.toBuffer();

fs.writeFileSync(path.join(process.cwd(), '/result.zip'), data);
