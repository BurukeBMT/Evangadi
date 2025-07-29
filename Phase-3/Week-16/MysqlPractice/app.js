const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an Express app
const app = express();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser", // MySQL username
  password: "myDBuser", // MySQL password (replace with your actual password)
  database: "myDB", // Name of the database
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the MySQL database successfully!");
});

// Route to create tables when /install is visited
app.get("/install", (req, res) => {
  // Create tables one by one
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

  // Execute the table creation queries sequentially
  connection.query(createProductsTable, (err, result) => {
    if (err) {
      console.error("Error creating products table:", err.stack);
      res.send("Error creating products table: " + err.message);
      return;
    }
    console.log("Products table created successfully!");

    connection.query(createProductDescriptionsTable, (err, result) => {
      if (err) {
        console.error("Error creating product descriptions table:", err.stack);
        res.send("Error creating product descriptions table: " + err.message);
        return;
      }
      console.log("Product Descriptions table created successfully!");

      connection.query(createProductPricingTable, (err, result) => {
        if (err) {
          console.error("Error creating product pricing table:", err.stack);
          res.send("Error creating product pricing table: " + err.message);
          return;
        }
        console.log("Product Pricing table created successfully!");

        connection.query(createProductFeaturesTable, (err, result) => {
          if (err) {
            console.error("Error creating product features table:", err.stack);
            res.send("Error creating product features table: " + err.message);
            return;
          }
          console.log("Product Features table created successfully!");

          connection.query(createProductSpecificationsTable, (err, result) => {
            if (err) {
              console.error(
                "Error creating product specifications table:",
                err.stack
              );
              res.send(
                "Error creating product specifications table: " + err.message
              );
              return;
            }
            console.log("Product Specifications table created successfully!");
            res.send("All tables created successfully!");
          });
        });
      });
    });
  });
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Visit http://localhost:${PORT}/install to create the tables.`
  );
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// // Route to handle the form POST request
// app.post("/add-product", (req, res) => {
//   const {
//     product_url,
//     product_name,
//     product_brief_description,
//     product_description,
//     product_img,
//     product_link,
//     price,
//     price_range,
//   } = req.body;

//   const insertProductQuery = `
//     INSERT INTO products (product_url, product_name)
//     VALUES (?, ?)
//   `;

//   connection.query(
//     insertProductQuery,
//     [product_url, product_name],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting product into database:", err.stack);
//         res
//           .status(500)
//           .send("Error inserting product into database: " + err.message);
//       } else {
//         const productId = result.insertId; // Get the inserted product's ID
//         console.log("Product added successfully ");
//         res.write("Product added successfully!\n");

//         // Insert into product_descriptions table
//         const insertDescriptionQuery = `
//         INSERT INTO product_descriptions (product_id, product_brief_description, product_description, product_img, product_link)
//         VALUES (?, ?, ?, ?, ?)
//       `;
//         connection.query(
//           insertDescriptionQuery,
//           [
//             productId,
//             product_brief_description,
//             product_description,
//             product_img,
//             product_link,
//           ],
//           (err, result) => {
//             if (err) {
//               console.error("Error inserting product description:", err.stack);
//               res
//                 .status(500)
//                 .send("Error inserting product description: " + err.message);
//             } else {
//               console.log("Product description added successfully!");
//               res.write("Product description added successfully!\n");

//               // Insert into product_pricing table
//               const insertPricingQuery = `
//             INSERT INTO product_pricing (product_id, price, price_range)
//             VALUES (?, ?, ?)
//           `;
//               connection.query(
//                 insertPricingQuery,
//                 [productId, price, price_range],
//                 (err, result) => {
//                   if (err) {
//                     console.error(
//                       "Error inserting product pricing:",
//                       err.stack
//                     );
//                     res
//                       .status(500)
//                       .send("Error inserting product pricing: " + err.message);
//                   } else {
//                     console.log("Product pricing added successfully!");
//                     res.write("Product pricing added successfully!\n");
//                     res.end(); // End the response after all success messages
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     }
//   );
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);

// });
 app.get("/iphones", (req, res) => {
   
   const query = `
    SELECT * FROM products JOIN product_descriptions JOIN product_pricing  ON products.product_id = product_descriptions.product_id
    AND products.product_id = product_pricing.product_id
  `;

 
   connection.query(query, (err, rows) => {
     if (err) {
      console.error("Error fetching iPhone data:", err);
       
     } else {
       
       const iphones = {products:[]};
       iphones.products  = rows
       var stringIphone = JSON.stringify(iphones)
       res.end(stringIphone); // Send the JSON response
     }
   });
 });


// app.get("/iphone", (req, res) => {
//   // Corrected query string with table names and JOIN clauses
//   const query = `
//     SELECT * FROM products
//     JOIN product_descriptions ON products.product_id = product_descriptions.product_id
//     JOIN product_pricing ON products.product_id = product_pricing.product_id
//   `;

//   // Execute the query
//   connection.query(query, (err, rows) => {
//     if (err) {
//       // If there is an error, respond with the error message
//       console.error("Error fetching iPhone data:", err);
//       res.status(500).json({ error: "Failed to retrieve data" });
//     } else {
//       // Format the response with the fetched data
//       const iphones = { products: rows };
//       res.json(iphones); // Send the JSON response directly
//     }
//   });
// });
