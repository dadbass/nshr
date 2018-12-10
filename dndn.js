const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**| __:rainbow: # Savage Gang , :tm:__ |
`` ...من أفضل سيرفرات في العالم العربي بحيث توفر ``
بوتات ديسكورد ادارة - برودكاست - سبام - حالة ستريمنق - ميوزك -- :star2: 
حساب ماين كرافت فل داتا - فل اكسس - كيبات -- :crown: 
تصاميم صورة ترحيب - انفو - صورة سيرفر - صورة بوت -- :ok_hand: 
حسابات سبوتيفاي -- :kissing_heart: 
`` بأرخص أسعار و سرعة الرد و مضمون مئة بالمئة حيااك معانا في ``
https://discord.gg/kK5uSRu
|:rainbow: __# Savage Gang , :tm:__ |**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**| __:rainbow: # Savage Gang , :tm:__ |
`` ...من أفضل سيرفرات في العالم العربي بحيث توفر ``
بوتات ديسكورد ادارة - برودكاست - سبام - حالة ستريمنق - ميوزك -- :star2: 
حساب ماين كرافت فل داتا - فل اكسس - كيبات -- :crown: 
تصاميم صورة ترحيب - انفو - صورة سيرفر - صورة بوت -- :ok_hand: 
حسابات سبوتيفاي -- :kissing_heart: 
`` بأرخص أسعار و سرعة الرد و مضمون مئة بالمئة حيااك معانا في ``
|:rainbow: __# Savage Gang , :tm:__ |**


https://discord.gg/kK5uSRu
joined info-# Savage Gang ,
! # Savage Gang ,.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NTIxMDczMzg1MzUxMDIwNTg1.Du_2aw.ay_9eyWbQieWX8a_ZWLhupWyD4s');