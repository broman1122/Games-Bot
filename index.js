const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "=";
client.on("ready", () =>{
console.log(`${client.user.username} is Online `)
client.user.setActivity(`${prefix}help`, {type:"PLAYING"})
})

client.on("message", async message =>{
 if(message.content === prefix + "help"){
 const embed = new Discord.MessageEmbed()
.setAuthor("Commands:",client.user.avatarURL())
.setThumbnail(message.author.avatarURL())
.setColor("BLUE")
.setDescription(`

\`${prefix}fast/${prefix}أسرع\`:
- لعبة السرعة

\`${prefix}fkk/${prefix}فكك\`:
- لعبة تفكيك الكلمات

\`${prefix}puzzle/${prefix}لغز\`:
- لعبة الالغاز

\`${prefix}gm3/${prefix}جمع\`:
- لعبة جمع الحروف

\`${prefix}flags/${prefix}اعلام\`:
- لعبة اعلام الدول

\`${prefix}logo/${prefix}شعار\`:
- لعبة شعارات البرامج

\`${prefix}translate/${prefix}ترجمة\`:
- لعبة ترجمة الكلمات

\`${prefix}capitals/${prefix}عواصم\`:
- لعبة عواصم الدول

\`${prefix}famous/${prefix}مشاهير\`:
- لعبة تخمين المشاهير

`)
.setFooter(`Request By ${message.author.tag}`)
 message.channel.send(embed)
 } 
    

if(message.content === prefix + "fast" || message.content === prefix + "أسرع"){
  const f = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  let fast = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fast]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(f[fast]);
message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED") 
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});    
}

