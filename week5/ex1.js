let order =[{
    "Customer":"Mr.Lee",
    "ItemCrder" : ["A4 paper","Ruler"],
    "Qty":[5,2],
    "Price":[120,25]   
},
{
    "Customer":"Mr.Yue",
    "ItemCrder" : ["Flash Drive","A4 paper"],
    "Qty":[2,3],
    "Price":[130,120]   
},
{
    "Customer":"Sea",
    "ItemCrder" : ["Flash Drive","A4 paper","Ruler"],
    "Qty":[10,20,30],
    "Price":[130,120,50]   
},
];

for (let i = 0; i < order.length; i++) {

let sum = 0;
for (let j = 0; j < order[i].ItemCrder.length; j++) {
    sum += order[i].Qty[j] *order[i].Price[j]
}
console.log(order[i].Customer, sum)

}