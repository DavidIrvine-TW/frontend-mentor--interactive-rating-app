const submitBtn = document.querySelector('.submit');
const ratingBtns = document.querySelectorAll('.score');
const reset = document.querySelector('#reset')

let userScore = ""


ratingBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    userScore = btn.textContent;
    document.querySelector('.user-score').innerHTML = userScore
    
    ratingBtns.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      
    });

    btn.style.backgroundColor = "var(--clr-primary-orange)";
    btn.style.color = "white";
  
  })
})

submitBtn.addEventListener('click', event => {
  if (userScore === "") return
  document.querySelector('.submit-container').style.display = "none";
  document.querySelector('.your-sub').style.display = "flex"

})

reset.addEventListener('click', event => {
  ratingBtns.forEach(btn => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
    
  });
 
  document.querySelector('.submit-container').style.display = "block";
  document.querySelector('.your-sub').style.display = "none"
 
})

