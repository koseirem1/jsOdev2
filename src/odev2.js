//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz 
//bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak 
//asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function findPrime(...values) {
    var counter = 0;
    for(let i=0;i<=values.length;i++) {
        if(values[i] > 1) {
            for (let k = 2; k < values[i]; k++) {
                if (values[i] % k == 0)
                    counter++;
                }
                if (counter == 0) {
                    console.log(values[i] + ': asal sayidir ');
                }
                else {
                    console.log(values[i] + ':  asal sayi değildir.');
                }
            
      
        } else {
            console.log(values[i] + " Asal sayi degildir.")
        }
    }
}

findPrime(1,2,5,7,9,8,-5,0,8.2)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını 
//bulan programı yazınız.
function friendNumbers(firstNumber,secondNumber ) {
    let firstSum=0;
    let secondSum=0;
    for(let i=1;i<firstNumber;i++) {
        if(firstNumber%i==0)
        firstSum +=i;
    }

     for(let i=1;i<secondNumber;i++){
        if(secondNumber%i==0)
           secondSum +=i;
    }

     if(firstNumber==secondSum && secondNumber==firstSum)
         console.log( "Arkadas Sayilardir.");
     else
        console.log( "Arkadas Sayilar Degildir.");

}

friendNumbers(220,284)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function findPerfectNumbers(i) {
    let sum=0;
    for(let k=1;k<i;k++) {
        if(i%k==0) {
            sum+=k;
        }
    }

    if (sum == i) {
        return true;
    } else {
        return false;
    }
}
function perfectNumbers() {
    for(let i= 1;i<=1000;i++) {
        if(findPerfectNumbers(i)) {
            console.log(i + " mükemmel sayidir")
        }
    }
    
}
perfectNumbers()
//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeList() {
      
    for (let k = 2; k <= 1000; k++){
        var counter = 0;
        for (let i = 2; i < k; i++)
        {
            if (k % i == 0) 
            {
                counter = 1;
            }
        }
        
        if (counter != 1) {
            console.log(k);
        }
    }
}

primeList()