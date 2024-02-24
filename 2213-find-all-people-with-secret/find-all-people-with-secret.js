/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
        let ans = new Map([[0,0], [firstPerson, 0]])
        meetings.sort((a, b) => a[2] - b[2])
        let i = 0
        while (i < meetings.length) {
            t = meetings[i][2]
            G = new Map()
            while (i < meetings.length && meetings[i][2] == t) {
                if (G.has(meetings[i][0]))
                    G.get(meetings[i][0]).push(meetings[i][1])
                else 
                    G.set(meetings[i][0], [meetings[i][1]])
                if (G.has(meetings[i][1]))
                    G.get(meetings[i][1]).push(meetings[i][0])
                else 
                    G.set(meetings[i][1], [meetings[i][0]])
                i += 1
            }
            q = Array.from(G.keys())
            k = 0
            while (k < q.length) {
                key = q[k]
                k += 1
                if (ans.has(key))
                    for (let person of G.get(key)) 
                        if (!ans.has(person)) {
                            ans.set(person, t)
                            q.push(person)
                        }
            }
        }
        return Array.from(ans.keys())
};