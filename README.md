# LENIVA SHO-P Store

A web application for managing user authentication, product browsing, and cart functionality, with RESTful endpoints for interacting with each feature.

## Table of Contents
- [Endpoints](#endpoints)
  - [Home](#home)
  - [Authentication](#authentication)
  - [Product](#product)
  - [Cart](#cart)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)

## Endpoints

### Home
- **Home Page**: `GET localhost:3000/` - Returns the main page of the application.

### Authentication
- **Login**  
  - `GET localhost:3000/auth/login` - Returns the login page.
  - `POST localhost:3000/auth/login` - Processes login request.
    - **Body Parameters**: `{ email, password }`
- **Register**
  - `GET localhost:3000/auth/register` - Returns the registration page.
  - `POST localhost:3000/auth/register` - Processes registration request.
    - **Body Parameters**: `{ name, email, password }`
- **Logout**
  - `GET localhost:3000/auth/logout` - Logs the user out.

### Product
- **Products Page**: `GET localhost:3000/products` - Returns a list of available products.

### Cart
- **View Cart**
  - `GET localhost:3000/cart` - Returns the user's cart page with items.
- **Add to Cart**
  - `POST localhost:3000/cart/add` - Adds a product to the cart.
    - **Body Parameters**: `{ productId }`
- **Update Cart**
  - `PUT localhost:3000/cart/update` - Updates the quantity of a product in the cart.
    - **Body Parameters**: `{ productId, quantity }`
- **Remove from Cart**
  - `DELETE localhost:3000/cart/delete` - Removes a product from the cart.
    - **Body Parameters**: `{ productId }`
- **Checkout**
  - `GET localhost:3000/cart/checkout` - Returns the checkout page.
  - `GET localhost:3000/cart/checkout/checkoutSuccess` - Returns the checkout success page.

## Getting Started

To set up the project locally, follow these instructions.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

Install all necessary dependencies:

```bash
npm install
```

## Running the Project
Use these commands to start the project:

Run the server:

```bash
npm run server
```

Compile TypeScript files:

```bash
tsc -w src/public/ts/*.ts --outDir src/public/js
```

Compile CSS files:

```bash
npm run css
```

Available Scripts

- `npm run server` - Starts the server for local development.
- `tsc -w src/public/ts/*.ts --outDir src/public/js` - Compiles TypeScript files from the specified directory and outputs JavaScript files.
- `npm run css` - Compiles and processes CSS files.
