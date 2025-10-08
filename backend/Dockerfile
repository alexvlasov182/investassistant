# Build stage
FROM golang:1.23 AS builder
WORKDIR /app
COPY . .
RUN go mod tidy && go build -o server .

# Run stage
FROM gcr.io/distroless/base-debian12
WORKDIR /app
COPY --from=builder /app/server .
COPY static ./static
ENV PORT=8080
EXPOSE 8080
CMD ["/app/server"]
