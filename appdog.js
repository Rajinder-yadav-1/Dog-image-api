let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";





btn.addEventListener("click", async ()=>{
    let link =  await getimages();
    console.log(link);
    let img = document.querySelector("#result");
  img.src = link;
 

})

async function getimages (){
    try{
        let res = await axios.get(url);
        return res.data.message ;
    } catch(e){
        console.log( "ERROR " , e)
        
    }

}
