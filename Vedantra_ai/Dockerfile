# Use latest OpenJDK 24 image as base (Eclipse Temurin)
FROM eclipse-temurin:24-jdk

# Set working directory inside container
WORKDIR /app

# Copy project files into container
COPY . .

# Grant permission to Maven wrapper script (if needed)
RUN chmod +x ./mvnw

# Build the project using Maven Wrapper
RUN ./mvnw clean package -DskipTests

# Expose the port (Render or other cloud platforms will override this using $PORT)
EXPOSE 8080

# Run the generated JAR file
CMD ["sh", "-c", "java -jar target/*.jar"]
