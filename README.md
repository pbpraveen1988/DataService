# DataService

DataService is a  Microservice on the top of Nest js framework using Node JS

## Data Controller.

API to get the data from the table

URL => `/data/v1.0/{tableName}`

NOTE : {tableName} => need to replace with appropriate table name.

Parameters 
----------

The below are the paramters for the above url.

* select
* where
* order_by 
* page_size 
* page_number


### SELECT 
* all   => Will get the all records from table ex : select=all
* id,name => Will get the specific columns from table ex : select=id,name
  
### WHERE

To add where clause in auto generated query 

Use `:` to add the OR condition and `,` for AND condition. 

for ex:   where=id=6,name=sachin   

Above example will generate the below condition in QUERY.
`WHERE id = 6 AND name = 'sachin' `

Ex : where=id=6:name=sachin
Above example will generate the below condition in QUERY.
`WHERE id = 6 OR name = 'sachin' `

### ORDER 

To enable the order by to query just need to pass the `order_by` paramter

for ASC need to use `+` and for DESC need to use `-`.

for example : `order_by=+id`

the above paramter will generate the below query. 
`ORDER BY id ASC`

Similarly for DESC , `order_by=-id`, will generate `ORDER BY id DESC` 

for multiple order by just need to pass by `,` (comma) seperated

for example : `order_by=+id,-name`




