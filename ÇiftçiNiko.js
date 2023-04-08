/*Çiftlikteki hayvanlar bir array içerisinde karışık şekilde tutulacak 
ve bu çiftlikte sadece şu hayvanlar var:
- inek
- tavuk
- domuz
- koyun
Array örnegi: [”inek“, ”inek“, ”tavuk“, ”tavuk“, ”tavuk“, ”domuz“, ”domuz“, ”koyun“, ”koyun“ ]
Program verilen array üzerinden Müslüman çorbacıda,
kullanılabilir toplam hayvan bacağı sayısını bulacak ve console’a bastıracak.
*/ 
let animals = ["inek","inek","tavuk","tavuk","tavuk","domuz","domuz","koyun","koyun"]


let a = animals.filter(e => e==="tavuk");
console.log (a);

let b = animals.filter(e => e ==="inek" || e === "domuz" || e=== "koyun")
console.log(b);

let sumLeg = a.length*2 + b.length*4

console.log(sumLeg);
