// wtool.js
window.wtool = {
    VERSION:'0.1.0',
    // Collection Function
    /**
     * @param  {} list
     * @param  {} iterator
     * @param  {} context
     */
    each: function(list, iterator, context){
        // type
        var type;

        type = Object.prototype.toString.call(list);
        if(type==='[object Array]'){
            var len = list.length;
            for(var i=0; i<len; i++){
                iterator.call(context, list[i], i, list);
            }
        }else if(type==='[object Object]'){
            for(var j in list){
                if(list.hasOwnProperty(j)){
                    iterator.call(context, list[j], j, list);
                }
            }
        }
    },
    /**
     * produce a new array of values by mapping each value of the list
     * @param  {} list
     * @param  {} iteratee
     * @param  {} context
     */
    map: function(list, iteratee, context) {
        var res = [];
        // use javascript origin function
        if(list && list.map){
            return list.map(iteratee, context);
        }else{
            wtool.each(list, function(currentValue, index, list) {
                res.push(iteratee.call(context, currentValue, index, list));
            }, context);
        }       
        return res;
    }
}
