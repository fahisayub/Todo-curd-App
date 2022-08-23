


export const getdata=(key)=>{

   return JSON.parse(sessionStorage.getItem(key));

}


export const storeData=(key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value))
}

export const removeData=(key)=>{
    sessionStorage.removeItem(key);
}