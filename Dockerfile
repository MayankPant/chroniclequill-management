FROM node:alpine
WORKDIR '/chronicelquill'
COPY package.json .

# Copy all local files into the image.
COPY public/ /chronicelquill/public
COPY src/ /chronicelquill/src
COPY package.json /chronicelquill/
COPY .env /chronicelquill/
COPY tsconfig.json /chronicelquill/


RUN npm install


# Build for production.
RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 3000