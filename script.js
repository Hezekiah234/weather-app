const check = async()=>{
 let apiKey = "ee26ec43891666e8d4e8069a734cddff"
 let location = inp.value
 let url= 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey
let response = await fetch(url)
let convertResp = await response .json()
console.log(convertResp);
for (let index = 0; index < convertResp.length; index++) {
    show.innerHTML = (convertResp[index])  
}
show.innerHTML=`
<h1 class="city" style=" text-transform: uppercase;font-size:25px;"> ${convertResp.name}, ${convertResp.sys.country} </h1>
<h3 class="weather" style="text-transform: uppercase;font-size:18px;"> ${convertResp.weather[0].description}</h3>
 
`
// images.innerHTML=`
// <img src="${convertResp.weather[0].icon}" alt="">

// `
tempTa.innerHTML=`
<div class="temp" style="margin-top: 0px;">${Math.ceil(convertResp.main.temp-273)}<sup>0</sup>C</div>
`
last.innerHTML=`
<div  style="margin-top: 85px;display:flex;">
<div style=" font-size:25px;">
<h3 class="minHeading" >Wind</h3>
<h3 class="minTemp"> ${convertResp.wind.speed}m/s</h3>
</div>
<hr>
<div style=" font-size:25px; color:white; margin-left:50px;">
<h3 class="maxHeading" style="color:white;">Humidity</h3>

<h3 class="maxTemp">${convertResp.main.humidity}<sup>0</sup>c</h3>
</div>
</div>
`
me.innerHTML=`
<p style="margin-top: 200px; margin-left: 585px; font-size:20px; color: rgba(0, 0, 0, 0.473);">@HezzySphere.Tech.Pro</p>
`
document.getElementById("inp").value=""
}
check()