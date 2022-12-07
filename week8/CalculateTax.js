var employee = [{
    "name" : "+++ข้อมูลพนักงานทั้งหมด+++",
    "ID":"30001",
    "letname":"นางปรียาดา ตั้งทิพย์",
    "department":"บุคคล",
    "positinon":"HR",
    "salary":48000,
    "bonusRank":"A",
    "year":null,
    "bonus":null,
    "tax":null
},{
    "ID":30002,
    "letname":"นายณัฏฐ พงษ์วิโรจน์",
    "department":"ไอที",
    "positinon":"System Engineer",
    "salary":57000,
    "bonusRank":"S",
    "year":null,
    "bonus":null,
    "tax":null 
},{
    "ID":30003,
    "letname":"นายภูวนัย พัฒนปรีชา",
    "department":"การเงิน",
    "positinon":"Account",
    "salary":38000,
    "bonusRank":"B",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30004,
    "letname":"นางสาวเจนจิรา วงศ์สุรวัฒนา",
    "department":"บุคคล",
    "positinon":"HR",
    "salary":55000,
    "bonusRank":"A",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30005,
    "letname":"นายพนาวัฒน์ กลิ่นโพธิ์",
    "department":"บุคคล",
    "positinon":"HR",
    "salary":13000,
    "bonusRank":"C",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30006,
    "letname":"นางธนารีย์ ชัยเจริญ",
    "department":"การเงิน",
    "positinon":"Account",
    "salary":41000,
    "bonusRank":"S",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30006,
    "letname":"นางธนารีย์ ชัยเจริญ",
    "department":"การเงิน",
    "positinon":"Account",
    "salary":41000,
    "bonusRank":"S",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30007,
    "letname":"นายนิมมาน สยนานนท์",
    "department":"บุคคล",
    "positinon":"HR",
    "salary":19000,
    "bonusRank":"A",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30008,
    "letname":"นายกีรติ มากมี",
    "department":"บุคคล",
    "positinon":"Account",
    "salary":46000,
    "bonusRank":"C",
    "year":null,
    "bonus":null,
    "tax":null  
},{
    "ID":30009,
    "letname":"นางสาววรรณิศา โตศิลา",
    "department":"ไอที",
    "positinon":"System Engineer",
    "salary":28000,
    "bonusRank":"B",
    "year":null,
    "bonus":null,
    "tax":null  
}
];
if (employee[0].bonusRank=="S")bonusRate = 1.8;
else if(employee[0].bonusRank=="A")bonusRate = 1.4;
else if(employee[0].bonusRank=="B")bonusRate = 1.15;
else if(employee[0].bonusRank=="C")bonusRate = 0.8;
employee[0].bonus = employee[0].salary*bonusRate;
employee[0].year = employee[0].salary*12 + employee[0].bonus

if (employee[0].year<250000) employee[0].tax = 0;
else if (employee[0].year< 250000 && employee[0].year < 550000) employee[0].year*0.09;
else if (employee[0].year< 550000 && employee[0].year < 1000000) employee[0].year*0.23;
else if (employee[0].year> 1000000) employee[0].tax = employee[0].year*0.32;

console.log("เงินเดือน",employee[0].salary);
console.log("โบนัส",employee[0].bonus);
console.log("รายได้ต่อปี",employee[0].year);
console.log("ภาษีที่ต้องจ่าย",employee[0].tax);