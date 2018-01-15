const $candidateGrid = $('.candidate-grid');
let bioShowing = 0;
renderCandidates(candidateData);

//takes in an array of candidate objects from candidat-data.js
function renderCandidates(candidates){
  //this function could be updated to adjust programmatically for an unknown number of candidates
  for (let i = 0; i < candidates.length; i++){
    const candidate = createCandidate(candidates[i]);
    $candidateGrid.append(candidate);
  }
}

//takes in a candidate object
function createCandidate(candidateData){
  const { id, first_name, last_name, image, electoral_district, party } = candidateData;

  const candidateId = 'candidate' + id;
  const candidateName = first_name + " " + last_name;
  const altText = `Photo of ${candidateName}`;

  const $candidateDiv = $('<div>').addClass('candidate').attr('id', candidateId);
  const $innerDiv = $('<div>').addClass('clickable');
  const $anchor = $('<a>')
      .attr({
        href: `#`
      })
      .addClass('link');
  const $imageDiv = $('<div>').addClass('imageDiv');
  const $image = $('<img>')
      .attr({
        'src': './assets/images/' + image,
        'alt': altText,
      });
  const $infoDiv = $('<div>').addClass('candidateInfo');
  const $nameDiv = $('<div>').addClass('name').text(candidateName);
  const $detailsDiv = $('<div>').addClass('affiliations').text(`${electoral_district} | ${party}`);

  $imageDiv.append($image);
  $infoDiv.append($nameDiv).append($detailsDiv);
  $anchor.append($imageDiv).append($infoDiv);
  $innerDiv.append($anchor);
  $candidateDiv.append($innerDiv);

  return $candidateDiv;
}

function renderBio(id) {
  bioShowing = id;
  const divId = 'bio' + id;
  const candidateId = 'candidate' + id;
  const candidate = candidateData[id-1];

  const $bioDiv = $('<div>').addClass('bioDiv').attr('id', divId);
  const $bioParagraph = $('<p>').text(candidateData[id-1].bio);
  const $heading = $('<h3>').addClass('bioHeading').text('About ' + candidate.first_name);
  const $candidateDiv = $('#' + candidateId);

  $bioDiv.append($heading).append($bioParagraph);
  $candidateDiv.after($bioDiv);
}

function addVoteButton(id){
  const $candidateDiv = $('#candidate' + id);
  const $voteButton = $('<button>').text('VOTE').addClass('vote');
  attachVoteListener($voteButton, id);
  $candidateDiv.append($voteButton);
}

function attachVoteListener(button, id){
  const candidate = candidateData[id - 1];

  //create confirmation modal
  const $confirmationModal = $('<div>').addClass('modal').attr('id', 'confirmation');
  const $confirmationContent = $('<div>').addClass('modal-content');
  const $modalBanner = $('<div>').addClass('modal-banner');
  const $closeButton = $('<span>').addClass('close').html('&times;');
  const $confirmationHeading = $('<h3>').addClass('confirmation-heading').text('Thanks!');
  const $confirmationMessage = $('<p>').addClass('confirmation-message').text('Thank you for voting for ' + candidate.first_name + " " + candidate.last_name + '.');

  $modalBanner.append($closeButton);
  $confirmationContent.append($modalBanner).append($confirmationHeading).append($confirmationMessage);
  $confirmationModal.append($confirmationContent);
  $candidateGrid.append($confirmationModal);

  $(button).on('click', function(event) {
    event.preventDefault();
    $('#confirmation').css('display', 'block');
  })

  $closeButton.on('click', function(event) {
      $('#confirmation').remove();
      $('#bio' + bioShowing).remove();
      bioShowing = 0;
      $('.vote').remove();
  })
}

$('.clickable').on('click', function(event) {
  event.preventDefault();
  const candidate = $(this).parent().attr('id');

  //get id number from the candidateDiv id
  const candidateId = parseInt(candidate.split('candidate')[1]);

  //if a bio and vote button are already showing on the page, remove them
  if (bioShowing !== 0 ) {
    $('#bio' + bioShowing).remove();
    $('.vote').remove();
  }
  //if candidate clicked did not already have bio showing, show bio and vote button
  if (bioShowing !== candidateId) {
    addVoteButton(candidateId);
    renderBio(candidateId);
  //if candidate clicked DID have bio showing, update bioShowing variable (bio and vote button were removed above)
  } else {
    bioShowing = 0;
  }
})
