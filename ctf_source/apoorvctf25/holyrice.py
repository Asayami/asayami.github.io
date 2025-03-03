txt = list('''6!!sbn*ass%84z@84c(8o_^4#_#8b0)5m_&j}y$vvw!h''')
ss = list('''0123456789abcdefghijklmnopqrstuvwxyz_{}''')
print(len(txt))

txt = txt[::-1]  # Reverse the list
txt2 = ''.join(txt)  # Convert back to string
print(txt2)

new_txt = []
count = 1

for i in range(len(txt)):
    if i == count:
        count += 4
    else:
        new_txt.append(txt[i])

txt1 = ''.join(new_txt)  # Convert back to string
print(txt1)

final = []

for c in new_txt:
    if c in ss:
        temp = ss[(ss.index(c) - 7) % 39]
        final.append(temp)
    else:
        final.append(c)

txt = ''.join(final)  # Convert back to string
print(txt)