// Arrow function

const arrowFunction=(arr)=>{
    // odd or even
    
for(i=0;i<arr.length;i++){
if(arr[i]%2===0){
    console.log("it is even");
}
else{
    console.log("it is odd");
}
}

// sum of array
console.log(arr.Sum());

// camelcase

const camelCase=(str)=>{
    // converting all characters to lowercase
        var ans = str.toLowerCase();
     
    // Returning string to camelcase
        return ans.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) ));

}

const arr=[1,2,3,4,5,6,7,8];
const str="guvi geek"
camelCase(str);
arrowFunction(arr);

// Anonymous funtion

// odd or even

        var anonymousfunction = function (arr) 
        {
            var arr=arr; 
            var even="even";
            var odd="odd";     
            for(i=0;i<arr.length;i++){
            if(arr[i]%2===0)
            {
             return even;
            }
            else
            {
              return odd;
            }
    }
     }
        var arr=[1,1,2,3,4,5]
         console.log(anonymousfunction(arr));

        //  camelcase

         var camelcase=function(str)
         {
            // converting all characters to lowercase
                var ans = str.toLowerCase();
             
            // Returning string to camelcase
                return ans.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) ));
        
        }
        var str1="guvi geek"
         console.log(camelcase(str1));

        //  sum of number 

        var anonymousfunction1 = function (arr) 
        {
            var arr=arr; 
            
              return (arr.Sum());
            
    }
     }
        var arr=[1,1,2,3,4,5]
         console.log(anonymousfunction1(arr));

// IIFI function

// sum o f array
        (function calculate (arr){
                  
                    console.log(arr.Sum);
                })
        var arr2=[1,2,3,4,5]
            (arr2);

            // odd o r even

            (function oddoreven(arr){
                for(i=0;i<arr.length;i++){
                    if(arr[i]%2===0)
                    {
                     console.log("even");
                    }
                    else
                    {
                        console.log("odd");
                    }
            })

            // string to camelcase

            (function camelcase(str){
                var ans = str.toLowerCase();
             
            // Returning string to camelcase
                console.log(ans.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) )));
            })
            ("guvi geek");