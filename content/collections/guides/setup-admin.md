---
title: Setup administrator
slug: setup-admin
---

# Setup administrator
Setting up an user as administrator requires access to _Drops_ database. Connect to the database docker using 
```bash
docker exec -it drops-mariadb mysql -u drops -p
```
enter the password of the drops database user and switch to the database used by _Drops_ (default: `drops`). Select all
user saved in the database 

```sql
SELECT * FROM User;
```

Now, choose the user that has to be administrator and update the user with the following command:

```sql
UPDATE User SET `roles` = 'supporter,admin' WHERE `id` = 1;
```
(replace the `id` with the ID of teh chosen user!)

**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-06-29 --
**Updated:** 2018-06-29