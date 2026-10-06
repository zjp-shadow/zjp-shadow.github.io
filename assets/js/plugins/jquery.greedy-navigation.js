/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
* Rewritten as a single pass: put every link back in the visible list, then move
* links from the end into the dropdown until the bar fits. The first item (the
* site title) never moves. Unlike the original recursive version this cannot loop.
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');

  var available = $nav.width();
  while ($vlinks.width() > available && $vlinks.children().length > 1) {
    $vlinks.children().last().prependTo($hlinks);
    if ($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
      available = $nav.width() - $btn.width() - 30;
    }
  }

  var hidden = $hlinks.children().length;
  $btn.attr('count', hidden);
  if (!hidden) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  }
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();

// Re-measure once fonts and images have loaded and changed the link widths
$(window).on('load', updateNav);
