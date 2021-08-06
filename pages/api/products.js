// const stripe = require('stripe')();

// const getAllProducts = async () => {
//     const res = await stripe.prices.list({
//         active: true,
//         limit: 10,
//         expand: ["data.product"],
//       });
//       const prices = await res.json()
//       return { products: prices.data }
// }


// export default function handler(req, res) {
//     const products = getAllProducts();
//     res.status(200).json(products)
//   }