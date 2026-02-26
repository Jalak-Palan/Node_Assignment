<h1 align="center">🛒 Node Assignment – Product Management API</h1>

<p align="center">
A simple RESTful API built using <b>Node.js</b> and <b>Express.js</b> for managing products.
</p>

<hr/>

<h2>🚀 Live Links</h2>

<ul>
<li><b>GitHub Repository:</b><br/>
<a href="https://github.com/Jalak-Palan/Node_Assignment">
https://github.com/Jalak-Palan/Node_Assignment
</a>
</li>

<li><b>Render Deployment Link:</b><br/>
<a href="https://node-assignment-1-kq1i.onrender.com">
https://node-assignment-1-kq1i.onrender.com
</a>
</li>

<li><b>Postman Documentation:</b><br/>
<a href="https://documenter.getpostman.com/view/50839137/2sBXcGDefr">
https://documenter.getpostman.com/view/50839137/2sBXcGDefr
</a>
</li>
</ul>

<hr/>

<h2>📌 Features</h2>

<ul>
<li>✔ Get all products</li>
<li>✔ Get product by ID</li>
<li>✔ Get products by category</li>
<li>✔ Create new product</li>
<li>✔ Replace product details</li>
<li>✔ Update only stock</li>
<li>✔ Update only price</li>
</ul>

<hr/>

<h2>🛠 Tech Stack</h2>

<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>JSON (In-Memory Data Storage)</li>
</ul>

<hr/>

<h2>📦 Product Data Structure</h2>

<pre>
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
</pre>

<hr/>

<h2>📡 API Endpoints</h2>

<h3>1️⃣ Get All Products</h3>
<p><b>GET</b> /products</p>

<hr/>

<h3>2️⃣ Get Product By ID</h3>
<p><b>GET</b> /products/:id</p>

<pre>
Example:
GET /products/1
</pre>

<pre>
Error Response:
{
  "message": "Product not found"
}
</pre>

<hr/>

<h3>3️⃣ Get Products By Category</h3>
<p><b>GET</b> /products/category/:category</p>

<pre>
Example:
GET /products/category/Electronics
</pre>

<pre>
Error Response:
{
  "message": "No products found in this category"
}
</pre>

<hr/>

<h3>4️⃣ Create New Product</h3>
<p><b>POST</b> /products</p>

<pre>
Request Body:
{
  "name": "Keyboard",
  "category": "Electronics",
  "price": 1200,
  "stock": 20,
  "rating": 4.2
}
</pre>

<hr/>

<h3>5️⃣ Replace Product (Full Update)</h3>
<p><b>PUT</b> /products/:id</p>

<pre>
{
  "name": "Updated Name",
  "category": "Updated Category",
  "price": 2000,
  "stock": 10,
  "rating": 4.5
}
</pre>

<hr/>

<h3>6️⃣ Update Only Stock</h3>
<p><b>PUT</b> /products/:id/stock</p>

<pre>
{
  "stock": 100
}
</pre>

<hr/>

<h3>7️⃣ Update Only Price</h3>
<p><b>PUT</b> /products/:id/price</p>

<pre>
{
  "price": 1500
}
</pre>

<hr/>

<h2>▶ How To Run Locally</h2>

<pre>
1. git clone https://github.com/Jalak-Palan/Node_Assignment.git
2. cd Node_Assignment
3. npm install
4. node index.js
</pre>

<p>Server will run on:</p>

<pre>
http://localhost:3000
</pre>

<hr/>

<h2>⚠ Important Notes</h2>

<ul>
<li>Data is stored in memory (array), so it resets when server restarts.</li>
<li>Proper HTTP status codes are used (200, 201, 404).</li>
<li>JSON middleware enabled using express.json().</li>
</ul>

<hr/>

<h2>📈 Future Improvements</h2>

<ul>
<li>Add DELETE API</li>
<li>Add Validation Middleware</li>
<li>Connect MongoDB Database</li>
<li>Add Authentication (JWT)</li>
<li>Add Pagination & Filtering</li>
</ul>

<hr/>

<h2 align="center">👨‍💻 Author</h2>

<p align="center"><b>Jalak Palan</b></p>
