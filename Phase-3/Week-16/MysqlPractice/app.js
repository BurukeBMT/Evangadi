/*
Question 1: Create a MySQL database by the name "myDB" and create a database user by the name "myDBuser" with a permissions to connect with the "myDB" database. Use the "mysql" module to create a connection with the newly created database. Display console message if the connection is successful or if it has an error.

Please find further instructions under the “Instructions for question 1” below.
*/
// Import required modules
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express app
const app = express();

// Create a connection to the MySQL database
// Make sure the database and user exist in your MySQL/MariaDB server
const connection = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin", // MariaDB username
  password: "BurukBMT1619", // MariaDB password
  database: "myDB", // Name of the database
});

// Connect to the MySQL database and display connection status
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the MySQL database successfully!");
});

/*
Question 2: Here is a link to a document that contains the tables we need to create and convert the apple.com/iphones page into a dynamic page with a database. As you can see from the document, there are 5 tables that are needed (please scroll horizontally and vertically over the document to see all the 5 tables). Write a SQL query to create the apple.com tables inside of the "myDB" database you created above. Once you write the queries, use the "mysql" module to execute the queries on the database. Try both of these methods to initiate the execution of the queries:

● Include the execution code directly in the module to be executed as you run the app
● Use the Express module to receive requests. Configure your module in a way that it executes the queries when the "/install" URL is visited.

Please find further instructions under the “Instructions for question 2” below
*/

// Route to create tables when /install is visited
// Define SQL queries to create the necessary tables
const createProductsTable = `
  CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_url VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL
  );
`;

const createProductDescriptionsTable = `
  CREATE TABLE IF NOT EXISTS product_descriptions (
    description_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    product_brief_description TEXT,
    product_description TEXT,
    product_img VARCHAR(255),
    product_link VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
`;

const createProductPricingTable = `
  CREATE TABLE IF NOT EXISTS product_pricing (
    product_id INT,
    price DECIMAL(10, 2),
    price_range VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
`;

const createProductFeaturesTable = `
  CREATE TABLE IF NOT EXISTS product_features (
    feature_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    feature_name VARCHAR(255),
    feature_value VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
`;

const createProductSpecificationsTable = `
  CREATE TABLE IF NOT EXISTS product_specifications (
    specification_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    specification_name VARCHAR(255),
    specification_value VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
`;
// Additional table creation queries
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  );
`;

const createOrdersTable = `
  CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
`;

// Function to create tables directly on startup
function createTablesOnStartup() {
  const queries = [
    createProductsTable,
    createProductDescriptionsTable,
    createProductPricingTable,
    createProductFeaturesTable,
    createProductSpecificationsTable,
    createUsersTable,
    createOrdersTable,
  ];

  queries.forEach((query, index) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.error(`Error creating table ${index + 1}:`, err.stack);
        return;
      }
      console.log(`Table ${index + 1} created successfully!`);
    });
  });
}

// Run table creation on startup
createTablesOnStartup();

// Route to create tables when /install is visited
app.get("/install", (req, res) => {
  const queries = [
    createProductsTable,
    createProductDescriptionsTable,
    createProductPricingTable,
    createProductFeaturesTable,
    createProductSpecificationsTable,
    createUsersTable,
    createOrdersTable,
  ];

  let tablesCreated = 0;

  queries.forEach((query, index) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.error(`Error creating table ${index + 1}:`, err.stack);
        res.send(`Error creating table ${index + 1}: ${err.message}`);
        return;
      }
      console.log(`Table ${index + 1} created successfully!`);
      tablesCreated++;
      if (tablesCreated === queries.length) {
        res.send("All tables created successfully!");
      }
    });
  });
});

// Enable body parsing and CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Existing routes (e.g., /add-product, /iphones) remain unchanged
// Add new routes for users and orders if needed
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Visit http://localhost:${PORT}/install to create the tables.`
  );
});

/*
Question 3: Create an HTML file called, “index.html” with a form to populate the "products" table you created above.
● The form on the HTML page should send a POST request to a URL named "/add-product"
● Use Express to receive the POST request
● Use the body-parser module to parse the POST request sent to your Express server
● Write a SQL query to insert the data received from the HTML form into the "products" table
Please find further instructions under the “Instructions for question 3” below
*/ 

// Enable body parsing and CORS for form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Route to handle the form POST request from index.html
app.post("/add-product", (req, res) => {
  const {
    product_url,
    product_name,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    price,
    price_range,
  } = req.body;

  // Insert product basic info into products table
  const insertProductQuery = `
    INSERT INTO products (product_url, product_name)
    VALUES (?, ?)
  `;

  // Insert product, then description, then pricing (sequentially)
  connection.query(
    insertProductQuery,
    [product_url, product_name],
    (err, result) => {
      if (err) {
        console.error("Error inserting product into database:", err.stack);
        res.status(500).send("Error inserting product into database: " + err.message);
      } else {
        const productId = result.insertId;
        // Insert product description
        const insertDescriptionQuery = `
          INSERT INTO product_descriptions (product_id, product_brief_description, product_description, product_img, product_link)
          VALUES (?, ?, ?, ?, ?)
        `;
        connection.query(
          insertDescriptionQuery,
          [productId, product_brief_description, product_description, product_img, product_link],
          (err, result) => {
            if (err) {
              console.error("Error inserting product description:", err.stack);
              res.status(500).send("Error inserting product description: " + err.message);
            } else {
              // Insert product pricing
              const insertPricingQuery = `
                INSERT INTO product_pricing (product_id, price, price_range)
                VALUES (?, ?, ?)
              `;
              connection.query(
                insertPricingQuery,
                [productId, price, price_range],
                (err, result) => {
                  if (err) {
                    console.error("Error inserting product pricing:", err.stack);
                    res.status(500).send("Error inserting product pricing: " + err.message);
                  } else {
                    res.send("Product added successfully!");
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

// Route to fetch all iPhone products and related info as JSON
app.get("/iphones", (req, res) => {
  // Join products, descriptions, and pricing tables
  const query = `
    SELECT * FROM products
    JOIN product_descriptions ON products.product_id = product_descriptions.product_id
    JOIN product_pricing ON products.product_id = product_pricing.product_id
  `;

  connection.query(query, (err, rows) => {
    if (err) {
      console.error("Error fetching iPhone data:", err);
      res.status(500).json({ error: "Failed to retrieve data" });
    } else {
      // Format and send the response as JSON
      const iphones = { products: rows };
      res.json(iphones);
    }
  });
});