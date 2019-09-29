# CarRO

## Car Repair Order and Management Tool

### Create car repair orders and manage them.
<p align="center"><img width="674" height="630" src="documentation/add.png"></p>

### View list of all the Repair Orders
<p align="center"><img width="1903" height="643" src="documentation/board.png"></p>

### Edit Repair Orders and update the workflow for the Repair Order
<p align="center"><img width="658" height="790" src="documentation/edit.png"></p>

### Workflows included
<p align="center"><img width="761" height="241" src="documentation/workflow.png"></p>

### API DOCS
https://documenter.getpostman.com/view/8357128/SVfTM6RK?version=latest


### Installation and Set up
```
git clone https://github.com/compmonk/CarRO.git
cd CarRO
virtualenv -p /usr/bin/python3 venv
source venv/bin/activate
pip install -r requirements/base.txt
mongo CarRO db/createUser.js
mongorestore -d CarRO db/CarRO
python python CarRO/manage.py runserver 0.0.0.0:8000
```

### To run
```
source venv/bin/activate
python python CarRO/manage.py runserver 0.0.0.0:8000
```
