# FROM node:alpine
# COPY ./ ./
# RUN npm install
# EXPOSE 8082
# CMD ["npm","start"]
FROM node:alpine

# Copy application files
COPY ./ ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 8082

# Set environment variables and start the application
CMD ["sh", "-c", "DD_ENV=prod DD_LOGS_INJECTION=true DD_TRACE_SAMPLE_RATE=1 DD_PROFILING_ENABLED=true DD_APPSEC_ENABLED=true DD_IAST_ENABLED=true npm start"]
