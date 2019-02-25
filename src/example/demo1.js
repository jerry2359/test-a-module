/**
 * Created by jerry.lin-wun on 2019/2/15.
 * 例子
 */
import {TestModule, HandleData} from '../index'

const tm = new TestModule({ name: 'testExample' })
tm.say()

const hd = new HandleData()
hd.save({ name: '张三', age: 26 })
console.log(hd.get('name'))