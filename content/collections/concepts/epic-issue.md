---
title: Epic Issue
slug: concepts/epic/issue
---
# Epic Issue
An Epic Issue describes a complete feature for one or more microservices. Epic issues are marked with the tag *Epic Issue* and the label `[EPIC]` as part of the issue title. The Autor has to describe the feature and define a list of acceptance criteria. When a developer assigns to the epic issue, he/she has to define a list of concrete tasks in the first step. The task list describes the planned implementation. By comparing the acceptance criteria with the task list, it has to be possible to check, if all requirements are fulfilled. This step has to treat before the developer starts to implement the feature. A second comparison is one step of the code review as part of the pull request.

For a better overview, it will be useful to document the task list in the epic issue description. 

You can use this snippet (replace `[issue_number]` and `[issue_title]`): 

```
## Task List
* #[issue_number] - [issue_title]
```
