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
    },
    /**
     * reduce boils down a list of values into a single value
     * @param  {} list
     * @param  {} iteratee
     * @param  {} memo
     * @param  {} context
     */
    reduce: function (list, iteratee, memo, context) {
        // use javascript origin function 1.8
        // if(list && list.reduce){
        //     return list.reduce(iteratee, memo);
        // }else{

        // }
        // memo exists
        if(typeof memo!='undefined'){
            wtool.each(list, function(currentValue, index, list){
                memo = iteratee.call(context, memo, currentValue, index, list);
            }, context)
        }else{          
            var isFirst = true;
            wtool.each(list, function(currentValue, index, list){                           
                if(!isFirst){
                    memo = iteratee.call(context, memo, currentValue, index, list);
                }
                // ignore first value
                if(isFirst){
                    memo = currentValue;
                    isFirst = false;   
                }                              
            }, context)            
        }
        return memo;
    }
}
