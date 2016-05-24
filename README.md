# Restful-API-Task-Assestment
Restful Backend API with NodeJs and Mangoose

CATEGORY

Add Category
curl -i -H "Content-Type: application/json" -X POST -d "{ \"id\": \"1\", \"name\": \"Dress\", \"price\": \"100.000\" , \"category\": \"1\"}" http://localhost:3000/categories

Import Default Category
curl -i -H "Accept: application/json" http://localhost:3000/import/categories

List All Category
curl -i -H "Accept: application/json" http://localhost:3000/categories

Get Category By Id
curl -i -H "Accept: application/json" http://localhost:3000/categories/1

Update Category
curl -i -X PUT -H "Content-Type: application/json" -d "{\"name\": \"BBQ Brawlers\"}" http://localhost:3000/categories/1

Delete Category
curl -i -H "Accept: application/json" -X DELETE http://localhost:3000/categories/1

Delete All Category
curl -i -H "Accept: application/json" -X DELETE http://localhost:3000/categories/

PRODUCT

Add Product
curl -i -H "Content-Type: application/json" -X POST -d "{ \"id\": \"1\", \"name\": \"Dress\", \"price\": \"100.000\" , \"category\": \"1\"}" http://localhost:3000/products

Import Default Product
curl -i -H "Accept: application/json" http://localhost:3000/import/products

List All Product
curl -i -H "Accept: application/json" http://localhost:3000/products

Get Product By Id
curl -i -H "Accept: application/json" http://localhost:3000/products/1

Update Product
curl -i -X PUT -H "Content-Type: application/json" -d "{\"name\": \"BBQ Brawlers\"}" http://localhost:3000/products/1

Delete Product
curl -i -H "Accept: application/json" -X DELETE http://localhost:3000/products/1

Delete All Product
curl -i -H "Accept: application/json" -X DELETE http://localhost:3000/products/
