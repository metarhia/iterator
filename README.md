# `@metarhia/iterator` - efficient and composable iteration

[![CI Status Badge](https://github.com/metarhia/iterator/workflows/Tests/badge.svg?branch=master)](https://github.com/metarhia/iterator/actions??query=workflow%3A%22Tests%22+branch%3Amaster)

## Installation

```bash
$ npm install @metarhia/iterator
```

## API

- [Iterator](#class-iterator)
  - [Iterator.range](#iteratorrangestart-stop-step)
  - [Iterator.zip](#iteratorzipiterators)
  - [Iterator.prototype.constructor](#iteratorprototypeconstructorbase)
  - [Iterator.prototype.apply](#iteratorprototypeapplyfn)
  - [Iterator.prototype.chain](#iteratorprototypechainiterators)
  - [Iterator.prototype.chainApply](#iteratorprototypechainapplyfn)
  - [Iterator.prototype.collectTo](#iteratorprototypecollecttocollectionclass)
  - [Iterator.prototype.collectWith](#iteratorprototypecollectwithobj-collector)
  - [Iterator.prototype.count](#iteratorprototypecount)
  - [Iterator.prototype.each](#iteratorprototypeeachfn-thisarg)
  - [Iterator.prototype.enumerate](#iteratorprototypeenumerate)
  - [Iterator.prototype.every](#iteratorprototypeeverypredicate-thisarg)
  - [Iterator.prototype.filter](#iteratorprototypefilterpredicate-thisarg)
  - [Iterator.prototype.filterMap](#iteratorprototypefiltermapmapper-thisarg-filtervalue)
  - [Iterator.prototype.find](#iteratorprototypefindpredicate-thisarg)
  - [Iterator.prototype.findCompare](#iteratorprototypefindcomparecomparator-accessor-thisarg)
  - [Iterator.prototype.flat](#iteratorprototypeflatdepth--1)
  - [Iterator.prototype.flatMap](#iteratorprototypeflatmapmapper-thisarg)
  - [Iterator.prototype.forEach](#iteratorprototypeforeachfn-thisarg)
  - [Iterator.prototype.groupBy](#iteratorprototypegroupbyclassifier-thisarg)
  - [Iterator.prototype.includes](#iteratorprototypeincludeselement)
  - [Iterator.prototype.join](#iteratorprototypejoinsep----prefix---suffix--)
  - [Iterator.prototype.map](#iteratorprototypemapmapper-thisarg)
  - [Iterator.prototype.max](#iteratorprototypemaxaccessor-thisarg)
  - [Iterator.prototype.min](#iteratorprototypeminaccessor-thisarg)
  - [Iterator.prototype.next](#iteratorprototypenext)
  - [Iterator.prototype.partition](#iteratorprototypepartitionpredicate-thisarg)
  - [Iterator.prototype.reduce](#iteratorprototypereducereducer-initialvalue)
  - [Iterator.prototype.skip](#iteratorprototypeskipamount)
  - [Iterator.prototype.skipWhile](#iteratorprototypeskipwhilepredicate-thisarg)
  - [Iterator.prototype.some](#iteratorprototypesomepredicate-thisarg)
  - [Iterator.prototype.someCount](#iteratorprototypesomecountpredicate-count-thisarg)
  - [Iterator.prototype.take](#iteratorprototypetakeamount)
  - [Iterator.prototype.takeWhile](#iteratorprototypetakewhilepredicate-thisarg)
  - [Iterator.prototype.toArray](#iteratorprototypetoarray)
  - [Iterator.prototype.toObject](#iteratorprototypetoobject)
  - [Iterator.prototype.zip](#iteratorprototypezipiterators)
- [iter](#iterbase)
- [iterEntries](#iterentriesobj)
- [iterKeys](#iterkeysobj)
- [iterValues](#itervaluesobj)
- [AsyncIterator](#class-asynciterator)
  - [AsyncIterator.prototype.constructor](#asynciteratorprototypeconstructorbase)
  - [AsyncIterator.prototype.chain](#asynciteratorprototypechainiterators)
  - [AsyncIterator.prototype.collectTo](#async-asynciteratorprototypecollecttocollectionclass)
  - [AsyncIterator.prototype.collectWith](#async-asynciteratorprototypecollectwithobj-collector)
  - [AsyncIterator.prototype.count](#async-asynciteratorprototypecount)
  - [AsyncIterator.prototype.each](#async-asynciteratorprototypeeachfn-thisarg)
  - [AsyncIterator.prototype.enumerate](#asynciteratorprototypeenumerate)
  - [AsyncIterator.prototype.every](#async-asynciteratorprototypeeverypredicate-thisarg)
  - [AsyncIterator.prototype.filter](#asynciteratorprototypefilterpredicate-thisarg)
  - [AsyncIterator.prototype.find](#async-asynciteratorprototypefindpredicate-thisarg)
  - [AsyncIterator.prototype.flat](#asynciteratorprototypeflatdepth--1)
  - [AsyncIterator.prototype.flatMap](#asynciteratorprototypeflatmapmapper-thisarg)
  - [AsyncIterator.prototype.forEach](#async-asynciteratorprototypeforeachfn-thisarg)
  - [AsyncIterator.prototype.includes](#async-asynciteratorprototypeincludeselement)
  - [AsyncIterator.prototype.join](#async-asynciteratorprototypejoinsep----prefix---suffix--)
  - [AsyncIterator.prototype.map](#asynciteratorprototypemapmapper-thisarg)
  - [AsyncIterator.prototype.next](#async-asynciteratorprototypenext)
  - [AsyncIterator.prototype.parallel](#async-asynciteratorprototypeparallelfn-thisarg)
  - [AsyncIterator.prototype.reduce](#async-asynciteratorprototypereducereducer-initialvalue)
  - [AsyncIterator.prototype.skip](#asynciteratorprototypeskipamount)
  - [AsyncIterator.prototype.some](#async-asynciteratorprototypesomepredicate-thisarg)
  - [AsyncIterator.prototype.someCount](#async-asynciteratorprototypesomecountpredicate-count-thisarg)
  - [AsyncIterator.prototype.take](#asynciteratorprototypetakeamount)
  - [AsyncIterator.prototype.takeWhile](#asynciteratorprototypetakewhilepredicate-thisarg)
  - [AsyncIterator.prototype.throttle](#asynciteratorprototypethrottlepercent-min)
  - [AsyncIterator.prototype.toArray](#async-asynciteratorprototypetoarray)
  - [AsyncIterator.prototype.zip](#asynciteratorprototypezipiterators)
- [asyncIter](#asynciterbase)

### class Iterator

#### Iterator.range(start, stop\[, step\])

- `start`: [`<number>`][number]
- `stop`: [`<number>`][number]
- `step`: [`<number>`][number] (optional), default: `1`

_Returns:_ `<Iterator>`

Create iterator iterating over the range

#### Iterator.zip(...iterators)

- `iterators`: [`<Array>`][array]

_Returns:_ `<Iterator>`

Create iterator by zipping multiple provided iterators into one

#### Iterator.prototype.constructor(base)

#### Iterator.prototype.apply(fn)

- `fn`: [`<Function>`][function]
  - `this`: `<Iterator>`

_Returns:_ the result of `fn(this)` call.

Call a function with `this`. Will be equivalent to calling `fn(it)`.

#### Iterator.prototype.chain(...iterators)

#### Iterator.prototype.chainApply(fn)

- `fn`: [`<Function>`][function]
  - `this`: `<Iterator>`

_Returns:_ `<Iterator>` result of `fn(this)` wrapped in an Iterator.

Call a function with `this` and wrap the result in an Iterator.

_Example:_

```js
iter([1, 2])
  .chainApply(([a, b]) => [a + b, a - b])
  .join(', ');
```

_Result:_

```js
'3, -1';
```

#### Iterator.prototype.collectTo(CollectionClass)

#### Iterator.prototype.collectWith(obj, collector)

#### Iterator.prototype.count()

#### Iterator.prototype.each(fn, thisArg)

#### Iterator.prototype.enumerate()

#### Iterator.prototype.every(predicate, thisArg)

#### Iterator.prototype.filter(predicate, thisArg)

#### Iterator.prototype.filterMap(mapper\[, thisArg\[, filterValue\]\])

- `mapper`: [`<Function>`][function] function that maps values and returns
  either new value that will be the next value of the new iterator or
  `filterValue` that will be ignored.
  - `value`: `<any>` iterator element
- `thisArg`: `<any>` value to be used as `this` when calling `mapper`
- `filterValue`: `<any>` value to filter out `mapper` results.

Creates an iterator that both filters and maps with the passed `mapper`.

This iterator will call `mapper` on each element and if mapper returns NOT
`filterValue` it will be returned, otherwise it is ignored.

#### Iterator.prototype.find(predicate, thisArg)

#### Iterator.prototype.findCompare(comparator\[, accessor\[, thisArg\]\])

- `comparator`: [`<Function>`][function] returns `true` if new value should be
  accepted
  - `currValue`: `<any>` current value, starts with undefined
  - `nextValue`: `<any>` next value
  - _Returns:_ [`<boolean>`][boolean] `true` if next value should be accepted
- `accessor`: [`<Function>`][function] gets value to compare by, current
  iterator value is used by default
  - `value`: `<any>` current iterator value
  - _Returns:_ `<any>` value to compare by
- `thisArg`: `<any>` value to be used as `this` when calling `accessor` and
  `comparator`

_Returns:_ last iterator value where `comparator` returned `true`,
[`<undefined>`][undefined] by default

Find value in this iterator by comparing every value with

the found one using `comparator`

#### Iterator.prototype.flat(depth = 1)

#### Iterator.prototype.flatMap(mapper, thisArg)

#### Iterator.prototype.forEach(fn, thisArg)

#### Iterator.prototype.groupBy(classifier\[, thisArg\])

- `classifier`: [`<Function>`][function] gets value to group by
  - `value`: `<any>` current iterator value
  - _Returns:_ `<any>` value to group by
- `thisArg`: `<any>` value to be used as `this` when calling `classifier`
- _Returns:_ [`<Map>`][map] map with arrays of iterator values grouped by keys
  returned by `classifier`

Consumes an iterator grouping values by keys

#### Iterator.prototype.includes(element)

#### Iterator.prototype.join(sep = ', ', prefix = '', suffix = '')

#### Iterator.prototype.map(mapper, thisArg)

#### Iterator.prototype.max(\[accessor\[, thisArg\]\])

- `accessor`: [`<Function>`][function] gets value to compare by, current
  iterator value is used by default
  - `value`: `<any>` current iterator value
  - _Returns:_ `<any>` value to compare by
- `thisArg`: `<any>` value to be used as `this` when calling `accessor`

_Returns:_ element with maximum value or [`<undefined>`][undefined] if iterator
is empty

Find the maximum value in this iterator

#### Iterator.prototype.min(\[accessor\[, thisArg\]\])

- `accessor`: [`<Function>`][function] gets value to compare by, current
  iterator value is used by default
  - `value`: `<any>` current iterator value
  - _Returns:_ `<any>` value to compare by
- `thisArg`: `<any>` value to be used as `this` when calling `accessor`

_Returns:_ element with minimum value or [`<undefined>`][undefined] if iterator
is empty

Find the minimum value in this iterator

#### Iterator.prototype.next()

#### Iterator.prototype.partition(predicate\[, thisArg\])

- `predicate`: [`<Function>`][function] function returns a value to partition
  this iterator
  - `value`: `<any>` current iterator element
  - _Returns:_ [`<boolean>`][boolean]|[`<number>`][number] key denoting
    resulting partition this value will be assigned to. Number denotes index in
    the resulting array. Boolean will be cast to number
- `thisArg`: `<any>` value to be used as `this` when calling `predicate`
- _Returns:_ [`<Array>`][array] array of partitions (arrays), will always have
  at least 2 arrays in it

Consumes an iterator, partitioning it into Arrays

#### Iterator.prototype.reduce(reducer, initialValue)

#### Iterator.prototype.skip(amount)

#### Iterator.prototype.skipWhile(predicate, thisArg)

#### Iterator.prototype.some(predicate, thisArg)

#### Iterator.prototype.someCount(predicate, count, thisArg)

#### Iterator.prototype.take(amount)

#### Iterator.prototype.takeWhile(predicate, thisArg)

#### Iterator.prototype.toArray()

#### Iterator.prototype.toObject()

Transforms an iterator of key-value pairs into an object.

This is similar to what `{Object.fromEntries()}` would offer.

#### Iterator.prototype.zip(...iterators)

### iter(base)

### iterEntries(obj)

### iterKeys(obj)

### iterValues(obj)

### class AsyncIterator

#### AsyncIterator.prototype.constructor(base)

#### AsyncIterator.prototype.chain(...iterators)

#### async AsyncIterator.prototype.collectTo(CollectionClass)

#### async AsyncIterator.prototype.collectWith(obj, collector)

#### async AsyncIterator.prototype.count()

#### async AsyncIterator.prototype.each(fn, thisArg)

#### AsyncIterator.prototype.enumerate()

#### async AsyncIterator.prototype.every(predicate, thisArg)

#### AsyncIterator.prototype.filter(predicate, thisArg)

#### async AsyncIterator.prototype.find(predicate, thisArg)

#### AsyncIterator.prototype.flat(depth = 1)

#### AsyncIterator.prototype.flatMap(mapper, thisArg)

#### async AsyncIterator.prototype.forEach(fn, thisArg)

#### async AsyncIterator.prototype.includes(element)

#### async AsyncIterator.prototype.join(sep = ', ', prefix = '', suffix = '')

#### AsyncIterator.prototype.map(mapper, thisArg)

#### async AsyncIterator.prototype.next()

#### async AsyncIterator.prototype.parallel(fn, thisArg)

#### async AsyncIterator.prototype.reduce(reducer, initialValue)

#### AsyncIterator.prototype.skip(amount)

#### async AsyncIterator.prototype.some(predicate, thisArg)

#### async AsyncIterator.prototype.someCount(predicate, count, thisArg)

#### AsyncIterator.prototype.take(amount)

#### AsyncIterator.prototype.takeWhile(predicate, thisArg)

#### AsyncIterator.prototype.throttle(percent, min)

#### async AsyncIterator.prototype.toArray()

#### AsyncIterator.prototype.zip(...iterators)

### asyncIter(base)

- `base`: [`<Iterable>`][iterable]|`<AsyncIterable>` an iterable that is wrapped
  in `<AsyncIterator>`

_Returns:_ `<AsyncIterator>`

Create an AsyncIterator instance

## Contributors

See github for full [contributors list](https://github.com/metarhia/iterator/graphs/contributors)

[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
