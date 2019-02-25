/**
 * Created by jerry.lin-wun on 2019/2/15.
 * 封装一个类
 */
class HandleData {
  constructor (data = {}) {
    this.data = data
  }
  save (saveData) {
    this.data = Object.assign({}, this.data, saveData)
  }
  get (key) {
    return this.data[key]
  }
}

export default HandleData
