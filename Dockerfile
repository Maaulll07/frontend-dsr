# Step 1: Build the app
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with a lightweight HTTP server
FROM node:22-alpine

WORKDIR /app

# Install a simple static server
RUN npm install -g serve

# Copy build output from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4173

# Serve the app
CMD ["serve", "-s", "dist", "-l", "4173"]