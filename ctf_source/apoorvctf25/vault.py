from Crypto.Cipher import AES
import binascii

key = b"\x45\xdd\x6f\x92\x21\x6b\xc6\xc2\xe2\xe3\x15\x50\x9b\xf9\x6a\x49"
# Reverse the order of the groups
reversed_key = b"".join([key[i:i+4][::-1] for i in range(0, len(key), 4)])

iv = b"\xb0\xd5\x10\x08\xab\x23\xa0\x49\x54\x56\xca\xd5\xf7\x37\x4c\x23"
# Reverse the order of the groups
reversed_iv = b"".join([iv[i:i+4][::-1] for i in range(0, len(iv), 4)])

ciphertext = b"\xf3\x79\x14\xb9\x63\x0c\xf6\xc4\xa0\x11\x4b\xf6\xbc\x4f\x4b\xce\xd0\x05\xa6\x8b\x00\x0d\x07\xfb\xa0\x69\xc4\x61\x8e\x50\x12\xe9\x19\x7e\x74\x61\x3c\x4e\x6e\x2a\xe1\xd8\x39\x0a\xc2\xb1\xe1\xac"
# Reverse the order of the groups
reversed_ciphertext = b"".join([ciphertext[i:i+4][::-1] for i in range(0, len(ciphertext), 4)])

print(reversed_ciphertext)

ss = '''61 74 7E 19 2A 6E 4E 3C 9A 83 1D 0E AC E1  B1 C2 8B A6 05 D0 FB 07 0D 00 61 C4 69 A0 E9 12  50 8E B9 14 79 F3 C4 F6 0C 63 F6 4B 11 A0 CE 4B  4F BC'''

ct = bytes.fromhex(ss.strip().replace(" ", ""))

cipher = AES.new(reversed_key, AES.MODE_CBC, reversed_iv)
plaintext = cipher.decrypt(ct)

print("Flag:", plaintext.decode().strip())
