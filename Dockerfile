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

# Copy the standalone output to a new directory
RUN cp -R .next/standalone ./standalone
RUN cp -R .next/static ./standalone/.next/static
RUN cp -R public ./standalone/public

# Set the working directory to the standalone directory
WORKDIR /app/standalone

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD ["node", "server.js"]