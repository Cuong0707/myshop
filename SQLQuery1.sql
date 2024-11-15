create database myshop

use myshop;

-- Tạo bảng Category (Danh mục sản phẩm)
CREATE TABLE Category (
    category_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(500)
);

-- Tạo bảng Product (Sản phẩm)
CREATE TABLE Product (
    product_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(1000),
    price DECIMAL(10, 2) NOT NULL,
    image_url NVARCHAR(500),
    category_id INT,
    CONSTRAINT FK_Product_Category FOREIGN KEY (category_id)
        REFERENCES Category(category_id)
);

-- Tạo bảng Users (Người dùng)
CREATE TABLE Users (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    address NVARCHAR(500),
    payment_info NVARCHAR(255),
	username NVARCHAR(255) UNIQUE, 
	password NVARCHAR(255) NOT NULL
);

-- Tạo bảng Orders (Đơn hàng)
CREATE TABLE Orders (
    order_id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT,
    order_date DATE NOT NULL,
    status NVARCHAR(50),
    CONSTRAINT FK_Orders_Users FOREIGN KEY (user_id)
        REFERENCES Users(user_id)
);

-- Tạo bảng OrderProduct (Chi tiết đơn hàng)
CREATE TABLE OrderProduct (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    CONSTRAINT FK_OrderProduct_Orders FOREIGN KEY (order_id)
        REFERENCES Orders(order_id),
    CONSTRAINT FK_OrderProduct_Product FOREIGN KEY (product_id)
        REFERENCES Product(product_id)
);

-- Tạo bảng Inventory (Kho hàng)
CREATE TABLE Inventory (
    product_id INT PRIMARY KEY,
    stock_quantity INT NOT NULL,
    CONSTRAINT FK_Inventory_Product FOREIGN KEY (product_id)
        REFERENCES Product(product_id)
);

-- Tạo bảng PaymentMethods (Phương thức thanh toán)
CREATE TABLE PaymentMethods (
    payment_method_id INT PRIMARY KEY IDENTITY(1,1),
    method_name NVARCHAR(255) NOT NULL
);

-- Tạo bảng Admin (Quản trị viên)
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(255) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    email NVARCHAR(255),
    role NVARCHAR(50) NOT NULL
);

-- Tạo bảng Log (Nhật ký hệ thống)
CREATE TABLE AdminLog (
    log_id INT PRIMARY KEY IDENTITY(1,1),
    admin_id INT,
    action NVARCHAR(255),
    action_date DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_AdminLog_Admin FOREIGN KEY (admin_id)
        REFERENCES Admin(admin_id)
);
