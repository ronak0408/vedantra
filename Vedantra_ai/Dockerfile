# Use Java 24 base image
FROM eclipse-temurin:24-jdk

# Set working directory inside the container
WORKDIR /app

# Copy all files from your project directory into the container
COPY . .

# Make the Maven wrapper executable
RUN chmod +x mvnw

# Build the project (skip tests to speed up)
RUN ./mvnw package -DskipTests

# Expose default Spring Boot port
EXPOSE 8080

# Run the built JAR file
CMD ["sh", "-c", "java -jar target/*.jar"]
