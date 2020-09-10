

var alphaNum="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,k,m,n,p,q,r,s,t,u,v,w,x,y,z,"
+"0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,D,G,H,K,M,N,P,Q,R,S,T,U,V,W,X,Y,Z";
var alphaNumArray=alphaNum.split(",");
//console.log(alphaNumArray);

//var ranNum=getRandomNum( alphaNumArray.length );
//console.log(  alphaNumArray[ranNum]  );

function createPassword(length){
    var password="";
    for(i=0;i<length;i++){
      var ranNum=getRandomNum( alphaNumArray.length );
      password+=alphaNumArray[ranNum];
    }
    console.log(password);
}


function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}

createPassword(8);
