const crypto=require ('crypto');
//give put the input that starts its hash function with the prefix given
function checkIfStrt(prefix){
let input=0;
while(true){
    let inputstr=input.toString();
    const hash=crypto.createHash('sha256').update(inputstr).digest('hex');
    if (hash.startsWith(prefix)){
        return {input: inputstr, hash: hash};
    }
    input++;

}
}



const result= checkIfStrt("0000");
console.log(result.input);
console.log(result.hash);
