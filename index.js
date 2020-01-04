let n = 7;
let m = 0;
let arr = ['logo.jpg' ,'beach.jpg' ,'christmas.jpg' ,'diwali.jpg' ,'holi.jpg' ,'nettech.jpg' ,'pi.jpg', 'sae.jpg']
function addCard() {
    $name = $('#Name');
    $desc = $('#event-Desc');
    let eventName = $name.val();
    let eventDesc = $desc.val();
$('#cards').append(`<div class = "card-columns">
<div class="card" style="width: 18rem;" id = "card${n}">
  <img class="card-img-top" src="${arr[Math.floor(10*Math.abs(Math.random()-0.3))]}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title" id = "head${n}"}>${eventName}</h5>
      <p class="card-text" id = "p${n}">${eventDesc}</p>
      <a href="#" class="btn btn-primary" style = "align-self: auto;" onclick = "recognise(${n})" data-toggle="modal" data-target="#edit-modal">edit</a>
      <a href="#" class="btn btn-danger" style = "align-self: auto;" onclick = "delCard('card${n}')">Delete</a>
    </div>
</div>`)
n++;
}

function delCard(id) {
    $id = $(`#${id}`);
    $id.remove();
}

function editCard() {
    $headid = $(`head${m}`);
    $pid = $(`p${m}`);
    $editName = $('#edit-Name');
    $editDesc = $('#edit-event-Desc');
    let edit_Name = $editName.val();
    let edit_eventDesc = $editDesc.val();
    $headid.html(edit_Name);
    $pid.html(edit_eventDesc);
}

function recognise(t){
    m = t;
}