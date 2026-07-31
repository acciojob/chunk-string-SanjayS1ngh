function stringChop(str, size) {
  // your code here
	let n=Math.floor((str.length)/size);
	let m=(str.length)%size;
	let s="";
	let k=size;
	let ans=[];
	for(let i=0;i<str.length-m;i++){
		s+=str[i];
		k--;
		if(k==0){
			ans.push(s);
			s="";
			k=size;
		}
	}
	s="";
	for(let i=str.length-m;i<str.length;i++){
		s+=str[i];
	}
	ans.push(s);
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size."));
alert(stringChop(str, size));


