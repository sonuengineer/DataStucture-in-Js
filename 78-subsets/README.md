<h2><a href="https://leetcode.com/problems/subsets">Subsets</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em> <span data-keyword="subset"><em>subsets</em></span> <em>(the power set)</em>.</p>

<p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> [[],[0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>All the numbers of&nbsp;<code>nums</code> are <strong>unique</strong>.</li>
</ul>
<p>
Approch: bit -manupulation 
if we look closely that number of subset its depend upon length of array  thats is 2^length of array 
this is key to solve this qn (in js we can find this using bitwise left operator 1<<n give...2^n)
step1) make one empty array to store result
Iterate  i through till number of total subset we can find by using 1<<n in this make another empty array of having subset 
              iterate j  through lengt of array 
              chaek for  ((i & (1 << j)) !== 0 if true then push that number into subset
              after inner loop end push the subset into result  retune the result        
 
 Alogo
 Initialization: Create an empty array (result) to store all subsets.

Outer Loop: Use a loop (for (let i = 0; i < (1 << n); i++)) to iterate through all possible combinations. (1 << n) calculates 2^n, representing the total number of combinations.

Subset Initialization: For each combination, create a new empty array (subset) to represent a subset.

Inner Loop: Use another loop (for (let j = 0; j < n; j++)) to iterate through each bit of the current combination.

Bit Check: Check if the j-th bit of the current combination is set to 1 using if ((i & (1 << j)) !== 0).

Include Element: If the bit is set, include the corresponding element from the input array in the current subset (subset.push(nums[j])).

Subset Addition: Add the generated subset to the result array.

Return Result: Return the final array containing all subsets.


</p>
