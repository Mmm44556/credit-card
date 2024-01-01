
window.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (evt.defaultPrevented) {
    const cardForm = document.querySelector('.card-content');
    cardForm.innerHTML = `<div class="card-form" id="card-form"
style="text-align:center;margin-top:5rem;"
>
<svg width="80" height="80" fill="none" 
style="justify-self: center;"
xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
<h3>THANK YOU</h3>
<p>We've added your card details</p>
<input type="reset"
onclick="location.reload()"
style="background-color:hsl(278, 68%, 11%);color:#FFF;cursor:pointer;"
value="Continue -->">
</div>`
  }

})




