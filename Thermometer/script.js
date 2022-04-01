
const tempLoad = () => {

  let temp = document.getElementById('tempIc');
  temp.innerHTML = "&#xf2cb";
  setTimeout(()=>{
    temp.innerHTML = "&#xf2ca";
    temp.style.color="green";
  },1000);
  setTimeout(()=>{
    temp.innerHTML = "&#xf2c9";
  },2000);
  setTimeout(()=>{
    temp.innerHTML = "&#xf2c8";
  },3000)
  setTimeout(()=>{
    temp.innerHTML = "&#xf2c8";
  },4000);
  setTimeout(()=>{
    temp.innerHTML = "&#xf2c7";
    temp.style.color="Red";
  },4000);
}

tempLoad();
setInterval(tempLoad,5000);


const btn =  document.querySelector('#btn');

const calulate = () =>{

  const num = document.querySelector('#num').value;
  // console.log(num);
  const sel = document.querySelector('#opt');
  const options = opt.options[sel.selectedIndex].value;
  // console.log(options);

  const res = document.querySelector('#res');

  const celToFah = (cel) =>{
    let fa = Math.round((cel * 9/5) + 32);
    return fa;
  }
  const FahTpcel = (far) =>{
    let ce = Math.round( (far-32) * (5/9) );
    return ce;
  }

  let result;
  if(options=='cel'){
    result = celToFah(num);
    res.innerHTML=` ${result} ° Fahrenheit`;
  }else{
    result = FahTpcel(num);
    res.innerHTML=` ${result} ° Celsius`;
  }

}

btn.addEventListener('click',calulate);
calulate();

