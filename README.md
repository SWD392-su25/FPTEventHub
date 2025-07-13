# 🎉 FPTEventHub

**FPTEventHub** là hệ thống quản lý sự kiện sinh viên được phát triển dành riêng cho sinh viên, giảng viên và quản trị viên tại Đại học FPT. Hệ thống cho phép người dùng đăng nhập, xem và quản lý các sự kiện học thuật, nghề nghiệp và giải trí một cách hiệu quả.

## 🚀 Tính năng chính

### 🧑‍💻 Người dùng
- Đăng ký / Đăng nhập bằng email `@fpt.edu.vn`
- Xem danh sách sự kiện theo phân trang (9 sự kiện/trang)
- Truy cập chi tiết từng sự kiện
- Carousel hiển thị 3 sự kiện nổi bật (tự động chuyển)

### 📋 Admin
- Quản lý người dùng (sinh viên, giảng viên)
- Tạo, chỉnh sửa, xóa sự kiện
- Import danh sách sự kiện từ file
- Xem thống kê sự kiện theo số lượng đăng ký

### 👨‍🏫 Giảng viên
- Tạo các sự kiện liên quan đến học thuật
- Xem danh sách sinh viên tham gia

## 📂 Cấu trúc thư mục
src/
├── assets/ # Hình ảnh logo, campus, sự kiện
│ ├── FPTCampus.png
│ ├── FPTLogo.png
│ └── events/
├── components/ # Các thành phần React chính
│ ├── HomePage.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── ForgotPassword.jsx
├── styles/ # Các file CSS module
│ ├── AuthForm.module.css
│ └── HomePage.module.css
├── utils/ # Hàm tiện ích và mock data
│ ├── authUtils.js
│ └── mockEvents.js
├── App.js # Khai báo route
├── index.js # Điểm khởi chạy ứng dụng
└── index.css # CSS toàn cục

## 🛠️ Công nghệ sử dụng

- **Frontend:** ReactJS, React Router DOM
- **UI Framework:** Material UI (MUI)
- **CSS:** CSS Modules
- **State:** LocalStorage & SessionStorage
- **Mock Data:** Tạm thời sử dụng `mockEvents.js` và `authUtils.js`