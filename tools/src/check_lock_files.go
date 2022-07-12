package main

import (
	"fmt"
	"os"
)

var errors []string

func main() {
	fmt.Println("ℹ️ Checking correct usage of only pnpm lock file ...")

	fileExists("package-lock.json")
	fileExists("yarn.lock")
	fileNotExists("pnpm-lock.yaml")

	if len(errors) > 0 {
		for _, err := range errors {
			fmt.Println(err)
		}
		os.Exit(1)
	}

	fmt.Println("✅ Lock files are looking good.")

	os.Exit(0)
}

func fileExists(fileName string) {
	if _, err := os.Stat(fileName); !os.IsNotExist(err) {
		errors = append(errors, fmt.Sprintf("Invalid occurrence of \"%s\" file. Please remove it and use only \"pnpm-lock.yaml\".", fileName))
	}
}

func fileNotExists(fileName string) {
	if _, err := os.Stat(fileName); os.IsNotExist(err) {
		errors = append(errors, fmt.Sprintf("The \"%s\" does not exist or cannot be read. Please run \"pnpm i\".", fileName))
	}
}
