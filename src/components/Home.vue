<!-- Home.vue -->
<template>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://img.freepik.com/premium-vector/coffee-shop-badge-vintage-style_476121-80.jpg" 
      alt="Logo" width="70" height="74" class="d-inline-block align-text-center">
      ร้านกาแฟ ร้านคาเฟ่
    </a>
  </div>
  <div class="video-background">
        <video autoplay loop muted>
          <source src="https://cdn.discordapp.com/attachments/1004965415870546035/1152200148336779304/Dark_Aesthetic_Modern_Grand_Opening_Cafe_Mobile_Video.mp4" type="video/mp4">
        </video>
  </div>
</nav>
    <div class="container text-center">
      <div class="row">
        <div
          class="col mt-5"
          v-for="(restaurant, index) in travelList"
          :key="index"
        >
          <div class="card" style="width: 18rem">
            <img
              :src="restaurant.imagesP"
              class="card-img-top"
              :width="sizeW"
              :height="sizeH"
            />
            <div class="card-body">
              <h2>ร้านที่ : {{ index+1 }}</h2>
              <h5 class="card-title">ชื่อร้าน : {{ restaurant.Name }}</h5>
              <p class="card-text">ราคา : {{ restaurant.price }}</p>
              <button
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                @click="goToOtherComponent(restaurant.Name, restaurant.imagesP,index)"
              >
                จอง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; // import ref
  
  export default {
    methods: {
      goToOtherComponent(Name, imagesP,index, price) {
        // ส่งค่าไปยังคอมโพเนนต์ OtherComponent.vue ผ่านคิวรี่พารามิเตอร์
        this.$router.push({
          name: 'other',
          query: {
            index:index,
            restaurantName: Name,
            restaurantImagesP: imagesP,
            restaurantPrice: price,
          },
        });
      },
    },
    setup() {
        const travelList = ref([
  {
    Name: " หมู(MOOH)",
    price: 100,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/MooH48.jpg",
  },
  {
    Name: "เคลย์ คาเฟ่ แอนด์ อีทเทอรี่(CLÉ cafe & eatery)",
    price: 200,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/CLE_-Cafe-26.jpg",
  },
  {
    Name: "รสเทอรี่ แฟลกชิพ สโตร์(Roast8ry Flagship Store)",
    price: 275,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/Roast8ry_24.jpg",
  },
  {
    Name: "คอฟฟ์ แอนด์ ธิงส์(Koff and Things)",
    price: 170,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/KoftAndThing_Cafe43.jpg",
  },
  {
    Name: "จิ มัทฉะ ที ไทม์(Ji Matcha Tea Time)",
    price: 190,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/JiMatchaTeaTime1.jpg",
  },
  {
    Name: "ชูส์บิวรี่(Chouxbury)",
    price: 340,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/Chouxbury_46.jpg",
  },
  {
    Name: "ขม ช็อกโกลาเทียร์เฮาส์(Khom Chocolatier House)",
    price: 260,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/Khom-42.jpg",
  },
  {
    Name: "อัลมอนด์ คาเฟ่ บาร์(Almond Cafe Bar)",
    price: 230,
    count_tb: 0,
    date: "",
    customer: "",
    Tel: "",
    time: "",
    imagesP: "https://www.tripgether.com/wp-content/uploads/2022/12/Almond_8.jpg",
  },
]);

  
    
  
      return { // return ตัวแปรออกมาจาก setup
        travelList,
      
      };
    },
  };
  </script>
  <style>
.button{
  color: #000000;
  padding: 8px 22px;
  border-radius: 6px;
  background: #4dc61d;
  transition: all 0.2s ease;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.button:active{
  transform: scale(0.96);
}


.ColShop {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 40px;
    row-gap: 40px;
    
    padding: 30px;
    
}



/* ปรับขนาดและสไตล์ */
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.video-background {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.video-background video {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card-img-top {
  max-width: 100%;
  height:250px;
  transition: all 0.2 ease;
}
.card-img-top:active{
  transform: scale(0.96);
}
.boxCount {
    background-color: aliceblue;
    color: black;
    border-radius: 5px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.87);
    margin-bottom: 10px;
  }
  /* Style the table */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

/* Style the total_text class */
.total_text {
  font-weight: bold;
}



/* Style the cancel button */
.cancle_bt {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.2 ease;
}
.cancle_bt:active{
  transform: scale(0.96);
}

/* Add hover effect to the cancel button */
.cancle_bt:hover {
  background-color: #ff1f00;
}

.card_body{
  padding: 5px;
  margin: 0;
}

.title{
  text-align: center;
  padding-bottom: 10px;
}

.c-item{
  height: 480px;
}

.c-item{
  height: 100%;
  object-fit: cover;
}
</style>