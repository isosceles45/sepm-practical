# Use an official Node.js image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the backend source code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Command to run the backend server
CMD ["node", "server.js"]
