//add new link to the Zillow website
var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
$('body').append($newLink);
$('#zillowLink').attr('target', '_blank');
//changing the color of the HTML button element
$('#addHome').removeClass('btn-danger').addClass('btn-success');
$('h1').addClass('text-center');

console.log($('#zillowLink').attr( "href" ));
//add an event listenter
$('#addHome').on('click', function(evt){
  console.log(evt, this);
});
$('#homes tbody').on('click', 'button', function() {
	$(this).closest('tr').fadeOut(1000, function(){
    $(this).remove();
  });
});


var newHomes = [
  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

`
<tr>
  <td>27374 Matterhorn Drive</td>
  <td>1,664</td>
  <td>3</td>
  <td>2</td>
  <td>$279,500</td>
  <td><button class="btn btn-xs btn-danger">Remove</button></td>
</tr>
`
