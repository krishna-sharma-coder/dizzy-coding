i=int(input("Enter the value of i "))
org=i
sum=0
while(i>0):
    sum+=i%10*i%10*i%10
    i//=10
if(org==sum):
    print("Armstrong Number")
else:
    print("not Armstrong number")



