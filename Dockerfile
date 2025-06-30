# Stage 1: Build the application
FROM node:18 AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the .env file
COPY .env .env

# Copy application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a lightweight runtime image
FROM node:18-slim

# Set working directory
WORKDIR /usr/src/app

# Copy built application and dependencies
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
# Copy the default .env file
COPY .env .env 
# Copy the production .env file if needed
COPY .env.prod .env.prod 
RUN npm install --only=production

# Expose the application port
EXPOSE 8080

# Define the command to run the application
CMD ["node", "dist/main.js"]
