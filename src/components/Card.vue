<template>
    <div class="container-button">
    <button class="button" @click="AddCharacter"> Proceed to Payment</button>
    </div>
    <div class="container-general">
    <div v-for="(personaje,index) in personajes" :key="index" class="the-card">
    <div class="image-container"><img class="ilustration" :src="personaje.image" alt="illustration-hero"></div>
    <div class="card-content">
      <h1 class="title">{{personaje.name}}</h1>
      <p class="paragraph">{{personaje.species}}</p>
      <status-and-specie :status="personaje.status" :specie="personaje.specie"></status-and-specie>
      
      <div class="plan">
        <img class="image-music"  :src="personaje.image" alt="Imagen">
        <div><span class="annual">Annual Plan</span><span class="year">${{obj.count}} /year</span></div>
        <div class="change"><a href="#">Change</a></div>
      </div>
      <div class="payment"></div>
      <div class="span"><span> Cancel Order </span></div>
    </div>
    </div>
  </div>
</template>

<script setup>

    import StatusAndSpecie from './StatusAndSpecie.vue'
    import {reactive,ref} from "vue"
    const count = ref(59.99)
    const obj = reactive({ count })

    const data = reactive();
    async function getData(count){
    let data = await fetch("https://rickandmortyapi.com/api/character/"+count);
    let dato2 = await data.json();
    return dato2;
}
const personaje = ref(1)
const personajes = reactive([])

    async function AddCharacter(){
    let personaje1 = await getData(personaje.value); 
    personajes.push(personaje1);   
    personaje.value++;
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');
.the-card{
    background-color: #ffffff;
    width: 300px;
    border-radius: 12px;
    padding-bottom: 28px;
    
    
}
.container-general{
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    justify-content: center;
    border: 8px;
    margin-left: 200px;
}
.the-card{

    margin: 50px;
}
.container-button{
    position: fixed;
}
.button{
    padding: 4px;
    background-image: linear-gradient(to bottom, white 60%, rgb(255, 197, 88) );
    border-radius: 8px;
    font-size: 14px;
    width: 128px;  
    margin-left: 16px;
    margin-top: 16px;
}
.card-content{
    margin: 16px;
}
.ilustration{
    width: 300px;
    border-radius: 12px 12px 0 0;
}
.title{
    font-size: 20px;
    font-weight: 900;
    text-align: center;
}
.paragraph{
    font-size: 16px;
    color: hsl(224, 23%, 55%);
    text-align: center;
    font-weight: 500;
}
.plan{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #6C768D11 ;
    border-radius: 12px;
    padding: 10px;
}
.image-music{
    width: 36px;
    height: 36px;
}
.annual{
    display: flex;
    font-weight: 900;
}
.year{
    color:  hsl(224, 23%, 55%);
}
.change{
    padding-top: 8px;

}
.change > a{
    font-size: 12px;
    font-weight: 900;
}
.payment{
    display: flex;
    justify-content: center;
}
.payment > button{
    background-color: hsl(245, 75%, 52%);
    color: #ffffff;
    border-radius: 12px;
    border: none;
    padding: 16px;
    width: 265px;
    font-family: "Red Hat Display";
    font-weight: 900;
    box-shadow: 0px 20px 24px #2B218544;
    margin-bottom: 16px;
}
.span{
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: #6C768D;
    height: 12px;
}

</style>