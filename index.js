
//_______________ARRAY__________________

//datalari toplu bir sekilde tututyor.


const student1 = "Muhlise"
const student2 = "Utku"
const student3 = "Kemal"

const studentArray = ["Muhlise", "Utku", "Kemal","Cengiz", "Erhan"]

console.log(studentArray)
console.log(studentArray[0])// Muhliseyi yazdirdik.

console.log(studentArray.length) //köseli parantez icinde yer alan tüm kelimelerin sayisini verdi. 5 isim vardi. sonuc 5.

// eger parantez icinde yer alan son elemani secmek istersek;

console.log(studentArray[studentArray.length-1])// 0 dan basliyor. bu nedenle, son eleman 5 degil 4.eleman olan Erhan ismini alir.

studentArray[2] = "Beyza"
console.log(studentArray) // burada biz Kemal isminin yerine Beyza ismi ile degisiklik yaptik. listemiz konsolda degisiklik yer aldi. burada const ile yazili daha onceden atanmis ismi degistirebildik. yukarida atanma yapildi. bu nedenle tekrar constla atama yapamayiz ama icinde degisiklige müsade ediyor. 



//__________BASIC ARRAY METHODS / OPERATIONS:


//ADDING ELEMENT

// push () methodu:

studentArray.push("Ayse")
console.log(studentArray) // burada listemize Ahmeti ekledik. 

//Array e bagli bir fonksiyondur. 

const newLength= studentArray.push("Ahmet")
console.log(newLength) // burada bu yöntemle length imizi görüyoruz. sonuc eleman sayimiz 7 .
console.log(studentArray)


//unshift () Methodu:

//bu method ile sifirinci endexe yani en basa ekliyor. 

studentArray.unshift("Hayri")
console.log(studentArray) // unshift push özelliginin tam tersi. en basa ekliyor unshift. sayi yada yazi fark etmiyor, hepsini ekliyor. 

studentArray.unshift("c")
studentArray.unshift("8")
studentArray.unshift(["pekiyi"])// bunu yaparak array i de icine alabiliyoruz. ve console.log icinde arrayi tikladigimizda ayrintili hepsini görebiliyoruz. ve length i yaziyor. 
console.log(studentArray)


//____________REMOVE ELEMENT_____________
//pop( ) son elementi siliyoruz. 

studentArray.pop() // burada pop icine birsey yazmiyoruz. cunku son eleman silinecek. 

console.log(studentArray)// burada son eleman olan Ahmet silindi. 

const popped = studentArray.pop()
console.log(popped) // biz hangisini attigimizi gormek istiyorsak, const ile baslayarak sonunda pop ile bitirerek bunu consolda gorebiliriz. 

// shift() bu özellik ilk elemani siliyor. 

studentArray.shift()
console.log(studentArray)
const shifted= studentArray.shift() // bu degiskeni ekleyerek hangi elemani attigimizi görebiliriz. 
console.log(shifted)
console.log(studentArray)

//INDEXOF METHODU____________

console.log(studentArray.indexOf("Muhlise")) // muhlisenin listedeki siralama sayisi 2 sonuc 2.

//indexOf sira numarasini bulduruyor kisaca... eger eslesme tam gerceklesme yazim hatasi nedeniyle -1 yazar. 



//_____INCLUDES METHODU.

console.log (studentArray.includes("Cengiz")) // eger listemizde ilgili isim varsa true yoksa false yazar. 

// SPLICE METHODU.

// splice (start, deleteCount)

const spliced = studentArray.splice(2, 4)
console.log(spliced) // burada listeden ikinci siradaki ismi buldu. ve 1 dedigimiz icin o ismi sildi. eger 4 dersek, ilk belirlenen sisimden itibaren 4 ismi siler.
console.log(studentArray)

// simdi ekleme yapiyoruz:

const spliced2= studentArray.splice(0,2, "Ebuzer", "Vedat")
console.log(spliced2) // burada splice ozelligini const degiskeni ile ekleme yapmasina izin verdi yine. ilk once sildik sonrada ekleme yaptirdik.
console.log(studentArray) 


