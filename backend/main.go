package main

import (
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Serve static files from ./static
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	// API separated
	http.HandleFunc("/api/stocks", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`[{"symbol":"AAPL","price":175.64}]`))
	})

	http.ListenAndServe(":"+port, nil)
}
