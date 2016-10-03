'use strict';

require('bulma/bulma.sass')
require('font-awesome/css/font-awesome.css')

// Require index.html so it gets copied to dist
require('./index.html')

// Initialize Firebase
firebase.initializeApp(require('../config.js'))
var database = firebase.database()

// Embed Elm
var Elm = require('./Main.elm')
var mountNode = document.getElementById('main')
var app = Elm.Main.embed(mountNode)

// Setup ports
var listRef = null
app.ports.changeList.subscribe(function (list) {
    if (listRef) {
        listRef.off()
    }
    database.ref('list/' + list + '/').on('value', function (snapshot) {
        console.log(snapshot.val())
        app.ports.listItems.send(snapshot.val())
    })
});

// app.ports.storeItem.subscribe(function (item) {
//     console.log(item)
// })
