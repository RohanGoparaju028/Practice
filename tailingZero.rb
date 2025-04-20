def factorial(a) 
   if a < 2 
      return 1 
      end 
    return a*factorial(a-1)
    end 
def tailingZero(a) 
   fact = factorial(a)
   count = 0
   while fact%10 == 0 do 
      count = count+1
      fact = fact/10 
      end 
    return count 
    end 
str = gets.chomp
a = str.to_i 
puts tailingZero(a)
