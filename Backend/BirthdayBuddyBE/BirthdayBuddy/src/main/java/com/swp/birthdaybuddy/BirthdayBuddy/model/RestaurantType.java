package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurant_types")
public class RestaurantType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "typeID")
    private Long typeId;

    @Column(name = "typeName", nullable = false)
    private String typeName;

    // Constructors, getters, and setters

    public RestaurantType() {
    }

    public RestaurantType(Long typeId, String typeName) {
        this.typeId = typeId;
        this.typeName = typeName;
    }

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
