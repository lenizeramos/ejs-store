import express from "express";
import path from "path";
import homeRoute from "./routes/homeRoute";
import authRoute from "./routes/authRoute";
import errorRoute from "./routes/errorRoute";
import session from "express-session";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "My secret value",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoute);
app.use("/auth", authRoute);
app.use(productRoute);
app.use(cartRoute);

// Error handling
app.all("*", errorRoute);
