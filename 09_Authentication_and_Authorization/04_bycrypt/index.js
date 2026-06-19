const bcrypt= require('bcrypt');

async function hashAndComparePassword(){
    const password ="Priyanshu@123";
    const saltRound=10;

    const hash=await bcrypt.hash(password,saltRound);
    console.log(`Hashed Password: ${hash}`);

    const isMatch=await bcrypt.compare(password,hash);
    console.log(`Password match: ${isMatch}`);
}

hashAndComparePassword();