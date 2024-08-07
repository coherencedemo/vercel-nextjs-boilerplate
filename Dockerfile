# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]