if(message.content === prefix + "fkk" || message.content === prefix + "فكك"){
  const f = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  const fk = [
    "ز و م ب ي",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  
  let fkk = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fkk]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fk[fkk]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "gm3" || message.content === prefix + "جمع"){
 
  const g = [
    "ز و م ب ي",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  const gm = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ] 
  
  let gm3 = Math.floor(Math.random() * g.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${g[gm3]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(gm[gm3]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});

}

if(message.content === prefix + "flags" || message.content === prefix + "اعلام"){
  const a = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/560px-Flag_of_Iraq.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/560px-Flag_of_Algeria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/560px-Flag_of_Syria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/560px-Flag_of_Lebanon.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/560px-Flag_of_Egypt.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/560px-Flag_of_the_United_Arab_Emirates.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/560px-Flag_of_the_People%27s_Republic_of_China.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/560px-Flag_of_France.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/560px-Flag_of_Germany.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/560px-Flag_of_Russia.svg.png"
  
  ]
  const a3 = [
  "العراق", 
    "الجزائر", 
    "سوريا", 
    "اليمن", 
    "لبنان", 
    "تركيا", 
    "مصر", 
    "الإمارات", 
    "الصين", 
    "فرنسا", 
    "ألمانيا", 
    "روسيا"
  
  ]
  
  let a3l = Math.floor(Math.random() * a.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(a[a3l])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(a3[a3l]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "puzzle" || message.content === prefix + "لغز"){
  const p = [
  "شيء موجود في السماء إذا أضفت إليه حرفا أصبح في الأرض؟", 
  "ما هو الشيء الذي يوصلك من بيتك إلى عملك دون أن يتحرك؟", 
  "تاجر من التجار إذا اقتلعنا عينه طار. فمن هو؟", 
  "ما هو الشيء الذي ترميه كلما احتجت إليه؟", 
  "يسير بلا رجلين و لا يدخل إلا بالأذنين ما هو؟", 
  "ما هو الشي الذي يكتب و لا يقر؟", 
  "من هو الحيوان الذي يحك إذنه بأنفه؟", 
  "ما هو الشي الذي كلما كثر لدينا غلا و كلما قل رخص؟", 
  "ما هي التي تأكل و لا تشبع؟", 
  "ما هو الشي الذي كلما أخذت منه يكبر ؟", 
  "ما هو الشي الذي يوجد في وسط باريس؟", 
  "ما هو البيت الذي ليس فيه أبواب و لا نوافذ؟", 
  "أين يقع البحر الذي لا يوجد به ماء؟", 
  "ماهو الشي الذي ينبض بلا قلب؟", 
  "أخت خالك و ليست خالتك من تكون ؟"
  ]
  const pu = [
   "نجم", 
  "الطريق", 
  "عطار", 
  "شبكة الصيد", 
  "الصوت", 
  "القلم", 
  "الفيل", 
  "العقل", 
  "النار", 
  "الحفرة", 
  "راء", 
  "بيت الشعر", 
  "في الخريطة", 
  "الساعه", 
  "أمك"
  ]
  
  let puz = Math.floor(Math.random() * p.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${p[puz]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(pu[puz]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "capitals" || message.content === prefix + "عواصم"){
  const c = [
   "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "أمريكا", 
  "الكويت", 
  "البحرين", 
  "الإمارات", 
  "قطر", 
  "ايطاليا", 
  "السويد", 
  "اليابان", 
  "مصر", 
  "ألمانيا", 
  "فرنسا", 
  "العراق", 
  "الصين", 
  "المغرب"
  
  ]
  const ca = [
    "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "واشنطن", 
  "الكويت", 
  "المنامة", 
  "ابو ظبي", 
  "الدوحة", 
  "روما", 
  "ستوكهولم", 
  "طوكيو", 
  "القاهرة", 
  "برلين", 
  "باريس", 
  "بغداد", 
  "بكين", 
  "الرباط"
  ]
  
  let cap = Math.floor(Math.random() * c.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${c[cap]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(ca[cap]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}

if(message.content === prefix + "logo" || message.content === prefix + "شعار"){
  const l = [
  "https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png", 
  "https://wiki-signup.com/wp-content/uploads/2019/06/viber-image.jpg", 
  "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
  ]
  const lo = [
  "ديسكورد", 
  "فيسبوك", 
  "واتساب", 
  "فايبر", 
  "ريدت", 
  "ماسنجر", 
  "انستا"
  ]
  
  let log = Math.floor(Math.random() * l.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(l[log])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(lo[log]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "famous" || message.content === prefix + "مشاهير"){
  const f = [
  "https://taqeemi.com/storage/subjects/ECmzBt8dE1h5FasVAmwb.jpeg", 
  "https://etbilarabi.com/sites/default/files/styles/article_landing/public/2020-04/image0%20%2855%29.jpeg?itok=BFcsmLUu", 
  "https://pbs.twimg.com/profile_images/1207230360507047936/PVEIcm8X_400x400.jpg", 
  "https://pbs.twimg.com/media/DpON0q5W0AEJjPQ.jpg", 
  "https://pm1.narvii.com/6647/05263d18126bf5f311552429e55802f10090907d_hq.jpg"
  ]
  const fa = [
  "ابو فلة", 
  "بندريتا", 
  "سيد", 
  "اوسمز", 
  "علي المرجاني"
  ]
  
  let fam = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(f[fam])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fa[fam]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}
if(message.content === prefix + "translate" || message.content === prefix + "ترجمة"){
  const t = [
  "Surgeon", 
  "Father", 
  "Funny", 
  "Scientist", 
  "Programmer", 
  "Welcome", 
  "Egg", 
  "Fire", 
  "ice", 
  "Vest", 
  "Delighted", 
  "Boring", 
  "Accountant", 
  "Carpenter", 
  "Eye", 
  "Wait", 
  "Ear"
  ]
  const tr = [
   "جراح", 
  "والد", 
  "مضحك", 
  "عالم", 
  "مبرمج", 
  "اهلا بك", 
  "بيض", 
  "نار", 
  "جليد", 
  "سترة", 
  "مسرور", 
  "ممل", 
  "محاسب", 
  "نجار", 
  "عين", 
  "أنتظر", 
  "أذن"
  
  ]
  
  let tra = Math.floor(Math.random() * t.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${t[tra]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(tr[tra]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}
})

client.login(process.env.token).catch(() =>{
    console.log("Invalid Token")
})
