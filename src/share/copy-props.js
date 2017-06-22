import _ from '../wrap/lodash'

export default (original, target, props, visitor) => {
  Object.defineProperties(target, _.transform(props, (acc, descriptor, name) => {
    if (!(name in original) || name in target) return
    acc[name] = {
      configurable: true,
      writable: true,
      value: visitor ? visitor(descriptor.value) : descriptor.value,
      enumerable: descriptor.enumerable
    }
  }))
}
