const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


/* =========================================
   ORDER STATUS

   false = not accepting orders
   true  = accepting orders
========================================= */

let ordersOpen = false;


/* =========================================
   CHECK ORDER STATUS
========================================= */

app.get("/api/orders/status", (req, res) => {
  res.json({
    success: true,

    ordersOpen: ordersOpen,

    message: ordersOpen
      ? "Orders are currently open."
      : "We are not taking orders right now.",
  });
});


/* =========================================
   CREATE ORDER
========================================= */

app.post("/api/orders", (req, res) => {

  if (!ordersOpen) {
    return res.status(403).json({
      success: false,

      message:
        "We are not taking orders right now.",
    });
  }


  const {
    name,
    phone,
    items,
    address,
  } = req.body;


  if (
    !name ||
    !phone ||
    !items ||
    !address
  ) {
    return res.status(400).json({
      success: false,

      message:
        "Please provide all required information.",
    });
  }


  console.log("New order:");

  console.log({
    name,
    phone,
    items,
    address,
  });


  return res.status(201).json({
    success: true,

    message:
      "Your order has been received.",
  });
});


/* =========================================
   OPEN ORDERS
========================================= */

app.post("/api/orders/open", (req, res) => {

  ordersOpen = true;

  res.json({
    success: true,

    ordersOpen: true,

    message:
      "Orders are now open.",
  });
});


/* =========================================
   CLOSE ORDERS
========================================= */

app.post("/api/orders/close", (req, res) => {

  ordersOpen = false;

  res.json({
    success: true,

    ordersOpen: false,

    message:
      "Orders are now closed.",
  });
});


/* =========================================
   HOME
========================================= */

app.get("/", (req, res) => {
  res.send(
    "Thai Chilli Bites backend is running."
  );
});


/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});