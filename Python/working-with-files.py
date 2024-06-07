# Read 2 file contents and write that content in 3rd file

f1=open('a.txt')
f2=open('b.txt')
f3=open('output.txt','w')
for x in f1:
  f3.write(x)
for x in f2:
  f3.write(x)