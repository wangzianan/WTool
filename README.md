# wtool
## 概况
wtool 是一个工具函数集合，它参照了 underscore.js 的 API 设计，但具体实现和 underscroe.js 是不一样的。这当然是一个练手的好轮子了，哈哈。

## 使用方法
```
<script src="../wtool.js"></script>

wtool.map([1, 2, 3], function(num){ return num * 3; })
wtool.reduce([1,2,3], function(memo, num){ return memo+num;})
```

## 主要 API
```
    /**
     * @param  {} list
     * @param  {} iterator
     * @param  {} context
     */
    each: function(list, iterator, context)

    /**
     * produce a new array of values by mapping each value of the list
     * @param  {} list
     * @param  {} iteratee
     * @param  {} context
     */
    map: function(list, iteratee, context) 

    /**
     * reduce boils down a list of values into a single value
     * @param  {} list
     * @param  {} iteratee
     * @param  {} memo
     * @param  {} context
     */
    reduce: function (list, iteratee, memo, context)
```

## 欢迎和我一起来实现

QQ群：771973104