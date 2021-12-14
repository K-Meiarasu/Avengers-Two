const names=['spiderman','wonderwoman','ironman','antwoman','blackpanther','catwoman','hulk','blackcat','thor','vader','captainamerica','loki','bolt','strange','captain','thanos','hawkeye','wolverine','blackwidow','drax'];
const obj=[]
var l=0,d=0,final_d=0,final_l=0
for(let val=0;val<5;val++){
    l=0,d=0
    initPlayers()
    getRandomStrength(obj)
    buildPlayers(obj)
    function initPlayers(){
        for (let i=1;i<=20;i++){
            var num=Math.ceil(Math.random()*100);
            var format={name:"", strength:"",image:"",type:""}
            format.name=names[i-1]
            format.image="super-"+i+".jpg"
            if(num%2==0){
                format.type="hero"
            }
            else{
                format.type="villain"
            }
            obj.push(format)
        }
        for (let i=0;i<10;i++){
            var num=Math.ceil(Math.random()*100);
            var format={name:"", strength:"",image:"",type:""}
            format.name=names[i-1]
            format.image="super-"+i+".jpg"
            if(num%2==0){
                format.type="hero"
            }
            else{
                format.type="villain"
            }
            obj.push(format)
        }
    }
    function getRandomStrength(obj){
        for(let i=0;i<20;i++){
            var num=Math.floor(Math.random()*100)
            obj[i].strength=num
            if(i<10)
            {
                l+=obj[i].strength;
            }
            else{
                d+=obj[i].strength;
            }
        }
    }
    function buildPlayers(obj){
        const team1=document.getElementById('team1')
        const team2=document.getElementById('team2')
        for(let i=0;i<10;i++){
            var group=document.createDocumentFragment();
            var join=group.appendChild(document.createElement("div"));
            var img=document.createElement("img")
            var h1=document.createElement("h1")
            var h3=document.createElement("h3")
            img.src="./images/"+obj[i].image
            h3.innerHTML=obj[i].name
            h1.innerHTML=obj[i].strength
            join.appendChild(img)
            join.appendChild(h1)
            join.appendChild(h3)
            join.style.border="solid black";
            team1.appendChild(group)
        }
        for(let i=10;i<20;i++){
            var group=document.createDocumentFragment();
            var join=group.appendChild(document.createElement("div"));
            var img=document.createElement("img")
            var h1=document.createElement("h1")
            var h3=document.createElement("h3")
            img.src="./images/"+obj[i].image
            h3.innerHTML=obj[i].name
            h1.innerHTML=obj[i].strength
            join.appendChild(img)
            join.appendChild(h1)
            join.appendChild(h3)
            join.style.border="solid black";
            team2.appendChild(group)
        }
    }
    if(l>d)
    {
        final_l++;
    }
    else{
        final_d++;
    }
    document.getElementById("res").innerHTML=final_l+'-'+final_d;
}