export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(item => item.iid == payload.iid)
      if (product) {
        context.commit("addCounter", product)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        context.commit("addToCart", payload)
        resolve('添加了新的商品')
      }
    })
  }
}