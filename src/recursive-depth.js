
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(!Array.isArray(arr)) {
            return 0;
        }

        let count = 1;
        let depth = 0;
        
        for(let i = 0; i < arr.length; i++) {            
            depth = this.calculateDepth(arr[i]) + 1;
            if(count < depth) {
                count = depth;
            }            
        }
        return count;
    }
};

