import express from "express";
import path from "path";
import homeRoute from "./routes/homeRoute";
import authRoute from "./routes/authRoute";
import errorRoute from "./routes/errorRoute";
import session from "express-session";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import { SECRET } from "./env";
import { SESSION_MAX_AGE } from "./middleware/constants";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: SESSION_MAX_AGE }
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

// Error handling
app.all("*", errorRoute);
