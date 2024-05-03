
var WordDictionary = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root

    for(let char of word) {
        if(char in node)
            node = node[char]
        else {
            node[char] = {}
            node = node[char]
        }
    }

    node.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const path = { isFound: false}
    searchHelper(word, 0, this.root, path)

    return path.isFound
};

function searchHelper(word, idx, node, path) {
    if(!node) return
    if(path.isFound) return

    let char = word[idx]
    if(idx == word.length - 1) {
        if(char == ".")  {
            let nodeKeys = Object.keys(node)
            for(let key of nodeKeys) {
                let n = node[key]
                if(n == "end") continue
                if(n.end) {
                    path.isFound = true
                    return
                }
            }
        }
        if(char in node && node[char].end) {
            path.isFound = true
            return
        }

        return
    } else {
        if(char == '.') {
            for(let c in node) {
                if(c == "end") continue
                searchHelper(word, idx + 1, node[c], path)
            }
        } else {
            if(!(char in node)) return
            searchHelper(word, idx + 1, node[char], path)
        }
    }

    return
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */