export default {
  addCart(context, payload) {
    let product = context.state.cartList.find(item => item.iid == payload.iid)
    if (product) {
      context.commit("addCounter", product)
    } else {
      payload.count = 1
      context.commit("addToCart", payload)
    }
  }
}