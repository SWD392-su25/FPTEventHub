// Hàm validate email và xử lý đăng nhập
import { users } from "./mockUsers";

export const isValidFptEmail = (email) => email.endsWith("@fpt.edu.vn");

export const login = (email, password) => {
  return users.find((u) => u.email === email && u.password === password) || null;
};
