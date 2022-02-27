document.getElementById('mySpinner').hidden = true;

document.getElementById("myBtn").addEventListener ('click', function fibonacci() {
  myInput = document.getElementById("inputFibo").value; 
  let errBlock = document.getElementById('error-block-id');
  let loader = document.getElementById('mySpinner');
  let url = `http://localhost:5050/fibonacci/${myInput}`
  
  
  // url += myInput;
  
  
  if (myInput > 50) {
    loader.hidden = false;
        loader.hidden = true;
    document.getElementById("inputFibo").style.color = '#D9534F'
    document.getElementById('errorServer').hidden = true;
    errBlock.innerHTML = 'Can’t be larger than 50'
    errBlock.classList.remove('visually-hidden')
    return document.getElementById("result").innerText = (' '); 
    
  } else {
    loader.hidden = false;
    document.getElementById("inputFibo").style.color = 'black'
    fetch(url).then((response)  => { 
      response.json().then((data) => {
        
        errBlock.classList.add('visually-hidden')
        document.getElementById('errorServer').hidden = true;
        loader.hidden = false;
        loader.hidden = true;
        return document.getElementById("result").innerText = data.result 
      })
      .catch((err) => meaningOfLife());
    })
    
    
      }      
      function meaningOfLife() {
        loader.hidden = false;
        loader.hidden = true;
        document.getElementById('errorServer').hidden = false;
        document.getElementById('errorServer').innerHTML = 'Server Error: 42 is the meaning of life' 
       return document.getElementById("result").innerText = (' ') };
})

