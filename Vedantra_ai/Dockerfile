# Use base image with Java 24 and Maven pre-installed
FROM maven:3.9.6-eclipse-temurin-24

# Set working directory
WORKDIR /app

# Copy pom and source files
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Expose port (Render will override with $PORT)
EXPOSE 8080

# Run the application
CMD ["sh", "-c", "java -jar target/*.jar"]
# Use base image with Java 24 and Maven pre-installed
FROM maven:3.9.6-eclipse-temurin-24

# Set working directory
WORKDIR /app

# Copy pom and source files
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Expose port (Render will override with $PORT)
EXPOSE 8080

# Run the application
CMD ["sh", "-c", "java -jar target/*.jar"]
