const fs = require('fs')
class Cart{
constructor(){
    this.tempCart = []
}
   addItem(obj){
    this.tempCart.push(obj)
    return this
   }
   removeItem(obj){
      let rem = this.tempCart.filter(item=>{
       return item.item_id !== obj.item_id
       })
      console.log(rem)
   }

   totalItems(){
   console.log(this.tempCart.length)
   }

   totalQuantity(){
    let result = this.tempCart.reduce((acc,cur)=>{
        return {quantity: acc.quantity + cur.quantity}
    })
    console.log('total quantity = '+result.quantity)
   }

   totalPrice(){
    let result = this.tempCart.reduce((acc,cur)=>{
        return {price: acc.price + cur.price}
    })
    console.log('Total Price = '+ result.price)
    return this
   }
   showAll(){
    console.log('ID '+'PRICE '+'QUANTITY ')
    let result = this.tempCart.map(item=>{
         console.log(''+item.item_id+'  '+item.price+'  ',item.quantity)
    })
   }
   addDiscount(disc){
   let discount = this.tempCart.reduce((acc,cur)=>{
       return {price: acc.price + cur.price}
   })
   console.log('Total Paid = '+ discount.price*(parseFloat(disc)/100))
   }
   checkout(){
     fs.writeFileSync('cart.json',JSON.stringify(this.tempCart))  
   }
}
var cart = new Cart
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 30000, quantity: 3 })
    .addItem({ item_id: 3, price: 30000, quantity: 3 })
    .showAll()

