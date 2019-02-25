/**
 * Created by jerry.lin-wun on 2019/2/15.
 * 封装一个类
 */
class TestModule {
  constructor (options) {
    this.name = options.name
  }
  say () {
    console.log(`This is a test module: ${this.name}`)
  }
}

export default TestModule
