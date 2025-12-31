// ANAGRAMS  -----

 const strs = ["eat","tea","tan","ate","nat","bat"]

 //convert each word into sorted(word.split(''). sort().join('')) string key. map[key].psuh(word)use a hash map to group words with the same key return all grouped value form the map(Object.values(map))

 function groupAnagram(strs){
    if(!strs || strs.length === 0) return 0;

    const map = {};

    for(let word of strs){
        const key = word.split('').sort().join('');
        map[key] = (map[key] || [])
        map[key].push(word)
    }

    return Object.values(map)
 }

 console.log(groupAnagram(strs));



 const s =  "undefined"
 const t = "undefined"

 function isValid(s, t){
    const map = {}
    if(s.length !== t.length) return false

    for(let char of s){
       map[char] = (map[char] || 0) + 1
    }

    for(let char of t){
        if(!map[char]){
            return false;
        }
        map[char]--
    }
    return true
 }
 
 console.log(isValid(s, t));
 