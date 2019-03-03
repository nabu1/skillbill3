function updateView(context, allDevs, dev) {
  console.log('updateView')

  for(let i = 0; i < allDevs.length; i++) {
    if (allDevs[i].id === dev.id ) {
      allDevs.splice(i, 1)
      context.commit('READ_DEVS', allDevs)
      break
    }
  }
}

module.exports.updateView = updateView
