$(document).ready(function () {
  // Welcome to the JavaScript! Let's use jQuery to get 10 results from randomuser.me.
  $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      // As long as we're successful, we'll initialize a variable for the markup.
      var markup = '';
      // Now we'll loop through the data.results, which is the array with all of the goodness.
      $.each(data.results, function(i, item) {
        // There's A LOT of markup, so we'll set vars up top and use them below.
        var img = item.picture.medium;
        var name = item.name.first + ' ' + item.name.last;
        var location = item.location.city + ', ' + item.location.state;
        var phone = item.phone;
        var email = item.email;
        markup += '<div class="row">';
        markup += '<div class="person__info">';
        markup += '<img src="' + img + '" alt="Photo of ' + name + '"/>';
        markup += '<div class="person__name-location">';
        markup += '<h2 class="person__name light capitalize no-margin">' + name + '</h2>';
        markup += '<h3 class="person__location light capitalize no-margin">' + location +'</h3>';
        markup += '</div>';
        markup += '<button class="person__expand"><i class="fas fa-angle-down"></i></button>';
        markup += '</div>';
        markup += '<div class="person__contact-info">';
        markup += '<span class="person__phone light">Phone <a href="tel:' + phone + '">' + phone + '</a></span>';
        markup += '<span class="person__email light">Email <a href="mailto:' + email + '">' + email + '</a></span>';
        markup += '</div>';
        markup += '</div>';
      });
      $('.people').html(markup);
      
      // When we click the info row, let's show the contact info and spin the arrow!
      $('.person__info').on('click', function(){
        $(this).find('.person__expand').toggleClass('open');
        $(this).next('.person__contact-info').toggleClass('open');
      });
    }
  });
});