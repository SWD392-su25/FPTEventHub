// đo hiệu suất người dùng truy cập website
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  // Cumulative Layout Shift: đo độ lệch giao diện
        getFID(onPerfEntry);  // First Input Delay: độ trễ phản hồi đầu tiên
        getFCP(onPerfEntry);  // First Contentful Paint: thời gian hiển thị nội dung đầu tiên
        getLCP(onPerfEntry);  // Largest Contentful Paint: thời gian hiển thị nội dung chính lớn nhất
        getTTFB(onPerfEntry); // Time To First Byte: thời gian máy chủ phản hồi byte đầu tiên

    });
  }
};

export default reportWebVitals;