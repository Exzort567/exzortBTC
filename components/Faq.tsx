import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20 text-white">
            <div className="text-3xl md:text-7xl font-bold text-white">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-gray-600 to-gray-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is ExzortBTC?</AccordionTrigger>
                <AccordionContent>
                  ExzortBTC is a public trading community that provides market insights and trading signals for private members.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What asset classes do we trade at ExzortBTC?</AccordionTrigger>
                <AccordionContent>
                  We trade in the crypto, forex, and indices markets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is ExzortBTC a signal group?</AccordionTrigger>
                <AccordionContent>
                  Yes, we have a private group dedicated to providing trading signals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I pay via my Binance wallet, or must it be Coinbase?</AccordionTrigger>
                <AccordionContent>
                  You can pay using any exchange or wallet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
          </div>
        </div> );
}
 
export default FAQS;