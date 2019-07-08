import QuoteService from "./quote-service.js";

let _qs = new QuoteService()


function drawQuote() {
        console.log("Nobody:", _quoteService.quote)
    }
    
    export default class quoteController {
    
        constructor() {
            _quoteService.addSubscriber('quote', drawQuote)
            _quoteService.getQuote()
        }

   
}
