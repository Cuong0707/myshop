FROM eclipse-temurin:21-jdk-alpine as builder

COPY . .
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine

COPY --from=builder /target/myshop-backend-0.0.1-SNAPSHOT.jar demo.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]