import axios from 'axios'

const REACT_APP_URI = 'http://localhost:3001'

export default class ApiServices {

     static async  getDataNoAuth(path){

        try {
            const {data} = await axios.get(`${REACT_APP_URI}${path}`)
            return  data  
        } catch (error) {
             console.log(error);
             
        }

    }
    static async  postDataNoAuth(path,postData){

        try {
            const {data} = await axios.post(`${REACT_APP_URI}${path}`,postData)
            return  data  
        } catch (error) {
             console.log(error);
             
        }

    }
    static  storeToken(key,obj){

        try {
      
            const result =   localStorage.setItem(key,JSON.stringify(obj))
            return  result 
             
        } catch (error) {
             console.log(error);
             
        }

    }

    static  getToken(key){

        try {
      
            const result =   localStorage.getItem(key)
            return  result  

        } catch (error) {
             console.log(error);
             
        }
        
    }


    static async CoinList (currency) {

        try {
           var result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
            return result
        }catch(error){
            console.log(error)
        }
    }


    static async SingleCoin (id) {

        try {
           var result = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
            return result
        }catch(error){
            console.log(error)
        }
    }


    static async HistoricalChart (id, days=365, currency) {

        try {
           var result = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
            return result
        }catch(error){
            console.log(error)
        }
    }


    static async TrendingCoins ( currency) {

        try {
           var {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
            return  data
        }catch(error){
            console.log(error)
        }
    }
 
    
    



}





