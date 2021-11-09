class Customer {
    constructor(id,customerNumber) {
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1,"1234")
console.log(customer.id) //undefined
//instance a yapılan prototyping
customer.name = "İrem İlhan"
console.log(customer.name)
//class a yapılan prototyping
Customer.bisey = "bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer {
 constructor(firstName,id,customerNumber) {
    super(id,customerNumber)
    this.firstName = firstName
 }
}

class CorporateCustomer extends Customer {
    constructor(companyName,id,customerNumber) {
     super(id,customerNumber)
     this.companyName = companyName
    }

}

//MAP YAPISI
let products = [
    {id:1,name:"Acer",unitPrice:10000},
    {id:2,name:"Hp",unitPrice:20000},
    {id:3,name:"Lenovo",unitPrice:40000},
    {id:4,name:"Dell",unitPrice:1008900}
]

console.log("<ul>")
//$ işareti + içindir.(alt+virgül tuşu ile tırnak gibi işareti yaptım.)
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

//birden fazla obje için süslü parantez kullanıyoruz.
products.map(product => {
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})

//filter işlemi 
//filter sonucu boş bile olsa yeni bir array oluşturur. Bu da referansı değiştiriyor.
//referans değişince ekran yeniden render ediliyor. state management olayı için
//referansın değişmesi gerekiyot. O yüzden filtrelemeyi kullanıyoruz.
 let filteredProducts = products.filter(product=>product.unitPrice>40000)
 console.log(filteredProducts)

 //reduce akümülatör görevi görüyor. Örneğin sepet tutarı gibi.
 let cartTotal = products.reduce((acc,product)=>acc + product.unitPrice,0)
 console.log(cartTotal)

 let cartTotal2 = products.filter(product=>product.unitPrice>40000)
 .map(p=> {
     p.unitPrice = p.unitPrice*1,18
     return p
 }).reduce((acc,p)=>acc + p.unitPrice,0)
 console.log(cartTotal2)