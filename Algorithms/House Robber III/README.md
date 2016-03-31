Use dfs + dp.

To a node, `dp[0]` means the maximum acount with taking this node's value (with its child nodes considered), while `dp[1]` means the maximum acount without taking this node's value.

And use dfs to get the dp array from buttom to top (you should and you have to). So the answer is very clear, `max(head.dp[0], head.dp[1])`.

