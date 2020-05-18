---
title: 'Git'
date: '2020-05-17'
---

# Git

https://learngitbranching.js.org/

git init



#### Information

git status

git config --list

git branch (-a)



#### Basic Operations

git commit -m "[message]"

git checkout [hash/HEAD^/HEAD~[#]]



git branch [new branch]

git rebase [A]: merge by put HEAD after A

git merge [A]: merge A and HEAD by creating a new node



git checkout -b [new branch]: create and switch to new branch

git branch -f [A] [B]: move branch A to B

git branch -d [A]: delete ranch A



git reset [A]: go back to A (lose history, local)

git revert [A]: go back to A (keep history with new node, remote)



#### Good to Know

git cherry-pick A B C ...: copy A B C ... after HEAD (create a new branch if necessary)

git rebase -i HEAD~[#]: cherry pick with a UI



#### Remote Repository

git push -u [origin name] [branch name]