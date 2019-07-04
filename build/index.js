/**
 * Fixes sparse arrays for comparison.
 */
function updateStore(store) {
  Object.values(store).forEach((item) => {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        const v = item[i]
        if (v === undefined) item[i] = null
      }
    } else if (typeof item == 'object') {
      this.updateStore(item)
    }
  })
}

module.exports.updateStore = updateStore