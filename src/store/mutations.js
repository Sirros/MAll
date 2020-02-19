export default {
  addCounter(state, payload) {
    payload.count += 1
  },
  addCart(state, payload) {
    payload.selected = true
    state.shopCartList.push(payload)
  }
}