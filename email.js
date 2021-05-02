function valid()
{
  var em=document.forms["form1"]["text1"];
  em=em.value;
  var x= /^[A-Z]/;
  var k=0;
  var atp=em.indexOf("@");
  var res = em.substring(atp);
  var res2 = em.substring(0,atp);
  var a="@gmail.com";
  var b="@yahoo.com";
  var c="@hotmail.com";
  for(i=0;i<res2.length;i++)
  {
    var ch=res2.charAt(i);
    if(x.test(ch))
    {
      k=1;
      break;
    }
    else{
      k=0;
    }
  }
  console.log(k);
  if((res === a || res === b || res === c) && atp>1 && k==0)
  {
    window.alert("Email is valid");
        return false;
  }
  else
  {
    window.alert("Email not valid");
        return false;
  }
}