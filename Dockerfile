FROm node:alpine
COPY ./ ./
RUn npm install
EXPOSE 8080
CMD ["npm","start"]
