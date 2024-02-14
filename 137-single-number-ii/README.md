<h2><a href="https://leetcode.com/problems/single-number-ii">Single Number II</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given an integer array <code>nums</code> where&nbsp;every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.</p>

<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,3,2]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,1,0,1,99]
<strong>Output:</strong> 99
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</li>
</ul>

<p>
	Initialization: Initialize two variables, xor1 and xor2, to 0. These variables will be used to keep track of the bits that appear once and twice, respectively.

Loop through the array: Use a loop to iterate through each number in the array.

Update 'xor1' and 'xor2':

Update xor1 by XORing it with the current number (xor1 = (xor1 ^ nums[i])).
Perform a bitwise AND with the complement of xor2 to exclude the bits that also appear in xor2 (& ~xor2).
Similarly, update xor2 by XORing it with the current number and excluding bits that appear in xor1 (xor2 = (xor2 ^ nums[i]) & ~xor1).
Return result: After the loop, the final value of xor1 represents the single number that appears exactly once.
</p>
