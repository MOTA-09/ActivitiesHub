import { makeAutoObservable, observable } from 'mobx'

export default class CounterStore {
  title = 'Counter Store'
  count = 0

  constructor() {
    makeAutoObservable(this, {
      title: observable,
      count: observable,
    })
  }
}
