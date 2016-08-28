Use Topological Sort and BFS.

The courses we can learn firstly are the ones that have no prerequisites, it's obvious! We can define an array `indegree`, indegree[i] means the number of prerequisites of course i, so when indegree[i] equals to 0, course i can be learned. Go on, we put i whose number of prerequisites is 0 to a queue, which means the course could be learned, and when the queue does a pop operation, we could update the array `indegree`, and if indegree[i] is 0, we could push i to the queue that means we could learn that course i. Until there is no item in the queue, check if we have already finished all the courses.

