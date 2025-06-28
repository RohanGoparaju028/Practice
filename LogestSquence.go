package main

import (
	"fmt"
	"strings"
)

func inset(set []byte, char byte) bool {
	for i := 0; i < len(set); i++ {
		if set[i] == char {
			return true
		}
	}
	return false
}
func getLongestsubstring(a string) int {
	if strings.Compare(a, "") == 0 || strings.Compare(a, "\t") == 0 {
		return 0
	}
	res := ""
	curr_len := 0
	max_lex := 0
	var set []byte
	for i := 0; i < len(a); i++ {
		if !inset(set, a[i]) {
			set = append(set, a[i])
			res += string(a[i])
			curr_len++
		} else {
			break
		}
		max_lex = max(curr_len, max_lex)
	}
	return max_lex
}
func main() {
	fmt.Print("Enter a string: ")
	var s string
	fmt.Scanln(&s)
	res := getLongestsubstring(s)
	fmt.Println(res)
}
