// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ),
    vhost = require( 'vhost' );

function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static( dirPath ));
}

//Create server
var app = express();

//Create the virtual hosts
var mainDom = createVirtualHost("www.carolcoombs.com", "/home/jason/realtor/homepage");
var mapSubDom = createVirtualHost("map.carolcoombs.com", "/home/jason/realtor/map");

//Use the virtual hosts
app.use(mainDom);
app.use(mapSubDom);

//Start server
var port = 80;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});