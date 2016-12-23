var body = document.body;
var reservationContainer;

var FHModal = function(obj) {
  function create(obj) {
    buildHTML(obj)
    console.log(obj.colors);
    console.log(obj.cards);
  }

  return create(obj)
}

function buildHTML(obj) {

/* Create elements for tool */
  var button = document.createElement('button');
  button.classList.add('FH-reservation-button')
  button.style.position = 'fixed';
  button.style.width = '130px';
  button.style.height = '30px';
  button.style.right = '20px';
  button.style.bottom = '20px';

  button.textContent = obj.text.mainActionButton;
  body.appendChild(button);

  reservationContainer = document.createElement('div');
  reservationContainer.style.position = 'fixed';
  reservationContainer.style.bottom = '80px';
  reservationContainer.style.right = '20px';
  reservationContainer.style.backgroundColor = obj.colors.headerColor;
  reservationContainer.style.display = 'none';
  reservationContainer.style.height = '550px';
  reservationContainer.style.width = '350px';

  var reservationTitle = document.createElement('div');
  reservationTitle.style.height = '15%';
  reservationTitle.textContent = obj.text.headerText;

  reservationContainer.appendChild(reservationTitle);
  body.appendChild(reservationContainer);


  var detailContainer = document.createElement('section');
  detailContainer.style.height = '85%';
  detailContainer.style.backgroundColor = 'yellow';

  reservationContainer.appendChild(detailContainer)
}

document.addEventListener('click', function(e) {
  if(e.target.className === 'FH-reservation-button') {
    if (reservationContainer.style.display === 'none') {
      return reservationContainer.style.display = 'block'
    }
    if (reservationContainer.style.display === 'block') {
      return reservationContainer.style.display = 'none'
    }
  }
})
