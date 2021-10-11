
const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null;
sequelize
  .sync({force: true})
  // .sync()
  .then((result) => { //luego de que se haya realizado la sincronizacion, ejecuta el siguiente bloque de codigo
    return Customer.create({name: "Chandler Bing", email: "cb@gmail.com"})
    //console.log(result); Dead Zone
  })
  .then(customer => { //customer representa el customer retornado en el return de la promesa anterior.
    customerId = customer.id;
    console.log("First Customer Created: ",customer);
  
    return customer.createOrder({total: 45});
  })
  .then(order => { //order representa el order retornado en el return de la promesa anterior.
    console.log("Order is : ",order);
    //Es equivalente a select * from Order where order.id==customer.id
    return Order.findAll({ where: customerId});
  })
  .then(orders => {
    console.log("All the Orders are : ",orders);
  })
  .catch((err) => { //err representa la captura del error devuelto en caso de que falle el resultado de la promesa anterior.
    console.log(err);
  });



//video 15 minutos, 5 temas abordados. //gatica
//dalto documentaciones
//feiman metodo. hola mundo
//tecnicas estudio youtube
//conceptos aplicados.
//arrow function
// x => {}
//"a este elemento x aplicale el siguiente bloque de codigo, 
//eventualmente puede tener un return el bloque de codigo"

//encademiento de promesas
//.then
//.then
//.then
//.catch
