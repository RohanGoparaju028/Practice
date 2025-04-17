import Foundation 
func Duplicate(_ a:[Int]) -> [Int] {
 var b:[Int] = []
   var s:Set<Int> = []
   for i in a {
     if s.contains(i) {
       b.append(i) 
     }   else {
       s.insert(i)
     }
   }
return b 
}
func main() -> Void {
  let a = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
  let b = Duplicate(a)
  print(b)
}
main() 
