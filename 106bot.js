function response(room, msg, sender, isGroupChat, replier, ImageDB) {
 if(isGroupChat) return;
 var rmsg="";
 var gmsg="";
 var amsg=[1, 5, 4, 8, 7, 9];
 var s = 0, b = 0;
 gmsg = msg;
 if(gmsg[0]!="?") return;
 if(gmsg.length != 7) {
  replier.reply("자릿수 문제");
  return;
 }
 for(var wc=0;wc<6;wc++) {
  for(var c=0;c<6;c++) {
   if(gmsg[wc+1]==gmsg[c+1]&&wc!=c) {
    replier.reply("숫자 겹침");
    return;
   }
   if(gmsg[wc+1]==amsg[c]) {
    if(wc==c) s++; else b++;
   }
  }
 }
 if(s==6){
  replier.reply("정답!");
  return;
 }
 rmsg=s.toString() + "S" + b.toString() + "B";
 replier.reply(rmsg);
}

//
