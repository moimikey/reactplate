# webpack

## Production size bundle difference

regular build

```
-rw-r--r--  1 mshertzberg staff 2.2K Jul 17 18:00 app.cd9412e7ec26836a1db6.js
-rw-r--r--  1 mshertzberg staff 1011 Jul 17 18:00 app.cd9412e7ec26836a1db6.js.map
-rw-r--r--  1 mshertzberg staff 691K Jul 17 18:00 common.6e76df838a1111bd3bad.js
-rw-r--r--  1 mshertzberg staff 843K Jul 17 18:00 common.6e76df838a1111bd3bad.js.map
-rw-r--r--  1 mshertzberg staff   33 Jul 17 18:00 manifest.json
```

with bablii

```
-rw-r--r--  1 mshertzberg staff  500 Jul 17 18:02 app.cd9412e7ec26836a1db6.js
-rw-r--r--  1 mshertzberg staff  290 Jul 17 18:02 app.cd9412e7ec26836a1db6.js.map
-rw-r--r--  1 mshertzberg staff 153K Jul 17 18:02 common.6e76df838a1111bd3bad.js
-rw-r--r--  1 mshertzberg staff 9.7K Jul 17 18:02 common.6e76df838a1111bd3bad.js.map
-rw-r--r--  1 mshertzberg staff   33 Jul 17 18:02 manifest.json

```


+ uglify (deadcode/unused)

```
-rw-r--r--  1 mshertzberg staff  445 Jul 17 18:06 app.cd9412e7ec26836a1db6.js
-rw-r--r--  1 mshertzberg staff 151K Jul 17 18:06 common.6e76df838a1111bd3bad.js
-rw-r--r--  1 mshertzberg staff   33 Jul 17 18:06 manifest.json
```
