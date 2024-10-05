FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3001
CMD npm run dev




# FROM node:18-alpine

# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm ci --only=production

# # Copy source code
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Expose the port
# EXPOSE 3001

# # Start the app
# CMD ["npm", "start"]