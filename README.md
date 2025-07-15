# 📚 Minimal Library Management System

A clean and functional Library Management System built with **React**, **TypeScript**, **Redux Toolkit Query**, **Tailwind CSS** and **Shadcn** . The system provides essential features like viewing, adding, editing, deleting, and borrowing books, along with a borrow summary report.

---

## 🚀 Live Links

- 🔗 Frontend: [Live Link](https://library-management-sage-iota.vercel.app)

---

## 🛠️ Tech Stack

| Layer            | Technology                     |
|------------------|--------------------------------|
| Frontend         | React, TypeScript              |
| State Management | Redux Toolkit, RTK Query       |
| Styling          | Tailwind CSS / Plain CSS       |
| Backend          | Node.js, Express.js            |
| Database         | MongoDB, Mongoose              |

---

## 📦 Features

### 📘 Book Management
- **List All Books** in a table format
- **Create New Book**
- **Edit Book**
- **Delete Book**
- **Business Rule:** Copies set to 0 ➝ Marks book as availability no

### 📖 Borrow Book
- **Borrow Form:** Open via button in book list
- **Business Rules:**
  - Quantity ≤ available copies
  - Copies = 0 ➝ Marks as *Unavailable*
- **Post Submit:**
  - Success toast
  - Redirect to borrow summary

### 📊 Borrow Summary
- Aggregated list of borrowed books with total quantity
- Columns: Book Title, ISBN, Total Quantity Borrowed

---

## 📄 Pages/Routes

| Route                | Description                                  |
|----------------------|----------------------------------------------|
| `/books`             | Book list with view/edit/delete/borrow       |
| `/create-book`       | Form to add new book                         |
| `/books/:id`         | Book details view                            |
| `/edit-book/:id`     | Edit existing book                           |
| `/borrow/:bookId`    | Borrow a specific book                       |
| `/borrow-summary`    | Aggregated borrow summary                    |

---

## ⚙️ Backend Overview

- **Modular MVC pattern**
- **Book Schema:**
  - `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`
- **Borrow Schema:**
  - `book`, `quantity`, `dueDate`
- **Functionality:**
  - Full CRUD for books
  - Borrow with aggregation summary
  - Error handling with clear messages
  - Pagination support for book listings

---