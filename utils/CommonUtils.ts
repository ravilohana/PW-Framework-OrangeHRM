import cryptoJs from 'crypto-js'

export default class CommonUtils{
    
    private secretKey:string

    /**
     * Initailize the secret key
     */
    constructor(){
        // ternory operator
        // this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "Please provide the secret key while starting executing.";

        // if-else statement
        if(process.env.SECRET_KEY){
            this.secretKey = process.env.SECRET_KEY;
        }
        else{
            throw new Error("Please provide the secret key while starting executing.");
        }


    }


    /**
     * Provide encrypt data from the string
     * @param data 
     * @returns encryptData
     */
    public encryptData(data:string){
        const encryptData = cryptoJs.AES.encrypt(data,this.secretKey).toString();
        // console.log("Encrypt Data: ", encryptData);
        return encryptData;

    }

        /**
     * Provide dencrypt data of the string
     * @param encData 
     * @returns decryptData
     */
    public decryptData(encData:string){
        const decryptData = cryptoJs.AES.decrypt(encData,this.secretKey).toString(cryptoJs.enc.Utf8);
        // console.log("Decrypt Data: ", decryptData);
        return decryptData
    }
}