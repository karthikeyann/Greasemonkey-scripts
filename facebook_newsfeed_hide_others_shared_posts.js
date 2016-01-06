// ==UserScript==
// @name           Facebook Timeline Cleaner - Remove other's shared posts
// @namespace      fbnewsfeedreduce
// @require        http://code.jquery.com/jquery-1.7.1.min.js
// @grant       none
// @version 1
// ==/UserScript==
/*
 * For jQuery Conflicts.
 */
this.$ = this.jQuery = jQuery.noConflict(true);
function main() {
  // This is more like it!
  //$('.profileLink').hide();
  console.log('success');
  $('.profileLink').each(function () {
    /*console.log($(this).parent().contents().filter(function() {
    return this.nodeType == 3;
}).text()); */
    var txtonly = $(this).parent().contents().filter(function () {
      return this.nodeType == 3;
    }).text();
    var patt = 'shared \'s .';
    if (txtonly.search(patt) != - 1) {
      $(this).closest('[data-testid]').hide();
      console.log($(this).closest('[data-testid]'));
      //console.log(txtonly); 
    }
  });
  setTimeout(main, 4000); // Start itself in 2 seconds again.
}
setTimeout(main, 2000);
