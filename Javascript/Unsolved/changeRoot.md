# Description

You are given an array parent of length N specifying a tree. The vertices of the tree are numbered from 0 to N-1 and parent[i] is the parent of the ith node. The root of the tree is its own parent (i.e. parent[i] = i if and only if i is a root).

What will the parent array look like if the edges remain the same but tree is rooted at the vertex newRoot?

## Example

for `parent = [0,0,0,1]` and `newRoot = 1`, the output should be `[1,1,0,1]`

-   [input] array.integer parent

    the array of parents

-   [input] integer newRoot

    integer from 0 to N - 1

-   [output] array.integer

        array of parents after changing the root

    ## Solutions

    This a solution bye @lorenz in c++

    ```C++
    std::vector<int> changeRoot(std::vector<int> parent, int newRoot) {
        int root;
        std::vector<int> graph[parent.size()];
        for(int i=0; i<parent.size(); ++i){
            if(parent[i] == i){
                root= i;
                continue;
            }
            graph[i].push_back(parent[i]);
            graph[parent[i]].push_back(i);
        }
        bool vis[parent.size()];
        for(int i=0; i<parent.size(); ++i) vis[i] = false;
        std::queue<int>Q;
        std::vector<int>ans(parent.size(), -1);
        Q.push(newRoot);
        while(Q.size()){
            int cur = Q.front(); Q.pop();
            if(vis[cur]) continue;
            vis[cur] =true;
            for(int i=0; i<graph[cur].size(); ++i){
                if(parent[graph[cur][i]] == -1 || !vis[graph[cur][i]]){
                    //vis[graph[cur][i]] = true;
                    ans[graph[cur][i]] = cur;
                    Q.push(graph[cur][i]);
                }
            }
        }
        ans[newRoot] = newRoot;
        return ans;
    }
    ```