//iki ismin arasina hicbirseyi silmeden ekleme yapmak istersek;

const spliced3= studentArray.splice(2,0, "Hasan", "Muhlise")
console.log(spliced3)
console.log(studentArray)// burada 2. siradan itibaren Hasan ve Muhliseyi yerlestirmis olduk. 


// ________SLICE:

//slice(start, end) 
const sliced= studentArray.slice(1,3)
console.log(sliced) // bu özellik ile orjinalini bozmadan almak istediklerimizi listeden alabiliyoruz. splice özelligi silip yerine baska birsey koyma isini bize yapiyor. slice özelligi orjinal listemizi hic bozmuyor. 
console.log(studentArray)


// SORU: 3 ve 3un katlari fizz 
//5 ve 5in katlari buzz
//15 in katlari fizzbuzz yazdiriyoruz. 


//_____________OBjECTS___________.


const employeeArr=[
'John',
'Snow',
28,
'trainer'
] 

//ben bunlari firstname secondname ile yada index numarasi ile bulamam. o zaman objeleri tanimlamaliyim. 


//key-value pairs

const empObj={
    firstname:'John', //bu key-value lara property deniyor. 
    lastname:'Snow',
    age: 28,
    job:'trainer'
}
    console.log(empObj)//burada index numarasi önemli degil, key-value dedigimiz verdigimiz first, last, age anahtar sözcükleri isimizi görüyor
    
    //Array icinde objectler, Objectler icinde Arrayler olur. bu icice kullanima uygundur. cokca kullanilacagini hoca anlatiyor. 


    //DOT NOTATION - BRACKET NOTATION:

    console.log(empObj.firstname) //bu sekilde yazdigimizda bu anahtar sözcuk bizi isme ulastiriyor. Johna. Bu kullanim en iyisidir. parantez icinde noktali kullanim yani

    //Nokta ile ulasma islemine DOt Notation diyoruz. 


    // Bracket Notation ise;
    // köseli parantez icinde arama yapmaya denir. 

    console.log(empObj['firstname'])// John ismini yine bu sekilde  bulabiliyoruz. 

    nameKey = "Name"

    console.log(empObj['first' + nameKey])
    console.log(empObj['last' + nameKey])//bu sekilde de tanimlayarak birseyleri buldurabiliriz

    
    const val= prompt('What do u want to know about John')

    console.log(empObj.val)//bu sekilde yazinca undefined yaziyor. 
    console.log(empObj[val])// burada prompt yaparak ekrandaki bölüme key-valueleri taratip, kisi hakkinda bilgi aramasi yaptirabiliyoruz. mesela job:soruyoruz.  trainer cikiyor. 

    empObj[val] ? console.log(empObj[val]) : console.log('Wrong Request')//burada if cümlelere gerek kalmadan eger aradigimiz sey varsa zaten cevabi cikiyor. yoksa undefined yazar. burada biz Wrong Request yazdirilmasini istedik. prompta mail yazdik cevap Wrong Request oldu. 

    // biz yukarida olusturdugumuz tanimalamalara sonradan ek girisler yapabiliriz. mesela location yada mail gibi.

    empObj.location = 'Germany'
    console.log(empObj) // location u ekledik

    empObj['mail']= "abc@gmail.com"
    console.log(empObj) // maili ekledik.

    // biz array ekeleyebiliriz Cok Önemli.

    empObj['language'] =['English', 'Deutsch', 'Spanish']
    console.log(empObj) // evet Array imizi de ekledik.


    empObj['driveLicence'] = true
    console.log(empObj)//lisansimizi da ekldeik.


    // biz function da ekleyebiliyor muyuz?

    const empObj2={
        firstname:'John', //bu key-value lara property deniyor. 
        lastname:'Snow',
        birthYear: 1990,
        job:'trainer'
    }

        //calcAge : function(birthYear){
        //return 2021 - birthYear //burada bir sürü birthYear kullandik.


 
            calcAge: function(){
             console.log("this: ", this)
            return 2021 - this.birthYear
      } 
   
    console.log(empObj2.calcAge()) // birtYear yerine this ile kisaca isi hallettik.
