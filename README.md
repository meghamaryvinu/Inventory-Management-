# Inventory Management App

A simple inventory management system built with React and Node.js/Express.

## Features

- Add new products with name and quantity
- View all products in inventory
- Increase/decrease product quantities
- Delete products from inventory

## Tech Stack

**Frontend:**
- React
- Axios
- CSS3

**Backend:**
- Node.js
- Express
- CORS

## Installation

### Backend Setup

```bash
cd backend
npm install
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will open in your browser at `http://localhost:3000`

## Usage

1. Start the backend server first
2. Start the frontend application
3. Use the form to add products with name and quantity
4. Use +/- buttons to adjust quantities
5. Click Delete to remove products

## API Endpoints

- `GET /products` - Get all products
- `POST /products` - Add a new product
- `PUT /products/:id` - Update product quantity
- `DELETE /products/:id` - Delete a product

## Project Structure

```
├── backend/
│   ├── server.js          # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   └── App.css        # Styles
│   └── package.json
└── README.md
```
