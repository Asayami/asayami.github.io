# Mảng giá trị tham chiếu từ `lVar2 + 0x58`
expected_values = [ 0x3e, 0x3b, 0x3a, 0x19, 0x98, 0xf5, 0x37, 0xf3, 0x95, 0xc1, 0x12, 0xe7, 0xdd, 0xd0, 0x0e, 0x33, 0xcc, 0x4b, 0x58, 0x09, 0x4e, 0xd3, 0x0b, 0x93, 0x64, 0x62, 0xc6, 0x0e, 0x2e, 0xbe, 0xea, 0x4b, 0x00, 0xa7, 0xbd, 0xdc, 0x02]  # Cần lấy từ Ghidra
print(len(expected_values))
password = []  # Chứa mật khẩu đã giải mã

def ror(value, bits, size=8):
    """Xoay phải giá trị value đi bits bit, với size là số bit tối đa (mặc định 8-bit)."""
    mask = (1 << size) - 1  # Tạo mask để giữ giá trị trong phạm vi size-bit
    return ((value >> bits) | (value << (size - bits))) & mask

for i in range(0x25):  # 37 ký tự
    expected = expected_values[i]  # Giá trị tham chiếu cần khớp

    # Brute-force từng ký tự có thể (từ 0 đến 255)
    for c in range(32, 127):  # ASCII từ 32 đến 126
        bVar1 = ((~(c + i)) ^ 0x44) + 0x17
        if bVar1 < 0:
            bVar1 += 256
        check = (ror(bVar1, 3) - i)

        if check == expected:
            password.append(chr(c))
            break  # Tìm thấy ký tự đúng thì dừng

# In kết quả mật khẩu
print("Recovered password:", "".join(password))
print(len(password))
