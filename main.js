// create a new list
function newElement() {

  const inputValue = document.getElementById("name").value + ' ';
  if (inputValue.length <= 3) {
    alert('Emri juaj duhet te kete me shume se 2 shkronja')
  } else {
    const div = document.createElement("div")
    div.className = "card"
    const li = document.createElement("li");

    const image = document.createElement("img")
    image.className = "image"
    image.src = 'User-avatar.svg.png'
    li.appendChild(image)
  
    // display name
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

   //display student/mesues
    const status = document.getElementById('select').value
    li.appendChild(document.createTextNode(status))
   
   // delete      
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    div.appendChild(li)
    document.getElementById("usersList").appendChild(div);


    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      }
    }

    if ( inputValue && status) {
      localStorage.setItem (inputValue, status);
    }
  }
  document.getElementById("name").value = "";
}
 
const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

//to search list
function search() {
  let input, filter, ul, li, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase();
  ul = document.getElementById("usersList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerTsext;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

