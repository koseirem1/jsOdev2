let sayi = 5
sayi="irem"
let student = {id:1,name:"irem"}
//console.log(student)

function save(puan=10,ogrenci) {
  //  console.log(ogrenci.name + ":" + puan)
}

save(undefined,student)

let students = ["İrem","Ayşe","Fatma"]
let students2 = [student,{id:1,name:"irem2"},"Ankara",{city:"İstanbul"}]

//console.log(students2)

let showProducts = function (id,...products) {
    console.log(id);
    console.log(products)
}

//showproducts ın tipini göster
//console.log(typeof showProducts)

//showproducts bir function olduğu için bu şekilde çağrılır
//burada ...products bir array üretir.
//showProducts(10,"Elma","Armut","Karpuz")

//bunun tam tersi bir konuda spreaddir.

//math.max bizden rest parametre ister.number array oluşturur.
//console.log(Math.max(1,2,60,70,80))

// let points = [1,2,3,4,60,70,15]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D",..."EF")


//destructuring
let populations = [1000,2000,3000,[50000,60000]]
let[small,medium,high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

//parametre olarak destruct gönderiyorum. [small1]
function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

//obje destruct etmek istersek
let category = {id:1,name:"İçecek"}
console.log(category.name)
console.log(category["name"]) //2 şekildede gösterilebilir.

let {id,name} = category
console.log(id)
console.log(name)
