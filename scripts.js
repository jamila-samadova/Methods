
// String

// task1---------    Burda butun herflerin boyuk formada yazilmasi ucun stringin toUpperCase metodundan istifade etdim. Basqa bir deyisen yazib menimsetdim. Ancaq pet dəyişənini dəyişdirmir sadəcə nəticəni result dəyişənində saxlayır. Sonda da consolede gosterildi.

// let pet = "golden retriever";
// let result = pet.toUpperCase();
// console.log(result);

// task2---------- Burda cumlenin uzunlugu lazimdi ve onun ucun yazdigimiz deyisene length xüsusiyyetiden elave etdim onun uzunlugunu gosteririk consolda.

// let question = "Can you solve this problem?";
// let result = question.length;
// console.log(result);



// task3---------- Burda  cumlede olan sozun evezine basqa bir sozun islenmesini heyata kecirdik. Eyni qayda ile deyisene replace metodundan istifade ederek consolda gosterdik.
// let activity = "This game is activity";
// let result = activity.replace("activity", "boring");
// console.log(result);

// task4------ Burda  split metodundan istifade ederek 2-ci indeksde olan sozu goturub terkibindeki herflere ayiririq.
// let headline = "Choose Your Adventure !";
// let result = headline.split(" ")[2];
// console.log(result);


// array

// task5------------------ Burda olan arrayin daxilinde soz elave etmek isteyirikse push metodundan istifade edilir ve pushun qaydasi- sondan elave edir. Sonra basqa yene bir deyisen yazib join metodundan istifade ederek birlesdirirk.
// let desserts = ["Ice Cream", "Pie", "Pudding"];
// let result = desserts.push("Cake");

// let dessertstr = desserts.join(", "); 
// console.log(dessertstr); 

// task6------------- Burda ise daxiline elave etdiyimiz sozu yaziriq ve includes metodu onu yoxlayir ki bu arrayda var ya da ki yox eger varsa true olmasa false qaytarir burda da false qaytarir  ve consolde gosterir.
// let cities = ["London", "New York", "Tokyo"];
// let citiesresult = cities.includes("Paris");
// console.log (citiesresult);



// task7---------------------- Burda concant usulu odurki birlesdirir amma yeni bir arrayda saxlayir. Esas arraylərin heç birini dəyişdirmir. Bir neçə arrayi birləşdirərək, nəticəni yeni bir arraydə saxlayır ve consolda gosterir.
// let cars = ["Sedan", "Coupe"]; 
// let trucks = ["Pickup", "SUV"];

// let result = cars.concat(trucks);
// console.log (result);


// task8------------------ Burda arrayin icinde yazilan elementin indexs nomresini gosterir. Element tapılarsa, həmin elementin indeksini qaytarır, əgər tapılmasa -1 qaytarır.
// let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];

// let result= desserts.indexOf("Pie");
// console.log (result);


// bonustask----------- Burda arrayda elementin terkibindekileri yeni herfleri ayrir split metodu ile sonra hemin elementi ters cevirir ve sonda join metodu ile birlesdirir.Her biri ucun ayrica metodan istifade edilir.

// let word = "Technology"; 
// let resultWord = word.split("");
// let resultWord2 = resultWord.reverse("");
// let result = resultWord2.join("");
//  console.log(result);