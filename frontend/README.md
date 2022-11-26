# Base FrontEnd code

- Khuôn mẫu React code
- Clone về và phát triển dựa trên khuôn này
- Tự tạo branch cho riêng mình và làm trên branch đó mới push lên

---

## Lưu ý:

- Sử dụng context để truy cập props ở các comonent
- Context đóng vai trò như props pool, tức là nơi chứa các props. Khi cần component nào cần sử dụng chỉ cần gọi hàm bên trong context không cần phải pass từ `parent`
- Tuy nhiên chỉ sử dụng cho các data được sử dụng ở nhiều component ( ví dụ như userId, theme, . . .)
- Ở base này có cài đặt thêm package `Ant Design` là một thư viện hỗ trợ code components có sẵn để làm nhanh hơn,chỉ sử dụng khi cần gấp components đó hoặc component đơn giản làm chán :)))

---

# Explore

[component folder](./src/components)

- Các component riêng lẻ sẽ được define trong này
- Mỗi component nên tạo một folder riêng. Trong đó:
  - Có thể có 1 file chính và 1 file css ( hoặc 1 file chính + 1 vài file components phụ và file css )
- Truy cập api thông qua các hàm trong [context folder](#context_folder)

---

[api folder](./src/api)

- Define các method chính trong việc gọi api
- Sử dụng axios
- `generic.js` khởi tạo các method chính thông qua axios như GET, PUT, POST, PATCH , DELETE
- Mỗi api sẽ được tạo riêng trong 1 file rieng của chính nó
- Auth api đã được làm trước như ví dụ

---

[context folder](./src/context)

- Các context trong này được sửu dụng để call api và coponent sẽ sử dụng context này là chính
- Sử dụng các method được khỏi tạo trong [api folder](#./src/api)
- Auth Context được khởi tạo trước như 1 ví dụ
