# Difference between JPA, Hibernate and Spring Data JPA

## Overview

When developing Java applications that interact with databases, three
related technologies are commonly used:

-   **JPA (Java Persistence API)**
-   **Hibernate**
-   **Spring Data JPA**

Although they are often used together, they serve different purposes.

------------------------------------------------------------------------

## 1. JPA (Java Persistence API)

### What is JPA?

JPA is a **Java specification (standard)** for object-relational mapping
(ORM).

It defines **how Java objects should be mapped to database tables**, but
it **does not provide an implementation**.

### Key Points

-   It is only a specification.
-   Defines annotations like:
    -   `@Entity`
    -   `@Table`
    -   `@Id`
    -   `@Column`
-   Requires an implementation such as Hibernate.

### Example

``` java
@Entity
@Table(name = "country")
public class Country {
    @Id
    private String code;
}
```

------------------------------------------------------------------------

## 2. Hibernate

### What is Hibernate?

Hibernate is the **most popular implementation of JPA**.

It converts Java objects into database records and executes SQL behind
the scenes.

### Responsibilities

-   Implements JPA.
-   Generates SQL queries.
-   Manages database connections.
-   Handles CRUD operations.
-   Supports caching and lazy loading.

### Example

``` java
entityManager.persist(country);
```

Hibernate translates this into an SQL `INSERT` statement.

------------------------------------------------------------------------

## 3. Spring Data JPA

### What is Spring Data JPA?

Spring Data JPA is a Spring module that sits **on top of
JPA/Hibernate**.

It reduces boilerplate code by automatically implementing repository
methods.

### Example

``` java
@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}
```

Without writing SQL, methods like the following are available:

``` java
findAll();
findById();
save();
delete();
```

------------------------------------------------------------------------

## Relationship

``` text
Application
      |
Spring Data JPA
      |
      v
     JPA
      |
      v
 Hibernate
      |
      v
 MySQL Database
```

------------------------------------------------------------------------

## Comparison Table

  Feature               JPA             Hibernate        Spring Data JPA
  --------------------- --------------- ---------------- -------------------
  Type                  Specification   Framework        Spring Module
  Developed By          Oracle/JCP      Hibernate Team   Spring
  Implementation        No              Yes              Uses JPA
  Generates SQL         No              Yes              Through Hibernate
  Reduces Boilerplate   No              Partially        Yes
  Repository Support    No              No               Yes

------------------------------------------------------------------------

## Summary

-   **JPA** defines the standard.
-   **Hibernate** implements the standard.
-   **Spring Data JPA** simplifies database access by building on top of
    JPA/Hibernate.

In most Spring Boot applications:

**Spring Data JPA → Hibernate → MySQL**
