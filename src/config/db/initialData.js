import bcrypt from "bcrypt";
import Usuario from "../../modules/user/model/User.js";


export async function createInitialData(){
    try{
        await Usuario.sync({ force: true });

        let password = await bcrypt.hash("123456", 10);
    
        await Usuario.create({
            name: "Waldir escouto pereira",
            email: "testeusuario1@gmail.com",
            password: password,
        });

        await Usuario.create({
            name: "Aline ribeiro",
            email: "testeusuario2@gmail.com",
            password: password,
        });
    } catch(err){
         console.log(err);
    } 
}