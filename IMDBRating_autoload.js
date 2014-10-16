// ==UserScript==
// @name        IMDB ratings
// @namespace   imdb
// @include     http://s2.100100movie.com/years/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

function loadRating(title, id)
{
$.getJSON( "http://www.omdbapi.com/?t="+title, function( data ) {
var items = [];
$.each( data, function( key, val ) {
//items.push( "<li id='" + key + "'>" + val + "</li>" );
    if(key == "imdbRating")
        document.getElementById(id).innerHTML = '<font color="red">(' + val + ')</font>' ;
});
});
}


// create DIV element and append to the table cell
function createCell(cell, text, style, id) {
    //cell.innerHTML = '<span id="' + id + '" ></span>' + cell.innerHTML;
    
    var div = document.createElement('span'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('id', id);              // set DIV id attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    //cell.appendChild(div);                   // append DIV to the table cell
    cell.insertBefore(div, cell.firstChild);
}

// append row to the HTML table
function appendRow() {
//    alert('Row');
     //   var tbl = document.getElementById('Directory Listing'), // table reference
        var tbl = document.getElementsByTagName("table")[0];
        var row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row',  'row' + i.toString());
    }
}

// append IMDB Ratings to first column to the HTML table
function IMDBappendColumn( year) {
//    alert('column');
    var tbl = document.getElementsByTagName("table")[0];
    var    i;
    //createCell(tbl.rows[0].insertCell(tbl.rows[0].cells.length), '<b>IMDB Rating</b>', 'col', 'imdbid' );
    createCell(tbl.rows[0].cells[0], '(IMDB Rating)', 'col', 'imdbid' );
    // open loop for each row and append cell
    for (i = 2; i < tbl.rows.length; i++) {
        var it1 = tbl.rows[i].cells[0];
        var it  = it1.getElementsByTagName('a')[0].innerHTML;
        var title = it.split('(')[0].split(year)[0].replace(/\./g,' ');
        var id = 'imdb' + i.toString();
        loadRating(title, id);
        createCell(tbl.rows[i].cells[0], '(...)', 'col', id );
    }
}

if (!Array.prototype.last2){
    Array.prototype.last2 = function(){
        return this[this.length - 2];
    };
};

//appendRow()
var year = document.URL.split('/').last2();
IMDBappendColumn(year);
// IMDb ID to Search
